"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQProps {
  variant: "sell" | "rent"
}

const sellFAQs = [
  {
    question: "How do you determine my asking price?",
    answer:
      "We combine 40 years of transaction data, real-time demand from our database of over 1.7M users, and hyper-local expertise to accurately price your property.",
  },
  {
    question: "How quickly can I sell my property?",
    answer:
      "With our massive active database and a transaction happening every 12 minutes, we connect you with pre-qualified buyers rapidly, minimizing your time on the market.",
  },
  {
    question: "Why shouldn't I just use multiple agencies?",
    answer:
      "Listing exclusively with betterhomes ensures a focused, premium marketing strategy, protecting your property's perceived value and avoiding duplicate, conflicting listings.",
  },
]

const rentFAQs = [
  {
    question: "How fast can you find a tenant?",
    answer:
      "Thanks to our live database of active renters and corporate clients, we consistently minimize void periods and secure tenants swiftly.",
  },
  {
    question: "How do you vet potential tenants?",
    answer:
      "We conduct thorough pre-qualification checks to ensure you get reliable tenants, protecting your asset and your peace of mind.",
  },
  {
    question: "How much rent should I charge?",
    answer:
      "Our community specialists use real-time market data and historical insights from our 40 years of operation to accurately price your rental for maximum yield.",
  },
]

export function FAQ({ variant }: FAQProps) {
  const faqs = variant === "sell" ? sellFAQs : rentFAQs

  return (
    <section className="mt-16 pb-8">
      <h2 className="font-serif text-2xl font-semibold text-[#1F343F] mb-6">
        Your {variant === "sell" ? "Selling" : "Leasing"} Questions, Answered
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-[#D9B9A0]"
          >
            <AccordionTrigger className="text-left text-[#1F343F] font-medium hover:text-[#2C537A] py-5 [&[data-state=open]>svg]:text-[#FF787A]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#1F343F]/70 leading-relaxed pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
