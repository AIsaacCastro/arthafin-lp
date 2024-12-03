import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-50">
      <Navigation />
      <Hero />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}

