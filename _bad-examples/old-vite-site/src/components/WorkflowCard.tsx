import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from './Icon'

interface WorkflowStep {
  text: string
  iconName?: string
}

interface WorkflowCardProps {
  iconName: string
  title: string
  subtitle: string
  problem: string
  steps: WorkflowStep[]
  devTime: string
  color?: 'sage' | 'amber' | 'blue' | 'purple' | 'rose'
}

const colorVariants = {
  sage: {
    gradient: 'from-sage-400 to-sage-500',
    bg: 'bg-sage-50/50',
    border: 'border-sage-400/20',
    text: 'text-sage-700',
    badge: 'bg-sage-100 text-sage-700',
  },
  amber: {
    gradient: 'from-amber-400 to-amber-500',
    bg: 'bg-amber-50/50',
    border: 'border-amber-400/20',
    text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-700',
  },
  blue: {
    gradient: 'from-blue-400 to-blue-500',
    bg: 'bg-blue-50/50',
    border: 'border-blue-400/20',
    text: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-700',
  },
  purple: {
    gradient: 'from-purple-400 to-purple-500',
    bg: 'bg-purple-50/50',
    border: 'border-purple-400/20',
    text: 'text-purple-700',
    badge: 'bg-purple-100 text-purple-700',
  },
  rose: {
    gradient: 'from-rose-400 to-rose-500',
    bg: 'bg-rose-50/50',
    border: 'border-rose-400/20',
    text: 'text-rose-700',
    badge: 'bg-rose-100 text-rose-700',
  },
}

function WorkflowCard({
  iconName,
  title,
  subtitle,
  problem,
  steps,
  devTime,
  color = 'sage',
}: WorkflowCardProps) {
  const colors = colorVariants[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative bg-white/80 backdrop-blur-md rounded-2xl border ${colors.border} shadow-lg p-8 hover:shadow-xl transition-shadow`}
    >
      {/* Header avec icône */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`flex-shrink-0 bg-gradient-to-br ${colors.gradient} rounded-2xl p-4 shadow-md`}>
          <Icon name={iconName} size={48} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className={`text-2xl font-bold ${colors.text} mb-1`}>{title}</h3>
          <p className="text-sage-600 text-sm font-medium uppercase tracking-wider">{subtitle}</p>
        </div>
      </div>

      {/* Problème résolu */}
      <div className={`${colors.bg} rounded-xl p-4 mb-6 border ${colors.border}`}>
        <p className="text-sage-700 leading-relaxed">
          <span className="font-bold">Problème résolu : </span>
          {problem}
        </p>
      </div>

      {/* Steps du workflow */}
      <div className="mb-6">
        <h4 className="text-sm font-bold text-sage-600 uppercase tracking-wider mb-3">
          Workflow automatisé
        </h4>
        <div className="space-y-2">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${colors.gradient} text-white text-xs font-bold flex items-center justify-center`}>
                {index + 1}
              </div>
              <p className="text-sage-700 text-sm leading-relaxed pt-0.5 flex items-center gap-2">
                {step.iconName && <Icon name={step.iconName} size={16} className={colors.text} />}
                <span>{step.text}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dev time badge */}
      <div className="flex items-center justify-between pt-4 border-t border-sage-200">
        <span className={`${colors.badge} px-3 py-1 rounded-full text-xs font-semibold`}>
          ⚡ {devTime}
        </span>
        <Link
          to="/pricing"
          className={`text-sm font-semibold ${colors.text} hover:underline`}
        >
          Obtenir ce workflow →
        </Link>
      </div>
    </motion.div>
  )
}

export default WorkflowCard
