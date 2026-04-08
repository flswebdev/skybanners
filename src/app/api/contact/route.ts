import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissions.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  submissions.set(ip, recent);
  return recent.length >= RATE_LIMIT_MAX;
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim();
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, campaignType, message, fileUrls } = body;

    // Validation
    if (!name || !email || !campaignType || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Bot protection: honeypot / timing
    if (body._hp) {
      return NextResponse.json({ success: true }); // silently accept
    }

    // Record for rate limiting
    const timestamps = submissions.get(ip) ?? [];
    timestamps.push(Date.now());
    submissions.set(ip, timestamps);

    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone || ""),
      campaignType: sanitize(campaignType),
      message: sanitize(message),
      fileUrls: Array.isArray(fileUrls) ? (fileUrls as string[]).filter((u) => typeof u === "string") : [],
    };

    // Check for Resend API key
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: `Sky Banners <${process.env.RESEND_FROM_EMAIL || "noreply@skybanners.ca"}>`,
        to: process.env.CONTACT_EMAIL || "info@skybanners.ca",
        replyTo: sanitizedData.email,
        subject: `New Quote Request: ${sanitizedData.campaignType} - ${sanitizedData.name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Phone:</strong> ${sanitizedData.phone || "Not provided"}</p>
          <p><strong>Campaign Type:</strong> ${sanitizedData.campaignType}</p>
          <p><strong>Message:</strong></p>
          <p>${sanitizedData.message}</p>
          ${sanitizedData.fileUrls.length > 0 ? `
          <p><strong>Attached Files:</strong></p>
          <ul>${sanitizedData.fileUrls.map((url) => `<li><a href="${url}">${url.split("/").pop()}</a></li>`).join("")}</ul>
          ` : ""}
        `,
      });
    } else {
      // Stub mode
      console.log("[STUB] Contact form submission:", sanitizedData);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
