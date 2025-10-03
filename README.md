# Slack API Integration with Next.js

A modern web application that combines Slack API integration with a beautiful UI inspired by influencer websites. This project demonstrates comprehensive Slack messaging operations including authentication, sending, scheduling, editing, and deleting messages.

## 🚀 Features

### Slack API Integration
- **OAuth Authentication**: Secure Slack workspace connection
- **Message Operations**:
  - Send messages to channels
  - Schedule messages for future delivery
  - Retrieve messages by ID/timestamp
  - Edit existing messages
  - Delete messages
- **Real-time Updates**: Live message management interface
- **Developer Sandbox**: Safe testing environment

### Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Smooth animations and transitions
- **Professional Layout**: Inspired by influencer websites
- **Dark/Light Themes**: Customizable appearance

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Authentication**: NextAuth.js with Slack OAuth
- **Slack Integration**: @slack/web-api, @slack/bolt
- **Development**: ESLint, Autoprefixer

## 📋 Prerequisites

Before you begin, ensure you have:

1. **Node.js** (version 18 or higher)
2. **npm** or **yarn** package manager
3. **Slack Workspace** with admin access
4. **Slack App** created in your workspace

## ⚙️ Setup Instructions

### 1. Clone and Install

```bash
# Navigate to project directory
cd "Slack Api"

# Install dependencies
npm install
```

### 2. Slack App Configuration

1. Go to [Slack API](https://api.slack.com/apps)
2. Click "Create New App" → "From scratch"
3. Name your app and select your workspace
4. Configure the following:

**OAuth & Permissions:**
- Add redirect URL: `http://localhost:3000/api/auth/callback/slack`
- Bot Token Scopes:
  - `channels:read`
  - `chat:write`
  - `chat:write.public`
  - `users:read`
  - `channels:history`

**App Credentials:**
- Note down Client ID, Client Secret, and Signing Secret
- Install app to workspace to get Bot User OAuth Token

### 3. Environment Configuration

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your Slack app credentials
```

Fill in your Slack app details in `.env.local`:

```env
SLACK_CLIENT_ID=your_slack_client_id
SLACK_CLIENT_SECRET=your_slack_client_secret
SLACK_SIGNING_SECRET=your_slack_signing_secret
SLACK_BOT_TOKEN=xoxb-your-bot-token
NEXTAUTH_SECRET=your-random-secret-key
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Usage Guide

### Authentication
1. Click "Sign in with Slack" on the homepage
2. Authorize the app in your Slack workspace
3. You'll be redirected back to the application

### Message Operations

**Send Message:**
- Select a channel from the dropdown
- Type your message
- Click "Send Message"

**Schedule Message:**
- Fill in message details
- Set future date/time
- Click "Schedule Message"

**Edit Message:**
- Click "Edit" next to any message
- Modify the text
- Click "Save"

**Delete Message:**
- Click "Delete" next to any message
- Confirm deletion

## 📁 Project Structure

```
src/
├── app/
│   ├── api/slack/          # Slack API endpoints
│   ├── globals.css         # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── SlackIntegration.tsx # Main Slack interface
│   ├── Services.tsx       # Services section
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer component
└── ...
```

## 🔗 API Endpoints

- `POST /api/slack/send-message` - Send or schedule messages
- `PUT /api/slack/edit-message` - Edit existing messages
- `DELETE /api/slack/delete-message` - Delete messages
- `GET /api/slack/get-messages` - Retrieve channel messages

## 🚧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style

This project follows:
- TypeScript best practices
- ESLint configuration
- Tailwind CSS utility classes
- Component-based architecture

## 📖 Resources

- [Slack API Documentation](https://api.slack.com/)
- [Slack Bolt Framework](https://slack.dev/bolt)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)

## 🔒 Security Notes

- Never commit `.env.local` to version control
- Use HTTPS in production
- Validate all Slack webhook signatures
- Implement rate limiting for API endpoints
- Store tokens securely

## 🐛 Troubleshooting

**Common Issues:**

1. **"Cannot find module" errors**
   - Run `npm install` to ensure all dependencies are installed

2. **Slack authentication fails**
   - Check OAuth redirect URLs in Slack app settings
   - Verify environment variables are correct

3. **Messages not sending**
   - Ensure bot is added to the target channel
   - Check bot token permissions

## 📞 Support

For questions or issues:
- Create an issue in this repository
- Check Slack API documentation
- Review Next.js troubleshooting guides

## 📄 License

This project is for educational purposes. Please ensure compliance with Slack's API terms of service.

---

**Happy coding!** 🎉