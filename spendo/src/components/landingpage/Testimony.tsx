import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Spendo has completely transformed how I manage my finances. The insights and budgeting tools have helped me save over $500 a month!",
    author: "Sarah Johnson",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    quote:
      "I've tried many finance apps, but Spendo stands out with its intuitive interface and powerful analytics. It's become an essential part of my daily routine.",
    author: "Michael Chen",
    role: "Software Engineer",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    quote:
      "The goal tracking feature has been a game-changer for me. I've finally been able to save for my dream vacation thanks to Spendo.",
    author: "Emily Rodriguez",
    role: "Freelance Designer",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-slate-100 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-custom text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">What Our Users Say</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Join thousands of satisfied users who have transformed their financial habits with Spendo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 md:h-5 md:w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`}
                  />
                ))}
              </div>
              <p className="text-slate-700 text-sm md:text-base mb-5 md:mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="mr-3 md:mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full w-10 h-10 md:w-12 md:h-12"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base">{testimonial.author}</h4>
                  <p className="text-xs md:text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-200 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm">
            <span className="text-black font-medium">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-slate-600 text-xs md:text-sm">from over 10,000 reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}

