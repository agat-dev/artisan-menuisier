"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Star,
  Calendar,
  Clock,
  Hammer,
  Ruler,
  Eye,
  Heart,
  Coffee,
  Leaf,
  Users,
  Handshake,
  Facebook,
  Instagram,
  Twitter,
  MailOpenIcon as Envelope,
} from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useState, useRef } from "react"

export default function BoisEtRacines() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Refs pour les animations au scroll
  const heroRef = useRef(null)
  const creationsRef = useRef(null)
  const atelierRef = useRef(null)
  const temoignagesRef = useRef(null)
  const contactRef = useRef(null)

  // Hook useInView pour détecter quand les sections sont visibles
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const creationsInView = useInView(creationsRef, { once: true, margin: "-100px" })
  const atelierInView = useInView(atelierRef, { once: true, margin: "-100px" })
  const temoignagesInView = useInView(temoignagesRef, { once: true, margin: "-100px" })
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" })

  // Variantes d'animation pour les éléments
  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-creme-chaud relative overflow-hidden">
      {/* Arrière-plan SVG animé sophistiqué - Version chaude */}
      <div className="absolute inset-0 opacity-60">
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Dégradés chauds avec accent miel */}
            <linearGradient id="woodGrain1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8C5C4A" stopOpacity="0.15">
                <animate attributeName="stop-opacity" values="0.15;0.25;0.15" dur="6s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#D4A574" stopOpacity="0.12">
                <animate attributeName="stop-opacity" values="0.12;0.22;0.12" dur="8s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#BF8C6F" stopOpacity="0.18">
                <animate attributeName="stop-opacity" values="0.18;0.28;0.18" dur="7s" repeatCount="indefinite" />
              </stop>
            </linearGradient>

            <linearGradient id="woodGrain2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E6B85C" stopOpacity="0.14">
                <animate attributeName="stop-opacity" values="0.14;0.24;0.14" dur="9s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#8C5C4A" stopOpacity="0.16">
                <animate attributeName="stop-opacity" values="0.16;0.26;0.16" dur="5s" repeatCount="indefinite" />
              </stop>
            </linearGradient>

            <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F2C464" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4A574" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Veines de bois organiques plus visibles */}
          <g opacity="0.7">
            <path d="M0,200 Q400,150 800,180 T1600,160 L1920,140 L1920,0 L0,0 Z" fill="url(#woodGrain1)">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 30,-15; 0,0"
                dur="12s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M0,400 Q600,350 1200,380 T1920,360 L1920,200 L0,250 Z" fill="url(#woodGrain2)">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -25,12; 0,0"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M0,600 Q500,580 1000,600 T1920,590 L1920,450 L0,480 Z" fill="url(#woodGrain1)">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 20,18; 0,0"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          {/* Particules flottantes plus visibles avec accent miel */}
          <g opacity="0.6">
            {/* Particule 1 */}
            <circle cx="200" cy="800" r="4" fill="url(#particleGlow)">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 100,-300; 200,-600"
                dur="20s"
                repeatCount="indefinite"
              />
              <animate attributeName="opacity" values="0;1;0" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* Particule 2 */}
            <circle cx="800" cy="900" r="3" fill="#D4A574">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -80,-250; -160,-500"
                dur="18s"
                repeatCount="indefinite"
                begin="3s"
              />
              <animate attributeName="opacity" values="0;0.8;0" dur="18s" repeatCount="indefinite" begin="3s" />
            </circle>

            {/* Particule 3 */}
            <circle cx="1400" cy="850" r="5" fill="#E6B85C">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 120,-400; 240,-800"
                dur="25s"
                repeatCount="indefinite"
                begin="6s"
              />
              <animate attributeName="opacity" values="0;0.9;0" dur="25s" repeatCount="indefinite" begin="6s" />
            </circle>

            {/* Particule 4 */}
            <circle cx="600" cy="950" r="3.5" fill="#8C5C4A">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -60,-200; -120,-400"
                dur="16s"
                repeatCount="indefinite"
                begin="9s"
              />
              <animate attributeName="opacity" values="0;0.7;0" dur="16s" repeatCount="indefinite" begin="9s" />
            </circle>

            {/* Particule 5 */}
            <circle cx="1200" cy="1000" r="4.5" fill="#F2C464">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 150,-350; 300,-700"
                dur="22s"
                repeatCount="indefinite"
                begin="2s"
              />
              <animate attributeName="opacity" values="0;0.8;0" dur="22s" repeatCount="indefinite" begin="2s" />
            </circle>
          </g>

          {/* Motifs géométriques d'assemblage plus visibles */}
          <g opacity="0.4">
            {/* Assemblage 1 */}
            <g>
              <rect x="150" y="200" width="60" height="12" fill="#8C5C4A" rx="3">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="8s" repeatCount="indefinite" />
              </rect>
              <rect x="170" y="180" width="12" height="60" fill="#D4A574" rx="3">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="8s" repeatCount="indefinite" begin="1s" />
              </rect>
            </g>

            {/* Assemblage 2 */}
            <g>
              <rect x="1500" y="400" width="50" height="10" fill="#E6B85C" rx="3">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="10s" repeatCount="indefinite" begin="3s" />
              </rect>
              <rect x="1520" y="385" width="10" height="50" fill="#8C5C4A" rx="3">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="10s" repeatCount="indefinite" begin="5s" />
              </rect>
            </g>

            {/* Assemblage 3 */}
            <g>
              <rect x="400" y="700" width="70" height="14" fill="#F2C464" rx="3">
                <animate attributeName="opacity" values="0.2;0.7;0.2" dur="12s" repeatCount="indefinite" begin="2s" />
              </rect>
              <rect x="425" y="680" width="14" height="70" fill="#BF8C6F" rx="3">
                <animate attributeName="opacity" values="0.2;0.7;0.2" dur="12s" repeatCount="indefinite" begin="4s" />
              </rect>
            </g>
          </g>

          {/* Ondulations de fond */}
          <g opacity="0.3">
            <path d="M0,1080 Q480,1000 960,1020 T1920,1000 L1920,1080 Z" fill="#8C5C4A">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 0,-30; 0,0"
                dur="14s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          {/* Points lumineux pulsants avec accent miel */}
          <g opacity="0.8">
            <circle cx="300" cy="300" r="3" fill="#F2C464">
              <animate attributeName="r" values="2;6;2" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="1100" cy="500" r="2.5" fill="#D4A574">
              <animate attributeName="r" values="1.5;5;1.5" dur="5s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="5s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle cx="700" cy="750" r="3.5" fill="#E6B85C">
              <animate attributeName="r" values="2;7;2" dur="6s" repeatCount="indefinite" begin="2s" />
              <animate attributeName="opacity" values="0.3;1;0.3" dur="6s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle cx="1600" cy="250" r="2" fill="#F2C464">
              <animate attributeName="r" values="1;4;1" dur="3s" repeatCount="indefinite" begin="0.5s" />
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" begin="0.5s" />
            </circle>
          </g>
        </svg>
      </div>

      {/* Navigation artisanale responsive */}
      <nav className="fixed top-4 right-4 z-50">
        {/* Version desktop */}
        <div className="hidden md:block bg-white/90 backdrop-blur-sm rounded-none px-6 py-3 shadow-xl border-l-4 border-miel-chaud">
          <div className="flex items-center space-x-4">
            <a
              href="#atelier"
              className="text-bois-moyen hover:text-miel-chaud transition-colors text-lg font-medium font-editorial"
            >
              L'Atelier
            </a>
            <div className="w-1 h-1 bg-miel-dore rounded-full"></div>
            <a
              href="#creations"
              className="text-bois-moyen hover:text-miel-chaud transition-colors text-lg font-medium font-editorial"
            >
              Créations
            </a>
            <div className="w-1 h-1 bg-miel-dore rounded-full"></div>
            <a
              href="#contact"
              className="bg-miel-chaud hover:bg-miel-dore text-white rounded-lg px-4 py-2 text-sm font-medium font-editorial transition-colors flex items-center glow-miel"
            >
              <Phone className="w-3 h-3 mr-1" />
              Contact
            </a>
          </div>
        </div>

        {/* Version mobile */}
        <div className="md:hidden">
          {/* Bouton menu hamburger */}
          <motion.button
            className="bg-white/90 backdrop-blur-sm rounded-none p-3 shadow-xl border-l-4 border-miel-chaud"
            onClick={toggleMobileMenu}
            aria-label="Menu de navigation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-6 flex flex-col justify-center items-center space-y-1"
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <motion.span
                className="block w-5 h-0.5 bg-bois-moyen"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-bois-moyen"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-bois-moyen"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>

          {/* Menu mobile plein écran avec Framer Motion */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex flex-col justify-center items-center h-full space-y-8 px-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Logo centré avec animation */}
                  <motion.div
                    className="mb-8"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <Image
                      src="/logo-bois-racines.png"
                      alt="Logo Bois & Racines"
                      width={120}
                      height={120}
                      className="drop-shadow-lg"
                    />
                  </motion.div>

                  {/* Navigation principale avec animations décalées */}
                  <motion.nav
                    className="flex flex-col items-center space-y-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.3,
                        },
                      },
                    }}
                  >
                    {[
                      { href: "#accueil", label: "Accueil" },
                      { href: "#atelier", label: "L'Atelier" },
                      { href: "#creations", label: "Créations" },
                    ].map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        className="text-bois-moyen hover:text-miel-chaud transition-colors text-2xl font-medium font-display py-4 px-8 border-b-2 border-transparent hover:border-miel-chaud"
                        onClick={closeMobileMenu}
                        variants={{
                          hidden: { x: -50, opacity: 0 },
                          visible: { x: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.a>
                    ))}

                    <motion.a
                      href="#contact"
                      className="bg-miel-chaud hover:bg-miel-dore text-white rounded-lg px-8 py-4 text-2xl font-medium font-display transition-colors glow-miel flex items-center mt-8"
                      onClick={closeMobileMenu}
                      variants={{
                        hidden: { y: 50, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="w-6 h-6 mr-3" />
                      Contact
                    </motion.a>
                  </motion.nav>

                  {/* Informations de contact avec animation */}
                  <motion.div
                    className="mt-12 text-center space-y-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <p className="text-miel-profond font-editorial text-lg">"L'authenticité prend racine ici"</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4 text-miel-chaud" />
                      <span className="text-bois-chaud font-editorial">04 73 12 34 56</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Bouton fermer avec animation */}
                <motion.button
                  className="absolute top-6 right-6 bg-miel-chaud/20 backdrop-blur-sm rounded-none p-3 shadow-xl border-l-4 border-miel-chaud"
                  onClick={closeMobileMenu}
                  aria-label="Fermer le menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <span className="block w-5 h-0.5 bg-bois-moyen transform rotate-45 absolute"></span>
                    <span className="block w-5 h-0.5 bg-bois-moyen transform -rotate-45 absolute"></span>
                  </div>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Entrée dans l'univers Bois & Racines */}
      <motion.section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
        id="accueil"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div className="space-y-6 lg:space-y-8" variants={slideInLeft}>
            {/* Logo et plaque artisan */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src="/logo-bois-racines.png"
                  alt="Logo Bois & Racines"
                  width={80}
                  height={80}
                  className="sm:w-[100px] sm:h-[100px] drop-shadow-lg"
                />
              </div>
              <div className="bg-bois-moyen text-creme-chaud px-6 sm:px-8 py-4 sm:py-6 rounded-none shadow-2xl transform -rotate-2 border-t-4 border-miel-solaire text-center sm:text-left">
                <div>
                  <p className="text-xs sm:text-sm opacity-90 font-editorial">Maître Artisan</p>
                  <p className="font-bold text-lg sm:text-xl font-display text-shadow-miel">Bois & Racines</p>
                  <p className="text-xs text-miel-dore font-editorial">Depuis 1998</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-bois-moyen leading-tight font-display">
                L'authenticité
                <span className="block text-miel-chaud font-light italic text-shadow-miel">prend racine ici</span>
              </h1>

              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-none shadow-xl border-l-4 border-miel-dore">
                <p className="text-lg sm:text-xl text-bois-sombre leading-relaxed italic font-editorial">
                  "Dans mon atelier, chaque essence révèle son âme. Le parfum du chêne fraîchement raboté, la douceur du
                  hêtre sous la main, le chant des outils qui façonnent la matière... Ici, l'héritage ancestral renaît
                  dans chaque création."
                </p>
                <div className="flex items-center justify-center lg:justify-start mt-4 space-x-2">
                  <div className="w-8 h-0.5 bg-miel-chaud"></div>
                  <span className="text-miel-profond font-medium font-editorial">Jean-Claude, Maître Artisan</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-8">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-miel-chaud font-display">25</p>
                <p className="text-xs sm:text-sm text-bois-chaud font-editorial">années d'héritage</p>
              </div>
              <div className="w-px h-12 bg-miel-dore"></div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-miel-chaud font-display">500+</p>
                <p className="text-xs sm:text-sm text-bois-chaud font-editorial">créations durables</p>
              </div>
              <div className="w-px h-12 bg-miel-dore"></div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-miel-chaud font-display">100%</p>
                <p className="text-xs sm:text-sm text-bois-chaud font-editorial">bois local</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="relative mt-8 lg:mt-0" variants={slideInRight}>
            {/* Cadre bois authentique */}
            <div className="bg-bois-moyen p-4 sm:p-6 lg:p-8 rounded-none shadow-2xl transform rotate-1 border-t-4 border-miel-solaire">
              <Image
                src="/artisan-jean-claude-portrait.png"
                alt="Jean-Claude, maître artisan de Bois & Racines"
                width={600}
                height={700}
                className="shadow-lg w-full h-auto"
              />
              <div className="mt-4 text-center">
                <p className="text-creme-chaud text-sm italic font-editorial">
                  Jean-Claude dans son atelier, où l'authenticité prend forme
                </p>
              </div>
            </div>

            {/* Outils gravés flottants */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-miel-solaire p-3 sm:p-4 rounded-full shadow-xl glow-miel">
              <Ruler className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-miel-chaud p-3 sm:p-4 rounded-full shadow-xl glow-miel">
              <Hammer className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Carnet de l'artisan */}
      <motion.section
        ref={creationsRef}
        className="py-20 px-4"
        id="creations"
        initial="hidden"
        animate={creationsInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          {/* En-tête manuscrit */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-none p-8 shadow-xl transform -rotate-1 border-b-4 border-miel-dore">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Leaf className="w-8 h-8 text-miel-chaud" />
                <h2 className="text-4xl font-bold text-bois-moyen font-display">Carnet de l'Artisan</h2>
                <Leaf className="w-8 h-8 text-miel-chaud" />
              </div>
              <p className="text-miel-profond italic font-editorial">
                Chaque création raconte l'histoire de sa matière
              </p>
            </div>
          </motion.div>

          {/* Créations authentiques */}
          <div className="space-y-20">
            {/* Création 1 - Bibliothèque Héritage */}
            <motion.div className="grid lg:grid-cols-2 gap-12 items-center" variants={staggerContainer}>
              <motion.div className="order-2 lg:order-1" variants={slideInLeft}>
                <div className="bg-white/80 backdrop-blur-sm rounded-none p-8 shadow-xl border-l-4 border-miel-chaud">
                  <Badge className="bg-miel-chaud/20 text-miel-profond border border-miel-chaud mb-4 font-editorial">
                    Chêne Centenaire • Hiver 2023
                  </Badge>
                  <h3 className="text-3xl font-bold text-bois-moyen mb-4 font-serif-refined">
                    La Bibliothèque Héritage
                  </h3>
                  <p className="text-bois-sombre leading-relaxed mb-6 font-editorial">
                    Née d'un chêne centenaire des forêts du Livradois, cette bibliothèque porte en elle l'âme de
                    l'arbre. Chaque veine raconte cent années de saisons, chaque assemblage révèle la patience de
                    l'artisan. Le parfum du bois fraîchement huilé embaume encore l'atelier.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-miel-dore" />
                      <span className="text-bois-chaud font-editorial">Finition huile de lin pressée à froid</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-miel-dore" />
                      <span className="text-bois-chaud font-editorial">Assemblages tenon-mortaise traditionnels</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="order-1 lg:order-2 relative" variants={slideInRight}>
                <div className="bg-miel-chaud/10 p-6 rounded-none shadow-xl transform rotate-2">
                  <Image
                    src="/bibliotheque-chene-massif.png"
                    alt="Bibliothèque Héritage en chêne centenaire"
                    width={500}
                    height={600}
                    className="shadow-lg"
                  />
                </div>
                {/* Note artisan */}
                <div className="absolute -bottom-4 -left-4 bg-miel-solaire p-4 rounded-lg shadow-lg transform -rotate-6 border-l border-miel-chaud">
                  <p className="text-sm text-bois-moyen italic font-editorial">"3 mois de dialogue avec la matière"</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Création 2 - Cuisine Terroir */}
            <motion.div className="grid lg:grid-cols-2 gap-12 items-center" variants={staggerContainer}>
              <motion.div className="relative" variants={slideInLeft}>
                <div className="bg-miel-dore/10 p-6 rounded-none shadow-xl transform -rotate-2">
                  <Image
                    src="/cuisine-chataignier-auvergne.png"
                    alt="Cuisine Terroir en châtaignier local"
                    width={500}
                    height={400}
                    className="shadow-lg"
                  />
                </div>
                {/* Étiquette essence */}
                <div className="absolute -top-4 -right-4 bg-miel-chaud p-4 rounded-full shadow-xl glow-miel">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <motion.div variants={slideInRight}>
                <div className="bg-white/80 backdrop-blur-sm rounded-none p-8 shadow-xl border-l-4 border-miel-dore">
                  <Badge className="bg-miel-dore/20 text-miel-profond border border-miel-dore mb-4 font-editorial">
                    Châtaignier d'Auvergne • Printemps 2024
                  </Badge>
                  <h3 className="text-3xl font-bold text-bois-moyen mb-4 font-serif-refined">Cuisine du Terroir</h3>
                  <p className="text-bois-sombre leading-relaxed mb-6 font-editorial">
                    Le châtaignier révèle ici toute sa noblesse. Ses fibres dorées captent la lumière matinale, ses
                    nœuds racontent l'histoire des saisons. Chaque tiroir glisse avec la douceur du bois patiné par le
                    temps. L'odeur sucrée du châtaignier embaume encore chaque ouverture.
                  </p>
                  <div className="bg-miel-chaud/10 p-4 rounded-lg border-l border-miel-chaud">
                    <p className="text-bois-moyen italic text-sm font-editorial">
                      "Cette cuisine respire l'authenticité. Chaque matin, en préparant le café, je caresse ce bois
                      vivant qui réchauffe notre foyer."
                    </p>
                    <p className="text-miel-profond text-xs mt-1 font-editorial">- Marie D., Clermont-Ferrand</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Création 3 - Escalier Racines */}
            <motion.div className="grid lg:grid-cols-2 gap-12 items-center" variants={staggerContainer}>
              <motion.div className="order-2 lg:order-1" variants={slideInLeft}>
                <div className="bg-white/80 backdrop-blur-sm rounded-none p-8 shadow-xl border-l-4 border-miel-solaire">
                  <Badge className="bg-miel-solaire/20 text-miel-profond border border-miel-solaire mb-4 font-editorial">
                    Hêtre & Noyer • Automne 2023
                  </Badge>
                  <h3 className="text-3xl font-bold text-bois-moyen mb-4 font-serif-refined">L'Escalier Racines</h3>
                  <p className="text-bois-sombre leading-relaxed mb-6 font-editorial">
                    Comme les racines d'un arbre ancestral, cet escalier s'élève en épousant les courbes naturelles du
                    bois. Le hêtre clair dialogue avec le noyer sombre, créant un jeu d'ombres et de lumières. Sous la
                    main, le bois révèle sa texture soyeuse, polie par des heures de ponçage patient.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-miel-chaud/10 rounded-lg border border-miel-chaud">
                      <p className="text-2xl font-bold text-miel-chaud font-display">18</p>
                      <p className="text-xs text-bois-chaud font-editorial">marches sculptées</p>
                    </div>
                    <div className="text-center p-3 bg-miel-dore/10 rounded-lg border border-miel-dore">
                      <p className="text-2xl font-bold text-miel-dore font-display">120</p>
                      <p className="text-xs text-bois-chaud font-editorial">heures de façonnage</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="order-1 lg:order-2 relative" variants={slideInRight}>
                <div className="bg-miel-solaire/10 p-6 rounded-none shadow-xl transform rotate-1">
                  <Image
                    src="/escalier-hetre-noyer-suspendu.png"
                    alt="Escalier Racines en hêtre et noyer"
                    width={500}
                    height={700}
                    className="shadow-lg"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* L'âme de l'artisan */}
      <motion.section
        ref={atelierRef}
        className="py-20 bg-white/50"
        id="atelier"
        initial="hidden"
        animate={atelierInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-none p-6 shadow-xl border-b-4 border-miel-chaud">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Users className="w-8 h-8 text-miel-chaud" />
                <h2 className="text-4xl font-bold text-bois-moyen font-display">L'Âme de l'Artisan</h2>
                <Handshake className="w-8 h-8 text-miel-dore" />
              </div>
              <p className="text-miel-profond italic font-editorial">Rencontrez l'homme derrière chaque création</p>
            </div>
          </motion.div>

          <motion.div className="grid lg:grid-cols-2 gap-16 items-center mb-20" variants={staggerContainer}>
            <motion.div className="relative" variants={slideInLeft}>
              <div className="bg-miel-chaud/10 p-6 rounded-none shadow-xl">
                <Image
                  src="/mains-artisan-travail-bois.png"
                  alt="Les mains expertes de l'artisan façonnant le bois"
                  width={500}
                  height={400}
                  className="shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-miel-solaire p-3 rounded-lg shadow-lg transform rotate-3 border-l border-miel-chaud">
                <p className="text-xs text-bois-moyen italic font-editorial">
                  "Chaque geste raconte 25 ans de passion"
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-6" variants={slideInRight}>
              <div className="bg-white/80 backdrop-blur-sm rounded-none p-8 shadow-xl border-l-4 border-miel-chaud">
                <h3 className="text-2xl font-bold text-bois-moyen mb-4 flex items-center font-serif-refined">
                  <Calendar className="w-5 h-5 mr-2 text-miel-chaud" />
                  Des Mains qui Racontent
                </h3>
                <p className="text-bois-sombre leading-relaxed mb-4 font-editorial">
                  Ces mains portent l'héritage de générations d'artisans. Elles connaissent chaque essence, sentent la
                  moindre imperfection, guident l'outil avec la précision de celui qui a consacré sa vie à son art. Dans
                  chaque geste, il y a l'amour du beau, le respect de la matière.
                </p>
                <div className="bg-miel-chaud/10 p-4 rounded-lg border-l border-miel-chaud">
                  <p className="text-bois-moyen italic text-sm font-editorial">
                    "Mes mains sont mes yeux. Elles me disent si le bois est prêt, si l'assemblage est juste. C'est un
                    dialogue silencieux qui s'est tissé au fil des années."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="grid lg:grid-cols-2 gap-16 items-center mb-20" variants={staggerContainer}>
            <motion.div className="order-2 lg:order-1 space-y-6" variants={slideInLeft}>
              <div className="bg-white/80 backdrop-blur-sm rounded-none p-8 shadow-xl border-l-4 border-miel-dore">
                <h3 className="text-2xl font-bold text-bois-moyen mb-4 font-serif-refined">L'Écoute du Client</h3>
                <p className="text-bois-sombre leading-relaxed mb-4 font-editorial">
                  Avant chaque création naît un moment privilégié : la rencontre. Autour d'un café, nous parlons de vos
                  rêves, de vos besoins, de l'histoire que vous voulez écrire avec le bois. C'est dans cet échange que
                  germe l'idée de votre future création.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-miel-chaud rounded-full"></div>
                    <span className="text-bois-chaud font-editorial">Écoute attentive de vos souhaits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-miel-dore rounded-full"></div>
                    <span className="text-bois-chaud font-editorial">Conseils personnalisés sur les essences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-miel-solaire rounded-full"></div>
                    <span className="text-bois-chaud font-editorial">Adaptation à votre environnement</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="order-1 lg:order-2 relative" variants={slideInRight}>
              <div className="bg-miel-dore/10 p-6 rounded-none shadow-xl transform -rotate-1">
                <Image
                  src="/client-artisan-consultation.png"
                  alt="Consultation chaleureuse entre l'artisan et ses clients"
                  width={500}
                  height={400}
                  className="shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="grid lg:grid-cols-2 gap-16 items-center mb-20" variants={staggerContainer}>
            <motion.div className="relative" variants={slideInLeft}>
              <div className="bg-miel-solaire/10 p-6 rounded-none shadow-xl">
                <Image
                  src="/famille-atelier-transmission.png"
                  alt="Transmission du savoir-faire artisanal"
                  width={500}
                  height={400}
                  className="shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-miel-chaud p-4 rounded-full shadow-xl glow-miel">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            <motion.div className="space-y-6" variants={slideInRight}>
              <div className="bg-white/80 backdrop-blur-sm rounded-none p-8 shadow-xl border-l-4 border-miel-solaire">
                <h3 className="text-2xl font-bold text-bois-moyen mb-4 font-serif-refined">La Transmission</h3>
                <p className="text-bois-sombre leading-relaxed mb-4 font-editorial">
                  L'artisanat, c'est aussi la transmission d'un héritage. Chaque geste enseigné, chaque technique
                  partagée perpétue une tradition millénaire. Dans l'atelier, les jeunes mains apprennent des anciennes,
                  assurant la continuité de ce savoir-faire unique.
                </p>
                <div className="bg-miel-chaud/10 p-4 rounded-lg border-l border-miel-chaud">
                  <p className="text-bois-moyen italic text-sm font-editorial">
                    "Transmettre, c'est offrir à l'avenir les clés du passé. Chaque apprenti qui franchit les portes de
                    l'atelier emporte avec lui un peu de cette magie ancestrale."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="grid lg:grid-cols-2 gap-16 items-center" variants={staggerContainer}>
            <motion.div className="order-2 lg:order-1 space-y-6" variants={slideInLeft}>
              <div className="bg-white/80 backdrop-blur-sm rounded-none p-8 shadow-xl border-l-4 border-miel-chaud">
                <h3 className="text-2xl font-bold text-bois-moyen mb-4 font-serif-refined">
                  La Satisfaction du Travail Accompli
                </h3>
                <p className="text-bois-sombre leading-relaxed mb-4 font-editorial">
                  Il n'y a pas de plus belle récompense que le sourire d'un client découvrant sa création. Ce moment où
                  les mois de travail se concrétisent en émotion pure, où l'objet trouve enfin sa place dans la vie de
                  ceux qui l'ont rêvé.
                </p>
                <div className="flex items-center space-x-4 p-4 bg-miel-chaud/10 rounded-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-miel-chaud font-display">98%</p>
                    <p className="text-xs text-bois-chaud font-editorial">clients satisfaits</p>
                  </div>
                  <div className="w-px h-12 bg-miel-dore"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-miel-dore font-display">15</p>
                    <p className="text-xs text-bois-chaud font-editorial">ans de garantie</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="order-1 lg:order-2 relative" variants={slideInRight}>
              <div className="bg-miel-chaud/10 p-6 rounded-none shadow-xl transform rotate-2">
                <Image
                  src="/client-satisfait-livraison.png"
                  alt="Moment de joie lors de la livraison d'une création"
                  width={500}
                  height={400}
                  className="shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Témoignages enracinés */}
      <motion.section
        ref={temoignagesRef}
        className="py-20 bg-miel-chaud/5"
        initial="hidden"
        animate={temoignagesInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-none p-6 shadow-xl border-b-4 border-miel-dore">
              <h2 className="text-4xl font-bold text-bois-moyen mb-2 font-display">Paroles Authentiques</h2>
              <p className="text-miel-profond italic font-editorial">
                L'écho de nos créations dans les foyers auvergnats
              </p>
            </div>
          </motion.div>

          <motion.div className="flex justify-center mb-8" variants={fadeInUp}>
            <div className="relative">
              <div className="bg-white/90 p-4 rounded-2xl shadow-xl">
                <Image
                  src="/details-finition-main.png"
                  alt="Finition délicate à la main d'un meuble en bois noble"
                  width={300}
                  height={200}
                  className=""
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-miel-solaire p-2 rounded-lg shadow-lg transform rotate-6 border-l border-miel-chaud">
                <p className="text-xs text-bois-moyen italic font-editorial">"Chaque finition, un art"</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
            {[
              {
                name: "Marie & Pierre Dubois",
                location: "Clermont-Ferrand",
                project: "Cuisine Terroir",
                quote:
                  "Chaque matin, l'odeur du châtaignier nous accueille. Cette cuisine n'est pas qu'un meuble, c'est un compagnon de vie qui vieillit avec nous, se patine avec nos gestes quotidiens.",
                date: "Mars 2024",
              },
              {
                name: "Sophie Martin",
                location: "Vichy",
                project: "Bibliothèque Héritage",
                quote:
                  "Le grain du chêne sous mes doigts, le parfum du bois ciré... Cette bibliothèque porte l'âme de l'arbre centenaire. Nos invités s'arrêtent, touchent, respirent cette authenticité.",
                date: "Janvier 2024",
              },
              {
                name: "Famille Leroy",
                location: "Aurillac",
                project: "Dressing & mobilier",
                quote:
                  "Jean-Claude a su écouter nos besoins et révéler la beauté du bois local. Chaque tiroir qui s'ouvre libère encore ce parfum de forêt d'Auvergne.",
                date: "Décembre 2023",
              },
            ].map((temoignage, index) => (
              <motion.div key={index} className="relative" variants={fadeInUp}>
                {/* Carte témoignage style parchemin */}
                <div className="bg-white/95 backdrop-blur-sm rounded-none p-6 shadow-xl transform hover:scale-105 transition-transform duration-300 border-l-4 border-miel-chaud">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-miel-dore text-miel-dore" />
                    ))}
                  </div>
                  <p className="text-bois-sombre italic mb-4 leading-relaxed font-classic">"{temoignage.quote}"</p>
                  <div className="border-t border-miel-chaud/30 pt-4">
                    <p className="font-semibold text-bois-moyen font-editorial">{temoignage.name}</p>
                    <p className="text-sm text-miel-profond flex items-center font-editorial">
                      <MapPin className="w-3 h-3 mr-1" />
                      {temoignage.location}
                    </p>
                    <p className="text-xs text-miel-chaud mt-1 font-editorial">
                      {temoignage.project} • {temoignage.date}
                    </p>
                  </div>
                </div>
                {/* Clou artisanal */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-miel-dore rounded-full shadow-lg glow-miel"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Rendez-vous à l'atelier */}
      <motion.section
        ref={contactRef}
        className="py-20 px-4"
        id="contact"
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-xl transform -rotate-1 border-b-4 border-miel-chaud">
              <h2 className="text-4xl font-bold text-bois-moyen mb-2 font-display">Venez Sentir le Bois</h2>
              <p className="text-miel-profond italic font-editorial">Partageons un café et parlons de votre projet</p>
            </div>
          </motion.div>

          <motion.div className="grid lg:grid-cols-2 gap-12" variants={staggerContainer}>
            {/* Formulaire artisanal */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-none p-8 shadow-xl border-l-4 border-miel-chaud"
              variants={slideInLeft}
            >
              <h3 className="text-xl font-bold text-bois-moyen mb-6 flex items-center font-serif-refined">
                <Calendar className="w-5 h-5 mr-2 text-miel-chaud" />
                Prenons le temps d'échanger
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="prenom" className="text-bois-moyen font-medium font-editorial">
                      Prénom
                    </Label>
                    <Input
                      id="prenom"
                      className="border-miel-chaud focus:border-miel-dore bg-white/90 font-editorial"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nom" className="text-bois-moyen font-medium font-editorial">
                      Nom
                    </Label>
                    <Input id="nom" className="border-miel-chaud focus:border-miel-dore bg-white/90 font-editorial" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="telephone" className="text-bois-moyen font-medium font-editorial">
                    Téléphone
                  </Label>
                  <Input
                    id="telephone"
                    type="tel"
                    className="border-miel-chaud focus:border-miel-dore bg-white/90 font-editorial"
                  />
                </div>

                <div>
                  <Label htmlFor="projet" className="text-bois-moyen font-medium font-editorial">
                    Racontez-moi votre rêve de bois
                  </Label>
                  <Textarea
                    id="projet"
                    placeholder="Quelle essence vous inspire ? Quel meuble imaginez-vous ? Dans quel espace ? Laissez parler vos sens..."
                    className="border-miel-chaud focus:border-miel-dore bg-white/90 min-h-[120px] font-editorial"
                  />
                </div>

                <Button className="w-full bg-miel-chaud hover:bg-miel-dore text-white py-3 text-lg font-medium font-editorial border border-miel-dore glow-miel">
                  <Coffee className="w-5 h-5 mr-2" />
                  Réservons un moment authentique
                </Button>
              </form>
            </motion.div>

            {/* Informations atelier */}
            <motion.div className="space-y-6" variants={slideInRight}>
              <div className="bg-bois-moyen text-creme-chaud rounded-none p-8 shadow-xl border-t-4 border-miel-solaire">
                <h3 className="text-xl font-bold mb-6 font-serif-refined">L'Atelier vous ouvre ses portes</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 mt-1 text-miel-dore" />
                    <div>
                      <p className="font-medium font-editorial">Horaires d'ouverture</p>
                      <p className="text-creme-chaud/80 text-sm font-editorial">Lun-Ven: 8h-18h | Sam: 9h-12h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1 text-miel-dore" />
                    <div>
                      <p className="font-medium font-editorial">Adresse</p>
                      <p className="text-creme-chaud/80 text-sm font-editorial">
                        12 Rue des Artisans, 63000 Clermont-Ferrand
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 mt-1 text-miel-dore" />
                    <div>
                      <p className="font-medium font-editorial">Téléphone</p>
                      <p className="text-creme-chaud/80 text-sm font-editorial">04 73 12 34 56</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Envelope className="w-5 h-5 mt-1 text-miel-dore" />
                    <div>
                      <p className="font-medium font-editorial">Email</p>
                      <p className="text-creme-chaud/80 text-sm font-editorial">contact@boisetracines.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Pied de page enraciné */}
      <footer className="bg-bois-moyen py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold text-creme-chaud mb-4 font-serif-refined">Bois & Racines</h4>
              <p className="text-creme-chaud/80 text-sm mb-4 font-editorial">
                L'authenticité du bois au service de vos rêves. Maître artisan depuis 1998, je façonne des créations
                uniques et durables, enracinées dans le terroir auvergnat.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-creme-chaud hover:text-miel-chaud transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-creme-chaud hover:text-miel-chaud transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-creme-chaud hover:text-miel-chaud transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-creme-chaud mb-4 font-serif-refined">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#accueil"
                    className="text-creme-chaud/80 hover:text-miel-chaud transition-colors font-editorial"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#creations"
                    className="text-creme-chaud/80 hover:text-miel-chaud transition-colors font-editorial"
                  >
                    Créations
                  </a>
                </li>
                <li>
                  <a
                    href="#atelier"
                    className="text-creme-chaud/80 hover:text-miel-chaud transition-colors font-editorial"
                  >
                    L'Atelier
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-creme-chaud/80 hover:text-miel-chaud transition-colors font-editorial"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-creme-chaud mb-4 font-serif-refined">Contact</h4>
              <p className="text-creme-chaud/80 text-sm mb-2 flex items-center font-editorial">
                <MapPin className="w-4 h-4 mr-2" />
                12 Rue des Artisans, 63000 Clermont-Ferrand
              </p>
              <p className="text-creme-chaud/80 text-sm mb-2 flex items-center font-editorial">
                <Phone className="w-4 h-4 mr-2" />
                04 73 12 34 56
              </p>
              <p className="text-creme-chaud/80 text-sm mb-2 flex items-center font-editorial">
                <Envelope className="w-4 h-4 mr-2" />
                contact@boisetracines.com
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-creme-chaud/60 text-xs font-editorial">© 2024 Bois & Racines. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
