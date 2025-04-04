export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Name, email, and message are required" }), {
        status: 400,
      })
    }

    console.log("Contact form submission:", { name, email, phone, message })

    return new Response(JSON.stringify({ success: true, message: "Contact form submitted successfully" }), {
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 })
  }
}