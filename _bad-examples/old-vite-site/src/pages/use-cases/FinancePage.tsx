import { motion } from 'framer-motion'
import WorkflowCard from '../../components/WorkflowCard'
import Icon from '../../components/Icon'
import WorkflowVisualization from '../../components/WorkflowVisualization'

function FinancePage() {
  // Workflow visualization example for ROBOT FACTURES
  const invoiceRobotVisualization = (
    <WorkflowVisualization
      title="ROBOT FACTURES - Exemple de workflow"
      nodes={[
        { id: 'trigger', label: 'Email reçu', iconName: 'email', color: 'blue', x: 120, y: 180 },
        { id: 'detect', label: 'Détection PDF', iconName: 'document', color: 'sage', x: 300, y: 180 },
        { id: 'extract', label: 'OCR + IA', iconName: 'search', color: 'purple', x: 480, y: 180 },
        { id: 'validate', label: 'Validation', iconName: 'checkmark', color: 'amber', x: 120, y: 280 },
        { id: 'software', label: 'Envoi compta', iconName: 'upload', color: 'blue', x: 300, y: 280 },
        { id: 'categorize', label: 'Catégorisation', iconName: 'dashboard', color: 'sage', x: 480, y: 280 },
        { id: 'notify', label: 'Notification', iconName: 'bell', color: 'rose', x: 120, y: 380 },
      ]}
      connections={[
        { from: 'trigger', to: 'detect' },
        { from: 'detect', to: 'extract' },
        { from: 'extract', to: 'validate' },
        { from: 'validate', to: 'software' },
        { from: 'software', to: 'categorize' },
        { from: 'categorize', to: 'notify' },
      ]}
    />
  )

  const workflows = [
    {
      iconName: 'receipt',
      title: 'ROBOT FACTURES',
      subtitle: 'Saisie automatique',
      problem: 'Votre équipe comptable passe des heures à saisir les factures fournisseurs ? Le Robot extrait automatiquement les données et les injecte dans votre logiciel.',
      steps: [
        { text: 'Email monitoring → détection factures PDF/images', iconName: 'email' },
        { text: 'OCR + IA (ex: Claude, GPT...) extraction données (montant, TVA, date)', iconName: 'search' },
        { text: 'Validation règles métier (cohérence, doublons)', iconName: 'checkmark' },
        { text: 'Injection vers votre logiciel comptable (Odoo, QuickBooks, Sage, Pennylane...)', iconName: 'upload' },
        { text: 'Notification comptable si anomalie détectée', iconName: 'alert' }
      ],
      devTime: 'Dev : 4-5 jours',
      color: 'sage' as const
    },
    {
      iconName: 'money',
      title: 'PRÉDICTEUR TRÉSO',
      subtitle: 'Cash-flow prévisionnel',
      problem: 'Vous découvrez vos problèmes de trésorerie trop tard ? Le Prédicteur analyse vos flux et anticipe les tensions de trésorerie 30 jours à l\'avance.',
      steps: [
        { text: 'Connexion votre banque (API bancaire ou open banking)', iconName: 'money' },
        { text: 'Analyse historique dépenses/recettes (6-12 mois)', iconName: 'dashboard' },
        { text: 'IA (ex: Claude, GPT...) prédiction cash-flow J+30/J+60/J+90', iconName: 'chart' },
        { text: 'Alertes si risque découvert détecté', iconName: 'alert' },
        { text: 'Recommandations actions préventives', iconName: 'lightning' }
      ],
      devTime: 'Dev : 6-7 jours',
      color: 'blue' as const
    },
    {
      iconName: 'pencil',
      title: 'CHASSEUR NOTES DE FRAIS',
      subtitle: 'Traitement automatique',
      problem: 'Les notes de frais s\'empilent et le remboursement prend des semaines ? Le Chasseur traite automatiquement les justificatifs et déclenche les virements.',
      steps: [
        { text: 'App mobile → photo ticket = soumission directe', iconName: 'upload' },
        { text: 'OCR extraction montant/date/catégorie/TVA', iconName: 'search' },
        { text: 'Validation règles entreprise (plafonds, catégories)', iconName: 'clipboard' },
        { text: 'Workflow approbation manager (si >seuil)', iconName: 'users' },
        { text: 'Export comptable + virement bancaire auto', iconName: 'money' }
      ],
      devTime: 'Dev : 4 jours',
      color: 'amber' as const
    },
    {
      iconName: 'chart',
      title: 'RAPPORTEUR FINANCIER',
      subtitle: 'Reporting automatisé',
      problem: 'Produire vos reportings mensuels mobilise 2 jours de votre équipe ? Le Rapporteur génère automatiquement des rapports financiers exploitables.',
      steps: [
        { text: 'Extraction données depuis vos outils (compta, banque, CRM, ERP...)', iconName: 'link' },
        { text: 'Calcul KPIs (CA, marge, DSO, BFR, ratios)', iconName: 'chart' },
        { text: 'IA (ex: Claude, GPT...) rédaction synthèse executive', iconName: 'pencil' },
        { text: 'Génération PDF/PPT avec graphiques', iconName: 'dashboard' },
        { text: 'Envoi automatique Direction + investisseurs', iconName: 'email' }
      ],
      devTime: 'Dev : 5-6 jours',
      color: 'purple' as const
    },
    {
      iconName: 'bell',
      title: 'VIGILE RELANCES',
      subtitle: 'Recouvrement automatique',
      problem: 'Les factures impayées s\'accumulent et vous perdez de la trésorerie ? Le Vigile relance automatiquement vos clients selon un scénario progressif.',
      steps: [
        { text: 'Monitoring factures impayées (>échéance)', iconName: 'calendar' },
        { text: 'Relance J+7 : email poli automatique', iconName: 'email' },
        { text: 'Relance J+15 : email + SMS avec pénalités', iconName: 'email' },
        { text: 'Relance J+30 : notification équipe recouvrement', iconName: 'alert' },
        { text: 'Mise à jour statut CRM + reporting DSO', iconName: 'dashboard' }
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
            <Icon name="money" size={80} className="text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-4">
            Scénarios Finance & Comptabilité
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Automatisations n8n pour DAF et comptables qui veulent passer moins de temps sur la saisie et plus sur l'analyse.
            <br />
            <span className="text-sage-500 text-lg">Zéro saisie manuelle, zéro retard de clôture.</span>
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
            <div className="text-4xl font-bold text-sage-600 mb-2">-80%</div>
            <div className="text-sage-600 text-sm">Temps de saisie factures</div>
          </div>
          <div className="bg-gradient-to-br from-amber-400/20 to-transparent backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">30j</div>
            <div className="text-amber-600 text-sm">Anticipation tensions tréso</div>
          </div>
          <div className="bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">-15j</div>
            <div className="text-blue-600 text-sm">DSO moyen (délai paiement)</div>
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
            {invoiceRobotVisualization}
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
            Prêt à automatiser votre comptabilité ?
          </h2>
          <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
            On audite vos flux financiers pendant 1h et on vous montre comment éliminer 80% de la saisie manuelle.
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

export default FinancePage
