import Hero from '../components/Hero'
import Levels from '../components/Levels'
import Vision from '../components/Vision'
import Problematique from '../components/Problematique'
import Comparison from '../components/Comparison'
import Positionnement from '../components/Positionnement'
import Promesse from '../components/Promesse'
import Stats from '../components/Stats'
import CodeProof from '../components/CodeProof'
import Testimonials from '../components/Testimonials'
import News from '../components/News'
import ChatbotCTA from '../components/ChatbotCTA'

function Home() {
  return (
    <>
      <div className="pt-28">
        <Hero />
      </div>
      <Problematique />
      <Vision />
      <Levels />
      <Comparison />
      <Positionnement />
      <Promesse />
      <Stats />
      <CodeProof />
      <Testimonials />
      <News />
      <ChatbotCTA />
    </>
  )
}

export default Home
