# Portfolio Backend

## Run

```powershell
npm start
```

## Google Sheets Setup

1. Use this Google Sheet:

```text
https://docs.google.com/spreadsheets/d/1-eLM8F97U7hDDbqw5QTmP_yy-jsdEwBSGHYpGugOtlY/edit
```

2. Add these headers in the first row:

```text
Name | Email | Company | Message | Source | Created At
```

3. In the sheet, open `Extensions > Apps Script`.
4. Paste the code from `google-apps-script.js`.
5. Click `Deploy > New deployment`.
6. Choose `Web app`.
7. Set `Execute as` to `Me`.
8. Set `Who has access` to `Anyone`.
9. Copy the Web App URL. It should end with `/exec`.
10. Create `backend/.env` from `.env.example` and paste the URL:

```env
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Submissions are saved to MongoDB first. If the Google Sheets webhook is configured, the backend also sends each submission to the sheet.
