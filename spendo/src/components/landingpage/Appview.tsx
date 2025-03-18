"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { ChevronRight } from "lucide-react"

const screenshots = [
  {
    title: "Dashboard Overview",
    description: "Get a complete view of your finances at a glance with our intuitive dashboard.",
    image: "/placeholder.svg?height=600&width=300",
    alt: "Spendo dashboard screenshot",
  },
  {
    title: "Expense Tracking",
    description: "Easily categorize and track all your expenses in one place.",
    image: "/placeholder.svg?height=600&width=300",
    alt: "Expense tracking screenshot",
  },
  {
    title: "Budget Management",
    description: "Create and manage budgets with visual progress indicators.",
    image: "/placeholder.svg?height=600&width=300",
    alt: "Budget management screenshot",
  },
  {
    title: "Financial Goals",
    description: "Set and track your savings goals with milestone tracking.",
    image: "/placeholder.svg?height=600&width=300",
    alt: "Financial goals screenshot",
  },
]

export default function AppScreenshots() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="py-12 md:py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-white rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-white rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-custom text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Designed for Simplicity
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Our intuitive interface makes managing your finances easier than ever
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-4 md:mb-6 shadow-xl rounded-3xl overflow-hidden border-8 border-white max-w-[240px] mx-auto w-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  width={240}
                  height={480}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-center">{item.title}</h3>
              <p className="text-slate-600 text-sm md:text-base text-center mb-3 md:mb-4 px-4">{item.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-black font-medium text-sm md:text-base hover:underline"
              >
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

