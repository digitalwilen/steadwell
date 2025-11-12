"use client"

import { Button } from "@/components/ui/button"

export function MidPageCTA() {
  const handleCTAClick = () => {
    window.gtag?.("event", "cta_click", {
      location: "midpage",
      label: "Schedule a Clarity Call",
    })
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Get your free 20-minute clarity call.</h2>
        <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
          We'll review your situation and outline next steps—no obligation.
        </p>
        <Button
          onClick={handleCTAClick}
          className="bg-foreground hover:bg-foreground/90 hover:shadow-lg text-background px-8 py-6 text-base font-semibold transition-all duration-200"
        >
          Schedule Your Free 20-Minute Clarity Call
        </Button>
      </div>
    </section>
  )
}
