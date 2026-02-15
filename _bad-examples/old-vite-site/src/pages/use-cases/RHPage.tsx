import { motion } from 'framer-motion'
import WorkflowCard from '../../components/WorkflowCard'
import Icon from '../../components/Icon'
import WorkflowVisualization from '../../components/WorkflowVisualization'

function RHPage() {
  // Workflow visualization example for TRIEUR CV
  const cvSorterVisualization = (
    <WorkflowVisualization
      title="TRIEUR CV - Exemple de workflow"
      nodes={[
        { id: 'trigger', label: 'Réception CV', iconName: 'upload', color: 'blue', x: 120, y: 180 },
        { id: 'parse', label: 'Parsing CV', iconName: 'document', color: 'sage', x: 300, y: 180 },
        { id: 'ai', label: 'Analyse IA', iconName: 'robot', color: 'purple', x: 480, y: 180 },
        { id: 'score', label: 'Scoring', iconName: 'chart', color: 'amber', x: 120, y: 280 },
        { id: 'classify', label: 'Classification', iconName: 'search', color: 'blue', x: 300, y: 280 },
        { id: 'rank', label: 'Ranking', iconName: 'dashboard', color: 'sage', x: 480, y: 280 },
        { id: 'notify', label: 'Notification', iconName: 'bell', color: 'rose', x: 120, y: 380 },
        { id: 'calendar', label: 'Invitation', iconName: 'calendar', color: 'purple', x: 300, y: 380 },
      ]}
      connections={[
        { from: 'trigger', to: 'parse' },
        { from: 'parse', to: 'ai' },
        { from: 'ai', to: 'score' },
        { from: 'score', to: 'classify' },
        { from: 'classify', to: 'rank' },
        { from: 'rank', to: 'notify' },
        { from: 'notify', to: 'calendar' },
      ]}
    />
  )

  const workflows = [
    {
      iconName: 'target',
      title: 'TRIEUR CV',
      subtitle: 'Présélection automatique',
      problem: 'Vous recevez 200+ CV par poste et n\'avez pas le temps de tous les lire ? Le Trieur analyse et classe automatiquement les candidatures par pertinence.',
      steps: [
        { text: 'Récupération CV depuis vos sources (LinkedIn, Indeed, email...)', iconName: 'upload' },
        { text: 'IA (ex: Claude, GPT...) parsing compétences/expérience/formation', iconName: 'robot' },
        { text: 'Scoring candidats selon vos critères poste (1-10)', iconName: 'chart' },
        { text: 'Classification auto (Top 10%, À revoir, Rejet poli)', iconName: 'document' },
        { text: 'Email de refus personnalisé pour candidats non-retenus', iconName: 'email' }
      ],
      devTime: 'Dev : 4 jours',
      color: 'sage' as const
    },
    {
      iconName: 'calendar',
      title: 'ORCHESTRATEUR ENTRETIENS',
      subtitle: 'Planification automatique',
      problem: 'Coordonner les disponibilités de 3 managers pour un entretien prend 10 emails ? L\'Orchestrateur trouve et bloque automatiquement le créneau optimal.',
      steps: [
        { text: 'Détection candidats shortlistés (depuis votre ATS, CRM, ou email)', iconName: 'checkmark' },
        { text: 'Synchronisation calendriers managers (Google, Outlook, Apple...)', iconName: 'calendar' },
        { text: 'Email candidat avec lien booking (créneaux communs)', iconName: 'link' },
        { text: 'Réservation 1-clic → invitations auto tous participants', iconName: 'email' },
        { text: 'Rappel J-1 + lien visio auto-généré (Zoom, Teams, Meet...)', iconName: 'bell' }
      ],
      devTime: 'Dev : 3-4 jours',
      color: 'blue' as const
    },
    {
      iconName: 'rocket',
      title: 'ONBOARDEUR EXPRESS',
      subtitle: 'Intégration automatisée',
      problem: 'L\'onboarding d\'un nouveau collaborateur mobilise 5 personnes pendant 2 jours ? L\'Onboardeur déclenche automatiquement toutes les étapes.',
      steps: [
        { text: 'Trigger embauche validée → checklist automatique', iconName: 'checkmark' },
        { text: 'Création comptes (email, Slack/Teams/Discord, vos outils métier)', iconName: 'users' },
        { text: 'Envoi kit bienvenue (docs, accès, planning J1-J30)', iconName: 'package' },
        { text: 'Affectation buddy + notification manager', iconName: 'users' },
        { text: 'Suivi automatique jalons (J7, J30, J90)', iconName: 'dashboard' }
      ],
      devTime: 'Dev : 5 jours',
      color: 'amber' as const
    },
    {
      iconName: 'dashboard',
      title: 'SONDEUR ÉQUIPE',
      subtitle: 'Feedback continu',
      problem: 'Vous découvrez les problèmes RH trop tard lors de l\'entretien annuel ? Le Sondeur collecte du feedback en continu et alerte en cas de signaux faibles.',
      steps: [
        { text: 'Micro-sondages hebdo via votre outil (Slack, Teams, email...)', iconName: 'chat' },
        { text: 'Agrégation anonyme réponses + détection tendances', iconName: 'chart' },
        { text: 'IA (ex: Claude, GPT...) analyse sentiment (satisfaction, burnout)', iconName: 'brain' },
        { text: 'Alertes RRH si score équipe <seuil ou baisse brutale', iconName: 'alert' },
        { text: 'Dashboard temps réel engagement par équipe/département', iconName: 'dashboard' }
      ],
      devTime: 'Dev : 4 jours',
      color: 'purple' as const
    },
    {
      iconName: 'document',
      title: 'GÉNÉRATEUR CONTRATS',
      subtitle: 'Documents automatisés',
      problem: 'Rédiger un contrat de travail prend 1h et comporte des risques d\'erreur ? Le Générateur produit des contrats conformes en 2 minutes.',
      steps: [
        { text: 'Formulaire RH capture infos (poste, salaire, dates)', iconName: 'pencil' },
        { text: 'Sélection template selon type contrat (CDI, CDD, stage)', iconName: 'clipboard' },
        { text: 'IA (ex: Claude, GPT...) remplissage clauses personnalisées', iconName: 'pencil' },
        { text: 'Génération PDF conforme + annexes (mutuelle, RTT)', iconName: 'document' },
        { text: 'Envoi signature électronique (DocuSign, Yousign, ou autre)', iconName: 'pencil' }
      ],
      devTime: 'Dev : 3 jours',
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
            <Icon name="users" size={80} className="text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-4">
            Scénarios RH & Recrutement
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Automatisations n8n pour RH qui veulent se concentrer sur l'humain, pas sur l'administratif.
            <br />
            <span className="text-sage-500 text-lg">Du sourcing au suivi collaborateur, en mode automatique.</span>
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
            <div className="text-4xl font-bold text-sage-600 mb-2">-75%</div>
            <div className="text-sage-600 text-sm">Temps tri CV par recrutement</div>
          </div>
          <div className="bg-gradient-to-br from-amber-400/20 to-transparent backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">2 jours</div>
            <div className="text-amber-600 text-sm">Onboarding complet automatisé</div>
          </div>
          <div className="bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-blue-600 text-sm">Monitoring engagement équipe</div>
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
            {cvSorterVisualization}
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
            Prêt à moderniser vos process RH ?
          </h2>
          <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
            On audite votre parcours recrutement + onboarding pendant 1h et on identifie les automatisations à ROI immédiat.
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

export default RHPage
