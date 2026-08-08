import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { RenewalSeason } from "@/components/renewal-season";
import { VideoSection } from "@/components/video-section";
import { StatsBar } from "@/components/stats-bar";
import { PlatformFeatures } from "@/components/platform-features";
import { FieldFeatures } from "@/components/field-features";
import { ProductShowcase } from "@/components/product-showcase";
import { DualOutput } from "@/components/dual-output";
import { HowItWorks } from "@/components/how-it-works";
import { OrganicFeatures } from "@/components/organic-features";
import { CtaBanner } from "@/components/cta-banner";
import { BlogSection } from "@/components/blog-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Trazo",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.trazo.io",
  description:
    "Agricultural transparency platform that documents farming practices, generates audit-ready NOP recordkeeping exports, and creates QR codes for buyer-facing transparency pages.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "299",
    priceCurrency: "USD",
    offerCount: 5,
  },
  featureList: [
    "27 US crop templates with USDA-sourced crop timing data",
    "Documentation completeness tracking based on documented farming events",
    "Direct operational emission calculations using EPA/USDA emission factors",
    "NOP audit-ready PDF export (7 CFR 205.103)",
    "QR code generation for consumer-facing transparency pages",
    "Voice recording and photo documentation",
    "Certification verification via USDA Organic Integrity Database",
    "Commercial analytics dashboard",
    "English and Spanish language support",
  ],
  screenshot: "https://www.trazo.io/images/app-screenshot.jpg",
  creator: {
    "@type": "Organization",
    name: "Trazo",
    url: "https://www.trazo.io",
  },
};

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
        <RenewalSeason />
        <DualOutput />
        <OrganicFeatures />
        <ProductShowcase />
        <HowItWorks />
        <VideoSection />
        <PlatformFeatures />
        <StatsBar />
        <FieldFeatures />
        <CtaBanner />
        <BlogSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
