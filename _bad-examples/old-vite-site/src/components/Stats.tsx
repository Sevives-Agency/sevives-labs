import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// Import des logos clients (anonymisés — placeholders dans cette archive)
import client1 from '../assets/clients/client-1.png'
import client2 from '../assets/clients/client-2.jpg'
import client3 from '../assets/clients/client-3.png'
import client4 from '../assets/clients/client-4.jpg'
import client5 from '../assets/clients/client-5.webp'
import client6 from '../assets/clients/client-6.jpg'

// Import des certifications
import cs50aiHarvard from '../assets/certifications/cs50ai-harvard.webp'

// ============================================
// Hook personnalisé pour animer les compteurs
// ============================================
function useCountUp(end: number, duration: number = 2, inView: boolean) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    // Si pas visible, on reset à 0
    if (!inView) {
      setCount(0)
      return
    }
    
    // Animation du compteur
    let startTime: number
    let animationFrame: number
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      // Easing "easeOut" pour effet naturel
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    // Cleanup
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, inView])
  
  return count
}

// ============================================
// Données des statistiques
// ============================================
const statsData = [
  { value: 20, suffix: '+', label: "Années d'expérience ERP" },
  { value: 500, suffix: '+', label: 'Workflows créés' },
  { value: 10, suffix: 'x', label: 'ROI moyen' },
  { value: 50, suffix: '+', label: 'Clients satisfaits' },
]

// ============================================
// Logos clients
// ============================================
const clientLogos = [
  { name: 'Client 1', src: client1 },
  { name: 'Client 2', src: client2 },
  { name: 'Client 3', src: client3 },
  { name: 'Client 4', src: client4 },
  { name: 'Client 5', src: client5 },
  { name: 'Client 6', src: client6 },
]

// ============================================
// Composant Marquee pour les logos
// ============================================
function LogosMarquee() {
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos]
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-taupe-200 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-taupe-200 to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee items-center">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 mx-8 2xl:mx-10 hover:scale-110 transition-transform duration-300"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-16 2xl:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================
// Composant carte stat individuelle
// ============================================
function StatCard({ value, suffix, label, index, inView }: {
  value: number
  suffix: string
  label: string
  index: number
  inView: boolean
}) {
  // Animation du compteur
  const count = useCountUp(value, 2, inView)
  
  return (
    <motion.div
      // Animation d'entrée décalée pour chaque carte
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: false, margin: '-50px' }}
      // Style glassmorphism
      className="
        bg-white/10 backdrop-blur-md
        border border-sage-400/20
        rounded-2xl p-8 2xl:p-12
        text-center
        hover:bg-white/15 hover:scale-105
        transition-all duration-300
      "
    >
      {/* Valeur animée */}
      <div className="text-5xl md:text-6xl 2xl:text-7xl font-bold text-sage-400 mb-2">
        {count}{suffix}
      </div>
      {/* Label descriptif */}
      <div className="text-gray-900 text-sm md:text-base 2xl:text-lg font-semibold">
        {label}
      </div>
    </motion.div>
  )
}

// ============================================
// Composant principal Stats
// ============================================
function Stats() {
  // Référence pour détecter si section visible
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' })
  
  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center p-8 2xl:p-16"
    >
      <div className="max-w-6xl 2xl:max-w-[85%] w-full">
        
        {/* ====== TITRE SECTION ====== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-50px' }}
          className="text-center mb-16 2xl:mb-20"
        >
          <span className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-widest">
            Nos résultats
          </span>
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-sage-700 mt-2">
            Des chiffres qui parlent
          </h2>
        </motion.div>

        {/* ====== GRILLE 4 STATS ====== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-12 mb-16 2xl:mb-20">
          {statsData.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
              inView={isInView}
            />
          ))}
        </div>

        {/* ====== LOGOS PARTENAIRES ====== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, margin: '-50px' }}
          className="mb-12 2xl:mb-16"
        >
          <p className="text-center text-taupe-700 text-sm 2xl:text-base uppercase tracking-widest mb-8 font-semibold">
            Ils nous font confiance
          </p>
          {/* Défilement automatique des logos */}
          <LogosMarquee />
        </motion.div>

        {/* ====== CERTIFICATIONS ====== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, margin: '-50px' }}
        >
          <p className="text-center text-taupe-700 text-sm 2xl:text-base uppercase tracking-widest mb-8 font-semibold">
            Certifications & Accréditations
          </p>
          {/* Badges certifications */}
          <div className="flex flex-wrap justify-center items-center gap-6 2xl:gap-8">
            {/* CS50AI Harvard */}
            <a
              href="https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 2xl:px-8 2xl:py-4
                bg-white/30 backdrop-blur-sm
                border border-sage-400/30
                rounded-full
                hover:bg-white/40 hover:scale-105
                transition-all duration-300
                flex items-center gap-3
              "
            >
              <img
                src={cs50aiHarvard}
                alt="Harvard CS50 AI"
                className="h-8 2xl:h-10 w-auto"
              />
              <span className="text-sage-800 text-sm 2xl:text-base font-semibold">
                Harvard CS50 AI
              </span>
            </a>

            {/* Placeholders */}
            {['ISO 27001', 'GDPR', 'SAP Partner'].map((cert) => (
              <div
                key={cert}
                className="
                  px-6 py-3 2xl:px-8 2xl:py-4
                  bg-white/30 backdrop-blur-sm
                  border border-sage-400/30
                  rounded-full
                  text-sage-800
                  text-sm 2xl:text-base font-semibold
                "
              >
                {cert}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Stats