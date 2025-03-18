import { ChevronRight, CreditCard, PieChart, Wallet, Bell, BarChart3, Smartphone } from "lucide-react"

const features = [
  {
    icon: <Wallet className="h-8 w-8 md:h-10 md:w-10 text-white" />,
    title: "Smart Budgeting",
    description: "Set custom budgets for different categories and track your spending in real-time.",
    color: "from-violet-500 to-purple-600",
    lightColor: "bg-violet-50",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    icon: <PieChart className="h-8 w-8 md:h-10 md:w-10 text-white" />,
    title: "Expense Analytics",
    description: "Visualize your spending patterns with intuitive charts and actionable insights.",
    color: "from-blue-500 to-cyan-600",
    lightColor: "bg-blue-50",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    icon: <CreditCard className="h-8 w-8 md:h-10 md:w-10 text-white" />,
    title: "Card Management",
    description: "Connect all your cards and accounts in one place for a complete financial overview.",
    color: "from-emerald-500 to-teal-600",
    lightColor: "bg-emerald-50",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    icon: <Bell className="h-8 w-8 md:h-10 md:w-10 text-white" />,
    title: "Smart Alerts",
    description: "Get notified about unusual spending, upcoming bills, and savings opportunities.",
    color: "from-amber-500 to-orange-600",
    lightColor: "bg-amber-50",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    icon: <BarChart3 className="h-8 w-8 md:h-10 md:w-10 text-white" />,
    title: "Financial Goals",
    description: "Set savings goals and track your progress with visual milestones and projections.",
    color: "from-rose-500 to-pink-600",
    lightColor: "bg-rose-50",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-600",
  },
  {
    icon: <Smartphone className="h-8 w-8 md:h-10 md:w-10 text-white" />,
    title: "Mobile First",
    description: "Access your finances anytime, anywhere with our responsive mobile application.",
    color: "from-indigo-500 to-purple-600",
    lightColor: "bg-indigo-50",
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-slate-100 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-custom text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Powerful Features</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Everything you need to take control of your finances in one intuitive platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.lightColor} backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-white/40 group`}
            >
              <div className="p-6 md:p-8 relative">
                {/* Subtle gradient accent in corner */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${feature.color} rounded-bl-full opacity-10 -z-10 transition-all duration-300 group-hover:opacity-20`}
                ></div>

                <div
                  className={`${feature.iconBg} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-sm`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm md:text-base mb-4">{feature.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-black font-medium text-sm md:text-base hover:underline"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

