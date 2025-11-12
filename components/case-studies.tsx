import { Card } from "@/components/ui/card"

export function CaseStudies() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Real families. Real results.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Austin Case Study */}
          <Card className="p-8 border-border">
            <div className="mb-6">
              <div className="text-sm font-semibold text-primary mb-2">AUSTIN, TX</div>
              <h3 className="text-xl font-bold text-foreground">Estate Sale & Home Sale</h3>
            </div>

            <p className="text-foreground/80 mb-4">
              "My mom passed and left a full house. I live 2 hours away. I didn't know where to start."
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
              <p className="text-foreground font-semibold italic">
                "Everstead handled everything—sorting, estate sale, yard cleanup, repairs. The house sold 10 days after
                listing. I can't overstate the value of having one person to call."
              </p>
            </div>

            <div className="space-y-2 text-foreground/70">
              <p>
                <span className="font-semibold text-foreground">40 hours saved.</span> Estate sale conducted + home
                prepped for market.
              </p>
              <p>
                <span className="font-semibold text-foreground">$485K sale price</span> vs. estimated $420K without
                prep.
              </p>
              <p>
                <span className="font-semibold text-foreground">Coordination fee:</span> $8,200 (far less than
                opportunity cost of DIY)
              </p>
            </div>
          </Card>

          {/* Raleigh Case Study */}
          <Card className="p-8 border-border">
            <div className="mb-6">
              <div className="text-sm font-semibold text-accent mb-2">RALEIGH, NC</div>
              <h3 className="text-xl font-bold text-foreground">Aging-in-Place Safety Retrofit</h3>
            </div>

            <p className="text-foreground/80 mb-4">
              "Dad had a fall. We panicked. Everstead came in 48 hours with a professional assessment and plan."
            </p>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-4">
              <p className="text-foreground font-semibold italic">
                "Grab bars, ramp, accessible shower, better lighting—done in 2 weeks. Dad is safe. I can finally sleep."
              </p>
            </div>

            <div className="space-y-2 text-foreground/70">
              <p>
                <span className="font-semibold text-foreground">35 hours saved.</span> Assessment + vendor coordination
                + installation oversight.
              </p>
              <p>
                <span className="font-semibold text-foreground">$22K in modifications</span> completed without delays or
                family stress.
              </p>
              <p>
                <span className="font-semibold text-foreground">Coordination fee:</span> $3,600 (3-5 year independence
                extension priceless)
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
