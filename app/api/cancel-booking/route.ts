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
        cancellationNote,
    } = await req.json();

    const { error } = await resend.emails.send({
        from: "Alpha's Glam <bookings@alphasglam.com>",
        to: customerEmail,
        subject: "Your Booking Has Been Cancelled",

        html: `
            <div
                style="
                    font-family: Arial, Helvetica, sans-serif;
                    max-width: 600px;
                    margin: 0 auto;
                    color: #2f2421;
                "
            >

                <!-- HEADER -->
                <div
                    style="
                        background: #7d4f4a;
                        padding: 30px;
                        text-align: center;
                    "
                >
                    <p
                        style="
                            margin: 0 0 10px;
                            color: #f4ede8;
                            font-size: 12px;
                            letter-spacing: 4px;
                            text-transform: uppercase;
                        "
                    >
                        Alpha's Glam
                    </p>

                    <h1
                        style="
                            margin: 0;
                            color: #f4ede8;
                            font-family: Georgia, 'Times New Roman', serif;
                            font-size: 32px;
                        "
                    >
                        Booking Cancelled
                    </h1>
                </div>


                <!-- BODY -->
                <div
                    style="
                        background: #ffffff;
                        padding: 32px;
                    "
                >
                    <p
                        style="
                            font-size: 16px;
                            line-height: 1.7;
                            margin-top: 0;
                        "
                    >
                        Hi ${customerName},
                    </p>

                    <p
                        style="
                            font-size: 16px;
                            line-height: 1.7;
                        "
                    >
                        Your appointment with Alpha's Glam has been cancelled.
                        Here are the appointment details:
                    </p>


                    <!-- APPOINTMENT DETAILS -->
                    <table
                        style="
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 24px;
                        "
                    >

                        <tr>
                            <td
                                style="
                                    padding: 14px;
                                    background: #f4ede8;
                                    font-weight: bold;
                                    width: 35%;
                                "
                            >
                                Service
                            </td>

                            <td
                                style="
                                    padding: 14px;
                                    background: #f4ede8;
                                "
                            >
                                ${service}
                            </td>
                        </tr>

                        <tr>
                            <td
                                style="
                                    padding: 14px;
                                    font-weight: bold;
                                "
                            >
                                Date
                            </td>

                            <td style="padding: 14px;">
                                ${date}
                            </td>
                        </tr>

                        <tr>
                            <td
                                style="
                                    padding: 14px;
                                    background: #f4ede8;
                                    font-weight: bold;
                                "
                            >
                                Time
                            </td>

                            <td
                                style="
                                    padding: 14px;
                                    background: #f4ede8;
                                "
                            >
                                ${time}
                            </td>
                        </tr>

                    </table>


                    ${
            cancellationNote
                ? `
                                <!-- CANCELLATION NOTE -->
                                <div
                                    style="
                                        margin-top: 30px;
                                        padding: 22px;
                                        background: #f4ede8;
                                        border-left: 4px solid #7d4f4a;
                                    "
                                >
                                    <p
                                        style="
                                            margin: 0;
                                            font-family: Georgia, 'Times New Roman', serif;
                                            font-size: 18px;
                                            font-weight: bold;
                                            color: #7d4f4a;
                                        "
                                    >
                                        A note from Alpha's Glam
                                    </p>

                                    <p
                                        style="
                                            margin: 14px 0 0;
                                            color: #665b57;
                                            line-height: 1.7;
                                        "
                                    >
                                        ${cancellationNote}
                                    </p>
                                </div>
                            `
                : ""
        }


                    <!-- CLOSING -->
                    <p
                        style="
                            margin-top: 30px;
                            font-size: 16px;
                            color: #665b57;
                            line-height: 1.7;
                        "
                    >
                        We apologize for any inconvenience. You're welcome to
                        book another available appointment at any time.
                    </p>

                    <p
                        style="
                            margin-bottom: 0;
                            font-family: Georgia, 'Times New Roman', serif;
                            font-size: 18px;
                            font-weight: bold;
                            color: #7d4f4a;
                        "
                    >
                        — Alpha's Glam
                    </p>

                </div>

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