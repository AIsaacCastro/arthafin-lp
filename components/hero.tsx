import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-blue-400 to-blue-300">
      <div className="container grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-950">
            Predictable Cash Flow for Healthcare Practices
          </h1>
          <p className="text-lg text-blue-950 max-w-[600px]">
            Astra provides a simple solution for financial stability. We empower independent practices to focus on patient care by eliminating payment uncertainties and reimbursement stress.
          </p>
          <Link href="/how-it-works">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8">
              Get Started
            </Button>
          </Link>
        </div>
        
        <div className="relative h-[500px] hidden lg:block">
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              {/* Circular background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-navy-700/50 backdrop-blur-sm" />
              
              {/* Healthcare professional image */}
              {/* <Image
                src="/placeholder.svg"
                alt="Healthcare Professional"
                width={400}
                height={500}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              /> */}
              
              {/* Floating UI elements */}
              <div className="absolute top-[20%] right-[20%] bg-white p-4 rounded-lg shadow-lg">
                <div className="w-[200px] h-[100px] bg-navy-50 rounded-md">
                  {/* Practice Cash Flow Chart Placeholder */}
                  <div className="h-full w-full flex items-end justify-around p-2">
                    <div className="w-8 bg-blue-500 h-[60%]" />
                    <div className="w-8 bg-blue-500 h-[65%]" />
                    <div className="w-8 bg-blue-500 h-[70%]" />
                    <div className="w-8 bg-blue-500 h-[75%]" />
                  </div>
                </div>
                <p className="text-sm font-medium mt-2 text-navy-900">Stable Cash Flow</p>
              </div>
              
              <div className="absolute bottom-[20%] left-[20%] bg-white p-4 rounded-lg shadow-lg">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                    <span className="text-sm text-navy-900">Instant Payment</span>
                  </div>
                  <p className="text-xs text-navy-600">Claim processed</p>
                  <div className="h-2 w-32 bg-green-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

