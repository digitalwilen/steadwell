import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DualPathSelector } from "@/components/dual-path-selector"
import { ProblemFraming } from "@/components/problem-framing"
import { FiveStepSystem } from "@/components/five-step-system"
import { OutcomesSection } from "@/components/outcomes-section"
import { MidPageCTA } from "@/components/mid-page-cta"
import { CaseStudies } from "@/components/case-studies"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { LeadCaptureSection } from "@/components/lead-capture-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DualPathSelector />
      <ProblemFraming />
      <FiveStepSystem />
      <OutcomesSection />
      <MidPageCTA />
      <CaseStudies />
      <PricingSection />
      <FAQSection />
      <LeadCaptureSection />
      <Footer />
    </main>
  )
}
