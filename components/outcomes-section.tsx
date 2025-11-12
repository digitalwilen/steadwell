export function OutcomesSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
          Typical families reclaim 25–40 hours; Aging-in-Place work finishes in 7–21 days (scope dependent).
        </h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Professional coordination means faster closings, safer homes, and peace of mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Move & Estate Outcomes */}
          <div className="bg-secondary rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full" />
              Move & Estate
            </h3>
            <ul className="space-y-4">
              {[
                "Homes list and sell 15% faster with professional prep.",
                "Family time back: 35+ hours a month during active projects.",
                "Reduced liability: bonded, insured, background-checked vendors.",
                "Tax-ready documentation: receipts + photo proof.",
                "Relationships preserved, not strained.",
              ].map((outcome, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/80">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Aging-in-Place Outcomes */}
          <div className="bg-secondary rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-accent rounded-full" />
              Aging-in-Place
            </h3>
            <ul className="space-y-4">
              {[
                "Professional safety assessment with written recommendations: fall risk reduction 40–60% with targeted upgrades.",
                "Supports independence longer with right-sized modifications.",
                "Lower caregiver stress, clearer plan of record.",
                "Modifications completed in 1–3 weeks, not months.",
              ].map((outcome, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground/80">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
