"use client"

import { Card } from "@/components/ui/card"

export function PricingSection() {
  return (
    <section id="pricing-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Simple, predictable pricing.</h2>
          <p className="text-foreground/70 text-lg">Coordination fee typically ranges 15%–25% of total vendor costs.</p>
        </div>

        <Card className="p-8 border-2 border-primary bg-primary/5 max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Coordination Fee Model</h3>
              <p className="text-foreground/80 mb-4">
                Coordination fee typically ranges <span className="font-bold text-foreground">15%–25%</span> of total
                vendor costs, depending on complexity and scope.
              </p>
            </div>

            {/* Example */}
            <div className="bg-background rounded-lg p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4">Example</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Total vendor work</span>
                  <span className="font-bold text-foreground">$30,000</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/70">Steadwell fee (15%)</span>
                    <span className="text-foreground">$4,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Steadwell fee (25%)</span>
                    <span className="text-foreground">$7,500</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-foreground/70 text-center text-sm">
              Your actual fee depends on project complexity, timeline, and vendor scope.{" "}
              <button
                onClick={() => {
                  window.gtag?.("event", "cta_click", {
                    location: "pricing_section",
                    label: "Get a custom quote",
                  })
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-primary font-semibold hover:underline cursor-pointer"
              >
                Get a custom quote
              </button>{" "}
              today.
            </p>

            {/* What's Included */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">What's Included</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Single point of accountability (planning, scheduling, supervision).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Vendor sourcing and negotiation.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Bonded/insured, background-checked teams.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Weekly status updates and change order management.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Final punch list + documentation (photos, receipts, donation letters).</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
