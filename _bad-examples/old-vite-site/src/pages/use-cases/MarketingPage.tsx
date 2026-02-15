import { motion } from 'framer-motion'
import WorkflowCard from '../../components/WorkflowCard'
import Icon from '../../components/Icon'
import WorkflowVisualization from '../../components/WorkflowVisualization'

function MarketingPage() {
  // Workflow visualization example for FILTRE INTELLIGENT
  const leadFilterVisualization = (
    <WorkflowVisualization
      title="FILTRE INTELLIGENT - Exemple de workflow"
      nodes={[
        { id: 'trigger', label: 'Formulaire soumis', iconName: 'pencil', color: 'blue', x: 120, y: 180 },
        { id: 'capture', label: 'Capture données', iconName: 'document', color: 'sage', x: 300, y: 180 },
        { id: 'ai', label: 'Analyse IA', iconName: 'robot', color: 'purple', x: 480, y: 180 },
        { id: 'scoring', label: 'Scoring (1-10)', iconName: 'chart', color: 'amber', x: 300, y: 280 },
        { id: 'branch', label: 'Qualification', iconName: 'search', color: 'blue', x: 480, y: 280 },
        { id: 'crm', label: 'CRM (score >7)', iconName: 'dashboard', color: 'sage', x: 300, y: 380 },
        { id: 'archive', label: 'Archive (<7)', iconName: 'document', color: 'rose', x: 120, y: 380 },
        { id: 'notify', label: 'Notification', iconName: 'bell', color: 'purple', x: 300, y: 480 },
      ]}
      connections={[
        { from: 'trigger', to: 'capture' },
        { from: 'capture', to: 'ai' },
        { from: 'ai', to: 'scoring' },
        { from: 'scoring', to: 'branch' },
        { from: 'branch', to: 'crm' },
        { from: 'branch', to: 'archive' },
        { from: 'crm', to: 'notify' },
        { from: 'archive', to: 'notify' },
      ]}
    />
  )

  const workflows = [
    {
      iconName: 'target',
      title: 'FILTRE INTELLIGENT',
      subtitle: 'Qualification automatique',
      problem: 'Votre équipe commerciale perd du temps avec des leads non-qualifiés ? Le filtre intelligent trie automatiquement vos prospects et ne transmet que les opportunités chaudes à votre CRM.',
      steps: [
        { text: 'Formulaire multi-étapes hébergé sur votre landing page', iconName: 'pencil' },
        { text: 'IA (ex: Claude API) analyse et score chaque lead (1-10)', iconName: 'robot' },
        { text: 'Webhook n8n → envoi vers votre CRM (Odoo, HubSpot, etc.) si score >7', iconName: 'lightning' },
        { text: 'Notification vers votre outil de communication (Slack, email, Teams...)', iconName: 'email' }
      ],
      devTime: 'Dev : 3 jours',
      color: 'sage' as const
    },
    {
      iconName: 'video',
      title: 'FORGE À PUBS',
      subtitle: 'Création contenu publicitaire',
      problem: 'Créer des dizaines de variantes publicitaires chaque semaine coûte cher et prend du temps ? La Forge génère automatiquement scripts, vidéos et voiceovers aux formats de votre choix.',
      steps: [
        { text: 'IA génère 10+ scripts publicitaires par prompt (Claude, GPT, etc.)', iconName: 'pencil' },
        { text: 'Génération vidéos avec modèle IA de votre choix (Runway, Synthesia, Kling...)', iconName: 'video' },
        { text: 'Voiceovers multilingues (ElevenLabs, Azure TTS, ou autre)', iconName: 'microphone' },
        { text: 'Export automatique aux formats Meta/TikTok/YouTube/LinkedIn', iconName: 'upload' }
      ],
      devTime: 'Dev : 3-4 jours',
      color: 'purple' as const
    },
    {
      iconName: 'brain',
      title: 'CERVEAU MÉDIA',
      subtitle: 'Optimisation budgets publicitaires',
      problem: 'Vos budgets publicitaires brûlent sur des audiences qui ne convertissent pas ? Le Cerveau analyse les performances 24/7 et ajuste automatiquement les dépenses.',
      steps: [
        { text: 'API publicitaire (ex: Meta Marketing API, Google Ads...) pull métriques quotidiennes', iconName: 'dashboard' },
        { text: 'Analyse performances (CTR, CPL, conversion, ROAS)', iconName: 'search' },
        { text: 'Pause automatique des ads sous-performantes (seuil personnalisé)', iconName: 'alert' },
        { text: 'Réallocation budgets vers top performers', iconName: 'money' },
        { text: 'Rapport hebdomadaire insights + recommandations', iconName: 'chart' }
      ],
      devTime: 'Dev : 5-6 jours',
      color: 'blue' as const
    },
    {
      iconName: 'link',
      title: 'PONT CRM',
      subtitle: 'Synchronisation CRM automatique',
      problem: 'Vos leads se perdent entre vos landing pages et votre CRM ? Le Pont synchronise instantanément chaque nouveau prospect dans votre CRM avec enrichissement automatique.',
      steps: [
        { text: 'Webhook formulaire → trigger n8n instantané', iconName: 'lightning' },
        { text: 'Création fiche client dans votre CRM (Odoo, HubSpot, Salesforce...)', iconName: 'users' },
        { text: 'Enrichissement données (validation téléphone, lookup entreprise)', iconName: 'search' },
        { text: 'Affectation automatique au commercial selon critères', iconName: 'target' },
        { text: 'Notification équipe + ouverture automatique de la fiche', iconName: 'bell' }
      ],
      devTime: 'Dev : 2-3 jours',
      color: 'amber' as const
    },
    {
      iconName: 'target',
      title: 'GARDIEN WARM-UP',
      subtitle: 'Montée en puissance comptes publicitaires',
      problem: 'Vos nouveaux comptes publicitaires se font bannir dès les premières campagnes ? Le Gardien applique une stratégie progressive pour warm-up vos comptes en toute sécurité.',
      steps: [
        { text: 'Workflow progressif J1-30 avec paliers automatiques', iconName: 'calendar' },
        { text: 'Objectifs évolutifs (Trafic → Engagement → Conversion)', iconName: 'target' },
        { text: 'Budgets adaptatifs (5€/j → 50€/j → 200€/j)', iconName: 'money' },
        { text: 'Monitoring santé compte sur votre plateforme (Meta, Google Ads...)', iconName: 'dashboard' },
        { text: 'Alertes si anomalie détectée (pause préventive)', iconName: 'alert' }
      ],
      devTime: 'Dev : 2 jours',
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
            <Icon name="chart" size={80} className="text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-4">
            Scénarios Marketing
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Automatisations n8n + Claude API pour transformer votre acquisition digitale.
            <br />
            <span className="text-sage-500 text-lg">Du lead au client, en pilote automatique.</span>
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
            <div className="text-4xl font-bold text-sage-600 mb-2">-70%</div>
            <div className="text-sage-600 text-sm">Temps de qualification leads</div>
          </div>
          <div className="bg-gradient-to-br from-amber-400/20 to-transparent backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">5x</div>
            <div className="text-amber-600 text-sm">Variantes publicitaires produites</div>
          </div>
          <div className="bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-blue-600 text-sm">Optimisation budgets en continu</div>
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
            {leadFilterVisualization}
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
            Prêt à automatiser votre marketing ?
          </h2>
          <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
            Réservez votre audit gratuit de 1h. On analyse vos process actuels et on vous montre exactement quels scénarios déployer en priorité.
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

export default MarketingPage
