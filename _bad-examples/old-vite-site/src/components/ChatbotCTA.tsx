import { motion } from 'framer-motion'
import { useChatbot } from '../contexts/ChatbotContext'
import type { ChatIntent } from '../contexts/ChatbotContext'

// ============================================
// Données des boutons d'action
// ============================================
const ctaButtons: Array<{ label: string; intent: ChatIntent; highlighted: boolean }> = [
  { label: 'FAQ', intent: { type: 'faq' }, highlighted: false },
  { label: 'Nous contacter', intent: { type: 'contact' }, highlighted: false },
  { label: 'Réserver un RDV', intent: { type: 'booking', message: 'Je souhaite réserver un rendez-vous' }, highlighted: false },
  { label: "1h d'audit gratuit", intent: { type: 'audit', message: 'Je suis intéressé par l\'audit gratuit d\'1h' }, highlighted: true },
]

// ============================================
// Composant principal ChatbotCTA
// ============================================
function ChatbotCTA() {
  const { openChatbot } = useChatbot()

  return (
    <section className="py-20 2xl:py-28 px-8 2xl:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, margin: '-50px' }}
        className="max-w-3xl 2xl:max-w-[65%] mx-auto text-center"
      >
        {/* Carte principale glassmorphism */}
        <div className="bg-white/10 backdrop-blur-md border border-sage-400/20 rounded-3xl p-10 md:p-16 2xl:p-20">
          
          {/* Icône chatbot */}
          <div className="w-20 h-20 2xl:w-24 2xl:h-24 mx-auto mb-8 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center">
            <svg className="w-10 h-10 2xl:w-12 2xl:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>

          {/* Titre */}
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-sage-700 mb-4">
            Comment pouvons-nous vous aider ?
          </h2>

          {/* Sous-titre */}
          <p className="text-sage-800 2xl:text-xl mb-10 max-w-lg 2xl:max-w-[80%] mx-auto font-medium">
            Choisissez l'option qui correspond le mieux à votre besoin. Notre équipe est là pour vous accompagner.
          </p>

          {/* Grille de boutons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:gap-6">
            {ctaButtons.map((button, index) => (
              <motion.button
                key={button.label}
                onClick={() => openChatbot(button.intent)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  px-6 py-4 2xl:px-8 2xl:py-5 rounded-xl font-semibold 2xl:text-lg
                  transition-all duration-300
                  ${button.highlighted
                    ? 'bg-sage-400 text-white hover:bg-sage-500 shadow-lg shadow-sage-400/30'
                    : 'bg-white/30 backdrop-blur-sm border border-sage-400/30 text-sage-800 hover:bg-white/40'
                  }
                `}
              >
                {button.label}
              </motion.button>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  )
}

export default ChatbotCTA