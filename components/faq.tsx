'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Does Astra impact our credit score?",
    answer: "No, Astra does not impact your personal or business credit score. Guaranteed and immediate cash flow is generated from analyzing your practice's claims without the need for personal guarantees or lengthy due diligence requirements which disrupt operations. Astra bears 100% risk of payor reimbursements without impacting your personal credit!"
  },
  {
    question: "What if Astra funds a claim that does not get repaid by the payor?",
    answer: "Astra assumes 100% of the risk. If a claim we've funded is denied or underpaid by the insurance company, you keep the funds - there's no recourse or clawback. Our sophisticated claims analysis and deep healthcare expertise allows us to take on this risk."
  },
  {
    question: "What does it cost to accelerate cash flow without risk?",
    answer: "We charge a simple, transparent fee based on the claim amount funded. There are no hidden fees, no long-term commitments, and no minimum volume requirements. Contact us for specific pricing details based on your practice's needs."
  },
  {
    question: "How much immediate cash flow can we expect?",
    answer: "The amount of funding available depends on your claims volume and payor mix. Most practices receive between $50,000 to $500,000 in immediate funding. We can quickly analyze your claims data to provide a specific estimate for your practice."
  },
  {
    question: "Do we need to change our current billing procedures?",
    answer: "No changes needed to your current billing process. Our platform integrates seamlessly with your existing practice management system and workflow. You continue submitting claims as usual - we simply accelerate your payments."
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="container">
        <div className="grid md:grid-cols-[300px,1fr] gap-12">
          <h2 className="text-5xl font-bold tracking-tight">FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-t border-gray-200 py-2"
              >
                <AccordionTrigger className="text-xl font-normal hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg border-l-2 border-blue-500 pl-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

