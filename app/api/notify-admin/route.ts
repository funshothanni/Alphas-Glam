import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const {
        customerName,
        customerEmail,
        service,
        date,
        time,
        notes,
    } = await req.json();

    const { error } = await resend.emails.send({
        from: "Alpha's Glam <bookings@alphasglam.com>",
        to: "funshothanni@gmail.com",
        subject: "New Booking Request",
        html: `
            <div style="
                font-family: Arial, Helvetica, sans-serif;
                max-width: 600px;
                margin: 0 auto;
                color: #2f2421;
            ">
                <h2 style="color: #7d4f4a;">
                    New Booking Request 💄
                </h2>

                <p>You have a new booking request from a client.</p>

                <table
                    style="
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 16px;
                    "
                >
                    <tr>
                        <td style="
                            padding: 10px;
                            background: #f4ede8;
                            font-weight: bold;
                            width: 40%;
                        ">
                            Client Name
                        </td>

                        <td style="
                            padding: 10px;
                            background: #f4ede8;
                        ">
                            ${customerName}
                        </td>
                    </tr>

                    <tr>
                        <td style="
                            padding: 10px;
                            font-weight: bold;
                        ">
                            Email
                        </td>

                        <td style="padding: 10px;">
                            ${customerEmail}
                        </td>
                    </tr>

                    <tr>
                        <td style="
                            padding: 10px;
                            background: #f4ede8;
                            font-weight: bold;
                        ">
                            Service
                        </td>

                        <td style="
                            padding: 10px;
                            background: #f4ede8;
                        ">
                            ${service}
                        </td>
                    </tr>

                    <tr>
                        <td style="
                            padding: 10px;
                            font-weight: bold;
                        ">
                            Date
                        </td>

                        <td style="padding: 10px;">
                            ${date}
                        </td>
                    </tr>

                    <tr>
                        <td style="
                            padding: 10px;
                            background: #f4ede8;
                            font-weight: bold;
                        ">
                            Time
                        </td>

                        <td style="
                            padding: 10px;
                            background: #f4ede8;
                        ">
                            ${time}
                        </td>
                    </tr>

                    <tr>
                        <td style="
                            padding: 10px;
                            font-weight: bold;
                            vertical-align: top;
                        ">
                            Additional Notes
                        </td>

                        <td style="
                            padding: 10px;
                            white-space: pre-wrap;
                        ">
                            ${notes?.trim() || "No additional notes provided."}
                        </td>
                    </tr>
                </table>

                <p style="margin-top: 24px;">
                    Log in to your
                    <a
                        href="https://alphasglam.com/admin"
                        style="color: #7d4f4a;"
                    >
                        admin dashboard
                    </a>
                    to confirm or cancel this booking.
                </p>
            </div>
        `,
    });

    if (error) {
        return NextResponse.json(
            { error },
            { status: 500 }
        );
    }

    return NextResponse.json({ success: true });
}