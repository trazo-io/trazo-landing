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
}

export const viewport: Viewport = {
  themeColor: '#fafdf8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
