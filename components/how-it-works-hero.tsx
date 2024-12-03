import { Button } from "@/components/ui/button"
import { Calendar, Clock } from 'lucide-react'
import Link from "next/link"

export default function HowItWorksHero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Streamline Your Revenue Cycle
          </h1>
          <p className="text-lg text-blue-50 max-w-[600px]">
            Experience predictable cash flow with our simple, reliable payment solution. No more waiting for insurance reimbursements or dealing with payment delays.
          </p>
          <Link href="#get-started">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
              Schedule Demo
            </Button>
          </Link>
        </div>
        
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center space-y-4 p-6 bg-white/10 rounded-xl">
                <Calendar className="w-12 h-12 text-white" />
                <p className="text-white text-sm">Next-Day Payments</p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white/10 rounded-xl">
                <Clock className="w-12 h-12 text-white" />
                <p className="text-white text-sm">Simple Process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

