import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Icônes SVG pour les news
const NewsIcons = {
  Robot: () => (
    <svg className="w-6 h-6 2xl:w-7 2xl:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  Fire: () => (
    <svg className="w-6 h-6 2xl:w-7 2xl:h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14 1 0 2.5 0 5-2.47.27.773.5 1.604.5 2.47A7.5 7.5 0 0 1 12 23z"/>
    </svg>
  ),
  Chart: () => (
    <svg className="w-6 h-6 2xl:w-7 2xl:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Lightbulb: () => (
    <svg className="w-6 h-6 2xl:w-7 2xl:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Rocket: () => (
    <svg className="w-6 h-6 2xl:w-7 2xl:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Bolt: () => (
    <svg className="w-6 h-6 2xl:w-7 2xl:h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 112 0v6a1 1 0 11-2 0z"/>
    </svg>
  ),
}

const newsData = [
  { icon: 'Robot', title: "Gestion industrielle : quand l'IA s'intègre au cœur des processus métiers" },
  { icon: 'Fire', title: "Nouvelles sorties high-tech : ce qui est réellement exploitable aujourd'hui" },
  { icon: 'Chart', title: "Automatisation n8n : 5 cas d'usage rentables en PME" },
  { icon: 'Lightbulb', title: "ERP vs Best-of-breed : comment choisir ?" },
  { icon: 'Rocket', title: "SevivɘƧ lance son programme d'audit gratuit pour les PME" },
  { icon: 'Bolt', title: "Comment diviser par 3 le temps de traitement des factures" },
]

function Marquee() {
  const duplicatedNews = [...newsData, ...newsData]
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-taupe-200 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-taupe-200 to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee items-center">
        {duplicatedNews.map((news, index) => {
          const IconComponent = NewsIcons[news.icon as keyof typeof NewsIcons]
          return (
            <a key={index} href="#" className="flex-shrink-0 mx-4 2xl:mx-6 px-6 py-4 2xl:px-8 2xl:py-6 bg-white/20 backdrop-blur-sm border border-sage-400/20 rounded-xl hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-pointer min-w-max flex items-center gap-3">
              <span className="text-sage-500 flex-shrink-0">
                <IconComponent />
              </span>
              <span className="text-sage-800 2xl:text-lg font-semibold">{news.title}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

function News() {
  return (
    <section className="py-20 2xl:py-28 bg-taupe-200/50 backdrop-blur-sm">
      <div className="max-w-6xl 2xl:max-w-[85%] mx-auto px-8 2xl:px-16">
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, margin: '-50px' }} className="text-center mb-12 2xl:mb-16">
          <span className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-widest">Actualités</span>
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-sage-700 mt-2 mb-4">Ne ratez pas nos dernières news</h2>
          <p className="text-sage-700 2xl:text-xl max-w-2xl 2xl:max-w-[60%] mx-auto font-medium">Explorez les derniers articles autour de l'IA, de la digitalisation 360° et des architectures d'entreprise nouvelle génération.</p>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: false, margin: '-50px' }} className="mb-12">
        <Marquee />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false, margin: '-50px' }} className="text-center">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-semibold uppercase tracking-wide transition-colors duration-300">
          Tous les articles
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}

export default News