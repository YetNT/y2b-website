// GET https://y2b.pages.dev/api/cmds/[command]
import { NextRequest, NextResponse } from "next/server";

const pass = process.env.PSWD;
import commands from "../../../commands/commands.json";
import { Command } from "@/app/commands/commands";

export async function generateStaticParams() {
    return commands.map((cmd) => ({
        slug: cmd.name,
    }));
}

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        // Check for the correct password in the headers
        const password = request.headers.get("Authorization");
        if (password !== pass) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const { slug } = params;
        const command = slug;

        let status = 400;
        let body: Command | object = {};
        const cmd = commands.find((cmd) => cmd.name === command);

        if (cmd) {
            status = 200;
            body = cmd;
        }

        return NextResponse.json(body, {
            status,
        });
    } catch (error) {
        return NextResponse.json(
            { error: "An error occurred", details: error },
            { status: 500 }
        );
    }
}
