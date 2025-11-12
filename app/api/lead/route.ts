import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, path } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Log the lead (in production, this would be saved to a database or CRM)
    console.log("[Steadwell Lead]", {
      timestamp: new Date().toISOString(),
      email,
      path,
    })

    // Return success
    return NextResponse.json(
      {
        success: true,
        message: "Lead submitted successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Lead submission error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
