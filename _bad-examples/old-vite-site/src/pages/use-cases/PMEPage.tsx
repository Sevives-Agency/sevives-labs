import { motion } from 'framer-motion'
import WorkflowCard from '../../components/WorkflowCard'
import Icon from '../../components/Icon'
import WorkflowVisualization from '../../components/WorkflowVisualization'

function PMEPage() {
  // Workflow visualization example for AGENT EMAIL PRO
  const emailAgentVisualization = (
    <WorkflowVisualization
      title="AGENT EMAIL PRO - Exemple de workflow"
      nodes={[
        { id: 'trigger', label: 'Nouveau email', iconName: 'email', color: 'blue', x: 120, y: 180 },
        { id: 'read', label: 'Récupération', iconName: 'document', color: 'sage', x: 300, y: 180 },
        { id: 'ai', label: 'Analyse IA', iconName: 'robot', color: 'purple', x: 480, y: 180 },
        { id: 'classify', label: 'Classification', iconName: 'search', color: 'amber', x: 120, y: 280 },
        { id: 'draft', label: 'Génération', iconName: 'pencil', color: 'blue', x: 300, y: 280 },
        { id: 'validate', label: 'Validation', iconName: 'checkmark', color: 'sage', x: 480, y: 280 },
        { id: 'spam', label: 'Spam/Urgent', iconName: 'alert', color: 'rose', x: 120, y: 380 },
        { id: 'send', label: 'Envoi email', iconName: 'upload', color: 'purple', x: 300, y: 380 },
      ]}
      connections={[
        { from: 'trigger', to: 'read' },
        { from: 'read', to: 'ai' },
        { from: 'ai', to: 'classify' },
        { from: 'classify', to: 'draft' },
        { from: 'draft', to: 'validate' },
        { from: 'validate', to: 'send' },
        { from: 'classify', to: 'spam' },
        { from: 'spam', to: 'send' },
      ]}
    />
  )

  const workflows = [
    {
      iconName: 'email',
      title: 'AGENT EMAIL PRO',
      subtitle: 'Tri et réponse automatiques',
      problem: 'Votre boîte mail déborde et vous passez 2h/jour à trier et répondre ? L\'Agent Email classe automatiquement vos messages et rédige des réponses intelligentes.',
      steps: [
        { text: 'Connexion votre messagerie (IMAP, Gmail API, Outlook...) pour monitoring continu', iconName: 'email' },
        { text: 'IA de votre choix (Claude, GPT, Gemini...) analyse contexte et urgence', iconName: 'robot' },
        { text: 'Classification auto (client, prospect, fournisseur, spam)', iconName: 'document' },
        { text: 'Génération réponses adaptées (ton, contexte historique)', iconName: 'pencil' },
        { text: 'Validation humaine 1-clic avant envoi', iconName: 'checkmark' }
      ],
      devTime: 'Dev : 4 jours',
      color: 'sage' as const
    },
    {
      iconName: 'dashboard',
      title: 'TABLEAU DE BORD VIVANT',
      subtitle: 'KPIs temps réel',
      problem: 'Vous pilotez votre entreprise avec des tableurs Excel obsolètes ? Le Tableau de Bord centralise vos métriques clés en temps réel depuis tous vos outils.',
      steps: [
        { text: 'Connexion vos outils (ex: Stripe, Odoo, Google Analytics, HubSpot...)', iconName: 'link' },
        { text: 'Agrégation données (CA, tréso, leads, tickets support)', iconName: 'chart' },
        { text: 'Dashboard sur votre plateforme (n8n, Notion, Google Sheets...)', iconName: 'dashboard' },
        { text: 'Alertes automatiques si seuils franchis', iconName: 'alert' },
        { text: 'Rapport hebdo auto-généré et envoyé par email', iconName: 'email' }
      ],
      devTime: 'Dev : 5 jours',
      color: 'blue' as const
    },
    {
      iconName: 'robot',
      title: 'ASSISTANT DEVIS',
      subtitle: 'Génération automatique',
      problem: 'Créer des devis personnalisés prend 30-45 minutes par prospect ? L\'Assistant génère des devis professionnels en 2 minutes à partir d\'un simple formulaire.',
      steps: [
        { text: 'Formulaire web capture besoins client (quantités, options)', iconName: 'pencil' },
        { text: 'IA (ex: Claude, GPT...) calcule prix selon votre grille tarifaire', iconName: 'money' },
        { text: 'Génération PDF personnalisé (logo, mentions légales)', iconName: 'document' },
        { text: 'Envoi automatique par email + suivi ouverture', iconName: 'email' },
        { text: 'Relance auto J+3 si pas de réponse', iconName: 'bell' }
      ],
      devTime: 'Dev : 3 jours',
      color: 'amber' as const
    },
    {
      iconName: 'chat',
      title: 'CHATBOT SUPPORT',
      subtitle: 'SAV automatisé 24/7',
      problem: 'Vos clients attendent des heures pour une réponse SAV ? Le Chatbot répond instantanément aux questions courantes et escalade les cas complexes.',
      steps: [
        { text: 'Widget chat intégré sur votre site/app', iconName: 'chat' },
        { text: 'IA (ex: Claude, GPT, Gemini...) entraînée sur votre FAQ + docs produits', iconName: 'book' },
        { text: 'Réponses contextuelles + liens vers ressources', iconName: 'link' },
        { text: 'Escalade humain si détection frustration/complexité', iconName: 'alert' },
        { text: 'Création ticket support auto si non-résolu', iconName: 'ticket' }
      ],
      devTime: 'Dev : 4-5 jours',
      color: 'purple' as const
    },
    {
      iconName: 'calendar',
      title: 'AGENDA INTELLIGENT',
      subtitle: 'Prise RDV automatique',
      problem: 'Les allers-retours email pour caler un rendez-vous vous font perdre du temps ? L\'Agenda synchronise vos dispos et permet la réservation en 1 clic.',
      steps: [
        { text: 'Connexion votre calendrier (Google Calendar, Outlook, Apple...)', iconName: 'calendar' },
        { text: 'Page booking personnalisée (durées, types RDV)', iconName: 'link' },
        { text: 'Détection créneaux libres en temps réel', iconName: 'calendar' },
        { text: 'Confirmation auto + ajout événement calendrier', iconName: 'checkmark' },
        { text: 'Rappel email/SMS J-1 + lien visio auto-généré (Zoom, Teams...)', iconName: 'email' }
      ],
      devTime: 'Dev : 2-3 jours',
      color: 'rose' as const
    }
  ]

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
            <Icon name="dashboard" size={80} className="text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-4">
            Scénarios PME & TPE
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Automatisations n8n pour PME qui veulent se concentrer sur leur cœur de métier.
            <br />
            <span className="text-sage-500 text-lg">Gagnez 15h/semaine sur les tâches répétitives.</span>
          </p>
        </motion.div>

        {/* Stats rapides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-gradient-to-br from-sage-400/20 to-transparent backdrop-blur-md border border-sage-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-sage-600 mb-2">15h</div>
            <div className="text-sage-600 text-sm">Économisées par semaine</div>
          </div>
          <div className="bg-gradient-to-br from-amber-400/20 to-transparent backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">-60%</div>
            <div className="text-amber-600 text-sm">Temps de réponse client</div>
          </div>
          <div className="bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">0€</div>
            <div className="text-blue-600 text-sm">Embauche d'assistant nécessaire</div>
          </div>
        </motion.div>

        {/* Workflows grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* First workflow card */}
          <WorkflowCard {...workflows[0]} />

          {/* Visualization for first workflow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {emailAgentVisualization}
          </motion.div>

          {/* Rest of the workflow cards */}
          {workflows.slice(1).map((workflow, index) => (
            <WorkflowCard key={index + 1} {...workflow} />
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-sage-400/30 via-sage-300/20 to-transparent backdrop-blur-lg border border-sage-400/40 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-sage-700 mb-4">
            Prêt à libérer du temps pour votre business ?
          </h2>
          <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
            On audite gratuitement vos process pendant 1h et on identifie les 3 automatisations prioritaires pour votre PME.
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

export default PMEPage
