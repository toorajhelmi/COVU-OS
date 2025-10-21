import { useState } from 'react'
import Head from 'next/head'

type Message = {
  id: number
  text: string
  sender: 'user' | 'bot'
}

const sampleMessages: Message[] = [
  { id: 1, text: "Hello! How can I help you with Covu today?", sender: 'bot' },
  { id: 2, text: "How do I file a new claim?", sender: 'user' },
  { id: 3, text: "To file a new claim, follow these steps:\n1. Navigate to the Claims page in Covu Portal\n2. Select 'New Claim'\n3. Upload required documents\n4. Review and submit", sender: 'bot' },
  { id: 4, text: "What documents are needed for a home claim?", sender: 'user' },
  { id: 5, text: "For a home claim, you'll typically need photos of damage, police reports (if applicable), receipts for damaged items, and your policy information.", sender: 'bot' },
]

export default function Home() {
  const [messages, setMessages] = useState<Message[]>(sampleMessages)
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim() === '') return

    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    }

    setMessages([...messages, newMessage])
    setInput('')

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: "This is a demo interface. Open this site in ChatGPT Atlas to get real AI-powered responses grounded in Covu's knowledge base.",
        sender: 'bot'
      }
      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <>
      <Head>
        <title>Covu Agent Helper</title>
        <meta name="description" content="AI-powered assistant for insurance agents" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Covu Agent Helper
            </h1>
            <p className="text-gray-600">
              AI-powered assistant for insurance agents
            </p>
          </div>

          {/* Chat Container */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSend}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Send
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                💡 Open this site in ChatGPT Atlas to enable contextual grounding.
              </p>
            </div>
          </div>

          {/* Info Card */}
          <div className="max-w-3xl mx-auto mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">How it works:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• This page includes a <code className="bg-blue-100 px-1 rounded">chatgpt:context</code> meta tag</li>
              <li>• ChatGPT Atlas can read this tag and fetch the knowledge base</li>
              <li>• The bot uses RAG to answer questions grounded in Covu's documentation</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

