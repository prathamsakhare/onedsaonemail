import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  resend.sendEmail({
    from: "Acme <onboarding@resend.dev>",
    to: "prthamesh842003@gmail.com",
    subject: "Hello user!",
    html: "<h1>Get One DSA Question per day with 30dayscoding.com!</h1>",
  });
  return NextResponse.json({ status: "ok" });
}
