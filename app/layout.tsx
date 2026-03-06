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
  description: 'Agricultural transparency platform that turns honest farming into a competitive advantage.',
  sameAs: [
    'https://linkedin.com/company/trazo-io',
    'https://instagram.com/trazo.io',
  ],
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
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
