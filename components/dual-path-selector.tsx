"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function DualPathSelector() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          window.gtag?.("event", "scroll_depth", {
            section: "dual_path",
          })
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("dual-path-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible])

  const handlePathSelection = (path: string) => {
    setSelectedPath(path)
    window.gtag?.("event", "cta_click", {
      location: "dual_path_selector",
      label: path === "move_estate" ? "Move & Estate" : "Aging-in-Place",
    })
    // Store in hidden field for form
    const pathInput = document.getElementById("path-field") as HTMLInputElement
    if (pathInput) {
      pathInput.value = path === "move_estate" ? "Move & Estate" : "Aging-in-Place"
    }

    const helpTypeSelect = document.getElementById("helpType") as HTMLSelectElement
    if (helpTypeSelect) {
      helpTypeSelect.value = path === "move_estate" ? "Move & Estate" : "Aging-in-Place"
    }

    // Scroll to contact form
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="dual-path-section"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Which transition are you planning?</h2>
          <p className="text-foreground/70 text-lg leading-relaxed">Select your situation to get started.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            onClick={() => handlePathSelection("move_estate")}
            className={`p-8 border transition-all cursor-pointer ${
              selectedPath === "move_estate"
                ? "border-foreground bg-foreground/5 shadow-md"
                : "border-border hover:border-foreground/30 hover:shadow-md hover:scale-102"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-foreground">Move & Estate</h3>
                {selectedPath === "move_estate" && (
                  <div className="bg-foreground p-2 rounded-full">
                    <Check className="w-5 h-5 text-background" />
                  </div>
                )}
              </div>

              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-foreground font-bold mt-1">•</span>
                  <span>Home emptied, move executed, new place setup.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground font-bold mt-1">•</span>
                  <span>Estate items sold/donated with receipts for your records.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground font-bold mt-1">•</span>
                  <span>Repairs, clean-out done, home market-ready.</span>
                </li>
              </ul>

              <Button
                onClick={() => handlePathSelection("move_estate")}
                className={`w-full mt-6 font-semibold transition-all duration-200 cursor-pointer ${
                  selectedPath === "move_estate"
                    ? "bg-foreground hover:bg-foreground/90 text-background shadow-md"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                Start Move / Estate Plan
              </Button>
            </div>
          </Card>

          <Card
            onClick={() => handlePathSelection("aging_in_place")}
            className={`p-8 border transition-all cursor-pointer ${
              selectedPath === "aging_in_place"
                ? "border-accent bg-accent/5 shadow-md"
                : "border-border hover:border-accent/40 hover:shadow-md hover:scale-102"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-foreground">Aging-in-Place</h3>
                {selectedPath === "aging_in_place" && (
                  <div className="bg-accent p-2 rounded-full">
                    <Check className="w-5 h-5 text-accent-foreground" />
                  </div>
                )}
              </div>

              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Professional home safety assessment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Safety upgrades: grab bars, ramps, bath & lighting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Ongoing maintenance plan and vetted pros.</span>
                </li>
              </ul>

              <Button
                onClick={() => handlePathSelection("aging_in_place")}
                className={`w-full mt-6 font-semibold transition-all duration-200 cursor-pointer ${
                  selectedPath === "aging_in_place"
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-md"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                Start Aging-In-Place Plan
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
