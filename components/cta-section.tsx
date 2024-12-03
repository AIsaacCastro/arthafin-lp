import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with curved shape */}
      <div className="absolute inset-0 bg-blue-600">
        <div className="absolute right-0 w-1/6 h-full">
          <div className="absolute inset-0 bg-white transform -skew-x-12 origin-top-right" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative container py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Have Astra as a partner of your practice
          </h2>
          <Link href="/how-it-works">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
              Schedule a Chat
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

