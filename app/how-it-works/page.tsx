import { Navigation } from "@/components/navigation"
import HowItWorksHero from "@/components/how-it-works-hero"
import { ProcessSteps } from "@/components/process-steps"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HowItWorks() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HowItWorksHero />
      <ProcessSteps />
      <CTASection />
      <Footer />
    </main>
  )
}

