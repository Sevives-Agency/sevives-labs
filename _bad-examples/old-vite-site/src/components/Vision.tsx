import { motion } from 'framer-motion'

function Vision() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 2xl:p-16">
      <div className="max-w-6xl 2xl:max-w-[85%] w-full grid md:grid-cols-2 gap-8 2xl:gap-16 items-center">
        
        {/* Colonne gauche - Texte */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <span className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-wider">
            Vision
          </span>
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-sage-700 mt-2 mb-6 leading-tight">
            L'IA comme moteur de croissance, pas comme centre de coût
          </h2>
          <p className="text-lg 2xl:text-xl text-sage-600 leading-relaxed">
            Transformation digitale orientée ROI, automatisation intelligente et agents IA, 
            conçus pour générer des résultats mesurables plutôt que des coûts supplémentaires.
          </p>
        </motion.div>

        {/* Colonne droite - Carte glassmorphism */}
        <motion.div
          className="bg-white/25 backdrop-blur-md rounded-3xl border border-white/30 p-8 2xl:p-12 shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <span className="text-sage-500 uppercase text-sm 2xl:text-base font-semibold tracking-wider">
            Orientation Sevives
          </span>
          <p className="text-sage-700 mt-4 text-lg 2xl:text-xl leading-relaxed">
            L'IA est pensée comme un levier de croissance durable, ancré dans vos processus 
            existants, avec un pilotage par la valeur créée plutôt que par le volume de fonctionnalités.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Vision