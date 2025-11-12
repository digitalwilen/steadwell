"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCTAClick = () => {
    window.gtag?.("event", "cta_click", {
      location: "header",
      button_text: "Schedule a Clarity Call",
    })
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleNavClick = (anchorId: string) => {
    const element = document.getElementById(anchorId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`sticky top-0 z-40 w-full border-b transition-all ${
          isScrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-background"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className="text-xl font-bold text-primary cursor-pointer hover:opacity-80 transition"
            >
              Steadwell
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick("dual-path-section")}
              className="text-foreground/80 hover:text-foreground transition cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("five-step-section")}
              className="text-foreground/80 hover:text-foreground transition cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick("pricing-section")}
              className="text-foreground/80 hover:text-foreground transition cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavClick("faq-section")}
              className="text-foreground/80 hover:text-foreground transition cursor-pointer"
            >
              FAQ
            </button>
            <a
              href="tel:+12405932485"
              className="text-foreground/80 hover:text-foreground transition cursor-pointer"
              onClick={() => {
                window.gtag?.("event", "phone_click", {
                  location: "header",
                  phone: "(240) 593-2485",
                })
              }}
            >
              (240) 593-2485
            </a>
          </nav>

          <Button
            onClick={handleCTAClick}
            className="hidden md:inline-flex bg-foreground hover:bg-foreground/85 text-background px-6 py-2 text-base font-semibold transition-colors cursor-pointer"
          >
            Schedule a Clarity Call
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col gap-4 px-4 py-4">
              <button
                onClick={() => handleNavClick("dual-path-section")}
                className="text-foreground/80 hover:text-foreground cursor-pointer text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("five-step-section")}
                className="text-foreground/80 hover:text-foreground cursor-pointer text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavClick("pricing-section")}
                className="text-foreground/80 hover:text-foreground cursor-pointer text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavClick("faq-section")}
                className="text-foreground/80 hover:text-foreground cursor-pointer text-left"
              >
                FAQ
              </button>
              <a
                href="tel:+12405932485"
                className="text-foreground/80 hover:text-foreground cursor-pointer"
                onClick={() => {
                  window.gtag?.("event", "phone_click", {
                    location: "header_mobile",
                    phone: "(240) 593-2485",
                  })
                }}
              >
                (240) 593-2485
              </a>
              <Button
                onClick={handleCTAClick}
                className="w-full bg-foreground hover:bg-foreground/85 text-background font-semibold py-3 mt-2 cursor-pointer"
              >
                Schedule a Clarity Call
              </Button>
            </nav>
          </div>
        )}
      </header>

      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-foreground text-background p-3 z-40 border-t">
        <Button
          onClick={handleCTAClick}
          className="w-full bg-foreground hover:bg-foreground/85 text-background font-semibold py-4 cursor-pointer"
        >
          Schedule a Clarity Call
        </Button>
      </div>
      <div className="md:hidden h-20" />
    </>
  )
}
