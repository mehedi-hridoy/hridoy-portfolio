import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactSchema } from "@/lib/validation/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

// 🔥 Simple in-memory rate limit → 1 message per 20 sec per IP
const RATE_LIMIT = new Map<string, number>();

// Validation schema shared via lib

export async function POST(req: Request) {
  // ----- RATE LIMIT CHECK -----
  // Prefer first IP in x-forwarded-for, else x-real-ip, else fallback
  const forwarded = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  const ip = (forwarded?.split(",")[0]?.trim() || realIp || "unknown").toString();
  const now = Date.now();

  if (RATE_LIMIT.has(ip) && now - RATE_LIMIT.get(ip)! < 20_000) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Try again in a moment." },
      { status: 429 }
    );
  }

  RATE_LIMIT.set(ip, now);

  // ----- EMAIL SEND -----
  try {
    const body = await req.json().catch(() => null);
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const from =
      process.env.CONTACT_FROM ||
      "Portfolio Contact <onboarding@resend.dev>"; // Resend dev sender
    const to = process.env.CONTACT_TO || "mehedi.hridoy101@gmail.com";

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Email send failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
