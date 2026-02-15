import { motion } from 'framer-motion'
import WorkflowCard from '../../components/WorkflowCard'
import Icon from '../../components/Icon'
import WorkflowVisualization from '../../components/WorkflowVisualization'

function LogistiquePage() {
  // Workflow visualization example for SUIVEUR COLIS
  const packageTrackerVisualization = (
    <WorkflowVisualization
      title="SUIVEUR COLIS - Exemple de workflow"
      nodes={[
        { id: 'trigger', label: 'Nouvelle commande', iconName: 'package', color: 'blue', x: 120, y: 180 },
        { id: 'fetch', label: 'Récupération tracking', iconName: 'document', color: 'sage', x: 300, y: 180 },
        { id: 'api', label: 'API transporteur', iconName: 'truck', color: 'purple', x: 480, y: 180 },
        { id: 'update', label: 'Mise à jour BDD', iconName: 'upload', color: 'blue', x: 480, y: 310 },
        { id: 'notify', label: 'Notification client', iconName: 'email', color: 'sage', x: 300, y: 380 },
        { id: 'alert', label: 'Alerte équipe (si pb)', iconName: 'alert', color: 'rose', x: 120, y: 380 },
      ]}
      connections={[
        { from: 'trigger', to: 'fetch' },
        { from: 'fetch', to: 'api' },
        { from: 'api', to: 'update' },
        { from: 'update', to: 'notify' },
        { from: 'notify', to: 'alert' },
      ]}
    />
  )

  const workflows = [
    {
      iconName: 'package',
      title: 'SUIVEUR COLIS',
      subtitle: 'Tracking temps réel',
      problem: 'Vos clients vous harcèlent pour savoir où est leur colis ? Le Suiveur envoie automatiquement les mises à jour de livraison en temps réel.',
      steps: [
        { text: 'Récupération numéros tracking (depuis votre marketplace, CRM, ou ERP)', iconName: 'document' },
        { text: 'API transporteurs de votre choix (Colissimo, Chronopost, UPS, DHL...)', iconName: 'truck' },
        { text: 'Monitoring statuts 24/7 (en transit, livré, incident)', iconName: 'dashboard' },
        { text: 'Email/SMS client automatique à chaque étape', iconName: 'email' },
        { text: 'Alerte équipe logistique si retard/problème', iconName: 'alert' }
      ],
      devTime: 'Dev : 3-4 jours',
      color: 'sage' as const
    },
    {
      iconName: 'dashboard',
      title: 'OPTIMISEUR STOCK',
      subtitle: 'Réapprovisionnement intelligent',
      problem: 'Vous êtes en rupture de stock ou au contraire vous sur-stockez ? L\'Optimiseur analyse vos ventes et déclenche les commandes fournisseurs au bon moment.',
      steps: [
        { text: 'Synchronisation stock depuis votre système (ERP, e-commerce, WMS...)', iconName: 'link' },
        { text: 'Analyse historique ventes (tendances, saisonnalité)', iconName: 'chart' },
        { text: 'IA (ex: Claude, GPT...) prédiction ruptures J+15/J+30', iconName: 'chart' },
        { text: 'Génération bon de commande fournisseur automatique', iconName: 'pencil' },
        { text: 'Optimisation quantités (EOQ, lead time, marge)', iconName: 'target' }
      ],
      devTime: 'Dev : 6-7 jours',
      color: 'blue' as const
    },
    {
      iconName: 'warehouse',
      title: 'ROBOT PRÉPARATION',
      subtitle: 'Picking list automatique',
      problem: 'Vos préparateurs perdent du temps à chercher les produits dans l\'entrepôt ? Le Robot génère des listes de picking optimisées par zone.',
      steps: [
        { text: 'Récupération nouvelles commandes depuis votre système', iconName: 'package' },
        { text: 'Groupement intelligent par zone entrepôt', iconName: 'route' },
        { text: 'Génération picking list optimisée (distance minimale)', iconName: 'clipboard' },
        { text: 'Envoi vers vos terminaux (tablette, app mobile, WMS...)', iconName: 'upload' },
        { text: 'Mise à jour stock temps réel post-préparation', iconName: 'checkmark' }
      ],
      devTime: 'Dev : 4-5 jours',
      color: 'amber' as const
    },
    {
      iconName: 'truck',
      title: 'ROUTEUR EXPRESS',
      subtitle: 'Optimisation tournées',
      problem: 'Vos livreurs font 30% de kilomètres en trop par manque d\'optimisation ? Le Routeur calcule les tournées optimales en tenant compte du trafic.',
      steps: [
        { text: 'Import liste livraisons du jour (adresses, horaires)', iconName: 'document' },
        { text: 'API cartographie de votre choix (Google Maps, Mapbox...) + trafic temps réel', iconName: 'route' },
        { text: 'Algorithme optimisation multi-critères (km, temps, priorité)', iconName: 'cog' },
        { text: 'Génération feuilles de route par livreur', iconName: 'document' },
        { text: 'Navigation GPS + suivi temps réel position', iconName: 'route' }
      ],
      devTime: 'Dev : 5-6 jours',
      color: 'purple' as const
    },
    {
      iconName: 'alert',
      title: 'DÉTECTEUR ANOMALIES',
      subtitle: 'Alertes incidents logistiques',
      problem: 'Vous découvrez les problèmes logistiques trop tard, quand le client se plaint ? Le Détecteur analyse les flux et alerte en temps réel.',
      steps: [
        { text: 'Monitoring KPIs logistiques (délai prépa, taux erreur)', iconName: 'dashboard' },
        { text: 'Détection patterns anormaux (pic retours, retards)', iconName: 'search' },
        { text: 'IA (ex: Claude, GPT...) analyse causes probables', iconName: 'robot' },
        { text: 'Alerte équipe + recommandations actions', iconName: 'alert' },
        { text: 'Dashboard temps réel santé supply chain', iconName: 'chart' }
      ],
      devTime: 'Dev : 4 jours',
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
            <Icon name="truck" size={80} className="text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-4">
            Scénarios Logistique
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Automatisations n8n pour supply chain managers qui veulent éliminer les ruptures et optimiser les coûts.
            <br />
            <span className="text-sage-500 text-lg">Du stock à la livraison, zéro friction.</span>
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
            <div className="text-4xl font-bold text-sage-600 mb-2">-40%</div>
            <div className="text-sage-600 text-sm">Coûts de stockage</div>
          </div>
          <div className="bg-gradient-to-br from-amber-400/20 to-transparent backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">-30%</div>
            <div className="text-amber-600 text-sm">Kilomètres parcourus (tournées)</div>
          </div>
          <div className="bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-blue-600 text-sm">Taux de service client (livraison)</div>
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
            {packageTrackerVisualization}
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
            Prêt à fluidifier votre supply chain ?
          </h2>
          <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
            On audite gratuitement vos flux logistiques pendant 1h et on identifie les gains rapides (stock, préparation, livraison).
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

export default LogistiquePage
