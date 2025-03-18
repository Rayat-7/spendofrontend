import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-12 md:py-20 bg-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-slate-800 rounded-full blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-slate-800 rounded-full blur-3xl -z-10 opacity-70"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-custom text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
            Ready to take control of your finances?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-300 mb-6 md:mb-10 max-w-2xl mx-auto px-4">
            Join thousands of users who have transformed their relationship with money using Spendo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-medium hover:bg-slate-100 transition-colors flex items-center justify-center text-sm md:text-base">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-transparent text-white rounded-full font-medium border border-white/30 hover:bg-white/10 transition-colors text-sm md:text-base">
              Schedule a Demo
            </button>
          </div>

          <p className="mt-4 md:mt-6 text-slate-400 text-xs md:text-sm">No credit card required. Free 14-day trial.</p>
        </div>
      </div>
    </section>
  )
}

