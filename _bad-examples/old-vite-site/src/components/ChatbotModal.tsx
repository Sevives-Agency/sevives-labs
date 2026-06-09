import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { useChatbot } from '../contexts/ChatbotContext'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

const quickSuggestions = {
  general: [
    "Quels sont vos tarifs?",
    "Comment fonctionne l'audit gratuit?",
    "Réserver un rendez-vous",
    "Voir les cas d'usage"
  ],
  faq: [
    "Quelles technologies utilisez-vous?",
    "Combien de temps pour un projet?",
    "Proposez-vous des formations?",
    "Comment démarrer?"
  ],
  booking: [
    "Réserver un audit gratuit",
    "Prendre rendez-vous avec un consultant",
    "Planifier une démonstration",
    "Parler à un expert"
  ],
  audit: [
    "C'est vraiment gratuit?",
    "Combien de temps dure l'audit?",
    "Qu'allez-vous analyser?",
    "Et après l'audit?"
  ],
  contact: [
    "Envoyer un email",
    "Appeler l'équipe",
    "Rejoindre la communauté",
    "Suivre sur LinkedIn"
  ]
}

function ChatbotModal() {
  const { isOpen, closeChatbot, currentIntent } = useChatbot()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize conversation based on intent
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = getWelcomeMessage(currentIntent?.type || 'general')
      setMessages([{
        id: '1',
        type: 'bot',
        content: welcomeMessage,
        timestamp: new Date()
      }])
    }
  }, [isOpen, currentIntent])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const getWelcomeMessage = (type: string) => {
    const messages = {
      general: "Bonjour! 👋 Je suis l'assistant virtuel de SevivɘƧ. Comment puis-je vous aider aujourd'hui?",
      faq: "Bienvenue dans notre FAQ! Posez-moi n'importe quelle question sur nos services, technologies ou processus.",
      booking: "Super! Je vais vous aider à réserver un créneau avec notre équipe. De quel type de rendez-vous avez-vous besoin?",
      audit: "Excellent choix! L'audit gratuit d'1h permet d'analyser vos processus et identifier les opportunités d'automatisation. Commençons par quelques informations...",
      contact: "Je suis là pour vous mettre en contact avec la bonne personne. Quel est l'objet de votre demande?"
    }
    return messages[type as keyof typeof messages] || messages.general
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot response (replace with real API call later)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "Merci pour votre message! Le chatbot IA complet sera bientôt disponible. En attendant, vous pouvez nous contacter directement via l'adresse contact@sevives.com ou réserver un créneau sur notre calendrier.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
  }

  const suggestions = quickSuggestions[currentIntent?.type as keyof typeof quickSuggestions] || quickSuggestions.general

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[95]"
            onClick={closeChatbot}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[600px] md:h-[700px] bg-white rounded-2xl shadow-2xl z-[100] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-sage-400 to-sage-600 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Assistant SevivɘƧ</h3>
                  <p className="text-white/80 text-xs">En ligne • Répond en ~30s</p>
                </div>
              </div>
              <button
                onClick={closeChatbot}
                className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label="Fermer le chatbot"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-sage-400 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <span className={`text-xs mt-1 block ${
                      message.type === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick suggestions */}
            {messages.length <= 1 && (
              <div className="px-6 py-3 bg-white border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2 font-semibold">Suggestions rapides:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1.5 bg-sage-50 hover:bg-sage-100 text-sage-700 rounded-lg text-xs font-medium transition-colors"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Écrivez votre message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-sage-400 transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-sage-400 hover:bg-sage-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl transition-colors flex items-center gap-2 font-medium"
                >
                  <span className="hidden sm:inline">Envoyer</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                🔒 Vos données sont sécurisées et confidentielles
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ChatbotModal
