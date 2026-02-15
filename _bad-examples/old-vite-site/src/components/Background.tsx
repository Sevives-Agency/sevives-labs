import { motion } from 'framer-motion'

function Background() {
  return (
    <div className="fixed inset-0 z-0 bg-taupe-200">
      {/* Blob 1 - Grand sage */}
      <motion.div
        className="absolute"
        animate={{
          x: [0, 300, -200, 100, 0],
          y: [0, 200, 400, -100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '-10%', left: '-10%', willChange: 'transform' }}
      >
        <div className="w-[600px] h-[600px] bg-gradient-to-br from-sage-400/70 to-sage-500/60 rounded-full blur-3xl" />
      </motion.div>
      
      {/* Blob 2 - Moyen sage */}
      <motion.div
        className="absolute"
        animate={{
          x: [0, -150, 200, -100, 0],
          y: [0, 300, 100, -200, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '40%', right: '-5%', willChange: 'transform' }}
      >
        <div className="w-[400px] h-[400px] bg-gradient-to-tr from-sage-300/60 to-sage-500/55 rounded-full blur-3xl" />
      </motion.div>
      
      {/* Blob 3 - Petit sage */}
      <motion.div
        className="absolute"
        animate={{
          x: [0, 100, -150, 50, 0],
          y: [0, -100, 200, 300, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ bottom: '10%', left: '20%', willChange: 'transform' }}
      >
        <div className="w-[300px] h-[300px] bg-gradient-to-bl from-sage-400/50 to-sage-600/45 rounded-full blur-3xl" />
      </motion.div>
      
      {/* Blob 4 - Accent mauve/violet */}
      <motion.div
        className="absolute"
        animate={{
          x: [0, -200, 100, -50, 0],
          y: [0, 150, -100, 250, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '20%', left: '50%', willChange: 'transform' }}
      >
        <div className="w-[350px] h-[350px] bg-gradient-to-tr from-purple-400/35 to-fuchsia-500/30 rounded-full blur-3xl" />
      </motion.div>
    </div>
  )
}

export default Background