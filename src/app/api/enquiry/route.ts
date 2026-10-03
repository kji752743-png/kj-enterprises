import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, categoryInterest, productInterest, message, honeypot } =
      body;

    // Honeypot spam trap
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Valid name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email address is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || !/^[0-9+\s-]{8,15}$/.test(phone)) {
      return NextResponse.json(
        { error: "Valid phone number is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message cannot be empty." },
        { status: 400 }
      );
    }

    const sanitizedEnquiry = {
      timestamp: new Date().toISOString(),
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      phone: phone.trim().slice(0, 20),
      categoryInterest: categoryInterest ? String(categoryInterest).slice(0, 50) : "General",
      productInterest: productInterest ? String(productInterest).slice(0, 100) : "None",
      message: message.trim().slice(0, 2000),
    };

    console.log("[KJ_ENQUIRY_RECEIVED]", sanitizedEnquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been successfully logged. We will contact you soon.",
        data: {
          name: sanitizedEnquiry.name,
          email: sanitizedEnquiry.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[KJ_ENQUIRY_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to process enquiry. Please try again later." },
      { status: 500 }
    );
  }
}
