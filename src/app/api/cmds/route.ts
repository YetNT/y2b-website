// Route to get the entire commands.json file.
// GET https://y2b.pages.dev/api/cmds/
import { NextRequest, NextResponse } from "next/server";
import Command from "@/models/Commands";
import connectToDatabase from "@/lib/mongo";
import { ApiCommand, docToApi, Subcommand } from "@/lib/commands";

export const runtime = "edge";

// Secret password for authentication
const SECRET_PASSWORD = process.env.PSWD;

export async function GET(request: NextRequest) {
    // Check for the correct password in the headers
    const password = request.headers.get("Authorization");
    if (password !== SECRET_PASSWORD) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        await connectToDatabase();

        const commandsDb = await Command.find({});
        const commands: ApiCommand[] = commandsDb.map((cmd) => docToApi(cmd));

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
