"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How secure is my financial data with Spendo?",
    answer:
      "Spendo uses bank-level 256-bit encryption to protect your data. We never store your account credentials, and we use secure, tokenized connections to financial institutions. Your security is our top priority.",
  },
  {
    question: "Can I connect all my bank accounts and credit cards?",
    answer:
      "Yes, Spendo supports connections with over 10,000 financial institutions worldwide. You can connect checking accounts, savings accounts, credit cards, investment accounts, and more.",
  },
  {
    question: "Is there a limit to how many accounts I can connect?",
    answer:
      "Free users can connect up to 2 accounts. Premium and Family plan users can connect unlimited accounts to get a complete picture of their finances.",
  },
  {
    question: "How does Spendo categorize my transactions?",
    answer:
      "Spendo uses advanced AI to automatically categorize your transactions based on merchant information. You can also create custom categories and manually recategorize transactions as needed.",
  },
  {
    question: "Can I export my financial data from Spendo?",
    answer:
      "Yes, Premium and Family plan users can export their financial data in CSV or PDF format for tax purposes or personal record-keeping.",
  },
  {
    question: "Does Spendo offer a mobile app?",
    answer:
      "Yes, Spendo is available on iOS and Android devices. The mobile app offers all the same features as the web version, allowing you to manage your finances on the go.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-12 md:py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-white rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-custom text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Find answers to common questions about Spendo and how it can help you manage your finances
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 hover:no-underline hover:bg-slate-50 text-left font-medium text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-3 md:pb-4 pt-1 md:pt-2 text-slate-600 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-slate-600 mb-3 md:mb-4 text-sm md:text-base">Still have questions?</p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 md:px-8 py-2 md:py-3 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-colors text-sm md:text-base"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

