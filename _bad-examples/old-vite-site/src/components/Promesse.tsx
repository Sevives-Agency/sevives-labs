import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Mots flottants (marques ERP/CRM) avec couleurs
const floatingWords = [
  { text: 'Odoo', color: 'text-purple-500/25' },
  { text: 'Winbooks', color: 'text-blue-500/25' },
  { text: 'Oracle', color: 'text-red-500/25' },
  { text: 'SAP', color: 'text-cyan-500/25' },
  { text: 'Accountable', color: 'text-green-500/25' },
  { text: 'Salesforce', color: 'text-blue-600/25' },
  { text: 'HubSpot', color: 'text-orange-500/25' },
  { text: 'Notion', color: 'text-gray-600/25' },
  { text: 'Slack', color: 'text-purple-600/25' },
]

// Composant mot flottant avec rebond
function BouncingWord({ word, color, index }: { word: string; color: string; index: number }) {
  const [position, setPosition] = useState({
    x: Math.random() * 80,
    y: Math.random() * 80,
  })
  const [velocity, setVelocity] = useState({
    x: (Math.random() - 0.5) * 0.3,
    y: (Math.random() - 0.5) * 0.3,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        let newX = prev.x + velocity.x
        let newY = prev.y + velocity.y
        let newVelocityX = velocity.x
        let newVelocityY = velocity.y

        // Rebond sur les bords
        if (newX <= 0 || newX >= 90) {
          newVelocityX = -velocity.x
          newX = newX <= 0 ? 0 : 90
        }
        if (newY <= 0 || newY >= 90) {
          newVelocityY = -velocity.y
          newY = newY <= 0 ? 0 : 90
        }

        setVelocity({ x: newVelocityX, y: newVelocityY })

        return { x: newX, y: newY }
      })
    }, 50)

    return () => clearInterval(interval)
  }, [velocity])

  return (
    <motion.div
      className={`absolute ${color} font-bold select-none pointer-events-none`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        fontSize: `${0.8 + index * 0.1}rem`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.2 }}
    >
      {word}
    </motion.div>
  )
}

function Promesse() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 2xl:p-16">
      <motion.div
        className="bg-white/25 backdrop-blur-md rounded-3xl border border-white/30 p-12 md:p-16 2xl:p-20 max-w-4xl 2xl:max-w-[70%] text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-100px" }}
      >
        {/* Mots flottants en arrière-plan */}
        <div className="absolute inset-0 z-0">
          {floatingWords.map((item, index) => (
            <BouncingWord key={item.text} word={item.text} color={item.color} index={index} />
          ))}
        </div>

        {/* Contenu principal au premier plan */}
        <div className="relative z-10">
          <span className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-wider">
            Notre promesse
          </span>
          <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-bold text-sage-700 mt-4 mb-8 leading-tight">
            Une transformation pragmatique, centrée sur l'existant
          </h2>
          <p className="text-lg 2xl:text-xl text-sage-600 leading-relaxed">
            Optimiser l'existant, réduire les tâches manuelles et rendre vos équipes autonomes.
            Chaque automatisation est pensée pour renforcer vos process actuels, pas pour les remplacer à tout prix.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Promesse