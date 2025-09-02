# Next.js, React & TailwindCSS Portfolio Project + OpenAI AI Chat Bot

A simple portfolio starter theme built with Next.js, TailwindCss and OpenAI AI

## Features

- Built with [Next.js](https://nextjs.org) and [React](https://reactjs.org)
- [Tailwind CSS v3](https://tailwindcss.com)
- Custom Hooks
- Framer Motion Transitions & Animations
- Reusable Components
- Projects filter by category
- Projects filter by search
- Dark Mode
- Smooth scroll
- Counter
- Dynamic forms
- Back to top button
- Download file button
- Simple and responsive design
- AI Chat Bot built with Cohere AI

## AI Chat Bot Setup

The portfolio includes an AI-powered chat bot that can help visitors with questions about web development, programming, and general technology topics.

### Prerequisites

1. **Cohere API Key**: Get your API key from [Cohere AI](https://cohere.ai/)
2. **Free Tier**: Cohere offers 5 free requests per minute

### Configuration

1. Create a `.env.local` file in your project root:

```bash
COHERE_API_KEY=your_actual_api_key_here
```

2. Replace `your_actual_api_key_here` with your real Cohere API key

3. Restart your development server

### Features

- **Smart Responses**: Powered by Cohere's Command model for intelligent conversations
- **Context Awareness**: Remembers conversation history for better responses
- **Web Development Focus**: Specialized in programming and tech questions
- **Real-time Chat**: Instant responses with loading indicators
- **Responsive Design**: Works perfectly on all devices
- **Error Handling**: Graceful fallbacks for API issues

### Usage

- Click the chat bubble in the bottom-right corner
- Type your message and press Enter
- The AI will respond with helpful information
- Clear chat history with the clear button
- Close chat window when done

### Cost Management

- **Free Tier**: 5 requests per minute
- **Command Model**: High-quality responses
- **Typical Usage**: Perfect for portfolio visitors

## Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**:

```bash
npm i -g vercel
```

2. **Deploy**:

```bash
vercel
```

3. **Add Environment Variables**:
   - Go to your Vercel dashboard
   - Add `COHERE_API_KEY` with your API key
   - Redeploy

### Alternative Platforms

- **Netlify**: Good for static sites
- **Railway**: Good for full-stack apps
- **DigitalOcean App Platform**: Good for production apps

## Getting Started
