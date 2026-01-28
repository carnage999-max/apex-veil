
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";
import { DemoRequestEmail } from "@/components/emails/DemoRequestEmail";

const resend = new Resend(process.env.RESEND_API_KEY || "re_123456789"); // Fallback for build

const schema = z.object({
    name: z.string().min(2),
    organization: z.string().min(2),
    phone: z.string().min(10),
    email: z.string().email(),
    useCase: z.string().min(10),
    location: z.string().min(2),
    // captcha: z.string().min(1),
});

export async function POST(req: NextRequest) {
    try {
        // 1. Rate Limit
        const ip = req.headers.get("x-forwarded-for") || "unknown";
        if (!rateLimit(ip)) {
            return NextResponse.json({ message: "Too many requests" }, { status: 429 });
        }

        // 2. Parse Data
        const body = await req.json();
        const data = schema.parse(body);

        /*
        // 3. Verify Captcha (Server-side)
        // Using Google Recaptcha verification logic
        const captchaSecret = process.env.RECAPTCHA_SECRET_KEY || "6LeIxAcTAAAAAGG-vFI1TnRWxZZkh3kFaPzXU6ER"; // Test Secret
        const captchaVerify = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${data.captcha}`, {
            method: 'POST'
        });
        const captchaResult = await captchaVerify.json();

        if (!captchaResult.success || (captchaResult.score && captchaResult.score < 0.5)) {
            if (process.env.NODE_ENV === "production") {
                return NextResponse.json({ message: "Security verification failed" }, { status: 400 });
            }
        }
        */

        // 4. Save to DB (Graceful fallback if DB not connected)
        try {
            await prisma.demoRequest.create({
                data: {
                    name: data.name,
                    organization: data.organization,
                    phone: data.phone,
                    email: data.email,
                    useCase: data.useCase,
                    location: data.location,
                    ipAddress: ip,
                    userAgent: req.headers.get("user-agent"),
                }
            });
        } catch (dbError) {
            console.warn("Database save failed (expected without credentials):", dbError);
            // Continue to email
        }

        // 5. Send Email
        try {
            if (process.env.RESEND_API_KEY) {
                await resend.emails.send({
                    from: "Apex Veil <info@nathanreardon.com>",
                    to: ["nathan@membershipauto.com", "ndarequests@apexveil.com"],
                    subject: `Demo Request: ${data.organization}`,
                    react: <DemoRequestEmail {...data} />,
                });
            }
        } catch (emailError) {
            console.error("Email send failed:", emailError);
            return NextResponse.json({ message: "System transmission error" }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: "Invalid input data", errors: error.issues }, { status: 400 });
        }
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
