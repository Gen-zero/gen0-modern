
# Google Sheets Integration Setup Guide

Follow these steps to connect your contact form to Google Sheets:

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name your spreadsheet (e.g., "Contact Form Submissions")
3. In the first row, add headers for all form fields:
   - timestamp
   - firstName
   - lastName
   - email
   - phone
   - company
   - inquiryType
   - projectType
   - budget
   - timeline
   - position
   - experience
   - availabilityDate
   - investmentAmount
   - investmentGoals
   - hoursPerWeek
   - interests
   - message

## Step 2: Create a Google Apps Script
1. In your Google Sheet, click Extensions > Apps Script
2. Replace the default code with the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var newRow = [];
  
  // Process the data from the form
  if (e.parameter) {
    for (var i = 0; i < headers.length; i++) {
      // Check if the field exists in the form submission
      if (e.parameter[headers[i]]) {
        newRow.push(e.parameter[headers[i]]);
      } else {
        newRow.push(''); // Add an empty string if the field doesn't exist
      }
    }
    // Append the data as a new row
    sheet.appendRow(newRow);
    
    // Return a success response
    return ContentService
      .createTextOutput(JSON.stringify({"result": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  // Return an error if no parameters were received
  return ContentService
    .createTextOutput(JSON.stringify({"result": "error", "message": "No parameters received"}))
    .setMimeType(ContentService.MimeType.JSON);
}

// This is needed to allow your web app to access the script
function doGet(e) {
  return HtmlService.createHtmlOutput("The script is deployed and ready to receive form submissions.");
}
```

## Step 3: Deploy the Web App
1. Click on "Deploy" > "New deployment"
2. Select "Web app" as the deployment type
3. Set the following options:
   - Description: Contact Form Handler
   - Execute as: Me
   - Who has access: Anyone
4. Click "Deploy"
5. Copy the Web App URL from the deployment confirmation

## Step 4: Update Your React App
1. Replace `YOUR_DEPLOYMENT_ID_HERE` in the ContactForm.tsx file with the deployment ID from your Web App URL
   - The deployment ID is the long string between `/s/` and `/exec` in the URL

## Important Notes
- The Google Sheet and the Apps Script must be owned by the same Google account
- The first time someone submits the form, they may see a Google authorization screen
- For production use, consider implementing additional security measures
