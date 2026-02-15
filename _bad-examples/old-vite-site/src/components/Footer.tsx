import { Link } from 'react-router-dom'
import logoMini from '../assets/logo-mini.png'
import cs50aiHarvard from '../assets/certifications/cs50ai-harvard.webp'

// ============================================
// Icônes réseaux sociaux (SVG)
// ============================================
const SocialIcons = {
  LinkedIn: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  YouTube: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  X: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  GitHub: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Reddit: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  ),
  Skool: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">S</text>
    </svg>
  ),
  Instagram: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  Facebook: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  TikTok: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  ),
}

// ============================================
// Données des liens
// ============================================
const footerLinks = {
  navigation: [
    { label: "Cas d'usage", href: '#cas-usage', isRoute: false },
    { label: 'Features', href: '#features', isRoute: false },
    { label: 'Tarification', href: '/pricing', isRoute: true },
    { label: 'À propos', href: '#about', isRoute: false },
  ],
  resources: [
    { label: 'Blog', href: '#blog' },
    { label: 'Documentation', href: '#docs' },
    { label: 'Support', href: '#support' },
    { label: 'Changelog', href: '#changelog' },
  ],
  social: [
    { name: 'LinkedIn', href: '#' },
    { name: 'YouTube', href: 'https://www.youtube.com/channel/UCddaZ95XJ_noFOrGZXzxAow' },
    { name: 'Instagram', href: 'https://www.instagram.com/sevivesagency/' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@sevivesagency' },
    { name: 'X', href: 'https://x.com/sevivesagency' },
    { name: 'GitHub', href: 'https://github.com/Sevives' },
    { name: 'Reddit', href: 'https://www.reddit.com/user/SevivesAgency/' },
    { name: 'Skool', href: 'https://www.skool.com/@seviv-agency-9386' },
    { name: 'Facebook', href: '#' },
  ],
}

// ============================================
// Composant principal Footer
// ============================================
function Footer() {
  return (
    <footer className="bg-taupe-100/80 backdrop-blur-sm border-t border-sage-400/20">
      <div className="max-w-6xl 2xl:max-w-[85%] mx-auto px-8 2xl:px-16 py-16 2xl:py-20">
        
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 2xl:gap-16 mb-12 2xl:mb-16">

          {/* Colonne 1 : Logo + Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoMini} alt="SevivɘƧ" className="w-10 h-10 2xl:w-12 2xl:h-12" />
              <span className="text-xl 2xl:text-2xl font-bold text-sage-700">SevivɘƧ Agency</span>
            </div>
            <p className="text-sage-700 text-sm 2xl:text-base mb-6">
              Automatisation IA & transformation digitale pour PME. Des solutions pragmatiques, orientées ROI.
            </p>
            {/* Réseaux sociaux */}
            <div className="grid grid-cols-3 gap-3 max-w-[150px] mb-4">
              {footerLinks.social.map((social) => {
                const IconComponent = SocialIcons[social.name as keyof typeof SocialIcons]
                return (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 2xl:w-10 2xl:h-10 bg-white/50 hover:bg-sage-400 rounded-lg flex items-center justify-center text-sage-700 hover:text-white transition-all duration-300">
                    <IconComponent />
                  </a>
                )
              })}
            </div>
            {/* Certification Harvard CS50 AI */}
            <a
              href="https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-white/50 hover:bg-sage-400/20 rounded-lg transition-all duration-300 group"
              title="Harvard CS50 AI"
            >
              <img
                src={cs50aiHarvard}
                alt="Harvard CS50 AI"
                className="h-5 2xl:h-6 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-xs 2xl:text-sm text-sage-600 group-hover:text-sage-700 font-medium">
                Harvard CS50 AI
              </span>
            </a>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h4 className="font-semibold text-sage-700 2xl:text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-sage-700 2xl:text-base hover:text-sage-600 transition-colors duration-300">{link.label}</Link>
                  ) : (
                    <a href={link.href} className="text-sage-700 2xl:text-base hover:text-sage-600 transition-colors duration-300">{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Ressources */}
          <div>
            <h4 className="font-semibold text-sage-700 2xl:text-lg mb-4">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sage-700 2xl:text-base hover:text-sage-600 transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h4 className="font-semibold text-sage-700 2xl:text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sage-700 2xl:text-base">
              <li>
                <a href="mailto:hello@sevives.com" className="hover:text-sage-600 transition-colors duration-300">hello@sevives.com</a>
              </li>
              <li>
                <a href="tel:+32123456789" className="hover:text-sage-600 transition-colors duration-300">+32 123 456 789</a>
              </li>
              <li>Bruxelles, Belgique</li>
            </ul>
          </div>

        </div>

        {/* Barre du bas */}
        <div className="border-t border-sage-400/20 pt-8 2xl:pt-10 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright + liens légaux */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm 2xl:text-base text-sage-700">
            <span>© 2026 SevivɘƧ Agency</span>
            <a href="#mentions" className="hover:text-sage-600 transition-colors">Mentions légales</a>
            <a href="#cgu" className="hover:text-sage-600 transition-colors">CGU</a>
            <a href="#rgpd" className="hover:text-sage-600 transition-colors">RGPD</a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer