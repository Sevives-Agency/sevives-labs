import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface ChatbotContextType {
  isOpen: boolean
  openChatbot: (intent?: ChatIntent) => void
  closeChatbot: () => void
  currentIntent: ChatIntent | null
}

export interface ChatIntent {
  type: 'faq' | 'contact' | 'booking' | 'audit' | 'general'
  message?: string
  context?: Record<string, any>
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined)

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIntent, setCurrentIntent] = useState<ChatIntent | null>(null)

  const openChatbot = (intent?: ChatIntent) => {
    setCurrentIntent(intent || { type: 'general' })
    setIsOpen(true)
  }

  const closeChatbot = () => {
    setIsOpen(false)
    // Reset intent after animation
    setTimeout(() => setCurrentIntent(null), 300)
  }

  return (
    <ChatbotContext.Provider value={{ isOpen, openChatbot, closeChatbot, currentIntent }}>
      {children}
    </ChatbotContext.Provider>
  )
}

export function useChatbot() {
  const context = useContext(ChatbotContext)
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider')
  }
  return context
}
