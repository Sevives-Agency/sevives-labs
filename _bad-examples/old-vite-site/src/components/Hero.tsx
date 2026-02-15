import { motion, useScroll, useTransform } from 'framer-motion'
import logoComplet from '../assets/logo-complet.png'

function Hero() {
  const { scrollY } = useScroll()
  
  const logoOpacity = useTransform(scrollY, [0, 150], [1, 0])
  const logoScale = useTransform(scrollY, [0, 150], [1, 0.7])
  const logoY = useTransform(scrollY, [0, 150], [0, -50])
  const logoHeight = useTransform(scrollY, [0, 150], [384, 0])
  const logoMargin = useTransform(scrollY, [0, 150], [32, 0])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        className="relative z-10 text-center px-6 py-10 md:px-8 md:py-12 2xl:px-12 2xl:py-16 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl w-full max-w-3xl 2xl:max-w-[60%]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          style={{
            height: logoHeight,
            marginBottom: logoMargin,
            overflow: 'hidden',
          }}
        >
          <motion.img
            src={logoComplet}
            alt="SevivɘƧ Agency"
            className="h-64 sm:h-80 md:h-96 2xl:h-[450px] mx-auto"
            style={{
              opacity: logoOpacity,
              scale: logoScale,
              y: logoY,
            }}
          />
        </motion.div>
        
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl font-bold text-sage-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We making IT digital 4 U
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-sage-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Transformation digitale orientée ROI
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero