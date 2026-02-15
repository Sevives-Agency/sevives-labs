import { motion } from 'framer-motion'
import WorkflowCard from '../../components/WorkflowCard'
import Icon from '../../components/Icon'
import WorkflowVisualization from '../../components/WorkflowVisualization'

function ITServicesPage() {
  // Workflow visualization example for TRIEUR TICKETS
  const ticketSorterVisualization = (
    <WorkflowVisualization
      title="TRIEUR TICKETS - Exemple de workflow"
      nodes={[
        { id: 'trigger', label: 'Nouveau ticket', iconName: 'ticket', color: 'blue', x: 120, y: 180 },
        { id: 'fetch', label: 'Récupération', iconName: 'document', color: 'sage', x: 300, y: 180 },
        { id: 'ai', label: 'Analyse IA', iconName: 'robot', color: 'purple', x: 480, y: 180 },
        { id: 'categorize', label: 'Catégorisation', iconName: 'search', color: 'amber', x: 120, y: 280 },
        { id: 'branch', label: 'Routage', iconName: 'dashboard', color: 'blue', x: 300, y: 280 },
        { id: 'track', label: 'Suivi', iconName: 'monitor', color: 'amber', x: 480, y: 280 },
        { id: 'auto', label: 'Réponse auto', iconName: 'lightning', color: 'sage', x: 120, y: 380 },
        { id: 'assign', label: 'Affectation', iconName: 'users', color: 'purple', x: 300, y: 380 },
        { id: 'escalate', label: 'Escalade', iconName: 'alert', color: 'rose', x: 480, y: 380 },
      ]}
      connections={[
        { from: 'trigger', to: 'fetch' },
        { from: 'fetch', to: 'ai' },
        { from: 'ai', to: 'categorize' },
        { from: 'categorize', to: 'branch' },
        { from: 'branch', to: 'auto' },
        { from: 'branch', to: 'assign' },
        { from: 'branch', to: 'escalate' },
        { from: 'auto', to: 'track' },
        { from: 'assign', to: 'track' },
        { from: 'escalate', to: 'track' },
      ]}
    />
  )

  const workflows = [
    {
      iconName: 'ticket',
      title: 'TRIEUR TICKETS',
      subtitle: 'Support automatisé',
      problem: 'Votre équipe support croule sous les tickets et perd du temps sur des demandes répétitives ? Le Trieur catégorise et résout automatiquement les tickets simples.',
      steps: [
        { text: 'Récupération tickets depuis votre helpdesk (Zendesk, Freshdesk, Jira...)', iconName: 'upload' },
        { text: 'IA (ex: Claude, GPT...) analyse demande + détection intent', iconName: 'robot' },
        { text: 'Résolution automatique si FAQ/doc connue (70% tickets)', iconName: 'lightning' },
        { text: 'Routage intelligent vers bon technicien (priorité, spécialité)', iconName: 'target' },
        { text: 'Escalade urgente si mots-clés critiques détectés', iconName: 'alert' }
      ],
      devTime: 'Dev : 4-5 jours',
      color: 'sage' as const
    },
    {
      iconName: 'search',
      title: 'VIGILE INFRA',
      subtitle: 'Monitoring proactif',
      problem: 'Vous découvrez les pannes quand les clients se plaignent ? Le Vigile monitore votre infra 24/7 et vous alerte AVANT l\'incident.',
      steps: [
        { text: 'Connexion vos outils monitoring (Datadog, New Relic, Prometheus, Grafana...)', iconName: 'link' },
        { text: 'Surveillance métriques (CPU, RAM, latence, erreurs)', iconName: 'dashboard' },
        { text: 'Détection anomalies + prédiction pannes imminentes', iconName: 'chart' },
        { text: 'Alerte équipe via votre outil (Slack, Teams, PagerDuty, SMS...)', iconName: 'email' },
        { text: 'Création automatique incident + runbook suggestions', iconName: 'book' }
      ],
      devTime: 'Dev : 5-6 jours',
      color: 'blue' as const
    },
    {
      iconName: 'rocket',
      title: 'ROBOT DÉPLOIEMENT',
      subtitle: 'CI/CD automatisé',
      problem: 'Vos déploiements prennent 2h et échouent 1 fois sur 3 ? Le Robot orchestre automatiquement vos pipelines de déploiement avec rollback intelligent.',
      steps: [
        { text: 'Trigger merge sur main → démarrage pipeline auto', iconName: 'link' },
        { text: 'Tests automatiques (unit, integration, e2e)', iconName: 'checkmark' },
        { text: 'Build + déploiement staging → tests smoke', iconName: 'cog' },
        { text: 'Validation automatique ou manuelle (selon criticité)', iconName: 'checkmark' },
        { text: 'Déploiement prod + monitoring post-deploy + rollback auto si erreur', iconName: 'rocket' }
      ],
      devTime: 'Dev : 6-7 jours',
      color: 'amber' as const
    },
    {
      iconName: 'lock',
      title: 'GARDIEN SÉCURITÉ',
      subtitle: 'Alertes vulnérabilités',
      problem: 'Vous apprenez qu\'une dépendance critique a une faille 3 semaines trop tard ? Le Gardien scanne votre code 24/7 et vous alerte instantanément.',
      steps: [
        { text: 'Scan quotidien dépendances (npm audit, Snyk, Dependabot, ou autre)', iconName: 'search' },
        { text: 'Analyse code statique avec vos outils (SonarQube, Semgrep...)', iconName: 'search' },
        { text: 'Détection CVEs critiques (CVSS >7) → alerte immédiate', iconName: 'alert' },
        { text: 'IA (ex: Claude, GPT...) génère recommandations fix + impacts', iconName: 'lightning' },
        { text: 'Création PR automatique avec correctifs (si possible)', iconName: 'cog' }
      ],
      devTime: 'Dev : 5 jours',
      color: 'purple' as const
    },
    {
      iconName: 'book',
      title: 'GÉNÉRATEUR DOCS',
      subtitle: 'Documentation automatique',
      problem: 'Votre documentation est obsolète et personne ne la maintient ? Le Générateur crée et met à jour automatiquement vos docs techniques.',
      steps: [
        { text: 'Analyse codebase (parsing fonctions, classes, APIs)', iconName: 'search' },
        { text: 'IA (ex: Claude, GPT...) génération docstrings + exemples usage', iconName: 'pencil' },
        { text: 'Extraction changelog depuis commits Git', iconName: 'pencil' },
        { text: 'Génération docs (Markdown, OpenAPI, Swagger...)', iconName: 'document' },
        { text: 'Publication automatique vers votre plateforme (Notion, Docusaurus, GitBook...)', iconName: 'upload' }
      ],
      devTime: 'Dev : 4-5 jours',
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
            <Icon name="monitor" size={80} className="text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-4">
            Scénarios IT Services
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Automatisations n8n pour équipes tech qui veulent éliminer le toil et se concentrer sur l'innovation.
            <br />
            <span className="text-sage-500 text-lg">Monitoring, déploiement, sécurité : en pilote automatique.</span>
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
            <div className="text-sage-600 text-sm">Tickets support niveau 1</div>
          </div>
          <div className="bg-gradient-to-br from-amber-400/20 to-transparent backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">5x</div>
            <div className="text-amber-600 text-sm">Fréquence déploiements</div>
          </div>
          <div className="bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-blue-600 text-sm">Uptime grâce monitoring proactif</div>
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
            {ticketSorterVisualization}
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
            Prêt à automatiser vos ops IT ?
          </h2>
          <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
            On audite vos process tech pendant 1h (support, déploiement, monitoring) et on vous montre comment libérer 20h/semaine.
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

export default ITServicesPage
