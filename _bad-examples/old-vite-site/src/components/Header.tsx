import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoMini from '../assets/logo-mini.png'

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState('FR')
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null)
    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [activeDropdown])

  return (
    <>
      {/* Header principal */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${hasScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-white/90 py-4'}`}>
        <div className="flex justify-between items-center max-w-7xl 2xl:max-w-[90%] mx-auto px-4 2xl:px-8 relative">

          {/* Hamburger avec animation → croix - MOBILE SEULEMENT */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-sage-100 rounded-lg transition-colors relative z-[100]"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <div className="w-6 h-5 flex flex-col justify-center items-center">
              <span className={`w-full h-0.5 bg-sage-700 rounded transition-all duration-300 absolute ${
                menuOpen ? 'rotate-45' : '-translate-y-2'
              }`}></span>
              <span className={`w-full h-0.5 bg-sage-700 rounded transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`w-full h-0.5 bg-sage-700 rounded transition-all duration-300 absolute ${
                menuOpen ? '-rotate-45' : 'translate-y-2'
              }`}></span>
            </div>
          </button>

          {/* Logo mini au CENTRE - conditionnel selon page */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 z-[100] ${
              isHomePage
                ? (hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none')
                : 'opacity-100 translate-y-0'
            }`}
          >
            <img src={logoMini} alt="SevivɘƧ" className="h-10" />
          </Link>

          {/* Menu DESKTOP - VISIBLE SUR DESKTOP */}
          <nav className="hidden md:flex items-center gap-6">
            {/* SERVICES - EN PREMIER */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveDropdown(activeDropdown === 'features' ? null : 'features')
                }}
                className="text-sage-700 hover:text-sage-500 font-medium flex items-center gap-1 transition-colors"
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown SERVICES */}
              {activeDropdown === 'features' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white/90 backdrop-blur-md rounded-2xl border border-sage-400/20 shadow-lg p-6 z-[200]">
                  <div className="space-y-2">
                    <Link
                      to="/services/marketing-digital"
                      className="block p-4 bg-purple-50/50 hover:bg-purple-100/50 rounded-xl transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        <h4 className="text-sage-700 font-bold text-sm">Marketing Digital</h4>
                      </div>
                      <p className="text-sage-600 text-xs">Video, Community Management & Streaming</p>
                    </Link>
                    <Link
                      to="/services/developpement-digital"
                      className="block p-4 bg-sage-50/50 hover:bg-sage-100/50 rounded-xl transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <h4 className="text-sage-700 font-bold text-sm">Développement Digital</h4>
                      </div>
                      <p className="text-sage-600 text-xs">Audit, Formation, Automatisation, ERP & Sites web</p>
                    </Link>
                    <Link
                      to="/services/solutions-externes"
                      className="block p-4 bg-blue-50/50 hover:bg-blue-100/50 rounded-xl transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h4 className="text-sage-700 font-bold text-sm">Solutions Externes</h4>
                      </div>
                      <p className="text-sage-600 text-xs">Finance, Logistique, IT Reconditionné & RH</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* CAS D'USAGE */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveDropdown(activeDropdown === 'cas-usage' ? null : 'cas-usage')
                }}
                className="text-sage-700 hover:text-sage-500 font-medium flex items-center gap-1 transition-colors"
              >
                Cas d'usage
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown CAS D'USAGE */}
              {activeDropdown === 'cas-usage' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white/90 backdrop-blur-md rounded-2xl border border-sage-400/20 shadow-lg p-4 z-[200]">
                  <div className="space-y-2">
                    <Link to="/use-cases/pme-tpe" className="flex items-center gap-3 px-4 py-3 bg-sage-50/50 hover:bg-sage-100/50 rounded-xl transition-colors">
                      <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-sage-700 font-medium text-sm">PME & TPE</span>
                    </Link>
                    <Link to="/use-cases/comptabilite" className="flex items-center gap-3 px-4 py-3 bg-amber-50/50 hover:bg-amber-100/50 rounded-xl transition-colors">
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sage-700 font-medium text-sm">Comptabilité & Finance</span>
                    </Link>
                    <Link to="/use-cases/rh-recrutement" className="flex items-center gap-3 px-4 py-3 bg-blue-50/50 hover:bg-blue-100/50 rounded-xl transition-colors">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-sage-700 font-medium text-sm">RH & Recrutement</span>
                    </Link>
                    <Link to="/use-cases/logistique" className="flex items-center gap-3 px-4 py-3 bg-purple-50/50 hover:bg-purple-100/50 rounded-xl transition-colors">
                      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                      </svg>
                      <span className="text-sage-700 font-medium text-sm">Logistique</span>
                    </Link>
                    <Link to="/use-cases/it-services" className="flex items-center gap-3 px-4 py-3 bg-rose-50/50 hover:bg-rose-100/50 rounded-xl transition-colors">
                      <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sage-700 font-medium text-sm">IT Services</span>
                    </Link>
                    <Link to="/use-cases/marketing" className="flex items-center gap-3 px-4 py-3 bg-fuchsia-50/50 hover:bg-fuchsia-100/50 rounded-xl transition-colors">
                      <svg className="w-5 h-5 text-fuchsia-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                      <span className="text-sage-700 font-medium text-sm">Marketing</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* RESSOURCES */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveDropdown(activeDropdown === 'ressources' ? null : 'ressources')
                }}
                className="text-sage-700 hover:text-sage-500 font-medium flex items-center gap-1 transition-colors"
              >
                Ressources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown RESSOURCES */}
              {activeDropdown === 'ressources' && (
                <div className="absolute top-full right-0 mt-2 w-[420px] bg-white/90 backdrop-blur-md rounded-2xl border border-sage-400/20 shadow-lg p-6 z-[200]">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Blog */}
                    <Link to="/blog" className="p-4 bg-sage-50/50 rounded-xl hover:bg-sage-100/50 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <h4 className="text-sage-700 font-bold text-sm">Blog</h4>
                      </div>
                      <p className="text-sage-600 text-xs">Articles & guides techniques</p>
                    </Link>

                    {/* Communauté */}
                    <Link to="/community" className="p-4 bg-sage-50/50 rounded-xl hover:bg-sage-100/50 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h4 className="text-sage-700 font-bold text-sm">Communauté</h4>
                      </div>
                      <p className="text-sage-600 text-xs">Skool, Telegram & Reddit</p>
                    </Link>

                    {/* Support & FAQ */}
                    <Link to="/support" className="p-4 bg-blue-50/50 rounded-xl hover:bg-blue-100/50 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <h4 className="text-sage-700 font-bold text-sm">Support & FAQ</h4>
                      </div>
                      <p className="text-sage-600 text-xs">Questions fréquentes & IA</p>
                    </Link>

                    {/* À propos */}
                    <Link to="/about" className="p-4 bg-sage-50/50 rounded-xl hover:bg-sage-100/50 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="text-sage-700 font-bold text-sm">À propos</h4>
                      </div>
                      <p className="text-sage-600 text-xs">Notre mission & équipe</p>
                    </Link>

                    {/* Nos consultants */}
                    <Link to="/consultants" className="p-4 bg-sage-50/50 rounded-xl hover:bg-sage-100/50 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <h4 className="text-sage-700 font-bold text-sm">Nos consultants</h4>
                      </div>
                      <p className="text-sage-600 text-xs">Rencontrez notre équipe</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* TARIFS - lien direct */}
            <Link to="/pricing" className="text-sage-700 hover:text-sage-500 font-medium transition-colors ml-1">
              Tarifs
            </Link>
          </nav>

          {/* CTA Section - Language Selector + Login */}
          <div className="flex items-center gap-3 z-[100] relative">
            {/* Language Selector - Desktop only */}
            <div className="hidden md:block relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-2 bg-white/80 border border-sage-300 text-sage-700 rounded-lg font-medium hover:border-sage-400 focus:border-sage-500 focus:outline-none transition-colors appearance-none cursor-pointer pr-8"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23556b55'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1.2em 1.2em',
                }}
              >
                <option value="FR">FR</option>
                <option value="NL">NL</option>
                <option value="ES">ES</option>
                <option value="EN">EN</option>
                <option value="DE">DE</option>
                <option value="IT">IT</option>
              </select>
            </div>

            {/* Login Icon Button */}
            <a
              href="#login"
              className="bg-sage-400 hover:bg-sage-500 text-white p-2 rounded-lg transition-all"
              aria-label="Login"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Menu hamburger ouvert */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)}>
          <div className="bg-white max-h-[90vh] overflow-y-auto rounded-b-3xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Logo au centre du menu */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[60]">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img src={logoMini} alt="SevivɘƧ" className="h-10" />
              </Link>
            </div>

            <div className="flex flex-col pt-20 px-8 pb-8 lg:px-16">
            {/* Navigation principale - RESPONSIVE */}
            <nav className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-8 mb-8">
              {/* Services - avec reveal au hover - EN PREMIER */}
              <div
                onMouseEnter={() => setHoveredSection('services')}
                onMouseLeave={() => setHoveredSection(null)}
                className="lg:col-span-2 group"
              >
                <h3 className="text-xl font-bold text-sage-700 mb-3 cursor-default">Services</h3>
                <div className={`flex flex-col gap-2 pl-4 transition-all duration-300 overflow-hidden ${
                  hoveredSection === 'services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:max-h-0 lg:opacity-0'
                }`}>
                  <Link to="/services/marketing-digital" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    Marketing Digital
                  </Link>
                  <Link to="/services/developpement-digital" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Développement Digital
                  </Link>
                  <Link to="/services/solutions-externes" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Solutions Externes
                  </Link>
                </div>
              </div>

              {/* Cas d'usage - avec reveal au hover */}
              <div
                onMouseEnter={() => setHoveredSection('cas-usage')}
                onMouseLeave={() => setHoveredSection(null)}
                className="group"
              >
                <h3 className="text-xl font-bold text-sage-700 mb-3 cursor-default">Cas d'usage</h3>
                <div className={`flex flex-col gap-2 pl-4 transition-all duration-300 overflow-hidden ${
                  hoveredSection === 'cas-usage' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:max-h-0 lg:opacity-0'
                }`}>
                  <Link to="/use-cases/pme-tpe" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    PME & TPE
                  </Link>
                  <Link to="/use-cases/comptabilite" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Comptabilité & Finance
                  </Link>
                  <Link to="/use-cases/rh-recrutement" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    RH & Recrutement
                  </Link>
                  <Link to="/use-cases/logistique" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                    Logistique
                  </Link>
                  <Link to="/use-cases/it-services" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    IT Services
                  </Link>
                  <Link to="/use-cases/marketing" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 text-fuchsia-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    Marketing
                  </Link>
                </div>
              </div>

              {/* Ressources - avec reveal au hover */}
              <div
                onMouseEnter={() => setHoveredSection('ressources')}
                onMouseLeave={() => setHoveredSection(null)}
                className="group"
              >
                <h3 className="text-xl font-bold text-sage-700 mb-3 cursor-default">Ressources</h3>
                <div className={`flex flex-col gap-2 pl-4 transition-all duration-300 overflow-hidden ${
                  hoveredSection === 'ressources' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:max-h-0 lg:opacity-0'
                }`}>
                  <Link to="/blog" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Blog
                  </Link>
                  <Link to="/community" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Communauté
                  </Link>
                  <Link to="/support" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Support & FAQ
                  </Link>
                  <Link to="/about" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    À propos
                  </Link>
                  <Link to="/consultants" onClick={() => setMenuOpen(false)} className="text-sage-600 hover:text-sage-500 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Nos consultants
                  </Link>
                </div>
              </div>

              {/* Tarifs - lien direct (pas de sous-menu) */}
              <div>
                <Link to="/pricing" onClick={() => setMenuOpen(false)} className="text-xl font-bold text-sage-700 hover:text-sage-500 transition-colors block">
                  Tarifs
                </Link>
              </div>
            </nav>

            {/* Séparateur */}
            <div className="border-t border-sage-200 my-6"></div>

            {/* Sélecteur de langue - dropdown */}
            <div className="relative w-full max-w-xs">
              <label htmlFor="language-select" className="block text-xs text-sage-600 mb-2 font-semibold uppercase tracking-wider">
                Langue
              </label>
              <select
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-2 pr-10 bg-white border-2 border-sage-200 text-sage-700 rounded-lg font-medium hover:border-sage-300 focus:border-sage-400 focus:outline-none transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23556b55'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1.5em 1.5em',
                }}
              >
                <option value="FR">Français</option>
                <option value="EN">English</option>
                <option value="NL">Nederlands</option>
                <option value="ES">Español</option>
                <option value="DE">Deutsch</option>
                <option value="IT">Italiano</option>
              </select>
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header