import { motion } from 'framer-motion'

function Problematique() {
  const bars = [
    { height: 60 },
    { height: 75 },
    { height: 50 },
    { height: 85 },
    { height: 70 },
    { height: 90 },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 2xl:p-16">
      <div className="relative bg-taupe-300/40 backdrop-blur-md rounded-3xl border border-white/20 p-12 md:p-16 2xl:p-20 max-w-5xl 2xl:max-w-[75%] w-full text-center overflow-hidden">

        <motion.span
          className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          Problématique actuelle
        </motion.span>

        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold text-sage-700 mt-4 mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          Un marché saturé
        </motion.h2>

        {/* Graphique dynamique */}
        <motion.div
          className="relative w-full max-w-2xl mx-auto h-64 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <div className="relative w-full h-full flex items-end justify-center gap-4">
            {bars.map((bar, index) => {
              const barDelay = 0.6 + index * 0.15

              return (
                <motion.div
                  key={index}
                  className="flex-1 bg-gradient-to-t from-sage-600 to-sage-400 rounded-t-xl shadow-lg"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${bar.height}%` }}
                  transition={{
                    duration: 1,
                    delay: barDelay,
                    ease: "easeOut"
                  }}
                  viewport={{ once: false, margin: "-100px" }}
                />
              )
            })}
          </div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl 2xl:text-3xl text-sage-600 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          De promesses complexes et coûteuses
        </motion.p>

        <motion.div
          className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 2xl:p-12 mt-8 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <p className="text-lg 2xl:text-xl text-sage-700 font-medium">
            Des entreprises paient jusqu'à <span className="text-3xl 2xl:text-4xl font-bold text-sage-800">30 000 €</span> pour des automatisations simples.
          </p>
          <p className="text-sage-600 2xl:text-xl mt-4">
            Là où d'autres ajoutent de la complexité, Sevives privilégie des solutions claires,
            pragmatiques et directement reliées à la valeur créée.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Problematique