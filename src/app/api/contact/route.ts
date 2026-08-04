import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_USER!,
      replyTo: email,
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <h2>Portfolio Contact</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log(result);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: String(error),
      },
      { status: 500 }
    );
  }
}