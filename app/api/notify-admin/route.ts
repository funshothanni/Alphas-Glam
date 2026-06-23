import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { customerName, customerEmail, service, date, time } = await req.json();

    const { error } = await resend.emails.send({
        from: "Alpha's Glam <bookings@alphasglam.com>",
        to: "funshothanni@gmail.com", // admin email
        subject: "New Booking Request",
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #be185d;">New Booking Request 💄</h2>
                <p>You have a new booking request from a client.</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                    <tr>
                        <td style="padding: 10px; background: #fdf2f8; font-weight: bold; width: 40%;">Client Name</td>
                        <td style="padding: 10px; background: #fdf2f8;">${customerName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold;">Email</td>
                        <td style="padding: 10px;">${customerEmail}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background: #fdf2f8; font-weight: bold;">Service</td>
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
                <p style="margin-top: 24px;">Log in to your <a href="https://alphasglam.com/admin" style="color: #be185d;">admin dashboard</a> to confirm or cancel this booking.</p>
            </div>
        `,
    });

    if (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}