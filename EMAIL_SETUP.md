# Email Setup Instructions

## Google Workspace Email Configuration

To enable the contact form to send emails directly to info@balenet.com, you need to set up the following environment variables:

### 1. Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Google Workspace Email Configuration
GMAIL_USER=your-email@balenet.com
GMAIL_APP_PASSWORD=your-app-specific-password
```

### 2. Generate App-Specific Password

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Use this password as `GMAIL_APP_PASSWORD`

### 3. Configure Gmail User

Set `GMAIL_USER` to your Google Workspace email address (the one that will send the emails).

### 4. Deploy Environment Variables

When deploying to Vercel or your hosting platform, make sure to add these environment variables in your deployment settings.

## How It Works

- When users submit the contact form, it sends a POST request to `/api/send-email`
- The serverless function uses Nodemailer to send emails through Google Workspace SMTP
- Emails are sent directly to info@balenet.com with formatted HTML content
- Users get immediate feedback on form submission

## Security Notes

- Never commit `.env.local` to version control
- Use app-specific passwords, not your main Google account password
- The API endpoint validates required fields before sending emails
