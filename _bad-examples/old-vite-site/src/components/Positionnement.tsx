import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Positionnement() {
  const cards = [
    {
      title: "Ce que Sevives N'EST PAS",
      points: [
        "Ce n'est pas un pack préconçu, figé, avec des tiers API imposées et des usages verrouillés.",
        "Ce n'est pas un système de surfacturation basé sur des crédits opaques ou des consommations difficiles à suivre.",
        "Ce n'est pas un environnement propriétaire qui enferme vos données ou vos automatisations chez un tiers."
      ],
      link: '/about',
      isRoute: true
    },
    {
      title: "Un modèle transparent et maîtrisé",
      points: [
        "Zéro abonnement, pas de coûts cachés ni surprise.",
        "Les prix sont visibles, compréhensibles et directement liés à ce que vous utilisez réellement.",
        "Aucune mécanique obscure. Aucune dépendance artificielle."
      ],
      link: '/pricing',
      isRoute: true
    },
    {
      title: "Vous gardez le contrôle",
      points: [
        "Les workflows reposent sur vos propres abonnements et vos propres outils.",
        "Vos données restent chez vous. Vous n'êtes jamais bloqué par un fournisseur tiers.",
        "Vous choisissez librement vos dépenses, selon vos besoins réels."
      ],
      link: '/pricing',
      isRoute: true
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 2xl:p-16">
      <div className="max-w-7xl 2xl:max-w-[90%] w-full">
        
        {/* Titre de section */}
        <motion.div
          className="text-center mb-12 2xl:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <span className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-wider">
            Positionnement
          </span>
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-sage-700 mt-2">
            Notre différence
          </h2>
        </motion.div>

        {/* 3 cartes */}
        <div className="grid md:grid-cols-3 gap-6 2xl:gap-12">
          {cards.map((card, index) => {
            const cardContent = (
              <motion.div
                className="bg-white/25 backdrop-blur-md rounded-3xl border border-white/30 p-8 2xl:p-12 shadow-xl cursor-pointer h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <h3 className="text-xl 2xl:text-2xl font-bold text-sage-700 mb-6">
                  {card.title}
                </h3>
                <ul className="space-y-4">
                  {card.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-sage-500 mt-1">•</span>
                      <span className="text-sage-600 2xl:text-xl leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )

            return card.isRoute ? (
              <Link key={index} to={card.link} className="block">
                {cardContent}
              </Link>
            ) : (
              <a key={index} href={card.link} className="block">
                {cardContent}
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Positionnement