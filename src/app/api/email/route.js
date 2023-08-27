import { NextResponse } from "next/server";
import { Resend } from "resend";
import NotionMagicLinkEmail from "@/emails/page";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  await resend.sendEmail({
    from: "Acme <onboarding@resend.dev>",
    to: ['prthamesh842003@gmail.com', 'prathameshsakhare192@gmail.com'],
    subject: "Hello user!",
    react : <NotionMagicLinkEmail />
  });
  return NextResponse.json({ status: "ok" });
}
