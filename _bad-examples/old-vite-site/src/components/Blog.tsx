import { motion } from 'framer-motion'
import { useState } from 'react'
import type { ReactElement } from 'react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  icon: ReactElement
  color: 'sage' | 'amber' | 'blue' | 'purple' | 'rose'
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Gestion industrielle : quand l'IA s'intègre au cœur des processus métiers",
    excerpt: "Découvrez comment l'intelligence artificielle révolutionne les processus industriels et optimise la chaîne de production en temps réel.",
    date: '2026-02-05',
    category: 'IA & Industrie',
    readTime: '8 min',
    color: 'purple',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    id: '2',
    title: "Nouvelles sorties high-tech : ce qui est réellement exploitable aujourd'hui",
    excerpt: "Une analyse pragmatique des dernières technologies disponibles et leur potentiel d'application concrète dans votre entreprise.",
    date: '2026-02-03',
    category: 'Tech Trends',
    readTime: '6 min',
    color: 'rose',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14 1 0 2.5 0 5-2.47.27.773.5 1.604.5 2.47A7.5 7.5 0 0 1 12 23z"/>
      </svg>
    )
  },
  {
    id: '3',
    title: "Automatisation n8n : 5 cas d'usage rentables en PME",
    excerpt: "ROI prouvé : découvrez 5 scénarios d'automatisation n8n qui génèrent des économies mesurables dès le premier mois.",
    date: '2026-01-28',
    category: 'Automatisation',
    readTime: '10 min',
    color: 'sage',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: '4',
    title: "ERP vs Best-of-breed : comment choisir ?",
    excerpt: "Monolithe ou architecture modulaire ? Analyse comparative pour vous aider à prendre la bonne décision stratégique.",
    date: '2026-01-25',
    category: 'Architecture',
    readTime: '12 min',
    color: 'blue',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: '5',
    title: "SevivɘƧ lance son programme d'audit gratuit pour les PME",
    excerpt: "1h d'analyse gratuite de vos processus métiers pour identifier les gains d'automatisation potentiels. Slots limités.",
    date: '2026-01-20',
    category: 'Actualités',
    readTime: '4 min',
    color: 'amber',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: '6',
    title: "Comment diviser par 3 le temps de traitement des factures",
    excerpt: "Cas client réel : automatisation complète du workflow de facturation avec OCR, validation IA et intégration comptable.",
    date: '2026-01-15',
    category: 'Cas Client',
    readTime: '7 min',
    color: 'purple',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
]

const categories = ['Tous', 'IA & Industrie', 'Tech Trends', 'Automatisation', 'Architecture', 'Actualités', 'Cas Client']

const colorClasses = {
  sage: {
    bg: 'from-sage-400/30 via-sage-300/20 to-transparent',
    border: 'border-sage-400/40',
    text: 'text-sage-600',
    iconBg: 'bg-sage-400',
    hover: 'hover:border-sage-500/60'
  },
  amber: {
    bg: 'from-amber-400/30 via-amber-300/20 to-transparent',
    border: 'border-amber-400/40',
    text: 'text-amber-600',
    iconBg: 'bg-amber-400',
    hover: 'hover:border-amber-500/60'
  },
  blue: {
    bg: 'from-blue-400/30 via-blue-300/20 to-transparent',
    border: 'border-blue-400/40',
    text: 'text-blue-600',
    iconBg: 'bg-blue-400',
    hover: 'hover:border-blue-500/60'
  },
  purple: {
    bg: 'from-purple-400/30 via-purple-300/20 to-transparent',
    border: 'border-purple-400/40',
    text: 'text-purple-600',
    iconBg: 'bg-purple-400',
    hover: 'hover:border-purple-500/60'
  },
  rose: {
    bg: 'from-rose-400/30 via-rose-300/20 to-transparent',
    border: 'border-rose-400/40',
    text: 'text-rose-600',
    iconBg: 'bg-rose-400',
    hover: 'hover:border-rose-500/60'
  }
}

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const filteredPosts = selectedCategory === 'Tous'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

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
            className="inline-block mb-6 bg-gradient-to-br from-sage-400 to-sage-500 p-8 rounded-3xl shadow-2xl"
          >
            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-4">
            Blog & Insights
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Explorez nos articles sur l'IA, l'automatisation et la transformation digitale.
            <br />
            <span className="text-sage-500 text-lg">Cas clients, tutoriels et analyses approfondies.</span>
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-sage-400 text-white shadow-lg'
                  : 'bg-white/40 backdrop-blur-sm border border-sage-400/30 text-sage-600 hover:bg-white/60'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-gradient-to-br from-sage-400/20 to-transparent backdrop-blur-md border border-sage-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-sage-600 mb-2">{filteredPosts.length}</div>
            <div className="text-sage-600 text-sm">Articles disponibles</div>
          </div>
          <div className="bg-gradient-to-br from-amber-400/20 to-transparent backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">3x/sem</div>
            <div className="text-amber-600 text-sm">Nouveaux contenus</div>
          </div>
          <div className="bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-blue-600 text-sm">Cas réels & applicables</div>
          </div>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${colorClasses[post.color].bg} backdrop-blur-lg border ${colorClasses[post.color].border} ${colorClasses[post.color].hover} rounded-2xl p-6 transition-all cursor-pointer`}
            >
              {/* Icon */}
              <motion.div
                className={`inline-block ${colorClasses[post.color].iconBg} p-4 rounded-2xl mb-4 text-white shadow-lg`}
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {post.icon}
              </motion.div>

              {/* Category & Date */}
              <div className="flex items-center gap-3 mb-3">
                <span className={`${colorClasses[post.color].text} text-xs font-bold uppercase tracking-wider`}>
                  {post.category}
                </span>
                <span className="text-gray-500 text-xs">•</span>
                <span className="text-gray-600 text-xs">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-300/30">
                <span className="text-gray-500 text-xs">
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`${colorClasses[post.color].text} font-semibold text-sm flex items-center gap-2`}
                >
                  Lire
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-sage-400/30 via-sage-300/20 to-transparent backdrop-blur-lg border border-sage-400/40 rounded-3xl p-12 text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <svg className="w-16 h-16 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.div>
          <h2 className="text-3xl font-bold text-sage-700 mb-4">
            Restez informé
          </h2>
          <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
            Recevez nos derniers articles, cas clients et analyses directement dans votre boîte mail. 1 email par semaine, zéro spam.
          </p>
          <motion.a
            href="#newsletter"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-sage-400 hover:bg-sage-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            S'abonner à la newsletter →
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
