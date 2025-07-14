import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Crimson_Text, Libre_Baskerville, Spectral } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
})

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
})

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
})

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-spectral",
})

export const metadata: Metadata = {
  title: "Bois & Racines - Menuiserie Artisanale en Auvergne | Jean-Claude Maître Artisan",
  description:
    "Découvrez l'art de la menuiserie authentique avec Jean-Claude, maître artisan depuis 1998. Créations sur mesure en bois nobles d'Auvergne : cuisines, bibliothèques, escaliers. Savoir-faire ancestral et finitions d'exception à Clermont-Ferrand.",
  keywords: [
    "menuiserie artisanale",
    "menuisier Auvergne",
    "menuisier Clermont-Ferrand",
    "mobilier sur mesure",
    "bois noble",
    "artisan menuisier",
    "cuisine bois massif",
    "bibliothèque chêne",
    "escalier bois",
    "Jean-Claude menuisier",
    "Bois et Racines",
    "menuiserie traditionnelle",
    "ébénisterie Auvergne",
    "meuble artisanal",
    "bois local Auvergne",
    "châtaignier",
    "chêne centenaire",
    "hêtre",
    "noyer",
    "assemblage tenon-mortaise",
    "finition huile de lin",
    "menuiserie haut de gamme",
    "création unique",
    "savoir-faire ancestral",
    "atelier menuiserie",
  ],
  authors: [{ name: "Jean-Claude - Bois & Racines" }],
  creator: "Bois & Racines",
  publisher: "Bois & Racines",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://boisetracines.fr",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://boisetracines.fr",
    siteName: "Bois & Racines - Menuiserie Artisanale",
    title: "Bois & Racines - L'Authenticité du Bois Prend Racine Ici",
    description:
      "Maître artisan menuisier en Auvergne depuis 1998. Créations uniques en bois nobles : cuisines sur mesure, bibliothèques, escaliers. Savoir-faire traditionnel et finitions d'exception.",
    images: [
      {
        url: "/artisan-jean-claude-portrait.png",
        width: 1200,
        height: 630,
        alt: "Jean-Claude, maître artisan menuisier de Bois & Racines dans son atelier",
        type: "image/png",
      },
      {
        url: "/atelier-menuisier-auvergne.png",
        width: 1200,
        height: 630,
        alt: "Atelier de menuiserie artisanale Bois & Racines en Auvergne",
        type: "image/png",
      },
      {
        url: "/bibliotheque-chene-massif.png",
        width: 800,
        height: 600,
        alt: "Bibliothèque Héritage en chêne centenaire - Création Bois & Racines",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@boisetracines",
    creator: "@boisetracines",
    title: "Bois & Racines - Menuiserie Artisanale d'Exception en Auvergne",
    description:
      "Découvrez l'art de la menuiserie authentique avec Jean-Claude, maître artisan. Créations sur mesure en bois nobles d'Auvergne depuis 1998.",
    images: ["/artisan-jean-claude-portrait.png"],
  },
  verification: {
    google: "votre-code-google-search-console",
    yandex: "votre-code-yandex",
    yahoo: "votre-code-yahoo",
  },
  category: "Artisanat",
  classification: "Menuiserie Artisanale",
  other: {
    "geo.region": "FR-63",
    "geo.placename": "Clermont-Ferrand",
    "geo.position": "45.7797;3.0863",
    ICBM: "45.7797, 3.0863",
    "business:contact_data:street_address": "12 Rue des Artisans",
    "business:contact_data:locality": "Clermont-Ferrand",
    "business:contact_data:region": "Auvergne-Rhône-Alpes",
    "business:contact_data:postal_code": "63000",
    "business:contact_data:country_name": "France",
    "business:contact_data:phone_number": "+33473123456",
    "business:contact_data:email": "contact@boisetracines.fr",
    "business:hours:day": "monday,tuesday,wednesday,thursday,friday",
    "business:hours:start": "08:00",
    "business:hours:end": "18:00",
    "business:hours:day": "saturday",
    "business:hours:start": "09:00",
    "business:hours:end": "12:00",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Balises meta supplémentaires pour le SEO local */}
        <meta name="geo.region" content="FR-63" />
        <meta name="geo.placename" content="Clermont-Ferrand, Auvergne" />
        <meta name="geo.position" content="45.7797;3.0863" />
        <meta name="ICBM" content="45.7797, 3.0863" />

        {/* Données structurées JSON-LD pour le SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://boisetracines.fr/#business",
              name: "Bois & Racines",
              alternateName: "Menuiserie Bois & Racines",
              description:
                "Menuiserie artisanale et ébénisterie sur mesure en Auvergne. Spécialiste du mobilier en bois nobles depuis 1998.",
              url: "https://boisetracines.fr",
              telephone: "+33473123456",
              email: "contact@boisetracines.fr",
              foundingDate: "1998",
              founder: {
                "@type": "Person",
                name: "Jean-Claude",
                jobTitle: "Maître Artisan Menuisier",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "12 Rue des Artisans",
                addressLocality: "Clermont-Ferrand",
                addressRegion: "Auvergne-Rhône-Alpes",
                postalCode: "63000",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.7797,
                longitude: 3.0863,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "12:00",
                },
              ],
              priceRange: "€€€",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              currenciesAccepted: "EUR",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 45.7797,
                  longitude: 3.0863,
                },
                geoRadius: "50000",
              },
              serviceType: [
                "Menuiserie sur mesure",
                "Ébénisterie",
                "Cuisine en bois massif",
                "Bibliothèque sur mesure",
                "Escalier en bois",
                "Mobilier artisanal",
                "Restauration de meubles anciens",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services de menuiserie artisanale",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cuisine sur mesure en bois massif",
                      description: "Conception et réalisation de cuisines artisanales en bois nobles d'Auvergne",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Bibliothèque en chêne centenaire",
                      description:
                        "Création de bibliothèques sur mesure en chêne massif avec assemblages traditionnels",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Escalier en bois noble",
                      description: "Fabrication d'escaliers artisanaux en hêtre, noyer et autres essences locales",
                    },
                  },
                ],
              },
              image: [
                "https://boisetracines.fr/artisan-jean-claude-portrait.png",
                "https://boisetracines.fr/atelier-menuisier-auvergne.png",
                "https://boisetracines.fr/bibliotheque-chene-massif.png",
              ],
              logo: "https://boisetracines.fr/logo-bois-racines.png",
              sameAs: [
                "https://www.facebook.com/boisetracines",
                "https://www.instagram.com/boisetracines",
                "https://www.linkedin.com/company/boisetracines",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "47",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Marie Dubois",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Chaque matin, l'odeur du châtaignier nous accueille. Cette cuisine n'est pas qu'un meuble, c'est un compagnon de vie qui vieillit avec nous.",
                  datePublished: "2024-03-15",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Sophie Martin",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Le grain du chêne sous mes doigts, le parfum du bois ciré... Cette bibliothèque porte l'âme de l'arbre centenaire.",
                  datePublished: "2024-01-20",
                },
              ],
            }),
          }}
        />

        {/* Données structurées pour l'artisan */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://boisetracines.fr/#person",
              name: "Jean-Claude",
              jobTitle: "Maître Artisan Menuisier",
              description:
                "Maître artisan menuisier spécialisé dans la création de mobilier sur mesure en bois nobles d'Auvergne depuis 1998.",
              url: "https://boisetracines.fr",
              image: "https://boisetracines.fr/artisan-jean-claude-portrait.png",
              telephone: "+33473123456",
              email: "contact@boisetracines.fr",
              worksFor: {
                "@type": "LocalBusiness",
                name: "Bois & Racines",
              },
              hasOccupation: {
                "@type": "Occupation",
                name: "Menuisier Artisan",
                occupationLocation: {
                  "@type": "City",
                  name: "Clermont-Ferrand",
                },
                skills: [
                  "Menuiserie traditionnelle",
                  "Ébénisterie",
                  "Assemblage tenon-mortaise",
                  "Finition huile de lin",
                  "Travail du chêne",
                  "Travail du châtaignier",
                  "Travail du hêtre",
                  "Travail du noyer",
                ],
                experienceRequirements: "25 ans d'expérience",
              },
              knowsAbout: [
                "Menuiserie artisanale",
                "Bois nobles d'Auvergne",
                "Techniques traditionnelles",
                "Mobilier sur mesure",
                "Restauration de meubles anciens",
              ],
            }),
          }}
        />

        {/* Données structurées pour les créations */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Créations Bois & Racines",
              description: "Portfolio des créations artisanales en bois nobles",
              itemListElement: [
                {
                  "@type": "Product",
                  position: 1,
                  name: "Bibliothèque Héritage",
                  description: "Bibliothèque en chêne centenaire avec assemblages tenon-mortaise traditionnels",
                  image: "https://boisetracines.fr/bibliotheque-chene-massif.png",
                  material: "Chêne centenaire",
                  artMedium: "Bois massif",
                  artworkSurface: "Huile de lin pressée à froid",
                  creator: {
                    "@type": "Person",
                    name: "Jean-Claude",
                  },
                },
                {
                  "@type": "Product",
                  position: 2,
                  name: "Cuisine du Terroir",
                  description: "Cuisine artisanale en châtaignier d'Auvergne avec finitions traditionnelles",
                  image: "https://boisetracines.fr/cuisine-chataignier-auvergne.png",
                  material: "Châtaignier d'Auvergne",
                  artMedium: "Bois massif",
                  creator: {
                    "@type": "Person",
                    name: "Jean-Claude",
                  },
                },
                {
                  "@type": "Product",
                  position: 3,
                  name: "Escalier Racines",
                  description: "Escalier suspendu en hêtre et noyer avec courbes naturelles",
                  image: "https://boisetracines.fr/escalier-hetre-noyer-suspendu.png",
                  material: "Hêtre et Noyer",
                  artMedium: "Bois massif",
                  creator: {
                    "@type": "Person",
                    name: "Jean-Claude",
                  },
                },
              ],
            }),
          }}
        />

        {/* Balises meta pour les réseaux sociaux */}
        <meta property="article:author" content="Jean-Claude - Bois & Racines" />
        <meta property="article:publisher" content="https://www.facebook.com/boisetracines" />
        <meta property="business:contact_data:street_address" content="12 Rue des Artisans" />
        <meta property="business:contact_data:locality" content="Clermont-Ferrand" />
        <meta property="business:contact_data:region" content="Auvergne-Rhône-Alpes" />
        <meta property="business:contact_data:postal_code" content="63000" />
        <meta property="business:contact_data:country_name" content="France" />
        <meta property="business:contact_data:phone_number" content="+33473123456" />
        <meta property="business:contact_data:email" content="contact@boisetracines.fr" />

        {/* Balises meta pour l'accessibilité et la performance */}
        <meta name="theme-color" content="#8C5C4A" />
        <meta name="msapplication-TileColor" content="#8C5C4A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bois & Racines" />

        {/* Preconnect pour optimiser les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon et icônes */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${playfair.variable} ${crimson.variable} ${baskerville.variable} ${spectral.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
