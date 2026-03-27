import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { FormulaSection } from "@/components/formula-section"
import { StatsBar } from "@/components/stats-bar"
import { PlatformFeatures } from "@/components/platform-features"
import { FieldFeatures } from "@/components/field-features"
import { ProductShowcase } from "@/components/product-showcase"
import { HowItWorks } from "@/components/how-it-works"
import { OrganicFeatures } from "@/components/organic-features"
import { CtaBanner } from "@/components/cta-banner"
import { BlogSection } from "@/components/blog-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Trazo',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://www.trazo.io',
  description: 'Agricultural transparency platform that documents farming practices, calculates carbon emissions using EPA/USDA emission factors, and generates QR codes for consumer-facing transparency pages.',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '0',
    highPrice: '299',
    priceCurrency: 'USD',
    offerCount: 5,
  },
  featureList: [
    '22 US crop templates with USDA-sourced crop timing data',
    'Transparency scoring (0-100) based on documented farming events',
    'Carbon calculations using EPA 40 CFR Part 98 emission factors',
    'Optional blockchain recording on Polygon network (add-on)',
    'QR code generation for consumer-facing transparency pages',
    'Voice recording and photo documentation',
    'Certification verification via USDA Organic Integrity Database',
    'Commercial analytics dashboard',
    'English and Spanish language support',
  ],
  screenshot: 'https://www.trazo.io/images/app-screenshot.jpg',
  creator: {
    '@type': 'Organization',
    name: 'Trazo',
    url: 'https://www.trazo.io',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FormulaSection />
        <HowItWorks />
        <StatsBar />
        <PlatformFeatures />
        <ProductShowcase />
        <FieldFeatures />
        <OrganicFeatures />
        <CtaBanner />
        <BlogSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
