export function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900">Simple. Reliable. Empowering.</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-navy-800">Financial Stability at Your Fingertips</h3>
          <p className="text-lg text-navy-600">
            Astra transforms the financial landscape for independent healthcare practices. Our easy-to-use platform ensures predictable cash flow, allowing you to focus on what matters most - providing exceptional patient care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 bg-white rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-navy-800 mb-2">{benefit.title}</h4>
              <p className="text-navy-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const benefits = [
  {
    title: "Predictable Cash Flow",
    description: "Say goodbye to payment uncertainties. Our platform ensures you receive payments promptly, creating a stable and predictable financial environment for your practice."
  },
  {
    title: "More Time for Patient Care",
    description: "By eliminating the stress of managing reimbursements, you can dedicate more time and energy to what you do best - caring for your patients."
  },
  {
    title: "Simplified Financial Management",
    description: "Our user-friendly platform takes the complexity out of financial management, giving you clear insights into your practice's financial health at a glance."
  }
]

