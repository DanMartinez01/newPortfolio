# OpenAI Chatbot Setup Guide

## Quick Setup

### 1. Get OpenAI API Key

- Go to [OpenAI Platform](https://platform.openai.com/api-keys)
- Sign up or log in
- Create a new API key
- Copy the key (it starts with `sk-`)

### 2. Configure Environment

Create a `.env.local` file in your project root:

```bash
OPENAI_API_KEY=sk-your_actual_key_here
```

### 3. Restart Development Server

```bash
npm run dev
```

## How It Works

The chatbot now:

- ✅ Uses OpenAI's GPT-3.5-turbo model
- ✅ Maintains conversation context
- ✅ Specializes in web development topics
- ✅ Has error handling and loading states
- ✅ Is completely free for light usage

## Cost Breakdown

- **Free Tier**: $5 monthly credit
- **GPT-3.5-turbo**: ~$0.002 per 1K tokens
- **Typical Response**: 50-150 tokens
- **Free Usage**: ~100-200 conversations/month

## Testing

1. Open your portfolio in the browser
2. Click the chat bubble (bottom-right)
3. Type a message like "What is React?"
4. The AI should respond intelligently

## Troubleshooting

### "API key not configured" error

- Check that `.env.local` exists
- Verify the API key is correct
- Restart your dev server

### "Invalid API key" error

- Double-check your API key
- Ensure you copied the full key including `sk-`

### "Rate limit exceeded" error

- You've hit the free tier limit
- Wait until next month or upgrade

## Security Notes

- ✅ `.env.local` is already in `.gitignore`
- ✅ API key is never exposed to the client
- ✅ All requests go through your secure API endpoint

## Customization

You can modify the AI's personality by editing the system prompt in `pages/api/chat.js` around line 30.
