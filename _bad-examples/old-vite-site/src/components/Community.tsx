import { motion } from 'framer-motion'

// ============================================
// DONNÉES DES PLATEFORMES
// ============================================
const mainPlatforms = [
  {
    name: 'Skool',
    description: 'Formations exclusives, cours en direct et échanges entre membres premium',
    members: '500+',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'amber',
    link: 'https://www.skool.com/@seviv-agency-9386'
  },
  {
    name: 'Telegram',
    description: 'Discussions en temps réel, entraide quotidienne et support communautaire',
    members: '1200+',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: 'blue',
    link: '#telegram'
  },
  {
    name: 'YouTube',
    description: 'Tutoriels vidéo, démonstrations et contenus exclusifs sur l\'IA et l\'automatisation',
    members: '1500+',
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    color: 'sage',
    link: 'https://www.youtube.com/channel/UCddaZ95XJ_noFOrGZXzxAow'
  }
]

const socialNetworks = [
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    link: '#linkedin'
  },
  {
    name: 'Reddit',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
    link: 'https://www.reddit.com/user/SevivesAgency/'
  },
  {
    name: 'Instagram',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    link: 'https://www.instagram.com/sevivesagency/'
  },
  {
    name: 'TikTok',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
    link: 'https://www.tiktok.com/@sevivesagency'
  },
  {
    name: 'X',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    link: 'https://x.com/sevivesagency'
  },
  {
    name: 'GitHub',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    link: 'https://github.com/Sevives'
  }
]

const colorClasses = {
  amber: {
    bg: 'from-amber-400/30 via-amber-300/20',
    border: 'border-amber-400/40',
    text: 'text-amber-600',
    icon: 'text-amber-500',
    hover: 'hover:bg-amber-500'
  },
  blue: {
    bg: 'from-blue-400/30 via-blue-300/20',
    border: 'border-blue-400/40',
    text: 'text-blue-600',
    icon: 'text-blue-500',
    hover: 'hover:bg-blue-500'
  },
  sage: {
    bg: 'from-sage-400/30 via-sage-300/20',
    border: 'border-sage-400/40',
    text: 'text-sage-600',
    icon: 'text-sage-500',
    hover: 'hover:bg-sage-500'
  }
}

// ============================================
// COMPOSANT PRINCIPAL
// ============================================
function Community() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-br from-sage-400 to-sage-500 p-8 rounded-3xl shadow-2xl">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-6">
            Rejoignez Notre Communauté
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Connectez-vous avec des milliers d'entrepreneurs, développeurs et passionnés d'automatisation IA.
            <br />
            <span className="font-semibold text-sage-700">Apprenez, partagez, et grandissez ensemble.</span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-sage-400/20 to-transparent backdrop-blur-md border border-sage-400/30 rounded-2xl p-6"
            >
              <div className="text-4xl font-bold text-sage-600 mb-2">2500+</div>
              <div className="text-sage-600 text-sm">Membres actifs</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-amber-400/20 to-transparent backdrop-blur-md border border-amber-400/30 rounded-2xl p-6"
            >
              <div className="text-4xl font-bold text-amber-600 mb-2">15+</div>
              <div className="text-amber-600 text-sm">Pays représentés</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-md border border-blue-400/30 rounded-2xl p-6"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-blue-600 text-sm">Support communautaire</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Plateformes principales */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${colorClasses[platform.color as keyof typeof colorClasses].bg} to-transparent backdrop-blur-lg border-2 ${colorClasses[platform.color as keyof typeof colorClasses].border} rounded-3xl p-8 group cursor-pointer relative overflow-hidden`}
            >
              {/* Decorative element */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${colorClasses[platform.color as keyof typeof colorClasses].bg} rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity`}></div>

              <div className="relative z-10">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className={`${colorClasses[platform.color as keyof typeof colorClasses].icon} mb-6`}
                >
                  {platform.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-sage-700 mb-2">{platform.name}</h3>
                <p className={`${colorClasses[platform.color as keyof typeof colorClasses].text} font-semibold mb-4`}>
                  {platform.members} membres
                </p>
                <p className="text-sage-600 mb-6 leading-relaxed">
                  {platform.description}
                </p>

                <div className={`inline-flex items-center gap-2 ${colorClasses[platform.color as keyof typeof colorClasses].text} font-semibold group-hover:gap-3 transition-all`}>
                  Rejoindre
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Autres réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-sage-400/20 via-sage-300/15 to-transparent backdrop-blur-lg border-2 border-sage-400/30 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-sage-700 mb-8 text-center">
            Suivez-nous sur les réseaux
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {socialNetworks.map((network, index) => (
              <motion.a
                key={network.name}
                href={network.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border border-sage-300/50 hover:border-sage-400 transition-all group"
              >
                <div className="text-sage-600 group-hover:text-sage-500 transition-colors">
                  {network.icon}
                </div>
                <span className="text-sage-700 font-semibold text-sm">{network.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-br from-blue-400/30 via-purple-300/20 to-sage-400/30 backdrop-blur-lg border-2 border-sage-400/40 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-sage-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-sage-700 mb-4">
              Prêt à Démarrer Votre Transformation ?
            </h2>
            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
              Réservez votre audit gratuit de 1h et découvrez comment automatiser votre business
            </p>
            <motion.a
              href="#audit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-sage-400 hover:bg-sage-500 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Réserver mon audit gratuit →
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Community
