"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const handlePrimaryClick = () => {
    window.gtag?.("event", "cta_click", {
      location: "hero",
      label: "Schedule Your Free Clarity Call",
    })
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSecondaryClick = () => {
    window.gtag?.("event", "cta_click", {
      location: "hero",
      label: "Speak with a Coordinator Today",
    })
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT — TEXT */}
          <div className="flex flex-col gap-6 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance text-foreground">
              When your parent's next move becomes your job, we make it manageable.
            </h1>

            <h2 className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
              We coordinate moves, estates, and aging-in-place—so your family can stay focused on what matters most.
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                onClick={handlePrimaryClick}
                className="bg-foreground hover:bg-foreground/90 hover:shadow-lg text-background px-8 py-6 text-base font-semibold transition-all duration-200"
              >
                Schedule Your Free 20-Minute Clarity Call
              </Button>

              <Button
                onClick={handleSecondaryClick}
                variant="outline"
                className="px-8 py-6 text-base font-semibold border-2 border-foreground/30 text-foreground hover:bg-foreground/5 bg-transparent hover:shadow-md transition-all duration-200"
              >
                Speak with a Coordinator Today
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-foreground/70 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-medium">Bonded &amp; Insured Vendors</span>
              </div>

              <span className="text-foreground/50">|</span>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-medium">Background-Checked Teams</span>
              </div>

              <span className="text-foreground/50">|</span>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-medium">Serving Austin &amp; Raleigh</span>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-2">
              <p className="text-foreground font-medium leading-relaxed">
                Families typically reclaim 25–40 hours of coordination and vendor wrangling—per project.
              </p>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative w-full h-[420px] sm:h-[480px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hero.jpg"
              alt="Family reviewing coordination plan"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
