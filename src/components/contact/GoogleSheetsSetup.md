
# Google Sheets Integration for Contact Form

This document provides instructions for setting up a Google Sheet to collect contact form submissions.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name the spreadsheet "Contact Form Submissions"
3. Set up the following column headers in the first row:
   - Timestamp
   - Name
   - Email
   - Purpose (Inquiry Type)
   - Message
   - Company
   - Position
   - Budget
   - Skills
   - Portfolio
   - University
   - Course Name
   - Investment Amount
   - Projects Interested
   - LinkedIn Profile
   - Resume File Name

## Step 2: Create a Google Apps Script

1. In your Google Sheet, click on "Extensions" > "Apps Script"
2. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the form data
    var formData = e.parameter;
    
    // Add a new row with form data
    sheet.appendRow([
      formData.timestamp || new Date(),
      formData.name || '',
      formData.email || '',
      formData.purpose || '',
      formData.message || '',
      formData.company || '',
      formData.position || '',
      formData.budget || '',
      formData.skills || '',
      formData.portfolio || '',
      formData.university || '',
      formData.courseName || '',
      formData.investmentAmount || '',
      formData.projectsInterested || '',
      formData.linkedinProfile || '',
      formData.resumeFileName || ''
    ]);
    
    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Form data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log the error
    console.error(error);
    
    // Return error
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script with a name like "Contact Form Handler"

## Step 3: Deploy the Web App

1. Click on "Deploy" > "New deployment"
2. Select "Web app" as the deployment type
3. Set the following options:
   - Description: "Contact Form Handler"
   - Execute as: "Me" (your Google account)
   - Who has access: "Anyone" (this allows your contact form to send data)
4. Click "Deploy"
5. Copy the Web App URL provided

## Step 4: Update the React Application

1. In the `ContactForm.tsx` file, replace the `GOOGLE_SCRIPT_URL` constant with your Web App URL:

```typescript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec";
```

## Notes

- The Google Apps Script web app uses CORS restrictions, which is why we use `mode: 'no-cors'` in the fetch request
- File uploads (like resumes) cannot be directly handled by Google Apps Script in this simple implementation - we only store the file name for reference
- For more robust file handling, consider using Google Drive API or a more advanced solution
