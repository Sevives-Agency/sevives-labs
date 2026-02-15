import { motion } from 'framer-motion'
import { useRef } from 'react'

function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  const expertiseAreas = [
    {
      title: "Développement & Intégration",
      description: "Création de solutions web et mobile sur mesure, architectures modernes et performantes",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 6L4 10L8 14M16 6L20 10L16 14M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Marketing Digital",
      description: "Stratégies data-driven, SEO/SEA, content marketing et acquisition omnicanale",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 10L12 13L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Automatisation & IA",
      description: "Workflows intelligents, agents conversationnels, optimisation par l'IA générative",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 5V3M12 21V19M19 12H21M3 12H5M17.66 6.34L19.07 4.93M4.93 19.07L6.34 17.66M17.66 17.66L19.07 19.07M4.93 4.93L6.34 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Logistique & Supply Chain",
      description: "Optimisation des flux, gestion des stocks, intégration WMS et TMS",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8H4M20 8V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V8M20 8L17 3H7L4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Finance & Comptabilité",
      description: "Automatisation comptable, tableau de bord financiers, intégration ERP",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13H7L10 7L14 17L17 11H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "RH & Recrutement",
      description: "ATS intelligents, automatisation onboarding, gestion des talents par IA",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Infrastructure IT",
      description: "Cloud architecture, DevOps, cybersécurité et monitoring 24/7",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H3L12 3L21 12H19M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12M5 12H19M9 21V15H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Data & Analytics",
      description: "Business Intelligence, data warehousing, visualisation et prédiction par ML",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17V11M12 17V7M15 17V13M4 17H20M4 17V4H20V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  const timeline = [
    {
      year: "2018-2020",
      title: "L'origine",
      description: "Agence de marketing et communication spécialisée dans les nouvelles technologies et l'innovation digitale"
    },
    {
      year: "2021-2022",
      title: "L'adaptation",
      description: "Intégration de l'IA et de l'automatisation pour anticiper les mutations technologiques"
    },
    {
      year: "2023-2024",
      title: "La transformation",
      description: "Pivot vers la digitalisation complète : sites intelligents, ERP, automatisation end-to-end"
    },
    {
      year: "Aujourd'hui",
      title: "Le nouveau paradigme",
      description: "Partenaire 360° de la transformation digitale des entreprises"
    }
  ]

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-sage-100/50 via-taupe-100/30 to-sage-200/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center px-6 py-16 bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-sage-700 mb-6">
              De l'agence marketing<br />à la digitalisation 360°
            </h1>
          </motion.div>

          <motion.div
            className="space-y-6 text-lg sm:text-xl text-sage-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Nous sommes issus d'une ancienne agence de marketing et high‑tech. À l'origine, une agence de marketing et de communication dont l'objectif était de suivre les tendances des nouvelles technologies digitales, de l'intelligence artificielle et de l'automatisation, tout en restant connectée aux dernières innovations et aux nouveaux modes de fonctionnement des entreprises.
            </p>
            <p>
              Très tôt, nous nous sommes intéressés à l'adaptation de ces technologies afin d'accompagner les entreprises dans le passage vers un nouveau paradigme technologique, plus intelligent et en devenir.
            </p>
            <p className="font-semibold text-sage-700">
              Aujourd'hui, notre agence s'est transformée en une véritable structure de digitalisation complète pour les entreprises. Nous les accompagnons dans leur transformation digitale et les aidons à évoluer pour franchir le cap du nouveau paradigme digitalisé.
            </p>
            <p>
              Nous intervenons sur la numérisation des entreprises de A à Z : création de sites internet intelligents, refonte de leurs systèmes, accompagnement dans le choix des ERP afin d'automatiser, d'optimiser et de rendre plus efficaces l'ensemble de leurs processus.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-taupe-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-sage-700 text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Notre évolution
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sage-300 via-sage-400 to-sage-500" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-sage-200"
                    whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sage-500 font-bold text-sm uppercase tracking-wider">{item.year}</span>
                    <h3 className="text-2xl font-bold text-sage-700 mt-2 mb-3">{item.title}</h3>
                    <p className="text-sage-600">{item.description}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-sage-500 rounded-full border-4 border-white shadow-lg z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-taupe-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-sage-700 mb-6">
              Nos pôles d'expertise
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Un réseau de spécialistes triés sur le volet pour chaque dimension de votre transformation digitale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-sage-200/50 shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-sage-400/20 to-sage-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <div className="relative z-10">
                  <motion.div
                    className="text-sage-600 mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {area.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-sage-700 mb-3 group-hover:text-sage-800 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sage-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sage-400/30 to-transparent rounded-bl-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre différence */}
      <section className="py-24 px-4 bg-gradient-to-br from-sage-700 via-sage-600 to-sage-800 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='3.5' fill='%23ffffff' fill-opacity='0.6'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%23ffffff' fill-opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pourquoi nous ne sommes pas comme les autres
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-red-400 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Les agences traditionnelles</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Sites WordPress génériques et lents</li>
                    <li>• Thèmes préfabriqués sans personnalité</li>
                    <li>• Designs ennuyeux et datés</li>
                    <li>• Équipes rigides et processus lourds</li>
                    <li>• Technologies obsolètes</li>
                    <li>• Temps de chargement catastrophiques</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}
            >
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-green-400 mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Notre approche</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Code sur mesure, architectures modernes</li>
                    <li>• React, TypeScript, frameworks de pointe</li>
                    <li>• Designs qui marquent les esprits</li>
                    <li>• Équipe agile et experts spécialisés</li>
                    <li>• Stack technologique 2025</li>
                    <li>• Performance optimale garantie</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xl text-white/90 italic">
              "Les sites que nous créons ne ressemblent à aucun autre. Ils sont pensés pour éblouir vos visiteurs et convertir."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre modèle */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-taupe-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-sage-700 mb-6">
              Notre modèle d'agence augmentée
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              La flexibilité d'un réseau mondial, l'excellence d'une sélection rigoureuse
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Réseau global",
                description: "Nous mobilisons les meilleurs talents parmi des milliers de spécialistes vérifiés sur les plateformes premium (Malt, Upwork, réseaux privés)",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 3C7.58172 3 4 6.58172 4 11C4 15.4183 7.58172 19 12 19C16.4183 19 20 15.4183 20 11" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 12H21M12 3C13.5 5 14.5 8 14.5 12C14.5 16 13.5 19 12 21M12 3C10.5 5 9.5 8 9.5 12C9.5 16 10.5 19 12 21" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )
              },
              {
                title: "Sélection rigoureuse",
                description: "Chaque expert est audité sur ses compétences, son portfolio et ses références. Seuls les meilleurs intègrent vos projets",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Équipe dédiée",
                description: "Pour chaque projet, nous constituons une squad sur mesure avec les profils parfaitement adaptés à vos enjeux spécifiques",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4.35418C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C13.8053 11 12.7329 10.4762 12 9.64582M15 21H3V20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21ZM15 21H21V20C21 16.6863 18.3137 14 15 14C13.9071 14 12.8825 14.2922 12 14.8027M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-sage-200 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              >
                <motion.div
                  className="inline-block text-sage-600 mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-sage-700 mb-4">{item.title}</h3>
                <p className="text-sage-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 bg-gradient-to-r from-sage-100 to-taupe-100 rounded-2xl p-8 border border-sage-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-sage-700 mb-4 text-center">
              Résultat : une agilité sans compromis sur la qualité
            </h3>
            <p className="text-sage-600 text-center max-w-3xl mx-auto leading-relaxed">
              Nous pouvons scaler instantanément pour répondre à vos pics de charge, mobiliser des hyper-spécialistes pour des besoins pointus, ou composer une équipe permanente pour vos projets au long cours. Vous bénéficiez d'une flexibilité d'agence freelance avec la rigueur d'une grande structure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-br from-sage-600 via-sage-700 to-sage-900 text-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Prêt à franchir le cap ?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-12 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Parlons de votre transformation digitale
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block bg-white text-sage-700 px-12 py-4 rounded-full font-bold text-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Discutons de votre projet
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default About
