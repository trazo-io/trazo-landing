import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { FormulaSection } from "@/components/formula-section"
import { StatsBar } from "@/components/stats-bar"
import { PlatformFeatures } from "@/components/platform-features"
import { FieldFeatures } from "@/components/field-features"
import { ProductShowcase } from "@/components/product-showcase"
import { HowItWorks } from "@/components/how-it-works"
import { CtaBanner } from "@/components/cta-banner"
import { BlogSection } from "@/components/blog-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
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
        <CtaBanner />
        <BlogSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
