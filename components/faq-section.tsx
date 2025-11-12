"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const handleToggle = (value: string) => {
    window.gtag?.("event", "faq_toggle", {
      question_id: value,
    })
  }

  const faqs = [
    {
      id: "q1",
      question: "Are you insured and bonded?",
      answer: "Yes. We only use bonded, insured, background-checked vendors and carry our own business coverage.",
    },
    {
      id: "q2",
      question: "Do you work with my realtor/contractor/POA?",
      answer: "Yes. We coordinate with your realtor, GC, attorney, or POA to keep one plan in one thread.",
    },
    {
      id: "q3",
      question: "How fast can you start?",
      answer: "Usually within 72 hours of the clarity call. Emergency triage is available—ask on the call.",
    },
    {
      id: "q4",
      question: "How is pricing calculated?",
      answer: "Based on scope, timeline, and vendor mix. Our coordination fee is 15–25% of vendor costs, no markups.",
    },
    {
      id: "q5",
      question: "Do you serve my area?",
      answer:
        "We currently serve Austin, TX and Raleigh, NC. If your area is outside our service territory, we can refer you to trusted partners or discuss custom arrangements.",
    },
    {
      id: "q6",
      question: "What is included in your fee?",
      answer:
        "Everything: planning, vendor vetting, scheduling, supervision, documentation, and weekly status updates. No hidden fees.",
    },
    {
      id: "q7",
      question: "How long does a typical project take?",
      answer:
        "Move & Estate projects typically take 4–12 weeks depending on size and complexity. Aging-in-Place projects are faster: 1–3 weeks for assessment and installation.",
    },
    {
      id: "q8",
      question: "What happens if there's an issue mid-project?",
      answer:
        "We escalate, re-scope, and resolve with documented corrective steps. Every vendor is bonded and insured. We take ownership—you're never stuck.",
    },
  ]

  return (
    <section id="faq-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-border rounded-lg px-6 bg-background"
              onClick={() => handleToggle(faq.id)}
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
