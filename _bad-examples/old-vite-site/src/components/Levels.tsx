import { motion } from 'framer-motion'

// Données des niveaux
const levels = [
  {
    number: '1-2',
    title: "L'Éveil",
    subtitle: 'Fondamentaux',
    description: 'Comprenez les bases de l\'IA et de l\'automatisation pour identifier vos opportunités',
    technologies: ['Prompts avancés', 'LLM Natifs', 'Connecteurs simples'],
    color: 'from-taupe-400 to-taupe-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    badge: 'Niveau 1-2',
  },
  {
    number: '3',
    title: "L'Optimisation",
    subtitle: 'Audit / Accompagnement',
    description: 'Connectez vos outils pour fluidifier l\'information dans votre entreprise',
    technologies: ['No-code structuré', 'Make / Zapier', 'Intégration ERP'],
    color: 'from-sage-400 to-sage-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    badge: 'Niveau 3',
  },
  {
    number: '4-5',
    title: 'La Maîtrise',
    subtitle: 'Ingénierie Sevives',
    description: 'Souveraineté totale. Infrastructure robuste, scalable, sans dépendances',
    technologies: ['Python / API', 'Self-hosted (n8n, KVM)', 'Architecture propriétaire'],
    color: 'from-sage-500 to-sage-600',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    badge: 'Niveau 4-5',
  },
]

function Levels() {
  return (
    <section id="levels" className="py-20 2xl:py-28 px-8 2xl:px-16">
      <div className="max-w-7xl 2xl:max-w-[85%] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 2xl:mb-20"
        >
          <span className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-widest">
            Votre Parcours Digital
          </span>
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-sage-700 mt-4 mb-6">
            Les 5 Niveaux de Maturité Digitale
          </h2>
          <p className="text-lg 2xl:text-xl text-sage-600 max-w-3xl mx-auto">
            De la formation gratuite à l'infrastructure souveraine, évoluez à votre rythme
          </p>
        </motion.div>

        {/* Cards en superposition (stacking effect) */}
        <div className="relative">
          {levels.map((level, index) => (
            <motion.div
              key={level.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{
                position: 'sticky',
                top: `${80 + index * 40}px`, // Chaque carte se colle un peu plus bas (80px de base + 40px par carte)
                zIndex: index + 1, // Les cartes suivantes passent au-dessus des précédentes
              }}
              className="w-full mb-20 2xl:mb-24"
            >
              <div className="bg-white/25 backdrop-blur-md rounded-3xl border border-sage-400/20 p-8 2xl:p-10 hover:scale-[1.02] transition-transform relative overflow-hidden group shadow-xl">
                {/* Badge en coin */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${level.color} text-white px-4 py-1 2xl:px-5 2xl:py-2 rounded-full text-xs 2xl:text-sm font-bold`}>
                  {level.badge}
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Icône et numéro */}
                  <div className="flex-shrink-0">
                    <div className={`bg-gradient-to-br ${level.color} text-white rounded-2xl p-6 2xl:p-8 shadow-lg`}>
                      <div className="mb-2">{level.icon}</div>
                      <div className="text-3xl 2xl:text-4xl font-bold">Niveau {level.number}</div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="flex-1">
                    <h3 className="text-2xl 2xl:text-3xl font-bold text-sage-700 mb-2">
                      {level.title}
                    </h3>
                    <p className="text-sage-500 font-semibold mb-3 text-sm 2xl:text-base">
                      {level.subtitle}
                    </p>
                    <p className="text-sage-700 text-base 2xl:text-lg mb-6 leading-relaxed">
                      {level.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {level.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/50 backdrop-blur-sm text-sage-700 px-3 py-1 2xl:px-4 2xl:py-2 rounded-lg text-xs 2xl:text-sm font-medium border border-sage-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bas de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 2xl:mt-20"
        >
          <p className="text-sage-600 text-lg 2xl:text-xl mb-6">
            Nous accompagnons les entreprises à chaque étape
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mb-4 max-w-4xl mx-auto">
            <a
              href="#audit"
              className="flex-1 sm:min-w-[280px] bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 2xl:py-5 px-8 2xl:px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg text-base 2xl:text-lg text-center"
            >
              Diagnostiquer mon niveau
            </a>
            <a
              href="#audit"
              className="flex-1 sm:min-w-[280px] bg-gradient-to-r from-sage-400 to-sage-500 hover:from-sage-500 hover:to-sage-600 text-white font-bold py-4 2xl:py-5 px-8 2xl:px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg text-base 2xl:text-lg text-center"
            >
              1h d'audit gratuit
            </a>
          </div>
          <p className="text-sage-600 text-sm 2xl:text-base mt-4">
            Si vous débutez (Niveau 1-2), profitez de nos{' '}
            <a
              href="/community"
              className="text-sage-500 hover:text-sage-600 font-semibold underline decoration-1 underline-offset-2 transition-colors"
            >
              ressources en libre accès
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Levels
