import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// ============================================
// Données des témoignages
// ============================================
const testimonialsData = [
  {
    id: 1,
    quote: "SevivɘƧ a transformé nos processus en 3 mois. ROI incroyable. Notre équipe gagne maintenant 15 heures par semaine.",
    name: "Marie Dupont",
    company: "TechCorp Belgium",
    role: "Directrice Opérations",
  },
  {
    id: 2,
    quote: "Enfin une agence qui comprend nos besoins métier. Pas de jargon inutile, que des résultats concrets et mesurables.",
    name: "Jean-Pierre Martin",
    company: "LogiPME",
    role: "CEO",
  },
  {
    id: 3,
    quote: "Transparence totale, résultats mesurables. On sait exactement où va chaque euro investi. Partenaire de confiance.",
    name: "Sophie Lambert",
    company: "IndustrieNord",
    role: "CFO",
  },
]

// ============================================
// Composant étoiles
// ============================================
function Stars() {
  return (
    <div className="flex gap-1 justify-center mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  )
}

// ============================================
// Composant carte témoignage
// ============================================
function TestimonialCard({ quote, name, company, role }: {
  quote: string
  name: string
  company: string
  role: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="
        bg-white/10 backdrop-blur-md
        border border-sage-400/20
        rounded-2xl p-8 2xl:p-12
        text-center
        max-w-2xl 2xl:max-w-[60%] mx-auto
      "
    >
      {/* Photo placeholder (cercle) */}
      <div className="
        w-20 h-20 2xl:w-24 2xl:h-24 mx-auto mb-6
        rounded-full
        bg-gradient-to-br from-sage-400 to-sage-600
        flex items-center justify-center
        text-white text-2xl 2xl:text-3xl font-bold
      ">
        {name.charAt(0)}
      </div>

      {/* Étoiles */}
      <Stars />

      {/* Citation */}
      <p className="
        text-lg md:text-xl 2xl:text-2xl italic
        text-sage-800
        mb-6 leading-relaxed font-medium
      ">
        "{quote}"
      </p>

      {/* Nom et entreprise */}
      <p className="font-bold text-sage-600 text-lg 2xl:text-xl">
        {name}
      </p>
      <p className="text-sage-700 text-sm 2xl:text-base font-medium">
        {role} • {company}
      </p>
    </motion.div>
  )
}

// ============================================
// Composant principal Testimonials
// ============================================
function Testimonials() {
  // Index du témoignage actif
  const [activeIndex, setActiveIndex] = useState(0)

  // Navigation
  const goToPrevious = () => {
    setActiveIndex((prev) => 
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setActiveIndex((prev) => 
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-8 2xl:p-16">
      <div className="max-w-4xl 2xl:max-w-[70%] w-full">

        {/* ====== TITRE SECTION ====== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-50px' }}
          className="text-center mb-12 2xl:mb-16"
        >
          <span className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-widest">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-sage-700 mt-2">
            Ce que nos clients disent
          </h2>
        </motion.div>

        {/* ====== CAROUSEL ====== */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={testimonialsData[activeIndex].id}
              quote={testimonialsData[activeIndex].quote}
              name={testimonialsData[activeIndex].name}
              company={testimonialsData[activeIndex].company}
              role={testimonialsData[activeIndex].role}
            />
          </AnimatePresence>

          {/* ====== BOUTONS NAVIGATION ====== */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {/* Bouton précédent */}
            <button
              onClick={goToPrevious}
              className="
                w-12 h-12 rounded-full
                bg-white/10 backdrop-blur-sm
                border border-sage-400/30
                flex items-center justify-center
                hover:bg-white/20 hover:scale-110
                transition-all duration-300
                text-sage-600 dark:text-sage-300
              "
              aria-label="Témoignage précédent"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicateurs (dots) */}
            <div className="flex gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${index === activeIndex 
                      ? 'bg-sage-400 w-8' 
                      : 'bg-sage-400/30 hover:bg-sage-400/50'
                    }
                  `}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            {/* Bouton suivant */}
            <button
              onClick={goToNext}
              className="
                w-12 h-12 rounded-full
                bg-white/10 backdrop-blur-sm
                border border-sage-400/30
                flex items-center justify-center
                hover:bg-white/20 hover:scale-110
                transition-all duration-300
                text-sage-600 dark:text-sage-300
              "
              aria-label="Témoignage suivant"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials