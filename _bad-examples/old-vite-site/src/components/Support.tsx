import { motion } from 'framer-motion'
import { useState } from 'react'
import type { ReactElement } from 'react'
import { useChatbot } from '../contexts/ChatbotContext'

interface FAQItem {
  question: string
  answer: string
  category: 'general' | 'technique' | 'tarifs' | 'onboarding'
}

interface Category {
  id: string
  label: string
  icon: ReactElement
}

const faqData: FAQItem[] = [
  // Général
  {
    question: 'Qu\'est-ce que SevivɘƧ?',
    answer: 'SevivɘƧ est une agence spécialisée dans l\'automatisation des processus métiers, le développement d\'ERP sur-mesure et la transformation digitale. Nous aidons les PME et TPE à gagner en efficacité grâce à l\'IA et aux workflows automatisés.',
    category: 'general'
  },
  {
    question: 'Dans quels secteurs intervenez-vous?',
    answer: 'Nous intervenons dans tous les secteurs: comptabilité/finance, RH/recrutement, logistique, marketing digital, IT services. Notre approche est agnostique: nous adaptons nos solutions à vos processus métiers spécifiques.',
    category: 'general'
  },
  {
    question: 'Travaillez-vous avec des grandes entreprises?',
    answer: 'Notre cœur de cible est PME/TPE (5-200 employés) car c\'est là que l\'impact de l\'automatisation est le plus rapide. Pour les grandes structures, nous proposons des POC sur un département pilote avant scaling.',
    category: 'general'
  },

  // Tarifs
  {
    question: 'Quels sont vos tarifs?',
    answer: 'Nos tarifs varient selon la complexité du projet. En moyenne: audit 1h gratuit, automatisation simple 1500-3000€, ERP customisation à partir de 8000€, formations 800€/jour. Consultez notre page Tarifs pour les détails.',
    category: 'tarifs'
  },
  {
    question: 'L\'audit gratuit d\'1h est-il vraiment gratuit?',
    answer: 'Oui, 100% gratuit sans engagement. On analyse vos processus actuels, identifie les quick wins d\'automatisation et vous donne une roadmap chiffrée. Seul pré-requis: être décideur dans votre entreprise.',
    category: 'tarifs'
  },
  {
    question: 'Proposez-vous des abonnements mensuels?',
    answer: 'Oui, pour la maintenance de workflows n8n ou ERP: formule Support Standard 300€/mois (8h/mois, délai 48h) ou Premium 800€/mois (20h/mois, délai 24h). Sans engagement de durée.',
    category: 'tarifs'
  },

  // Technique
  {
    question: 'Quelles technologies utilisez-vous?',
    answer: 'Automatisation: n8n, Make, Zapier. Backend: Node.js, Python. Frontend: React, Next.js, Vue.js. ERP: Odoo, ERPNext. IA: Claude API, OpenAI GPT, Anthropic. Cloud: Vercel, AWS, DigitalOcean.',
    category: 'technique'
  },
  {
    question: 'Combien de temps pour automatiser un processus?',
    answer: 'Workflow simple (ex: lead CRM): 1-3 jours. Workflow complexe avec IA (ex: traitement factures OCR + validation): 5-10 jours. ERP customisation: 3-6 mois selon modules. On vous donne une estimation précise après l\'audit.',
    category: 'technique'
  },
  {
    question: 'Mes données sont-elles sécurisées?',
    answer: 'Oui. Workflows hébergés sur vos serveurs ou cloud EU (RGPD compliant). Nous signons des NDA systématiquement. Accès aux données uniquement pendant la phase de dev/debug puis révoqués.',
    category: 'technique'
  },
  {
    question: 'Puis-je modifier les workflows après livraison?',
    answer: 'Oui, c\'est l\'intérêt de n8n/Make: interface visuelle no-code. On vous forme (2-4h) pour que vous soyez autonomes sur les ajustements simples. Pour les modifications complexes, on reste disponibles en support.',
    category: 'technique'
  },

  // Onboarding
  {
    question: 'Comment démarrer avec vous?',
    answer: '1) Réservez l\'audit gratuit 1h. 2) On analyse vos processus et vous présente la roadmap. 3) Si vous validez, on démarre sous 1 semaine. 4) Livraison + formation. 5) Support post-livraison inclus 1 mois.',
    category: 'onboarding'
  },
  {
    question: 'Proposez-vous des formations?',
    answer: 'Oui, formations sur-mesure: n8n (débutant à expert), IA & LLMs, no-code tools. Format: 1-2 jours en présentiel/distanciel, avec exercices pratiques sur vos cas réels. 800€/jour + support 3 mois inclus.',
    category: 'onboarding'
  },
  {
    question: 'Que se passe-t-il après la livraison?',
    answer: 'Support post-livraison 1 mois inclus (bug fixes, ajustements, questions). Ensuite vous êtes autonomes ou vous pouvez souscrire à un forfait maintenance mensuel. Documentation complète fournie.',
    category: 'onboarding'
  }
]

const categories: Category[] = [
  {
    id: 'all',
    label: 'Toutes',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 'general',
    label: 'Général',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 'tarifs',
    label: 'Tarifs',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'technique',
    label: 'Technique',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 'onboarding',
    label: 'Démarrage',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
]

function Support() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { openChatbot } = useChatbot()

  const filteredFAQ = selectedCategory === 'all'
    ? faqData
    : faqData.filter(item => item.category === selectedCategory)

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
            className="inline-block mb-6 bg-gradient-to-br from-blue-400 to-blue-500 p-8 rounded-3xl shadow-2xl"
          >
            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-4">
            Support & FAQ
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Trouvez rapidement des réponses à vos questions ou discutez avec notre assistant IA.
          </p>
        </motion.div>

        {/* Stats rapides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">&lt;30s</div>
            <div className="text-blue-600 text-sm">Temps de réponse chatbot</div>
          </div>
          <div className="bg-gradient-to-br from-sage-400/20 to-transparent backdrop-blur-md border border-sage-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-sage-600 mb-2">24/7</div>
            <div className="text-sage-600 text-sm">Disponibilité assistant IA</div>
          </div>
          <div className="bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-blue-600 text-sm">Questions résolues/mois</div>
          </div>
        </motion.div>

        {/* Chatbot CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-sage-400/30 via-sage-300/20 to-transparent backdrop-blur-lg border border-sage-400/40 rounded-3xl p-8 mb-16 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <svg className="w-16 h-16 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-sage-700 mb-3">
            Besoin d'une réponse rapide?
          </h2>
          <p className="text-sage-600 mb-6 max-w-2xl mx-auto">
            Notre assistant IA répond instantanément à toutes vos questions sur nos services, technologies et processus.
          </p>
          <motion.button
            onClick={() => openChatbot({ type: 'faq' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-sage-400 hover:bg-sage-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Discuter avec l'assistant IA →
          </motion.button>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-sage-400 text-white shadow-lg'
                  : 'bg-white/40 backdrop-blur-sm border border-sage-400/30 text-sage-700 hover:bg-white/60'
              }`}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {filteredFAQ.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/60 backdrop-blur-sm border border-sage-400/20 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-sage-50/50 transition-colors"
              >
                <span className="text-lg font-semibold text-sage-800 pr-4">
                  {item.question}
                </span>
                <motion.svg
                  className="w-6 h-6 text-sage-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-2 text-sage-700 leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-400/30 via-blue-300/20 to-transparent backdrop-blur-lg border border-blue-400/40 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-sage-700 mb-4">
            Vous n'avez pas trouvé votre réponse?
          </h2>
          <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe directement ou réservez un appel de 15 minutes pour discuter de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => openChatbot({ type: 'contact' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-400 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Nous contacter
            </motion.button>
            <motion.button
              onClick={() => openChatbot({ type: 'booking' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white/40 backdrop-blur-sm border-2 border-blue-400 text-blue-600 hover:bg-white/60 font-bold px-8 py-4 rounded-xl transition-all"
            >
              Réserver un appel
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Support
