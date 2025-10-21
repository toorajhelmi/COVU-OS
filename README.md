# Covu Agent Helper

A POC website demonstrating how ChatGPT (Atlas) can use the `<meta name="chatgpt:context">` tag to access an external knowledge base for RAG-style grounding.

## Overview

Covu Agent Helper is an AI-powered assistant designed to help insurance agents complete workflows faster by integrating task automation, AI guidance, and browser actions. The application demonstrates how ChatGPT can retrieve and use context from an external JSON knowledge base to provide grounded, accurate responses.

## Features

- 🤖 **ChatGPT Atlas Integration** - Uses the `chatgpt:context` meta tag for RAG-style grounding
- 💬 **Chat Interface** - Clean, modern chat UI built with React and Tailwind CSS
- 📚 **Knowledge Base** - External JSON file containing workflows, FAQs, and guidance
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS

## How It Works

1. The website includes a special meta tag in the HTML head:
   ```html
   <meta name="chatgpt:context" content="https://your-domain.com/rag-context.json" />
   ```

2. When opened in ChatGPT Atlas, the AI can read this meta tag and fetch the knowledge base

3. ChatGPT uses the context from `rag-context.json` to provide grounded responses about:
   - Filing claims
   - Creating quotes
   - Navigating Covu Portal
   - Common FAQs

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd covu-agent-helper
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploying to Vercel

1. Push your code to GitHub

2. Import the project in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Deploy

3. After deployment, update the meta tag in `pages/_document.tsx`:
   ```tsx
   <meta name="chatgpt:context" content="https://your-app-name.vercel.app/rag-context.json" />
   ```

4. Commit and push the change to trigger a new deployment

## Project Structure

```
covu-agent-helper/
├── pages/
│   ├── _app.tsx          # App wrapper with global styles
│   ├── _document.tsx     # Custom document with ChatGPT meta tag
│   └── index.tsx         # Main chat interface
├── public/
│   └── rag-context.json  # Knowledge base for ChatGPT
├── styles/
│   └── globals.css       # Global styles with Tailwind
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Knowledge Base

The `rag-context.json` file contains:

- **Overview** - Description of Covu Agent Helper
- **Goals** - Key objectives of the system
- **Workflows** - Step-by-step guides for common tasks
- **FAQ** - Common questions and answers

You can edit this file to add more context that ChatGPT can use.

## Usage with ChatGPT Atlas

1. Deploy the website to a public URL
2. Open the URL in ChatGPT Atlas
3. Ask questions about Covu workflows
4. ChatGPT will use the knowledge base to provide accurate, grounded responses

Example questions to ask:
- "How do I file a new claim?"
- "What documents are needed for a home claim?"
- "How do I create a new quote?"
- "How do I reset my Covu password?"

## Technologies Used

- **Next.js 14** - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## License

This is a proof of concept project for demonstration purposes.

## Notes

- The local demo includes sample conversations for demonstration
- Real ChatGPT integration requires opening the site in ChatGPT Atlas
- Update the meta tag URL after deployment for production use

