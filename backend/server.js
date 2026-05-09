const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const GOOGLE_SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;

const cleanContactPayload = (body) => ({
  name: String(body.name || '').trim(),
  email: String(body.email || '').trim(),
  company: String(body.company || '').trim(),
  message: String(body.message || '').trim(),
  source: body.source === 'book_call' ? 'book_call' : 'contact_form'
});

const sendToGoogleSheets = async (contact) => {
  if (!GOOGLE_SHEET_WEBHOOK_URL) {
    return { synced: false, skipped: true, error: 'GOOGLE_SHEET_WEBHOOK_URL is not configured' };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        company: contact.company,
        message: contact.message,
        source: contact.source,
        createdAt: contact.createdAt
      }),
      signal: controller.signal
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Google Sheets responded with ${response.status}: ${errorText}`);
    }

    return { synced: true, skipped: false, error: '' };
  } finally {
    clearTimeout(timeout);
  }
};

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nexora')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  message: String,
  source: { type: String, default: 'contact_form' },
  googleSheetsSynced: { type: Boolean, default: false },
  googleSheetsError: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

const createContact = async (req, res) => {
  try {
    const { name, email, company, message, source } = cleanContactPayload(req.body);

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    const newContact = new Contact({
      name,
      email,
      company,
      message,
      source: req.path === '/api/book-call' ? 'book_call' : source
    });

    await newContact.save();

    try {
      const sheetResult = await sendToGoogleSheets(newContact);
      newContact.googleSheetsSynced = sheetResult.synced;
      newContact.googleSheetsError = sheetResult.error || '';
      await newContact.save();

      if (sheetResult.skipped) {
        console.warn(sheetResult.error);
      }
    } catch (sheetError) {
      newContact.googleSheetsSynced = false;
      newContact.googleSheetsError = sheetError.message;
      await newContact.save();
      console.error('Google Sheets sync failed:', sheetError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      googleSheetsSynced: newContact.googleSheetsSynced
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// Routes
app.post('/api/contact', createContact);
app.post('/api/book-call', createContact);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
