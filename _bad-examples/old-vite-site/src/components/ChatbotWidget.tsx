import { motion, AnimatePresence } from 'framer-motion'
import { useChatbot } from '../contexts/ChatbotContext'

function ChatbotWidget() {
  const { isOpen, openChatbot } = useChatbot()

  // Don't show widget when chatbot is open
  if (isOpen) return null

  return (
    <AnimatePresence>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => openChatbot()}
        className="fixed bottom-8 right-8 z-[90] w-20 h-20 group"
        aria-label="Ouvrir le chatbot"
        style={{ filter: 'drop-shadow(0 0 20px rgba(142, 190, 157, 0.3))' }}
      >
        {/* Orbe extérieur pulsant - Tons verts sage-400 */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(142, 190, 157, 0.15) 0%, rgba(142, 190, 157, 0.05) 50%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.4, 0, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(142, 190, 157, 0.2) 0%, rgba(142, 190, 157, 0.1) 40%, transparent 60%)'
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Corps principal - Glassmorphism élégant vert sage-400 */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden bg-sage-400"
          style={{
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(142, 190, 157, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 12px 48px rgba(142, 190, 157, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.05)'
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient animé en arrière-plan - subtil */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Particules flottantes - gris argent */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-0.5 h-0.5 bg-slate-400/40 rounded-full"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2 + (i * 0.2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}

          {/* Audio Wave Animation - Style Siri avec gris élégant */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center gap-[3px]">
              {[...Array(9)].map((_, i) => {
                const centerIndex = 4
                const distanceFromCenter = Math.abs(i - centerIndex)
                const maxHeight = 32 - (distanceFromCenter * 3)
                const minHeight = 8 + (distanceFromCenter * 1)

                return (
                  <motion.div
                    key={i}
                    className="w-[2px] rounded-full shadow-sm"
                    style={{
                      background: 'linear-gradient(to top, rgba(203, 213, 225, 0.6), rgba(226, 232, 240, 0.9))',
                      boxShadow: '0 0 4px rgba(203, 213, 225, 0.3)'
                    }}
                    animate={{
                      height: [
                        minHeight,
                        maxHeight,
                        minHeight,
                        maxHeight * 0.6,
                        minHeight
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.08
                    }}
                  />
                )
              })}
            </div>
          </div>

          {/* Reflet lumineux qui se déplace - très subtil */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)'
            }}
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Notification dot pulsating - rouge */}
        <motion.span
          className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-2 border-white"
          style={{
            boxShadow: '0 0 8px rgba(239, 68, 68, 0.6)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              '0 0 8px rgba(239, 68, 68, 0.6)',
              '0 0 12px rgba(239, 68, 68, 0.8)',
              '0 0 8px rgba(239, 68, 68, 0.6)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Tooltip on hover - Style élégant */}
        <motion.div
          initial={{ opacity: 0, x: 10, scale: 0.9 }}
          whileHover={{ opacity: 1, x: 0, scale: 1 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all"
        >
          <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white px-5 py-3 rounded-xl text-sm font-medium whitespace-nowrap backdrop-blur-xl border border-sage-400/20"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(132, 204, 22, 0.05)'
            }}
          >
            Besoin d'aide?
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-gray-800" />
          </div>
        </motion.div>
      </motion.button>
    </AnimatePresence>
  )
}

export default ChatbotWidget
