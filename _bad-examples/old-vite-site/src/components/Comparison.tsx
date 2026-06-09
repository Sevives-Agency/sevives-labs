import { motion } from 'framer-motion'

// Composant Croix Animée
function AnimatedCross({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      animate={{
        rotate: [0, -10, 10, -10, 0],
        scale: [1, 1.1, 1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
    </motion.svg>
  )
}

// Composant Coche Animée
function AnimatedCheck({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      animate={{
        scale: [1, 1.15, 1],
        y: [0, -2, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </motion.svg>
  )
}

// Données de comparaison
const comparisons = [
  {
    market: 'Des "prompts magiques" vendus à prix d\'or',
    sevives: 'Du code pur et des architectures API',
  },
  {
    market: 'Dépendance totale aux abonnements SaaS',
    sevives: 'Souveraineté des données et outils auto-hébergés',
  },
  {
    market: 'Tunnels de vente et CRM en location perpétuelle',
    sevives: 'Propriété complète de votre système d\'acquisition',
  },
  {
    market: 'Des automatisations qui cassent à la première mise à jour',
    sevives: 'Des systèmes monitorés, robustes et scalables',
  },
  {
    market: 'Un gadget qui brille pendant 3 mois',
    sevives: 'Un actif financier pour votre entreprise',
  },
  {
    market: 'Formation basique sur ChatGPT',
    sevives: 'Ingénierie complète jusqu\'au Niveau 5',
  },
]

function Comparison() {
  return (
    <section id="comparison" className="py-20 2xl:py-28 px-8 2xl:px-16">
      <div className="max-w-6xl 2xl:max-w-[80%] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 2xl:mb-20"
        >
          <span className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-widest">
            La Différence Sevives
          </span>
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-sage-700 mt-4 mb-6">
            Marché vs Ingénierie
          </h2>
          <p className="text-lg 2xl:text-xl text-sage-600 max-w-3xl mx-auto">
            Ne confondez plus bricolage et architecture professionnelle
          </p>
        </motion.div>

        {/* Tableau comparatif */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/20 backdrop-blur-md rounded-3xl border border-sage-400/20 overflow-hidden"
        >
          {/* En-têtes */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-sage-400/30">
            {/* Colonne Marché */}
            <div className="bg-red-50/30 p-6 2xl:p-8 text-center border-b md:border-b-0 md:border-r border-sage-400/20">
              <div className="inline-flex items-center justify-center bg-red-100/50 rounded-full w-12 h-12 2xl:w-14 2xl:h-14 mb-3">
                <AnimatedCross className="w-6 h-6 2xl:w-7 2xl:h-7 text-red-500" />
              </div>
              <h3 className="text-xl 2xl:text-2xl font-bold text-red-700">Le Marché</h3>
              <p className="text-sm 2xl:text-base text-red-600 mt-1">Niveau 1-2 déguisé</p>
            </div>

            {/* Colonne Sevives */}
            <div className="bg-sage-50/30 p-6 2xl:p-8 text-center">
              <div className="inline-flex items-center justify-center bg-sage-100/50 rounded-full w-12 h-12 2xl:w-14 2xl:h-14 mb-3">
                <AnimatedCheck className="w-6 h-6 2xl:w-7 2xl:h-7 text-sage-500" />
              </div>
              <h3 className="text-xl 2xl:text-2xl font-bold text-sage-700">L'Ingénierie Sevives</h3>
              <p className="text-sm 2xl:text-base text-sage-600 mt-1">Niveau 5</p>
            </div>
          </div>

          {/* Lignes de comparaison */}
          <div className="divide-y divide-sage-400/10">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                {/* Marché */}
                <div className="p-6 2xl:p-8 bg-red-50/10 border-b md:border-b-0 md:border-r border-sage-400/10 flex items-start gap-3">
                  <AnimatedCross className="w-5 h-5 2xl:w-6 2xl:h-6 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-sage-700 text-sm 2xl:text-base leading-relaxed">{item.market}</p>
                </div>

                {/* Sevives */}
                <div className="p-6 2xl:p-8 bg-sage-50/10 flex items-start gap-3">
                  <AnimatedCheck className="w-5 h-5 2xl:w-6 2xl:h-6 text-sage-400 flex-shrink-0 mt-1" />
                  <p className="text-sage-700 text-sm 2xl:text-base leading-relaxed font-medium">{item.sevives}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer avec conclusion */}
          <div className="bg-gradient-to-r from-sage-400/20 to-sage-500/20 p-8 2xl:p-10 text-center border-t-2 border-sage-400/30">
            <p className="text-sage-700 text-lg 2xl:text-xl font-bold mb-2">
              La différence ? Un actif vs un gadget.
            </p>
            <p className="text-sage-600 text-sm 2xl:text-base">
              Investissez dans une infrastructure qui valorise votre entreprise, pas dans des abonnements qui la saignent.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Comparison
