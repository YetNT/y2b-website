// Route to get the entire commands.json file.
// GET https://y2b.pages.dev/api/cmds/
import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";
import commands from "../../commands/commands.json";

// Secret password for authentication
const SECRET_PASSWORD = process.env.PSWD;

export async function GET(request: NextRequest) {
    // Check for the correct password in the headers
    const password = request.headers.get("Authorization");
    if (password !== SECRET_PASSWORD) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        return NextResponse.json(
            {
                commands,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "An error occurred", details: error },
            { status: 500 }
        );
    }
}
