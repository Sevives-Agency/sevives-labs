import type { ReactElement } from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import mealPlanner from '../../assets/meal-planner.avif'
import finances from '../../assets/finances.avif'
import treksPlanner from '../../assets/treks-planner.avif'

interface Service {
  title: string
  tagline: string
  description: string
  roi: string
  deliverables: string[]
  icon: ReactElement
  images?: string[]
}

const services: Service[] = [
  {
    title: 'Audit Processus',
    tagline: 'Identifier les gains avant d\'investir',
    description: 'Vous ne savez pas par où commencer? Notre audit cartographie vos processus métiers, quantifie le temps perdu sur tâches manuelles et chiffre le ROI potentiel de chaque automatisation.',
    roi: 'Clients typiques récupèrent 15-30h/semaine/employé après automatisation des quick wins identifiés.',
    deliverables: [
      'Cartographie complète processus actuels',
      'Calcul temps perdu par processus',
      'Roadmap priorisée par ROI',
      'Estimations budgétaires & délais',
      'Présentation C-level avec recommandations'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    images: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop'
    ]
  },
  {
    title: 'Formation Équipes',
    tagline: 'Autonomie = ROI à long terme',
    description: 'Former vos équipes aux outils no-code (n8n, Make) et IA est plus rentable que l\'externalisation permanente. Vous devenez autonomes sur les ajustements et nouvelles automatisations simples.',
    roi: 'Après formation n8n (2j), équipes créent en moyenne 3-5 nouveaux workflows/mois sans nous solliciter.',
    deliverables: [
      'Formation n8n/Make (débutant à avancé)',
      'Workshops IA: Claude API, GPT, prompting',
      'Exercices pratiques sur vos cas réels',
      'Documentation & templates personnalisés',
      'Support post-formation 3 mois inclus'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop'
    ]
  },
  {
    title: 'Automatisation Workflows',
    tagline: 'Éliminez les tâches répétitives',
    description: 'Intégration de vos outils (CRM, ERP, comptabilité, RH) via workflows n8n. Enrichissement IA pour qualification leads, extraction données, génération documents. Self-hosted ou cloud selon vos contraintes.',
    roi: 'Workflow moyen élimine 8-12h/semaine de saisie manuelle. Payback sous 2-4 mois.',
    deliverables: [
      'Workflows n8n sur-mesure',
      'Intégrations API multi-outils',
      'Enrichissement IA (Claude, GPT)',
      'Monitoring & alertes temps réel',
      'Documentation technique complète'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
    ]
  },
  {
    title: 'ERP Sur-Mesure',
    tagline: 'Nous adaptons à votre existant',
    description: 'Vous utilisez déjà Odoo, SAP, ERPNext ou un système legacy? Nous nous adaptons. Intégrations, modules custom en Python, connecteurs API. Si vous partez de zéro, nous recommandons Odoo open-source pour son rapport qualité/prix.',
    roi: 'Intégration ERP existant ou ERP neuf open-source = 40-60% moins cher que refonte complète. Ownership du code.',
    deliverables: [
      'Analyse environnement existant',
      'Développement modules custom (Python)',
      'Intégrations API multi-systèmes',
      'Migration données & formation équipes',
      'Hébergement cloud EU + maintenance'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    images: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop'
    ]
  },
  {
    title: 'Sites Web & Portails',
    tagline: 'WordPress ou React custom selon vos besoins',
    description: 'Petite entreprise avec besoins standards? WordPress optimisé avec connecteurs Odoo/CRM. Besoins complexes (portails clients, dashboards, workflows avancés)? React/Next.js sur-mesure ultra-rapide. Nous adaptons la stack à votre budget et ROI cible.',
    roi: 'WordPress = mise en ligne rapide, TCO maîtrisé. Next.js custom = 3-5x plus rapide, UX différenciante.',
    deliverables: [
      'WordPress optimisé OU React/Next.js custom',
      'Connecteurs ERP/CRM si nécessaire',
      'SEO technique & accessibilité',
      'Design responsive sur-mesure',
      'Hébergement cloud + maintenance'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    images: [mealPlanner, finances, treksPlanner]
  }
]


function DeveloppementDigital() {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-6">
            Développement Digital
          </h1>
          <p className="text-xl text-sage-600 max-w-4xl mx-auto leading-relaxed mb-4">
            De l'audit initial au déploiement: automatisations n8n, ERP Odoo sur-mesure et applications web modernes.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ROI mesurable. Payback rapide. Technologies pérennes.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <div className="bg-gradient-to-br from-sage-400/20 to-transparent backdrop-blur-md border border-sage-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-sage-600 mb-2">-65%</div>
            <div className="text-sage-600 text-sm font-medium">Temps moyen sur tâches manuelles</div>
          </div>
          <div className="bg-gradient-to-br from-amber-400/20 to-transparent backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">250+</div>
            <div className="text-amber-600 text-sm font-medium">Workflows automatisés déployés</div>
          </div>
          <div className="bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.1x</div>
            <div className="text-blue-600 text-sm font-medium">ROI moyen après 12 mois</div>
          </div>
        </motion.div>

        {/* Services with side-by-side layout */}
        <div className="space-y-20 mb-20">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1
            const ServiceImageCarousel = () => {
              const [currentImage, setCurrentImage] = useState(0)
              const [isHovered, setIsHovered] = useState(false)

              // Auto-scroll carousel
              useEffect(() => {
                if (!service.images || service.images.length <= 1 || isHovered) return

                const interval = setInterval(() => {
                  setCurrentImage((prev) => (prev + 1) % service.images!.length)
                }, 3000) // Change image every 3 seconds

                return () => clearInterval(interval)
              }, [isHovered, service.images])

              if (!service.images || service.images.length === 0) return null

              return (
                <motion.div
                  className="relative h-full"
                  initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="sticky top-32">
                    <motion.div
                      className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-sage-400/10 to-blue-400/10 shadow-xl group"
                      whileHover={{ scale: 1.03, rotateY: 2 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.img
                        key={currentImage}
                        src={service.images[currentImage]}
                        alt={service.title}
                        className="w-full h-[500px] object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />

                      {/* Effet de brillance au survol */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                      {service.images.length > 1 && (
                        <>
                          {/* Navigation dots */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {service.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImage(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  idx === currentImage
                                    ? 'bg-white w-8'
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                              />
                            ))}
                          </div>

                          {/* Arrow buttons */}
                          <motion.button
                            onClick={() => setCurrentImage((currentImage - 1 + service.images!.length) % service.images!.length)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                            whileHover={{ scale: 1.1, x: -3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-6 h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </motion.button>
                          <motion.button
                            onClick={() => setCurrentImage((currentImage + 1) % service.images!.length)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                            whileHover={{ scale: 1.1, x: 3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-6 h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.button>
                        </>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              )
            }

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Images - position alternée */}
                  {!isReversed && service.images && (
                    <div>
                      <ServiceImageCarousel />
                    </div>
                  )}

                  {/* Content */}
                  <motion.div
                    className={`bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-xl border border-sage-400/30 rounded-3xl p-8 shadow-xl ${isReversed ? 'md:order-first' : ''}`}
                    initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="inline-block bg-gradient-to-br from-sage-400 to-sage-600 p-6 rounded-2xl mb-4 text-white shadow-xl"
                      whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>

                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-amber-600 font-semibold text-sm uppercase tracking-wide mb-6">
                      {service.tagline}
                    </p>

                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h4 className="text-sm font-bold text-sage-600 uppercase tracking-wider mb-2">Description</h4>
                        <p className="text-gray-700 leading-relaxed">{service.description}</p>
                      </motion.div>

                      <motion.div
                        className="relative bg-gradient-to-br from-amber-50/80 to-amber-100/40 border border-amber-300/50 rounded-xl p-5 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(251, 191, 36, 0.3)" }}
                      >
                        <motion.div
                          className="absolute top-0 right-0 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl"
                          animate={{
                            x: [0, 20, 0],
                            y: [0, -10, 0],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <h4 className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-2 relative z-10">
                          ⚡ ROI Typique
                        </h4>
                        <p className="text-gray-800 font-medium leading-relaxed relative z-10">{service.roi}</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <h4 className="text-sm font-bold text-sage-600 uppercase tracking-wider mb-3">Livrables</h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((item, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: false }}
                              transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                              whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                              <svg className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Images à droite quand isReversed */}
                  {isReversed && service.images && (
                    <div>
                      <ServiceImageCarousel />
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Code Animation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sage-700 mb-4">Technologies & Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              De Python pour vos automatisations à React pour vos interfaces modernes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Python Code Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{
                scale: 1.03,
                rotateY: 3,
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 }
              }}
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl overflow-hidden group"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Stacked shadows */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl transform translate-y-2 translate-x-2 group-hover:translate-y-3 group-hover:translate-x-3 transition-transform duration-500" />
              <div className="absolute inset-0 -z-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl transform translate-y-4 translate-x-4 group-hover:translate-y-5 group-hover:translate-x-5 transition-transform duration-500" />

              {/* Animated gradient overlay */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-400 text-sm ml-2 font-mono">automation.py</span>
              </div>
              <div className="font-mono text-sm">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.3 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="text-purple-400">from</span>{' '}
                  <span className="text-amber-300">n8n_client</span>{' '}
                  <span className="text-purple-400">import</span>{' '}
                  <span className="text-amber-300">Workflow</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.6 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="text-purple-400">import</span>{' '}
                  <span className="text-amber-300">odoo</span>
                </motion.div>
                <br />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.9 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="text-blue-400">def</span>{' '}
                  <span className="text-green-400">process_invoice</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-orange-300">data</span>
                  <span className="text-gray-300">):</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.2 }}
                  className="overflow-hidden whitespace-nowrap ml-4"
                >
                  <span className="text-gray-400"># OCR + IA extraction</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="overflow-hidden whitespace-nowrap ml-4"
                >
                  <span className="text-orange-300">invoice</span>
                  <span className="text-gray-300"> = </span>
                  <span className="text-green-400">extract_fields</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-orange-300">data</span>
                  <span className="text-gray-300">)</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.8 }}
                  className="overflow-hidden whitespace-nowrap ml-4"
                >
                  <span className="text-orange-300">odoo</span>
                  <span className="text-gray-300">.</span>
                  <span className="text-green-400">create_invoice</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-orange-300">invoice</span>
                  <span className="text-gray-300">)</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 2.1 }}
                  className="overflow-hidden whitespace-nowrap ml-4"
                >
                  <span className="text-purple-400">return</span>{' '}
                  <span className="text-green-300">"Success"</span>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2.4 }}
                className="mt-4 pt-4 border-t border-gray-700 text-sage-300 text-xs font-mono"
              >
                ✓ Automatisation factures: -70% temps traitement
              </motion.div>
            </motion.div>

            {/* React/TypeScript Code Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{
                scale: 1.03,
                rotateY: -3,
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 }
              }}
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl overflow-hidden group"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Stacked shadows */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl transform translate-y-2 translate-x-2 group-hover:translate-y-3 group-hover:translate-x-3 transition-transform duration-500" />
              <div className="absolute inset-0 -z-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl transform translate-y-4 translate-x-4 group-hover:translate-y-5 group-hover:translate-x-5 transition-transform duration-500" />

              {/* Animated gradient overlay */}
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
                animate={{
                  x: [0, -50, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-400 text-sm ml-2 font-mono">Dashboard.tsx</span>
              </div>
              <div className="font-mono text-sm">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.3 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="text-purple-400">import</span>{' '}
                  <span className="text-gray-300">{'{'}</span>
                  <span className="text-amber-300"> useEffect </span>
                  <span className="text-gray-300">{'}'}</span>{' '}
                  <span className="text-purple-400">from</span>{' '}
                  <span className="text-green-300">'react'</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.6 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="text-purple-400">import</span>{' '}
                  <span className="text-gray-300">{'{'}</span>
                  <span className="text-amber-300"> fetchOrders </span>
                  <span className="text-gray-300">{'}'}</span>{' '}
                  <span className="text-purple-400">from</span>{' '}
                  <span className="text-green-300">'@/api'</span>
                </motion.div>
                <br />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.9 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="text-blue-400">export</span>{' '}
                  <span className="text-purple-400">function</span>{' '}
                  <span className="text-green-400">Dashboard</span>
                  <span className="text-gray-300">() {'{'}</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.2 }}
                  className="overflow-hidden whitespace-nowrap ml-4"
                >
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-gray-300">[</span>
                  <span className="text-orange-300">orders</span>
                  <span className="text-gray-300">, </span>
                  <span className="text-orange-300">setOrders</span>
                  <span className="text-gray-300">] = </span>
                  <span className="text-green-400">useState</span>
                  <span className="text-gray-300">([])</span>
                </motion.div>
                <br />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="overflow-hidden whitespace-nowrap ml-4"
                >
                  <span className="text-green-400">useEffect</span>
                  <span className="text-gray-300">(() =&gt; {'{'}</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.8 }}
                  className="overflow-hidden whitespace-nowrap ml-8"
                >
                  <span className="text-green-400">fetchOrders</span>
                  <span className="text-gray-300">().</span>
                  <span className="text-green-400">then</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-orange-300">setOrders</span>
                  <span className="text-gray-300">)</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 2.1 }}
                  className="overflow-hidden whitespace-nowrap ml-4"
                >
                  <span className="text-gray-300">{'}'}, [])</span>
                </motion.div>
                <br />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 2.4 }}
                  className="overflow-hidden whitespace-nowrap ml-4"
                >
                  <span className="text-purple-400">return</span>{' '}
                  <span className="text-blue-300">&lt;OrderList</span>{' '}
                  <span className="text-orange-300">data</span>
                  <span className="text-gray-300">=</span>
                  <span className="text-gray-300">{'{'}</span>
                  <span className="text-orange-300">orders</span>
                  <span className="text-gray-300">{'}'}</span>{' '}
                  <span className="text-blue-300">/&gt;</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 2.7 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="text-gray-300">{'}'}</span>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 3.0 }}
                className="mt-4 pt-4 border-t border-gray-700 text-sage-300 text-xs font-mono"
              >
                ✓ Portail B2B: +45% commandes en ligne
              </motion.div>
            </motion.div>
          </div>
        </motion.div>


        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-sage-400/30 via-sage-300/20 to-transparent backdrop-blur-lg border border-sage-400/40 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-sage-700 mb-4">
            Calculons ensemble votre ROI
          </h2>
          <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
            Audit gratuit 1h: on cartographie vos processus, quantifie les gains et vous donne une roadmap chiffrée.
          </p>
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-sage-400 hover:bg-sage-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Réserver mon audit gratuit →
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default DeveloppementDigital
