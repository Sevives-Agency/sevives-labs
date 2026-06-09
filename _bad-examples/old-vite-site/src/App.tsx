import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Background from './components/Background'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ChatbotWidget from './components/ChatbotWidget'
import ChatbotModal from './components/ChatbotModal'
import { ChatbotProvider } from './contexts/ChatbotContext'
import Home from './pages/Home'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import ConsultantsPage from './pages/ConsultantsPage'
import CommunityPage from './pages/CommunityPage'
import BlogPage from './pages/BlogPage'
import SupportPage from './pages/SupportPage'
import MarketingPage from './pages/use-cases/MarketingPage'
import PMEPage from './pages/use-cases/PMEPage'
import FinancePage from './pages/use-cases/FinancePage'
import RHPage from './pages/use-cases/RHPage'
import LogistiquePage from './pages/use-cases/LogistiquePage'
import ITServicesPage from './pages/use-cases/ITServicesPage'
import MarketingDigitalPage from './pages/services/MarketingDigitalPage'
import DeveloppementDigitalPage from './pages/services/DeveloppementDigitalPage'
import SolutionsExternesPage from './pages/services/SolutionsExternesPage'

function App() {
  return (
    <BrowserRouter>
      <ChatbotProvider>
        <ScrollToTop />
        <div className="min-h-screen">
          <Background />
          <div className="relative z-10">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/consultants" element={<ConsultantsPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/use-cases/marketing" element={<MarketingPage />} />
              <Route path="/use-cases/pme-tpe" element={<PMEPage />} />
              <Route path="/use-cases/comptabilite" element={<FinancePage />} />
              <Route path="/use-cases/rh-recrutement" element={<RHPage />} />
              <Route path="/use-cases/logistique" element={<LogistiquePage />} />
              <Route path="/use-cases/it-services" element={<ITServicesPage />} />
              <Route path="/services/marketing-digital" element={<MarketingDigitalPage />} />
              <Route path="/services/developpement-digital" element={<DeveloppementDigitalPage />} />
              <Route path="/services/solutions-externes" element={<SolutionsExternesPage />} />
            </Routes>
            <Footer />
          </div>
          {/* Chatbot components - available on all pages */}
          <ChatbotWidget />
          <ChatbotModal />
        </div>
      </ChatbotProvider>
    </BrowserRouter>
  )
}

export default App