"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    helpType: "",
    situation: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const pathInput = document.getElementById("path-field") as HTMLInputElement
    const path = pathInput?.value || formData.helpType || ""

    try {
      window.gtag?.("event", "form_submit", {
        firstName: !!formData.firstName,
        lastName: !!formData.lastName,
        email_provided: !!formData.email,
        phone_provided: !!formData.phone,
        help_type: formData.helpType,
        situation_provided: !!formData.situation,
        path: path,
      })

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          helpType: formData.helpType,
          situation: formData.situation,
          path: path || undefined,
        }),
      })

      if (!response.ok) throw new Error("Failed to submit")

      setSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        helpType: "",
        situation: "",
      })
    } catch (err) {
      setError("Something went wrong. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFormStart = () => {
    window.gtag?.("event", "form_start", {
      location: "lead_capture",
    })
  }

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's make this simple.</h2>
          <p className="text-primary-foreground/90">Schedule your free 20-minute Clarity Call today.</p>
        </div>

        <Card className="p-8 bg-primary-foreground text-foreground">
          {submitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold mb-3">Thank you!</h3>
              <p className="text-foreground/80 mb-4">
                We'll be in touch within one business day to confirm your Clarity Call.
              </p>
              <p className="text-foreground/70">
                In the meantime, feel free to call us at{" "}
                <a href="tel:+12405932485" className="font-semibold text-primary hover:underline">
                  (240) 593-2485
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" id="path-field" name="path" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={handleFormStart}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="helpType" className="block text-sm font-semibold text-foreground mb-2">
                  What type of help do you need?*
                </label>
                <select
                  id="helpType"
                  name="helpType"
                  required
                  value={formData.helpType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select an option...</option>
                  <option value="Move & Estate">Move & Estate</option>
                  <option value="Aging-in-Place">Aging-in-Place</option>
                  <option value="Both">Both</option>
                  <option value="I'm Not Sure">I'm Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="situation" className="block text-sm font-semibold text-foreground mb-2">
                  Describe your situation (optional)
                </label>
                <textarea
                  id="situation"
                  name="situation"
                  value={formData.situation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us a bit more about your situation..."
                  rows={4}
                />
              </div>

              <div className="text-center text-sm text-foreground/70">
                <p>
                  Prefer to call?{" "}
                  <a href="tel:+12405932485" className="font-semibold text-primary hover:underline">
                    (240) 593-2485
                  </a>
                </p>
              </div>

              {error && (
                <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold cursor-pointer"
              >
                {isSubmitting ? "Requesting..." : "Request Your Clarity Call"}
              </Button>

              <p className="text-xs text-foreground/60 text-center">
                We respect your privacy. Your information will only be used to schedule your Clarity Call.
              </p>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
