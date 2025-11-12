"use client"

export function ProblemFraming() {
  return (
    <section id="five-step-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Endless to-dos. No clear starting point. We can help.
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              We own the list and the vendors. You get a clear plan and steady progress.
            </p>

            {/* SLA Strip */}
            <div className="space-y-3 bg-background rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-foreground rounded-full" />
                <span className="font-semibold text-foreground">Response within one business day.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-foreground rounded-full" />
                <span className="font-semibold text-foreground">Action plan delivered within 72 hours.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-foreground rounded-full" />
                <span className="font-semibold text-foreground">Weekly status updates (one owner, single thread).</span>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-2">5-Step System</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">Five steps. One accountable partner.</p>
            <div className="space-y-4">
              {[
                { step: 1, title: "Discovery Call", desc: "Understand your goals, constraints, and timeline." },
                { step: 2, title: "Custom Plan Written", desc: "Scope, timeline, and cost ranges." },
                {
                  step: 3,
                  title: "Vendor Coordination",
                  desc: "We source, propose, book, and supervise vendors (you retain final approval).",
                },
                { step: 4, title: "Weekly Updates", desc: "One summary, next milestones, no chasing." },
                { step: 5, title: "Project Completion", desc: "Punch list closed, photo proof, receipts archived." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
