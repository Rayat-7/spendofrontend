import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started with basic financial tracking",
    features: [
      "Expense tracking",
      "Basic budgeting",
      "Connect up to 2 accounts",
      "Monthly spending reports",
      "Mobile app access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    description: "Advanced features for better financial management",
    features: [
      "Everything in Free",
      "Unlimited account connections",
      "Custom budget categories",
      "Savings goals",
      "Bill reminders",
      "Spending insights",
      "Export financial data",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Family",
    price: "$19.99",
    period: "per month",
    description: "Manage finances for the whole family with shared access",
    features: [
      "Everything in Premium",
      "Up to 5 user accounts",
      "Shared budgets",
      "Family spending insights",
      "Financial goal collaboration",
      "Dedicated support",
      "Custom financial reports",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-slate-100 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-custom text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Choose the plan that fits your needs. All plans come with a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? "border-2 border-black shadow-lg relative" : "border border-slate-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="bg-black text-white text-center py-1 md:py-2 text-xs md:text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-3 md:mb-4">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-slate-500 ml-1 text-sm md:text-base">{plan.period}</span>}
                </div>
                <p className="text-slate-600 text-sm md:text-base mb-5 md:mb-6">{plan.description}</p>

                <button
                  className={`w-full py-2 md:py-3 rounded-full font-medium mb-6 md:mb-8 transition-colors text-sm md:text-base ${
                    plan.popular
                      ? "bg-black text-white hover:bg-black/90"
                      : "bg-white text-black border border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-2 md:space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-black mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

