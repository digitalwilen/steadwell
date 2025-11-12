"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  const handleFooterCTAClick = () => {
    window.gtag?.("event", "cta_click", {
      location: "footer",
      label: "Schedule a Clarity Call",
    })
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleNavClick = (anchorId: string) => {
    const element = document.getElementById(anchorId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 pb-8 border-b border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-lg font-semibold mb-2">Ready to take the list off your plate?</p>
              <p className="text-primary-foreground/80">Schedule a free clarity call with one of our coordinators.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button
                onClick={handleFooterCTAClick}
                className="bg-background text-foreground hover:bg-background/90 hover:shadow-lg font-semibold px-8 py-3 whitespace-nowrap transition-all duration-200 cursor-pointer"
              >
                Schedule Your Free 20-Minute Clarity Call
              </Button>
              <a
                href="tel:+12405932485"
                className="flex items-center justify-center px-8 py-3 border-2 border-background rounded-md hover:bg-foreground/10 transition-all duration-200 font-semibold cursor-pointer"
                onClick={() => {
                  window.gtag?.("event", "phone_click", {
                    location: "footer",
                    phone: "(240) 593-2485",
                  })
                }}
              >
                (240) 593-2485
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8 py-6 border-t border-b border-primary-foreground/20">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80 font-semibold">
            <span>NASMM Member</span>
            <span>•</span>
            <span>AIP Certified</span>
            <span>•</span>
            <span>Bonded & Insured</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <button
              onClick={handleLogoClick}
              className="font-bold text-lg mb-4 hover:opacity-80 transition cursor-pointer"
            >
              Steadwell
            </button>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Coordination services for moves, estates, and aging-in-place. Bonded, insured, background-checked teams.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <button onClick={() => handleNavClick("dual-path-section")} className="hover:underline cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <Link href="#" className="hover:underline cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline cursor-pointer">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick("dual-path-section")} className="hover:underline cursor-pointer">
                  Move & Estate
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("dual-path-section")} className="hover:underline cursor-pointer">
                  Aging-in-Place
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("pricing-section")} className="hover:underline cursor-pointer">
                  Pricing
                </button>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline cursor-pointer">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline cursor-pointer">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+12405932485"
                  className="hover:underline font-semibold cursor-pointer"
                  onClick={() => {
                    window.gtag?.("event", "phone_click", {
                      location: "footer_contact",
                      phone: "(240) 593-2485",
                    })
                  }}
                >
                  (240) 593-2485
                </a>
              </li>
              <li>Monday–Friday, 8AM–6PM local</li>
              <li className="pt-2">Austin, TX & Raleigh, NC</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Steadwell. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0 text-primary-foreground/70">
            <p>Steadwell provides non-medical coordination services. We are not a healthcare provider.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
