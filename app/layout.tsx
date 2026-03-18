import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: 'Trazo - Agricultural Transparency Platform | Prove Your Practices',
  description: 'Document every farming practice, verify it on blockchain, and share your story with consumers through QR codes. The transparency platform that turns honest farming into a competitive advantage.',
  keywords: ['agriculture', 'transparency', 'blockchain', 'farming', 'QR codes', 'premium pricing', 'food traceability'],
  metadataBase: new URL('https://www.trazo.io'),
  openGraph: {
    title: 'Trazo - Agricultural Transparency Platform',
    description: 'Prove your practices. Earn premium prices. Document every farming event, verify on blockchain, share with consumers via QR codes.',
    url: 'https://www.trazo.io',
    siteName: 'Trazo',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Trazo agricultural transparency platform dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trazo - Agricultural Transparency Platform',
    description: 'Prove your practices. Earn premium prices. The transparency platform for specialty crop farms.',
    images: ['/images/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#fafdf8',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Trazo',
  url: 'https://www.trazo.io',
  logo: 'https://www.trazo.io/images/logo-green.png',
  description: 'Agricultural transparency platform that documents farming practices, verifies them on blockchain, and shares verified proof with consumers via QR codes. Uses EPA and USDA emission factors for carbon calculations.',
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    name: 'Oscar Munoz',
    jobTitle: 'Founder & CEO',
  },
  areaServed: 'US',
  industry: 'Agricultural Technology',
  knowsAbout: [
    'Agricultural Transparency',
    'Farm Traceability',
    'Blockchain Verification',
    'Carbon Footprint Calculation',
    'EPA Emission Factors',
    'USDA Crop Data',
    'QR Code Traceability',
    'Specialty Crop Farming',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@trazo.io',
    contactType: 'customer support',
    availableLanguage: ['English', 'Spanish'],
  },
  sameAs: [
    'https://linkedin.com/company/trazo-io',
    'https://instagram.com/trazo.io',
  ],
}

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Trazo',
  url: 'https://www.trazo.io',
  description: 'Agricultural transparency platform for specialty crop farms. Document farming practices, verify on blockchain, share with consumers via QR codes.',
  publisher: { '@type': 'Organization', name: 'Trazo' },
  inLanguage: ['en', 'es'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
