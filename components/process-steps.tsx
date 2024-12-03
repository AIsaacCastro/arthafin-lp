import { ProcessStep } from "./process-step"

export function ProcessSteps() {
  return (
    <section id="get-started" className="py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800">
            Getting Started with Astra
          </h2>
          <p className="text-lg text-navy-600">
            Running a healthcare practice is complex – managing your cash flow shouldn't be. Our streamlined process helps you maintain financial stability with minimal effort.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <ProcessStep
            number={1}
            title="Quick Application"
            description="Complete our simple eligibility form in minutes. No credit checks, no lengthy paperwork."
          />
          <ProcessStep
            number={2}
            title="Easy Integration"
            description="Connect your practice management system and start submitting claims immediately."
          />
          <ProcessStep
            number={3}
            title="Next-Day Funding"
            description="Receive payments within 24 hours of claim submission, maintaining steady cash flow."
          />
          <ProcessStep
            number={4}
            title="Focus on Growth"
            description="With predictable cash flow, invest in your practice's growth and patient care."
            isLast
          />
        </div>
      </div>
    </section>
  )
}

