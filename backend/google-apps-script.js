const SPREADSHEET_ID = '1-eLM8F97U7hDDbqw5QTmP_yy-jsdEwBSGHYpGugOtlY';

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name || '',
    data.email || '',
    data.company || '',
    data.message || '',
    data.source || '',
    data.createdAt ? new Date(data.createdAt) : new Date()
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
