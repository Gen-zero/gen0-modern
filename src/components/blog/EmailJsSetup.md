
# Setting Up EmailJS for Newsletter Subscription

To make the newsletter subscription fully functional, you need to set up an EmailJS account and configure the templates:

## 1. Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for an account
2. Verify your email address

## 2. Create an Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service" and connect your email provider (Gmail, Outlook, etc.)
3. Name your service "service_newsletter" (or update the code to match your service ID)

## 3. Create Email Templates
You need to create two templates:

### Admin Notification Template (template_subscription)
1. Go to "Email Templates" and click "Create New Template"
2. Name it "template_subscription"
3. Set the template content:

```
Subject: New Newsletter Subscription

You have a new subscriber for the Gen0 Blog newsletter!

Subscriber Email: {{subscriber_email}}

Message: {{message}}
```

### Subscriber Confirmation Template (template_confirmation)
1. Create another template named "template_confirmation"
2. Set the template content:

```
Subject: Welcome to Gen0 Blog Newsletter!

Hi there,

Thank you for subscribing to the Gen0 Blog newsletter!

{{message}}

Best regards,
The Gen0 Team
```

## 4. Update the Code
Replace "YOUR_USER_ID" in the BlogNewsletter.tsx file with your EmailJS User ID (found in Account > API Keys)

## 5. Test
Test the subscription form to make sure emails are being sent correctly
