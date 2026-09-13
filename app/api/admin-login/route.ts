import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { password } = await req.json();
    if (!password) {
        return NextResponse.json(
            { success: false, message: "Password is required." },
            { status: 400 }
        );
    }

    if (password !== process.env.ADMIN_PASSWORD) {
        return NextResponse.json(
            { success: false, message: "Incorrect password." },
            { status: 401 }
        );
    }

    return NextResponse.json({ success: true });
}