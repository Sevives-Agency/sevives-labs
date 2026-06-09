import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// ============================================
// Hook personnalisé pour animer les compteurs
// ============================================
function useCountUp(end: number, duration: number = 2, inView: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(0)
      return
    }

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, inView])

  return count
}

// ============================================
// DONNÉES
// ============================================
const automationOptions = [
  {
    name: '1 Automatisation',
    price: 1397,
    popular: false,
    features: [
      'Workflow simple (3-5 étapes)',
      'Intégrations basiques (2-3 outils)',
      'Documentation complète',
      '1 mois de support',
      'Self-hosted à vie',
    ],
    cta: 'Démarrer maintenant',
  },
  {
    name: '5 Automatisations',
    price: 5937,
    popular: true,
    features: [
      '5 workflows personnalisés',
      'Intégrations multiples (5-8 outils)',
      'IA légère incluse',
      'Documentation & Formation',
      '3 mois de support premium',
      'Self-hosted à vie',
    ],
    cta: 'Pack le plus populaire',
    savings: '+ de 30% d\'économies',
  },
  {
    name: '11 Automatisations',
    price: 11311,
    popular: false,
    features: [
      '11 workflows avancés',
      'Intégrations illimitées (10+ outils)',
      'IA personnalisée avancée',
      'Monitoring en temps réel',
      '6 mois de support premium',
      'Self-hosted à vie',
    ],
    cta: 'Solution complète',
    savings: '+ de 35% d\'économies',
  },
  {
    name: 'Full Custom',
    price: null,
    popular: false,
    features: [
      'Workflows illimités sur-mesure',
      'Intégrations illimitées',
      'IA personnalisée ultra-avancée',
      'Architecture dédiée',
      'Support prioritaire 12 mois',
      'Self-hosted à vie',
    ],
    cta: 'Demander un devis',
    custom: true,
  },
]

interface PackFeatures {
  support: boolean | string
  config: boolean | string
  formation: boolean
  consultanceVisio: boolean
  consultanceEntreprise: boolean
  developpement: boolean
}

const packData = [
  {
    name: 'Pack Express',
    duration: '1 heure',
    price: 67,
    features: {
      support: true,
      config: false,
      formation: false,
      consultanceVisio: true,
      consultanceEntreprise: false,
      developpement: false,
    } as PackFeatures,
  },
  {
    name: 'Pack Standard',
    duration: '5 heures',
    price: 307,
    features: {
      support: true,
      config: true,
      formation: true,
      consultanceVisio: true,
      consultanceEntreprise: false,
      developpement: false,
    } as PackFeatures,
  },
  {
    name: 'Pack Advanced',
    duration: '10 heures',
    price: 577,
    features: {
      support: true,
      config: true,
      formation: true,
      consultanceVisio: true,
      consultanceEntreprise: true,
      developpement: false,
    } as PackFeatures,
  },
  {
    name: 'Pack Pro',
    duration: '50 heures',
    price: 2537,
    features: {
      support: true,
      config: true,
      formation: true,
      consultanceVisio: true,
      consultanceEntreprise: true,
      developpement: true,
    } as PackFeatures,
  },
  {
    name: 'Pack Premium',
    duration: 'Support mensuel',
    price: 357,
    monthly: true,
    features: {
      support: true,
      config: '✓ 3h inclus/mois',
      formation: false,
      consultanceVisio: false,
      consultanceEntreprise: false,
      developpement: false,
    } as PackFeatures,
  },
]

const servicesList = [
  { key: 'support', label: 'Support email + téléphone' },
  { key: 'config', label: 'Configuration' },
  { key: 'formation', label: 'Formation & Coaching' },
  { key: 'consultanceVisio', label: 'Consultance Visio' },
  { key: 'consultanceEntreprise', label: 'Consultance en entreprise' },
  { key: 'developpement', label: 'Développement' },
]

// ============================================
// SECTION 1 - HERO
// ============================================
function PricingHero() {
  return (
    <div className="min-h-screen flex items-center justify-center mb-20 2xl:mb-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: '-50px' }}
        className="bg-white/20 backdrop-blur-md rounded-3xl p-16 2xl:p-20 text-center max-w-5xl 2xl:max-w-6xl"
      >
        <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-bold text-sage-700 mb-6 2xl:mb-8">
          Vous ne rêvez pas !
        </h1>
        <p className="text-2xl md:text-3xl 2xl:text-4xl text-sage-600">
          Votre automatisation self-hosted à vie à partir de{' '}
          <span className="text-sage-400 font-bold bg-gradient-to-r from-sage-400 to-sage-500 bg-clip-text text-transparent">
            1397 €
          </span>
        </p>
      </motion.div>
    </div>
  )
}

// ============================================
// SECTION 1B - NOTRE APPROCHE
// ============================================
function OurApproach() {
  return (
    <section className="mb-32 2xl:mb-40">
      <div className="max-w-6xl 2xl:max-w-[80%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-50px' }}
          className="bg-gradient-to-br from-sage-400/10 via-white/20 to-taupe-300/10 backdrop-blur-md rounded-3xl border-2 border-sage-400/30 p-10 2xl:p-14"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-sage-400 text-white rounded-full w-16 h-16 2xl:w-20 2xl:h-20 mb-6">
              <svg className="w-8 h-8 2xl:w-10 2xl:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-sage-700 mb-4">
              Chez Sevives, pas de vente à l'aveugle
            </h2>
            <p className="text-lg 2xl:text-xl text-sage-600 max-w-3xl mx-auto">
              Nous exigeons que nos clients comprennent leurs besoins avant d'investir
            </p>
          </div>

          {/* 3 étapes du parcours */}
          <div className="grid md:grid-cols-3 gap-6 2xl:gap-8 mb-10">
            {/* Étape 1 : Formation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 2xl:p-8 border border-sage-400/20 text-center hover:scale-105 transition-transform"
            >
              <div className="bg-gradient-to-br from-sage-400 to-sage-500 text-white rounded-full w-12 h-12 2xl:w-14 2xl:h-14 flex items-center justify-center mx-auto mb-4 font-bold text-xl 2xl:text-2xl">
                1
              </div>
              <h3 className="text-xl 2xl:text-2xl font-bold text-sage-700 mb-3">
                Formez-vous
              </h3>
              <p className="text-sage-600 text-sm 2xl:text-base mb-4">
                Vidéos YouTube, ressources gratuites, formations Skool
              </p>
              <a
                href="https://youtube.com/@sevives"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage-500 hover:text-sage-600 font-semibold text-sm 2xl:text-base transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Voir nos formations
              </a>
            </motion.div>

            {/* Étape 2 : Audit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 2xl:p-8 border border-sage-400/20 text-center hover:scale-105 transition-transform"
            >
              <div className="bg-gradient-to-br from-sage-400 to-sage-500 text-white rounded-full w-12 h-12 2xl:w-14 2xl:h-14 flex items-center justify-center mx-auto mb-4 font-bold text-xl 2xl:text-2xl">
                2
              </div>
              <h3 className="text-xl 2xl:text-2xl font-bold text-sage-700 mb-3">
                Auditez vos besoins
              </h3>
              <p className="text-sage-600 text-sm 2xl:text-base mb-4">
                Packs consulting pour identifier les vrais points de friction
              </p>
              <span className="inline-block text-sage-500 font-semibold text-sm 2xl:text-base">
                → Voir les packs ci-dessous
              </span>
            </motion.div>

            {/* Étape 3 : Automatisations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 2xl:p-8 border border-sage-400/20 text-center hover:scale-105 transition-transform"
            >
              <div className="bg-gradient-to-br from-sage-400 to-sage-500 text-white rounded-full w-12 h-12 2xl:w-14 2xl:h-14 flex items-center justify-center mx-auto mb-4 font-bold text-xl 2xl:text-2xl">
                3
              </div>
              <h3 className="text-xl 2xl:text-2xl font-bold text-sage-700 mb-3">
                Investissez intelligemment
              </h3>
              <p className="text-sage-600 text-sm 2xl:text-base mb-4">
                Automatisations pertinentes, crédit horaire déduit
              </p>
              <span className="inline-block text-sage-500 font-semibold text-sm 2xl:text-base">
                → Plus de détails après les packs
              </span>
            </motion.div>
          </div>

          {/* Message de conclusion */}
          <div className="bg-sage-400/10 rounded-2xl p-6 2xl:p-8 text-center border border-sage-400/20">
            <p className="text-sage-700 text-base 2xl:text-lg font-medium">
              <span className="font-bold text-sage-500">Résultat :</span> Vous ne payez que pour ce dont vous avez réellement besoin, et les heures consulting non utilisées sont déductibles de vos automatisations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 1C - BANNIÈRE OFFRE NOUVEAUX CLIENTS
// ============================================
function PromoBanner() {
  return (
    <section className="mb-32 2xl:mb-40">
      <div className="max-w-7xl 2xl:max-w-[90%] mx-auto">
        {/* Bannière offre nouveaux clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-50px' }}
          className="bg-gradient-to-r from-sage-400 to-sage-500 rounded-3xl p-6 2xl:p-8 text-center relative overflow-hidden"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            {/* Icône cadeau à côté du titre */}
            <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 2xl:w-14 2xl:h-14">
              <svg className="w-6 h-6 2xl:w-7 2xl:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-white">
              Offre Nouveaux Clients
            </h3>
          </div>
          <p className="text-xl 2xl:text-2xl text-white/90">
            <span className="font-bold text-2xl 2xl:text-3xl">+50% d'heures offertes</span> sur tous les packs consulting !
          </p>
          <p className="text-base 2xl:text-lg text-white/80 mt-2">
            Pack 1h → 1h30 • Pack 5h → 7h30 • Pack 10h → 15h • Pack 50h → 75h
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 2 - CALCULATEUR ROI
// ============================================
function ROICalculator() {
  const [selectedPackage, setSelectedPackage] = useState<number>(5937) // Package par défaut : le plus populaire
  const [employees, setEmployees] = useState(10)
  const [hoursLost, setHoursLost] = useState(5)
  const [hourlyCost, setHourlyCost] = useState(35)
  const [showResult, setShowResult] = useState(false)

  // Packages disponibles pour le calculateur
  const calculatorPackages = [
    { price: 1397, name: '1 Automatisation', automations: 1, savingsRate: 0.20 },
    { price: 5937, name: '5 Automatisations', automations: 5, savingsRate: 0.50 },
    { price: 11311, name: '11 Automatisations', automations: 11, savingsRate: 0.70 },
  ]

  // Trouve le package sélectionné
  const currentPackage = calculatorPackages.find(pkg => pkg.price === selectedPackage) || calculatorPackages[1]

  // Calculs
  const annualCost = employees * hoursLost * 52 * hourlyCost
  const potentialSavings = annualCost * currentPackage.savingsRate // Économies basées sur le package
  const monthlySavings = potentialSavings / 12
  const roiMonths = monthlySavings > 0 ? Math.max(1, Math.ceil(selectedPackage / monthlySavings)) : 0
  const savingsPercentage = (potentialSavings / annualCost) * 100

  const animatedAnnualCost = useCountUp(Math.floor(annualCost), 1.5, showResult)
  const animatedSavings = useCountUp(Math.floor(potentialSavings), 1.5, showResult)
  const animatedROI = useCountUp(roiMonths, 1.5, showResult)

  const handleCalculate = () => {
    setShowResult(true)
  }

  return (
    <section className="mb-32 2xl:mb-40">
      <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-50px' }}
          className="text-center mb-12 2xl:mb-16"
        >
          <span className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-widest">
            Calculez votre ROI
          </span>
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-sage-700 mt-2">
            Combien allez-vous économiser ?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, margin: '-50px' }}
          className="bg-white/25 backdrop-blur-md rounded-3xl border border-sage-400/20 p-10 2xl:p-16"
        >
          {/* Formulaire */}
          <div className="space-y-8 2xl:space-y-10 mb-10">
            {/* Sélection du package */}
            <div>
              <label className="block text-sage-700 font-semibold mb-4 2xl:mb-5 text-lg 2xl:text-xl">
                Sélectionnez votre pack
              </label>
              <div className="grid grid-cols-3 gap-3 2xl:gap-4">
                {calculatorPackages.map((pkg) => (
                  <button
                    key={pkg.price}
                    onClick={() => {
                      setSelectedPackage(pkg.price)
                      setShowResult(false)
                    }}
                    className={`p-4 2xl:p-5 rounded-lg font-bold transition-all transform hover:scale-105 ${
                      selectedPackage === pkg.price
                        ? 'bg-sage-400 text-white shadow-lg scale-105'
                        : 'bg-white/50 text-sage-700 hover:bg-white/70'
                    }`}
                  >
                    <div className="text-sm 2xl:text-base mb-1">{pkg.name}</div>
                    <div className="text-lg 2xl:text-xl">{pkg.price.toLocaleString()}€</div>
                    <div className={`text-xs 2xl:text-sm mt-1 ${selectedPackage === pkg.price ? 'text-white/90' : 'text-sage-500'}`}>
                      {Math.round(pkg.savingsRate * 100)}% d'économies
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Nombre d'employés */}
            <div>
              <label className="block text-sage-700 font-semibold mb-3 2xl:mb-4 text-lg 2xl:text-xl">
                Nombre d'employés : <span className="text-sage-400">{employees}</span>
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-3 bg-sage-200 rounded-lg appearance-none cursor-pointer accent-sage-400"
              />
            </div>

            {/* Heures perdues */}
            <div>
              <label className="block text-sage-700 font-semibold mb-3 2xl:mb-4 text-lg 2xl:text-xl">
                Heures perdues par semaine (par employé) : <span className="text-sage-400">{hoursLost}h</span>
              </label>
              <input
                type="range"
                min="1"
                max="40"
                value={hoursLost}
                onChange={(e) => setHoursLost(Number(e.target.value))}
                className="w-full h-3 bg-sage-200 rounded-lg appearance-none cursor-pointer accent-sage-400"
              />
            </div>

            {/* Coût horaire */}
            <div>
              <label className="block text-sage-700 font-semibold mb-3 2xl:mb-4 text-lg 2xl:text-xl">
                Coût horaire moyen (€)
              </label>
              <input
                type="number"
                value={hourlyCost}
                onChange={(e) => setHourlyCost(Number(e.target.value))}
                className="w-full px-6 py-4 2xl:px-8 2xl:py-5 bg-white/50 border-2 border-sage-400/30 rounded-lg text-sage-700 font-semibold text-lg 2xl:text-xl focus:outline-none focus:border-sage-400"
              />
            </div>
          </div>

          {/* Bouton Calculer */}
          <button
            onClick={handleCalculate}
            className="w-full bg-sage-400 hover:bg-sage-500 text-white font-bold py-4 2xl:py-6 px-8 rounded-lg transition-all transform hover:scale-105 text-lg 2xl:text-xl"
          >
            Calculer le ROI
          </button>

          {/* Résultats */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 40 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.5 }}
                className="border-t-2 border-sage-400/20 pt-10 2xl:pt-12"
              >
                <h3 className="text-2xl 2xl:text-3xl font-bold text-sage-700 mb-8 2xl:mb-10 text-center">
                  Vos résultats
                </h3>

                <div className="grid md:grid-cols-3 gap-6 2xl:gap-8 mb-8">
                  {/* Coût actuel */}
                  <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 2xl:p-8 text-center">
                    <div className="text-sm 2xl:text-base text-sage-600 uppercase font-semibold mb-2">
                      Coût actuel annuel
                    </div>
                    <div className="text-3xl 2xl:text-4xl font-bold text-sage-700">
                      {animatedAnnualCost.toLocaleString()} €
                    </div>
                  </div>

                  {/* Économies */}
                  <div className="bg-gradient-to-br from-fuchsia-400/20 to-transparent backdrop-blur-sm rounded-2xl p-6 2xl:p-8 text-center border border-fuchsia-400/30">
                    <div className="text-sm 2xl:text-base text-fuchsia-600 uppercase font-semibold mb-2">
                      Économies potentielles
                    </div>
                    <div className="text-3xl 2xl:text-4xl font-bold text-fuchsia-600">
                      {animatedSavings.toLocaleString()} €
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 2xl:p-8 text-center">
                    <div className="text-sm 2xl:text-base text-sage-600 uppercase font-semibold mb-2">
                      ROI en
                    </div>
                    <div className="text-3xl 2xl:text-4xl font-bold text-sage-700">
                      {animatedROI} mois
                    </div>
                  </div>
                </div>

                {/* Barre de progression */}
                <div className="bg-white/20 rounded-full h-8 2xl:h-10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(savingsPercentage, 100)}%` }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="bg-gradient-to-r from-sage-400 to-sage-500 h-full flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-sm 2xl:text-base">
                      {Math.round(savingsPercentage)}% d'économies
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 3 - CARTES AUTOMATISATION
// ============================================
function AutomationCards() {
  return (
    <section className="mb-32 2xl:mb-40">
      <div className="max-w-7xl 2xl:max-w-[90%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-50px' }}
          className="text-center mb-16 2xl:mb-20"
        >
          <span className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-widest">
            Automatisation IA
          </span>
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-sage-700 mt-2">
            Choisissez votre pack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
          {automationOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, margin: '-50px' }}
              whileHover={{ scale: option.popular ? 1.05 : 1.02 }}
              className={`bg-white/25 backdrop-blur-md rounded-3xl border p-8 2xl:p-10 relative ${
                option.popular
                  ? 'border-blue-400 shadow-2xl shadow-blue-400/30 bg-gradient-to-br from-blue-50/40 to-purple-50/30 lg:scale-105'
                  : 'border-sage-400/20'
              }`}
            >
              {/* Badge Le plus populaire */}
              {option.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs 2xl:text-sm font-bold shadow-lg">
                  ⭐ Le plus populaire
                </div>
              )}

              {/* Badge économies */}
              {option.savings && !option.popular && (
                <div className="absolute -top-3 right-4 bg-sage-500 text-white px-4 py-1 rounded-full text-xs 2xl:text-sm font-bold">
                  {option.savings}
                </div>
              )}

              {/* Nom */}
              <h3 className={`text-xl 2xl:text-2xl font-bold mb-4 ${option.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : 'text-sage-700'}`}>
                {option.name}
              </h3>

              {/* Prix */}
              <div className="mb-6 2xl:mb-8">
                {option.custom ? (
                  <span className="text-4xl 2xl:text-5xl font-bold text-sage-400">Sur devis</span>
                ) : (
                  <span className={`text-4xl 2xl:text-5xl font-bold ${option.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : 'text-sage-400'}`}>
                    {option.price?.toLocaleString()} €
                  </span>
                )}
              </div>

              {/* Badge économies pour le populaire */}
              {option.popular && option.savings && (
                <div className="mb-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 text-blue-700 px-4 py-2 rounded-lg text-sm 2xl:text-base font-bold text-center flex items-center justify-center gap-2 border border-blue-400/30">
                  <svg className="w-4 h-4 2xl:w-5 2xl:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {option.savings}
                </div>
              )}

              {/* Features */}
              <ul className="space-y-3 2xl:space-y-4 mb-6 2xl:mb-8">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg className={`w-5 h-5 2xl:w-6 2xl:h-6 flex-shrink-0 mt-0.5 ${option.popular ? 'text-blue-500' : 'text-sage-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm 2xl:text-base ${option.popular ? 'text-gray-800 font-medium' : 'text-sage-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`w-full font-bold py-3 2xl:py-4 px-4 rounded-lg transition-all transform hover:scale-105 text-sm 2xl:text-base ${
                option.popular
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-xl shadow-blue-500/30'
                  : 'bg-sage-400 hover:bg-sage-500 text-white'
              }`}>
                {option.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 3B - BANNIÈRE CRÉDIT HORAIRE
// ============================================
function CreditSystemBanner() {
  return (
    <section className="mb-32 2xl:mb-40">
      <div className="max-w-7xl 2xl:max-w-[90%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-50px' }}
          className="bg-gradient-to-r from-sage-400/20 to-sage-500/20 border-2 border-sage-400/40 rounded-3xl p-6 2xl:p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Partie gauche - Titre et description */}
            <div className="flex items-center gap-4 flex-1">
              <div className="flex-shrink-0 bg-gradient-to-br from-amber-400 to-amber-500 text-white rounded-full w-12 h-12 2xl:w-14 2xl:h-14 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 2xl:w-7 2xl:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-sage-700 mb-2">
                  Système de crédit horaire
                </h3>
                <p className="text-sage-700 text-sm md:text-base 2xl:text-lg">
                  Les heures non utilisées sont <span className="font-bold text-amber-600">converties en crédit</span> et déductibles d'une automatisation
                </p>
              </div>
            </div>

            {/* Partie droite - Exemple */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 2xl:p-5 flex-shrink-0 w-full md:w-auto md:min-w-[400px] 2xl:min-w-[450px]">
              <p className="text-sage-600 text-xs 2xl:text-sm font-bold mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 2xl:w-5 2xl:h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Exemple : Pack 10h (577€), utilisé 4h
              </p>
              <div className="text-sage-700 text-xs 2xl:text-sm">
                <div className="flex justify-between mb-1">
                  <span>6h restantes × 58€/h</span>
                  <span className="font-bold text-sage-500">= 348€ de crédit</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-sage-400/20">
                  <span>1 Automatisation (1397€)</span>
                  <span className="font-bold text-sage-500 text-base 2xl:text-lg">→ 1049€</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 4 - TABLEAU COMPARATIF PACKS
// ============================================
function PacksTable() {
  // Fonction pour calculer les heures bonus (+50%)
  const getBonusHours = (duration: string) => {
    const match = duration.match(/(\d+)\s*heures?/)
    if (match) {
      const hours = parseInt(match[1])
      const bonusHours = hours * 1.5
      // Si entier, afficher "15h", sinon si .5 afficher "7h30"
      if (bonusHours % 1 === 0) {
        return `${bonusHours}h`
      } else {
        const heuresEntieres = Math.floor(bonusHours)
        return `${heuresEntieres}h30`
      }
    }
    return null
  }

  return (
    <section className="mb-32 2xl:mb-40">
      <div className="max-w-7xl 2xl:max-w-[90%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-50px' }}
          className="text-center mb-16 2xl:mb-20"
        >
          <span className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-widest">
            Packs Consulting
          </span>
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-sage-700 mt-2">
            Support et accompagnement
          </h2>
        </motion.div>

        {/* Version Desktop - Tableau */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, margin: '-50px' }}
          className="hidden lg:block bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/30">
                <tr>
                  <th className="px-6 py-6 2xl:px-8 2xl:py-8 text-left">
                    <span className="text-sage-700 font-bold text-lg 2xl:text-xl">Service / Pack</span>
                  </th>
                  {packData.map((pack) => {
                    const bonusHours = getBonusHours(pack.duration)
                    return (
                      <th key={pack.name} className="px-6 py-6 2xl:px-8 2xl:py-8 text-center">
                        <div className="space-y-2">
                          <div className="bg-sage-400 text-white rounded-full px-6 py-3 2xl:px-8 2xl:py-4 inline-block">
                            <div className="font-bold text-base 2xl:text-lg">{pack.name}</div>
                            <div className="text-sm 2xl:text-base opacity-90">
                              {pack.duration}
                              {bonusHours && (
                                <span className="block text-xs 2xl:text-sm mt-1 bg-white/20 rounded-full px-2 py-0.5">
                                  +50% → {bonusHours}*
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-2xl 2xl:text-3xl font-bold text-sage-700">
                            {pack.price} €{pack.monthly ? '/mois' : ''}
                          </div>
                        </div>
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {servicesList.map((service, idx) => (
                  <tr key={service.key} className={idx % 2 === 0 ? 'bg-white/10' : 'bg-white/5'}>
                    <td className="px-6 py-5 2xl:px-8 2xl:py-6 text-sage-700 font-semibold text-base 2xl:text-lg">
                      {service.label}
                    </td>
                    {packData.map((pack) => {
                      const featureValue = pack.features[service.key as keyof PackFeatures]
                      return (
                        <td key={pack.name} className="px-6 py-5 2xl:px-8 2xl:py-6 text-center">
                          {typeof featureValue === 'string' ? (
                            <span className="text-sage-400 font-semibold text-sm 2xl:text-base">{featureValue}</span>
                          ) : featureValue ? (
                            <svg className="w-6 h-6 2xl:w-7 2xl:h-7 text-sage-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 2xl:w-7 2xl:h-7 text-fuchsia-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Version Mobile - Cartes */}
        <div className="lg:hidden space-y-6">
          {packData.map((pack, index) => {
            const bonusHours = getBonusHours(pack.duration)
            return (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, margin: '-50px' }}
                className="bg-white/25 backdrop-blur-md rounded-3xl border border-sage-400/20 p-8 2xl:p-10"
              >
                {/* Header carte */}
                <div className="text-center mb-6">
                  <div className="bg-sage-400 text-white rounded-full px-6 py-3 inline-block mb-3">
                    <div className="font-bold text-lg">{pack.name}</div>
                    <div className="text-sm opacity-90">
                      {pack.duration}
                      {bonusHours && (
                        <span className="block text-xs mt-1 bg-white/20 rounded-full px-2 py-0.5">
                          +50% → {bonusHours}*
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-sage-700">
                    {pack.price} €{pack.monthly ? '/mois' : ''}
                  </div>
                </div>

                {/* Services */}
                <ul className="space-y-4">
                  {servicesList.map((service) => {
                    const featureValue = pack.features[service.key as keyof PackFeatures]
                    return (
                      <li key={service.key} className="flex items-center justify-between gap-4 py-2 border-b border-sage-400/10">
                        <span className="text-sage-700 font-medium text-sm">{service.label}</span>
                        {typeof featureValue === 'string' ? (
                          <span className="text-sage-400 font-semibold text-xs">{featureValue}</span>
                        ) : featureValue ? (
                          <svg className="w-5 h-5 text-sage-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-fuchsia-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Note astérisque */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, margin: '-50px' }}
          className="mt-8 text-center"
        >
          <p className="text-sage-600 text-sm 2xl:text-base italic">
            * Offre nouveaux clients détaillée ci-dessous
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// SECTION 5 - CTA FINALE
// ============================================
function FinalCTA() {
  return (
    <section className="mb-32 2xl:mb-40">
      <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: '-50px' }}
          className="bg-white/25 backdrop-blur-md rounded-3xl border border-sage-400/20 p-12 2xl:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-sage-700 mb-6 2xl:mb-8">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl 2xl:text-2xl text-sage-600 mb-10 2xl:mb-12">
            Nos consultants sont là pour vous accompagner dans votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 2xl:gap-6 justify-center">
            <a
              href="#audit"
              className="bg-gradient-to-r from-sage-400 to-sage-500 hover:from-sage-500 hover:to-sage-600 text-white font-bold py-4 2xl:py-5 px-8 2xl:px-10 rounded-lg transition-all transform hover:scale-105 text-base 2xl:text-lg shadow-lg"
            >
              Contacter un consultant
            </a>
            <a
              href="#news"
              className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 2xl:py-5 px-8 2xl:px-10 rounded-lg transition-all transform hover:scale-105 text-base 2xl:text-lg shadow-lg"
            >
              Voir nos réalisations
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// COMPOSANT PRINCIPAL PRICING
// ============================================
function Pricing() {
  return (
    <section id="pricing" className="py-20 2xl:py-28 px-8 2xl:px-16">
      <PricingHero />
      <OurApproach />
      <PacksTable />
      <PromoBanner />
      <CreditSystemBanner />
      <AutomationCards />
      <ROICalculator />
      <FinalCTA />
    </section>
  )
}

export default Pricing
