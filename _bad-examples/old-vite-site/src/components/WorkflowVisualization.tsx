import { motion } from 'framer-motion'
import { useMemo } from 'react'
import Icon from './Icon'

interface WorkflowNode {
  id: string
  label: string
  iconName: string
  color: 'sage' | 'amber' | 'blue' | 'purple' | 'rose'
  x: number
  y: number
}

interface WorkflowConnection {
  from: string
  to: string
}

interface WorkflowVisualizationProps {
  title: string
  nodes: WorkflowNode[]
  connections: WorkflowConnection[]
}

const colorGradients = {
  sage: { start: '#8ebe9d', end: '#6ba085' },
  amber: { start: '#fbbf24', end: '#f59e0b' },
  blue: { start: '#60a5fa', end: '#3b82f6' },
  purple: { start: '#c084fc', end: '#a855f7' },
  rose: { start: '#fb7185', end: '#f43f5e' },
}

function WorkflowVisualization({ title, nodes, connections }: WorkflowVisualizationProps) {
  // Calculate logical order of nodes based on connections (breadth-first traversal)
  const nodeOrder = useMemo(() => {
    const order: string[] = []
    const visited = new Set<string>()
    const queue: string[] = []

    // Find root nodes (nodes with no incoming connections)
    const hasIncoming = new Set(connections.map(c => c.to))
    const rootNodes = nodes.filter(n => !hasIncoming.has(n.id))

    // Start BFS from root nodes
    rootNodes.forEach(node => queue.push(node.id))

    while (queue.length > 0) {
      const current = queue.shift()!
      if (visited.has(current)) continue

      visited.add(current)
      order.push(current)

      // Add children to queue
      connections
        .filter(c => c.from === current)
        .forEach(c => {
          if (!visited.has(c.to)) {
            queue.push(c.to)
          }
        })
    }

    // Add any remaining nodes that weren't connected
    nodes.forEach(node => {
      if (!visited.has(node.id)) {
        order.push(node.id)
      }
    })

    return order
  }, [nodes, connections])

  // Create a map of node ID to its order index
  const nodeDelays = useMemo(() => {
    const delays: Record<string, number> = {}
    nodeOrder.forEach((nodeId, index) => {
      delays[nodeId] = index * 0.4
    })
    return delays
  }, [nodeOrder])

  return (
    <div className="relative w-full bg-white/80 backdrop-blur-md rounded-2xl border border-sage-400/20 shadow-lg overflow-hidden">
      {/* Title */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-6 border-b border-sage-400/20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h3 className="text-lg md:text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-400 text-xs">Workflow automatisé n8n</p>
        </motion.div>
      </div>

      {/* Workflow content - Fixed height like WorkflowCard */}
      <div className="relative w-full h-[520px] bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8">
        {/* SVG container with viewBox for perfect scaling */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 500"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Decorative grid and gradient definitions */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>

            {/* Animated gradient for connections */}
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8ebe9d" stopOpacity="1">
                <animate attributeName="stop-color" values="#8ebe9d; #c084fc; #60a5fa; #8ebe9d" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#c084fc" stopOpacity="1">
                <animate attributeName="stop-color" values="#c084fc; #60a5fa; #8ebe9d; #c084fc" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="1">
                <animate attributeName="stop-color" values="#60a5fa; #8ebe9d; #c084fc; #60a5fa" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Nodes backgrounds and content */}
          {nodes.map((node) => {
            const delay = nodeDelays[node.id] || 0

            return (
              <g key={node.id}>
                {/* Node container */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  {/* Pulse ring */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="35"
                    fill="none"
                    stroke={`url(#gradient-${node.color})`}
                    strokeWidth="3"
                    filter="drop-shadow(0 0 8px currentColor)"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: [0.8, 1.4, 0.8],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{
                      delay: delay + 0.5,
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Glow effect - reduced size to not mask connections */}
                  <rect
                    x={node.x - 41}
                    y={node.y - 31}
                    width="82"
                    height="62"
                    rx="13"
                    fill={`url(#gradient-${node.color})`}
                    opacity="0.2"
                    filter="blur(4px)"
                  />

                  {/* Main node background */}
                  <rect
                    x={node.x - 40}
                    y={node.y - 30}
                    width="80"
                    height="60"
                    rx="12"
                    fill={`url(#gradient-${node.color})`}
                    filter="drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4))"
                  />

                  {/* Icon placeholder (will be rendered separately) */}
                  <foreignObject
                    x={node.x - 20}
                    y={node.y - 25}
                    width="40"
                    height="40"
                  >
                    <div className="flex items-center justify-center h-full">
                      <Icon name={node.iconName} size={24} className="text-white" />
                    </div>
                  </foreignObject>

                  {/* Label */}
                  <text
                    x={node.x}
                    y={node.y + 20}
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="600"
                    className="select-none"
                  >
                    {node.label}
                  </text>
                </motion.g>

                {/* Gradient definitions */}
                <defs>
                  <linearGradient id={`gradient-${node.color}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={colorGradients[node.color].start} />
                    <stop offset="100%" stopColor={colorGradients[node.color].end} />
                  </linearGradient>
                </defs>
              </g>
            )
          })}

          {/* Connections - rendered LAST to appear on top of nodes */}
          {connections.map((conn) => {
            const fromNode = nodes.find(n => n.id === conn.from)
            const toNode = nodes.find(n => n.id === conn.to)

            if (!fromNode || !toNode) {
              console.warn(`Connection not found: ${conn.from} -> ${conn.to}`)
              return null
            }

            // Calculate direction vector
            const dx = toNode.x - fromNode.x
            const dy = toNode.y - fromNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Avoid division by zero
            if (distance === 0) return null

            // Normalized direction
            const ndx = dx / distance
            const ndy = dy / distance

            // Offset from center to edge of node
            const offset = 50

            // Calculate start and end points
            const fromX = fromNode.x + ndx * offset
            const fromY = fromNode.y + ndy * offset
            const toX = toNode.x - ndx * offset
            const toY = toNode.y - ndy * offset

            return (
              <path
                key={`${conn.from}-${conn.to}`}
                d={`M ${fromX} ${fromY} L ${toX} ${toY}`}
                stroke="#60a5fa"
                strokeWidth="3"
                strokeLinecap="butt"
                fill="none"
              />
            )
          })}
        </svg>
      </div>
    </div>
  )
}

export default WorkflowVisualization
