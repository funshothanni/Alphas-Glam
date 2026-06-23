import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { customerName, customerEmail, service, date, time } = await req.json();

    const { error } = await resend.emails.send({
        from: "Alpha's Glam <bookings@alphasglam.com>",
        to: customerEmail,
        subject: "Your Booking is Confirmed! ✨",
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #be185d;">You're all booked! ✨</h2>
                <p>Hi ${customerName}, your appointment with Alpha's Glam has been confirmed.</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                    <tr>
                        <td style="padding: 10px; background: #fdf2f8; font-weight: bold; width: 40%;">Service</td>
                        <td style="padding: 10px; background: #fdf2f8;">${service}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold;">Date</td>
                        <td style="padding: 10px;">${date}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background: #fdf2f8; font-weight: bold;">Time</td>
                        <td style="padding: 10px; background: #fdf2f8;">${time}</td>
                    </tr>
                </table>
                <div style="margin-top: 24px; padding: 16px; background: #fdf2f8; border-radius: 8px;">
                    <p style="margin: 0; font-weight: bold; color: #be185d;">Before your appointment:</p>
                    <ul style="margin-top: 8px; color: #555;">
                        <li>Please arrive with a clean, makeup-free face.</li>
                        <li>Let us know of any allergies or skin sensitivities beforehand.</li>
                    </ul>
                </div>
                <p style="color: #555;">We can't wait to glam you up! 💄</p>
                <p style="color: #be185d; font-weight: bold;">— Alpha's Glam</p>
            </div>
        `,
    });

    if (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}