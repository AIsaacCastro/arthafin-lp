import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  avatarSrc: string
}

function Testimonial({ quote, author, role, avatarSrc }: TestimonialProps) {
  return (
    <Card className="bg-white">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <blockquote className="text-lg text-navy-700 italic">"{quote}"</blockquote>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={avatarSrc} alt={author} />
              <AvatarFallback>{author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-navy-900">{author}</p>
              <p className="text-sm text-navy-600">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function Testimonials() {
  return (
    <section className="py-24 bg-navy-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Testimonial
            quote="Astra has transformed our practice's financial stability. We now have predictable cash flow, allowing us to focus on patient care without worrying about delayed payments."
            author="Dr. Emily Chen"
            role="Family Practice Owner"
            avatarSrc="/placeholder.svg?height=40&width=40"
          />
          <Testimonial
            quote="The simplicity of Astra's platform is a game-changer. We've reduced our administrative burden significantly, and our staff can dedicate more time to patient-centric tasks."
            author="Mark Johnson"
            role="Healthcare Administrator"
            avatarSrc="/placeholder.svg?height=40&width=40"
          />
          <Testimonial
            quote="As an independent practitioner, Astra has given me peace of mind. Their swift payment process ensures I can maintain a healthy cash flow without the stress of chasing payments."
            author="Dr. Sarah Patel"
            role="Pediatrician"
            avatarSrc="/placeholder.svg?height=40&width=40"
          />
        </div>
      </div>
    </section>
  )
}

