import type { ReactElement } from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Service {
  title: string
  tagline: string
  description: string
  approach: string
  deliverables: string[]
  icon: ReactElement
  images?: string[]
}

const services: Service[] = [
  {
    title: 'Production Vidéo',
    tagline: 'L\'authenticité bat l\'algorithme',
    description: 'Les IA génèrent du contenu générique que ni les algorithmes ni vos clients n\'apprécient. Nous créons de vraies vidéos, avec une vraie équipe, qui servent ensuite de base qualitative pour vos automatisations IA.',
    approach: 'Notre équipe dédiée produit du contenu authentique: interviews, cas clients, démonstrations produit. Ce contenu premium alimente ensuite vos workflows d\'IA pour décliner formats et langues tout en conservant votre ADN.',
    deliverables: [
      'Vidéos corporate & institutionnelles',
      'Cas clients & témoignages authentiques',
      'Contenus déclinables pour automatisation',
      'Scripts & storyboards professionnels',
      'Post-production & color grading'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    images: [
      'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop'
    ]
  },
  {
    title: 'Community Management',
    tagline: 'Automatisation + expertise humaine',
    description: 'Nous automatisons la planification et le reporting, mais confions l\'engagement et la stratégie à de vrais experts qui comprennent votre audience.',
    approach: 'Workflows n8n pour la publication automatisée et les analytics. Community managers dédiés pour la modération, les réponses aux clients et l\'ajustement stratégique en temps réel.',
    deliverables: [
      'Stratégie de contenu sur-mesure',
      'Publication automatisée multi-plateformes',
      'Modération & engagement par experts',
      'Reporting analytique mensuel',
      'Veille concurrentielle & tendances'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
    ]
  },
  {
    title: 'Streaming Professionnel',
    tagline: 'Studios & matériel haut de gamme',
    description: 'Nous possédons le matériel et les studios pour accueillir vos podcasts, capsules vidéo et conférences inter-entreprises. Ou nous venons chez vous.',
    approach: 'Studios équipés à Bruxelles pour vos enregistrements. Équipe mobile avec matériel multi-caméras 4K pour vos événements on-site. Régie technique complète + diffusion multi-plateformes.',
    deliverables: [
      'Podcasts & capsules vidéo en studio',
      'Conférences inter-pays en direct',
      'Setup mobile multi-caméras 4K',
      'Diffusion simultanée (YouTube, LinkedIn, etc.)',
      'Post-production & montage des replays'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    images: [
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop'
    ]
  }
]

const realisations = [
  {
    title: 'Campagne Vidéo B2B',
    client: 'ERP SaaS',
    type: 'Série de 6 vidéos cas clients',
    result: '+240% engagement LinkedIn',
    thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=450&fit=crop'
  },
  {
    title: 'Podcast Corporate',
    client: 'Cabinet Conseil',
    type: '12 épisodes + automatisation clips',
    result: '15K écoutes/mois',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=450&fit=crop'
  },
  {
    title: 'Streaming Conférence',
    client: 'Groupe International',
    type: 'Event 3 pays simultanés',
    result: '2500 participants live',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop'
  },
  {
    title: 'Community Management',
    client: 'Fintech',
    type: 'Gestion complète LinkedIn/X',
    result: '+180% reach organique en 6 mois',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop'
  }
]

function MarketingDigital() {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-6">
            Marketing Digital
          </h1>
          <p className="text-xl text-sage-600 max-w-4xl mx-auto leading-relaxed mb-4">
            Contenu authentique créé par de vrais professionnels, automatisations intelligentes pour la diffusion.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Les IA produisent du générique. Nous produisons du contenu premium qui sert ensuite de base à vos automatisations.
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
            <div className="text-4xl font-bold text-sage-600 mb-2">+50</div>
            <div className="text-sage-600 text-sm font-medium">Projets vidéo B2B livrés</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-amber-400/20 to-transparent backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 text-center hover:border-amber-400/50 transition-all hover:shadow-lg"
          >
            <div className="text-4xl font-bold text-amber-600 mb-2">12M+</div>
            <div className="text-amber-600 text-sm font-medium">Impressions organiques/an</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 text-center hover:border-blue-400/50 transition-all hover:shadow-lg"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">3.2x</div>
            <div className="text-blue-600 text-sm font-medium">ROI moyen mesuré</div>
          </motion.div>
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
                        <h4 className="text-sm font-bold text-sage-600 uppercase tracking-wider mb-2">Le problème</h4>
                        <p className="text-gray-700 leading-relaxed">{service.description}</p>
                      </motion.div>

                      <motion.div
                        className="relative bg-gradient-to-br from-blue-50/80 to-blue-100/40 border border-blue-300/50 rounded-xl p-5 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                      >
                        <motion.div
                          className="absolute top-0 right-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"
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
                        <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-2 relative z-10">
                          💡 Notre approche
                        </h4>
                        <p className="text-gray-800 font-medium leading-relaxed relative z-10">{service.approach}</p>
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

        {/* Réalisations */}
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
              Nos Réalisations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Découvrez quelques projets récents livrés pour nos clients B2B.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {realisations.map((real, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="group bg-white/60 backdrop-blur-sm border border-sage-400/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-sage-400/40 transition-all"
              >
                {/* Image placeholder */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sage-400/20 to-taupe-300/20">
                  <motion.img
                    src={real.thumbnail}
                    alt={real.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full shadow-lg">
                      {real.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {real.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">
                    Client: {real.client}
                  </p>
                  <div className="flex items-center gap-2 text-sage-600 font-semibold text-sm bg-sage-50/50 rounded-lg p-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {real.result}
                  </div>
                </div>
              </motion.div>
            ))}
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
            Discutons de votre stratégie marketing
          </h2>
          <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
            Audit gratuit 1h: on analyse votre contenu actuel et vous montre comment combiner authenticité humaine et automatisations IA.
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

export default MarketingDigital
