import type { ReactElement } from 'react'
import { motion } from 'framer-motion'

interface Partner {
  name: string
  tagline: string
  description: string
  approach: string
  features: string[]
  website: string
  icon: ReactElement
}

const partners: Partner[] = [
  {
    name: 'Aramis',
    tagline: 'IT Talent & Consulting',
    description: 'Trouver les bons talents IT est difficile et chronophage. Aramis spécialise dans le matching entre consultants IT hautement qualifiés et organisations en quête d\'expertise technique.',
    approach: 'Consultants experts en développement, data, cybersécurité, cloud, DevOps et gestion de projets agile. Solutions flexibles, partenariats long terme et engagement sur l\'excellence technique. Transparence et rapidité d\'exécution.',
    features: [
      'Consultants IT hautement qualifiés',
      'Dev, Data, Security, Cloud, DevOps',
      'Gestion de projets agile',
      'Partenariats long terme',
      'Solutions flexibles & rapides',
      'Excellence garantie'
    ],
    website: 'https://aramisconsult.be',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    name: 'LUG Management',
    tagline: 'Conseil financier multi-expertise',
    description: 'Gérer les aspects financiers et administratifs d\'une entreprise nécessite des compétences variées. LUG Management centralise 8 experts pour accompagner les entrepreneurs à chaque étape.',
    approach: 'Hub multidisciplinaire offrant optimisation fiscale, gestion patrimoniale, accompagnement administratif et partenariats avec experts comptables. Support personnalisé du lancement à la croissance confirmée de votre entreprise.',
    features: [
      'Optimisation fiscale PME/TPE',
      'Gestion patrimoniale & finances',
      'Accompagnement porteurs de projet',
      'Partenariat experts comptables',
      'Support entrepreneurs confirmés',
      'Formation & représentation'
    ],
    website: 'https://www.lug-management.be',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Flex IT Distribution',
    tagline: 'Économie circulaire IT',
    description: 'Le matériel informatique neuf coûte cher et a un impact environnemental majeur. Flex IT Distribution, leader européen de l\'IT circulaire, propose une alternative durable et économique.',
    approach: 'Matériel IT professionnel reconditionné et certifié, services de démonstration pour tester avant achat, solutions sur-mesure adaptées à vos besoins spécifiques. Réduction de -40% des coûts vs neuf tout en contribuant à l\'économie circulaire.',
    features: [
      'Matériel IT reconditionné certifié',
      'Solutions sur-mesure entreprises',
      'Services de démonstration pro',
      'Réduction -40% coûts vs neuf',
      'Engagement environnemental fort',
      'Garantie constructeur maintenue'
    ],
    website: 'https://flexitdistribution.com',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'DHL Express Resource',
    tagline: 'Logistique internationale',
    description: 'Une supply chain efficace est critique pour votre croissance. DHL Express Resource offre des solutions logistiques complètes avec la fiabilité mondiale DHL.',
    approach: 'Transport express international, fulfillment e-commerce automatisé, gestion de stocks et entreposage sécurisé. Tracking temps réel et couverture mondiale pour accompagner votre expansion.',
    features: [
      'Transport international express',
      'Fulfillment e-commerce',
      'Gestion stocks & entreposage',
      'Tracking temps réel',
      'Couverture mondiale',
      'Support dédié PME/TPE'
    ],
    website: 'https://express-resource.dhl.com/account-request-be-fr.html',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    )
  }
]

function SolutionsExternes() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6 bg-gradient-to-br from-sage-400 to-sage-600 p-8 rounded-3xl shadow-2xl"
          >
            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-6">
            Solutions Externes
          </h1>
          <p className="text-xl text-sage-600 max-w-4xl mx-auto leading-relaxed mb-4">
            Notre réseau de partenaires certifiés pour compléter votre écosystème.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En attendant que nos propres branches deviennent actives, nous vous mettons en relation avec les meilleurs experts du marché.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-sage-400/20 to-transparent backdrop-blur-md border border-sage-400/30 rounded-2xl p-6 text-center hover:border-sage-400/50 transition-all hover:shadow-lg"
          >
            <div className="text-4xl font-bold text-sage-600 mb-2">4</div>
            <div className="text-sage-600 text-sm font-medium">Partenaires certifiés</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-amber-400/20 to-transparent backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 text-center hover:border-amber-400/50 transition-all hover:shadow-lg"
          >
            <div className="text-4xl font-bold text-amber-600 mb-2">-40%</div>
            <div className="text-amber-600 text-sm font-medium">Coûts IT via reconditionné</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-fuchsia-400/20 to-transparent backdrop-blur-md border border-fuchsia-400/30 rounded-2xl p-6 text-center hover:border-fuchsia-400/50 transition-all hover:shadow-lg"
          >
            <div className="text-4xl font-bold text-fuchsia-600 mb-2">100%</div>
            <div className="text-fuchsia-600 text-sm font-medium">Partenaires pré-qualifiés</div>
          </motion.div>
        </motion.div>

        {/* Partners - Full Sections */}
        <div className="space-y-16 mb-20">
          {partners.map((partner, index) => {
            const isLugManagement = partner.name === 'LUG Management'
            const iconColor = isLugManagement ? 'from-blue-400 to-blue-600' : 'from-sage-400 to-sage-600'
            const buttonColor = isLugManagement ? 'bg-blue-400 hover:bg-blue-500' : 'bg-sage-400 hover:bg-sage-500'
            const headingColor = isLugManagement ? 'text-blue-600' : 'text-sage-600'
            const checkmarkColor = isLugManagement ? 'text-blue-500' : 'text-sage-500'

            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-lg border border-sage-400/20 rounded-3xl p-8 md:p-12 hover:border-sage-400/40 transition-all hover:shadow-xl"
              >
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Left: Icon + Title */}
                  <div>
                    <motion.div
                      className={`inline-block bg-gradient-to-br ${iconColor} p-6 rounded-2xl mb-4 text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      {partner.icon}
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-2xl font-bold text-gray-800 mb-2"
                    >
                      {partner.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-amber-600 font-semibold text-sm uppercase tracking-wide mb-6"
                    >
                      {partner.tagline}
                    </motion.p>
                    <motion.a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-block ${buttonColor} text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl`}
                    >
                      Visiter le site →
                    </motion.a>
                  </div>

                  {/* Center: Description + Approach */}
                  <div className="md:col-span-2 space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h4 className={`text-sm font-bold ${headingColor} uppercase tracking-wider mb-2`}>Le besoin</h4>
                      <p className="text-gray-700 leading-relaxed">{partner.description}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h4 className={`text-sm font-bold ${headingColor} uppercase tracking-wider mb-2`}>La solution</h4>
                      <p className="text-gray-700 leading-relaxed">{partner.approach}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h4 className={`text-sm font-bold ${headingColor} uppercase tracking-wider mb-3`}>Services inclus</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {partner.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <svg className={`w-5 h-5 ${checkmarkColor} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Client - Besoin d'un partenaire */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-sage-400/30 via-sage-300/20 to-transparent backdrop-blur-lg border border-sage-400/40 rounded-3xl p-12 text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-sage-700 mb-4">
            Besoin d'un partenaire de confiance?
          </h2>
          <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
            Nous vous mettons en relation avec le bon expert. Pré-qualifiés, certifiés et alignés avec vos besoins.
          </p>
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-sage-400 hover:bg-sage-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Discuter de mon besoin →
          </motion.a>
        </motion.div>

        {/* Devenir Partenaire Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-sage-700 mb-4"
            >
              Devenir Partenaire
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Vous êtes expert dans votre domaine? Rejoignez notre réseau de partenaires certifiés et développez votre activité avec SevivɘƧ.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expertise reconnue',
                description: 'Vous êtes expert dans votre domaine avec des références clients solides',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )
              },
              {
                title: 'Valeurs partagées',
                description: 'Vous valorisez la qualité, la transparence et les résultats mesurables pour vos clients',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: 'Croissance commune',
                description: 'Vous cherchez à développer votre activité via notre réseau de clients PME/TPE',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-sm border border-sage-400/20 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
              >
                <motion.div
                  className="inline-block bg-gradient-to-br from-sage-400 to-sage-600 p-4 rounded-xl mb-4 text-white"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-sage-400 hover:bg-sage-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Proposer mon expertise →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default SolutionsExternes
