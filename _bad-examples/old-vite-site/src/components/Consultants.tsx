import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'

// ============================================
// TYPES
// ============================================
interface Consultant {
  id: string
  name: string
  title: string
  specialty: string
  bio: string[]
  image?: string
  country: string
}

type Country = 'benelux' | 'france' | 'germany' | 'spain' | 'ireland' | 'dubai'

// ============================================
// DONNÉES DES CONSULTANTS
// ============================================
const consultantsData: Record<Country, Consultant[]> = {
  benelux: [
    {
      id: 'kevin-lavenir',
      name: 'Kevin Lavenir',
      title: 'ERP, FINANCE & LOGISTIQUE',
      specialty: 'Expert ERP & Systèmes Financiers',
      bio: [
        'Kevin Lavenir, de formation comptable, possède plus de 20 ans d\'expérience en logistique et en finance. Il a travaillé toute sa carrière sur des systèmes ERP pour de grandes entreprises, en manipulant les solutions les plus reconnues du marché.',
        'En parallèle, il nourrit une véritable passion pour le marketing digital et tout ce qui s\'y rattache. Son expertise fine des ERP s\'applique naturellement à la finance, à la comptabilité, à la logistique et à d\'autres domaines encore.',
        'À cela s\'ajoute un attrait marqué pour le marketing digital et le streaming de contenu vidéo, qui lui permet de relier les enjeux techniques et financiers aux enjeux de visibilité et de performance business.'
      ],
      country: 'benelux'
    },
    {
      id: 'olivier-kalukuta',
      name: 'Olivier Kalukuta',
      title: 'INTELLIGENCE ARTIFICIELLE & INGÉNIERIE',
      specialty: 'Architecte IA & Systèmes Intelligents',
      bio: [
        'Olivier Kalukuta est ingénieur informatique et spécialiste reconnu en intelligence artificielle. Esprit cartésien et mathématicien de haut niveau, il excelle dans la résolution de problématiques complexes par des approches algorithmiques avancées.',
        'Fondateur d\'une structure dédiée à l\'accompagnement des futurs scientifiques, ingénieurs et mathématiciens, il transmet depuis des années son expertise technique à travers des sessions de mentorat individualisées et des consultations stratégiques.',
        'Passionné par l\'automatisation intelligente, Olivier développe actuellement sa propre IA générative capable d\'accompagner et de former de manière autonome. Sa vision : démocratiser l\'accès aux connaissances avancées en IA pour les entreprises qui souhaitent franchir un cap technologique.'
      ],
      country: 'benelux'
    }
  ],
  france: [
    {
      id: 'laurent-drouillon',
      name: 'Laurent Drouillon',
      title: 'MARKETING & LOGISTIQUE GRANDE DISTRIBUTION',
      specialty: 'Stratège Retail & Supply Chain Management',
      bio: [
        'Laurent Drouillon est ingénieur en marketing et ancien cadre dirigeant chez Carrefour, où il a exercé pendant plus de 15 ans à des postes de direction stratégique. Il a piloté des départements dont l\'envergure équivalait à celle d\'organisations nationales entières.',
        'Expert reconnu en marketing de la grande distribution et en optimisation logistique, Laurent excelle dans la gestion de flux complexes, la coordination d\'équipes internationales et le déploiement de stratégies retail à grande échelle. Sa compréhension fine des enjeux opérationnels et commerciaux lui permet d\'identifier rapidement les leviers de performance.',
        'Aujourd\'hui consultant, Laurent accompagne les entreprises dans leur transformation digitale en apportant une vision pragmatique forgée par des années d\'expérience terrain dans l\'un des groupes de distribution les plus exigeants au monde. Son approche : allier excellence opérationnelle et innovation technologique.'
      ],
      country: 'france'
    }
  ],
  germany: [],
  spain: [
    {
      id: 'yvan-barbera',
      name: 'Yvan Barbera',
      title: 'STRATÉGIE DIGITALE & CONTENU',
      specialty: 'Expert Marketing Digital & Transformation',
      bio: [
        'Yvan Barbera évolue depuis plus de 20 ans dans le marketing digital, la création de contenu intelligent, la communication et le développement de solutions digitales complètes - la base nécessaire pour que SEVIVES puisse proposer une valeur capable de résoudre les problématiques digitales des entreprises à 360 degrés.',
        'Au fil de ces années, dans des domaines variés, Yvan a développé une compétence spécifique : la capacité à synthétiser, structurer, hiérarchiser et transformer une problématique afin d\'y apporter une solution concrète.',
        'Cette passion pour l\'organisation et l\'efficacité l\'a naturellement conduit à concevoir des solutions digitales complètes, cohérentes et performantes.'
      ],
      country: 'spain'
    }
  ],
  ireland: [
    {
      id: 'jade-kalukuta',
      name: 'Jade Kalukuta',
      title: 'DÉVELOPPEMENT WEB & INNOVATION',
      specialty: 'Prodige du Code & Architecture Frontend',
      bio: [
        'Jade Kalukuta est probablement le consultant le plus jeune et le plus brillant de notre réseau. Diplômé en informatique, il a développé ses premiers sites web professionnels dès l\'âge de 13 ans, démontrant une précocité et une intuition technique exceptionnelles.',
        'Reconnu par ses pairs comme un génie de la programmation, Jade maîtrise les architectures modernes, les frameworks de pointe et les méthodologies agiles avec une aisance déconcertante. Sa jeunesse est un atout : il pense nativement "digital" et anticipe les tendances avant qu\'elles ne deviennent mainstream.',
        'Spécialisé dans le développement d\'applications web haute performance et d\'interfaces utilisateur innovantes, Jade apporte une vision fraîche et des solutions techniques d\'avant-garde qui placent systématiquement ses clients en avance sur leur marché.'
      ],
      country: 'ireland'
    }
  ],
  dubai: [
    {
      id: 'mohamed-arbaoui',
      name: 'Mohamed Arbaoui',
      title: 'STRATÉGIE D\'ENTREPRISE & COMMUNICATION',
      specialty: 'Expert Multilingue & Business Intelligence',
      bio: [
        'Mohamed Arbaoui est un stratège d\'entreprise d\'exception. Polyglotte accompli et fin connaisseur des dynamiques internationales, il possède une capacité rare à décrypter les besoins réels des organisations et à formuler des stratégies de transformation claires et actionnables.',
        'Sa force réside dans sa compréhension profonde des enjeux business, combinée à une maîtrise linguistique qui lui permet de naviguer entre cultures et marchés avec une fluidité remarquable. Mohamed excelle dans l\'analyse situationnelle, la modélisation de processus et la conception de solutions digitales alignées sur les objectifs métier.',
        'Basé à Dubaï, hub international par excellence, Mohamed accompagne les entreprises dans leur expansion et leur digitalisation en apportant une vision globale, pragmatique et orientée résultats. Son approche : transformer la complexité en simplicité opérationnelle.'
      ],
      country: 'dubai'
    }
  ]
}

// ============================================
// COORDONNÉES DES PAYS
// ============================================
const countriesCoordinates: Record<Country, { name: string; coordinates: [number, number] }> = {
  benelux: { name: 'Benelux', coordinates: [4.6517, 50.8503] },
  france: { name: 'France', coordinates: [2.3522, 48.8566] },
  germany: { name: 'Allemagne', coordinates: [13.4050, 52.5200] },
  spain: { name: 'Espagne', coordinates: [-3.7038, 40.4168] },
  ireland: { name: 'Irlande', coordinates: [-6.2603, 53.3498] },
  dubai: { name: 'Dubaï', coordinates: [55.2708, 25.2048] }
}

// Codes ISO des pays à mettre en évidence (Benelux = Belgique, Pays-Bas, Luxembourg)
const highlightedCountries: Record<Country, string[]> = {
  benelux: ['BEL', 'NLD', 'LUX'],
  france: ['FRA'],
  germany: ['DEU'],
  spain: ['ESP'],
  ireland: ['IRL'],
  dubai: ['ARE'] // UAE pour Dubai
}

// ============================================
// COMPOSANT CARTE CONSULTANT
// ============================================
function ConsultantCard({ consultant }: { consultant: Consultant }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-sage-200 shadow-xl"
      whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
    >
      <div className="mb-6">
        <h3 className="text-3xl font-bold text-sage-700 mb-2">{consultant.name}</h3>
        <p className="text-lg font-semibold text-sage-500 uppercase tracking-wider mb-2">
          {consultant.title}
        </p>
        <p className="text-sage-600 italic">{consultant.specialty}</p>
      </div>

      <div className="space-y-4 text-sage-600 leading-relaxed">
        {consultant.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <button className="mt-6 w-full bg-sage-400 hover:bg-sage-500 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
        Contacter {consultant.name.split(' ')[0]}
      </button>
    </motion.div>
  )
}

// ============================================
// COMPOSANT CARTE DU MONDE INTERACTIVE
// ============================================
function InteractiveWorldMap({ onCountrySelect, hoveredCountry, setHoveredCountry }: {
  onCountrySelect: (country: Country) => void
  hoveredCountry: Country | null
  setHoveredCountry: (country: Country | null) => void
}) {
  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

  const getCountryFromISO = (iso: string): Country | null => {
    const entry = Object.entries(highlightedCountries).find(([_, isoCodes]) => isoCodes.includes(iso))
    return entry ? entry[0] as Country : null
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-blue-400/20 via-blue-300/15 to-blue-500/25 backdrop-blur-md rounded-3xl p-8 border-2 border-rose-300/70 shadow-2xl">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 400,
          center: [15, 50]
        }}
        style={{ width: "100%", height: "auto", filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))", pointerEvents: "auto" }}
      >
        <ZoomableGroup center={[15, 50]} zoom={1} maxZoom={1} minZoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isoCode = geo.id
                const country = getCountryFromISO(isoCode)
                const isHighlighted = country !== null
                const hasConsultants = country && consultantsData[country].length > 0

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if (country) setHoveredCountry(country)
                    }}
                    onMouseLeave={() => {
                      setHoveredCountry(null)
                    }}
                    onClick={() => {
                      if (country && hasConsultants) {
                        onCountrySelect(country)
                      }
                    }}
                    style={{
                      default: {
                        fill: isHighlighted
                          ? hasConsultants
                            ? "#fbbf24"
                            : "#fed7aa"
                          : "#fef3c7",
                        stroke: "#f59e0b",
                        strokeWidth: 1,
                        outline: "none",
                        cursor: hasConsultants ? "pointer" : "default",
                        opacity: isHighlighted ? 0.45 : 0.3,
                      },
                      hover: {
                        fill: isHighlighted
                          ? hasConsultants
                            ? "#f59e0b"
                            : "#fdba74"
                          : "#fef3c7",
                        stroke: "#d97706",
                        strokeWidth: 1.5,
                        outline: "none",
                        cursor: hasConsultants ? "pointer" : "default",
                        opacity: isHighlighted ? 0.6 : 0.4,
                      },
                      pressed: {
                        fill: hasConsultants ? "#d97706" : "#fdba74",
                        stroke: "#b45309",
                        strokeWidth: 1,
                        outline: "none",
                        opacity: 0.7,
                      },
                    }}
                  />
                )
              })
            }
          </Geographies>

          {/* Markers pour chaque pays */}
          {Object.entries(countriesCoordinates).map(([countryKey, data]) => {
            const country = countryKey as Country
            const hasConsultants = consultantsData[country].length > 0
            const isHovered = country === hoveredCountry

            return (
              <Marker
                key={country}
                coordinates={data.coordinates}
                onMouseEnter={() => setHoveredCountry(country)}
                onMouseLeave={() => setHoveredCountry(null)}
                onClick={() => {
                  if (hasConsultants) onCountrySelect(country)
                }}
                style={{ cursor: hasConsultants ? 'pointer' : 'default' }}
              >
                <g filter="url(#marker-shadow)">
                  {/* Shadow filter definition */}
                  <defs>
                    <filter id="marker-shadow">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                    </filter>
                  </defs>

                  {/* Cercle externe pulsant */}
                  <motion.circle
                    r={isHovered ? 12 : 10}
                    fill={hasConsultants ? "#8ebe9d" : "#b0b0b0"}
                    opacity={0.3}
                    animate={{
                      scale: isHovered ? [1, 1.3, 1] : [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />

                  {/* Cercle principal */}
                  <motion.circle
                    r={isHovered ? 10 : 8}
                    fill={hasConsultants ? "#8ebe9d" : "#b0b0b0"}
                    stroke="white"
                    strokeWidth={2.5}
                    style={{ filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))" }}
                    animate={hasConsultants ? {
                      scale: [1, 1.15, 1]
                    } : {}}
                    transition={hasConsultants ? {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    } : {}}
                  />

                  {/* Label ville */}
                  <text
                    y={26}
                    textAnchor="middle"
                    fill={isHovered ? "#3d493d" : "#5f735f"}
                    fontSize={isHovered ? 13 : 11}
                    fontWeight="bold"
                    style={{
                      pointerEvents: 'none',
                      textShadow: '0 1px 3px rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    {data.name}
                  </text>
                </g>
              </Marker>
            )
          })}
        </ZoomableGroup>
      </ComposableMap>

      {/* Légende */}
      <div className="mt-10 flex justify-center gap-6 flex-wrap bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-sage-300 shadow-lg">
        <div className="flex items-center gap-3 bg-sage-50 px-4 py-2 rounded-xl">
          <div className="w-5 h-5 rounded-full bg-sage-400 shadow-md border-2 border-white"></div>
          <span className="text-sage-800 text-sm font-bold">Consultants disponibles</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl">
          <div className="w-5 h-5 rounded-full bg-gray-400 shadow-md border-2 border-white"></div>
          <span className="text-gray-700 text-sm font-bold">Bientôt disponible</span>
        </div>
      </div>
    </div>
  )
}

// ============================================
// COMPOSANT PRINCIPAL CONSULTANTS
// ============================================
function Consultants() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null)

  const handleCountrySelect = (country: Country) => {
    if (consultantsData[country].length > 0) {
      setSelectedCountry(country)
    }
  }

  const handleBackToMap = () => {
    setSelectedCountry(null)
  }

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-sage-700 mb-6">
            Nos Consultants Experts
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            Sélectionnez une région sur la carte pour découvrir nos consultants spécialisés
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedCountry ? (
            <motion.div
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <InteractiveWorldMap
                onCountrySelect={handleCountrySelect}
                hoveredCountry={hoveredCountry}
                setHoveredCountry={setHoveredCountry}
              />

              {hoveredCountry && consultantsData[hoveredCountry].length > 0 && (
                <motion.div
                  className="mt-10 text-center bg-gradient-to-br from-sage-400 to-sage-500 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto border-2 border-white shadow-2xl"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-white font-bold text-2xl">
                      {countriesCoordinates[hoveredCountry].name}
                    </p>
                  </div>
                  <p className="text-white/90 text-lg font-semibold">
                    {consultantsData[hoveredCountry].length} consultant{consultantsData[hoveredCountry].length > 1 ? 's' : ''} disponible{consultantsData[hoveredCountry].length > 1 ? 's' : ''}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="consultants"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={handleBackToMap}
                className="mb-8 flex items-center gap-2 text-sage-600 hover:text-sage-700 font-semibold transition-colors group"
              >
                <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour à la carte
              </button>

              <h2 className="text-4xl font-bold text-sage-700 mb-8">
                Consultants en {countriesCoordinates[selectedCountry].name}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {consultantsData[selectedCountry].map((consultant) => (
                  <ConsultantCard key={consultant.id} consultant={consultant} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section recrutement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 bg-gradient-to-br from-sage-400/30 via-sage-300/20 to-transparent backdrop-blur-lg border-2 border-sage-400/40 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-br from-sage-400 to-sage-500 p-6 rounded-2xl shadow-xl">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-sage-700 mb-4">
              Devenez Consultant SevivɘƧ
            </h2>
            <p className="text-xl text-sage-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Vous êtes expert en IA, automatisation, développement ou transformation digitale ?
              <br />
              <span className="font-semibold text-sage-700">SevivɘƧ recrute des talents passionnés</span> pour rejoindre notre réseau international de consultants.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-sage-300/50"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                  className="mb-3"
                >
                  <svg className="w-12 h-12 mx-auto text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h3 className="font-bold text-sage-700 mb-2">Réseau International</h3>
                <p className="text-sage-600 text-sm">Collaborez avec des experts du monde entier</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-sage-300/50"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
                  className="mb-3"
                >
                  <svg className="w-12 h-12 mx-auto text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <h3 className="font-bold text-sage-700 mb-2">Missions Stimulantes</h3>
                <p className="text-sage-600 text-sm">Des projets innovants et challengeants</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-sage-300/50"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.8 }}
                  className="mb-3"
                >
                  <svg className="w-12 h-12 mx-auto text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </motion.div>
                <h3 className="font-bold text-sage-700 mb-2">Croissance & Impact</h3>
                <p className="text-sage-600 text-sm">Développez votre expertise et votre réseau</p>
              </motion.div>
            </div>

            <motion.a
              href="mailto:hello@sevives.com?subject=Candidature Consultant SevivɘƧ"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-sage-400 hover:bg-sage-500 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Postuler maintenant →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Consultants
