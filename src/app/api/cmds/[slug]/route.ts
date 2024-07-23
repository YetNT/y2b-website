// src/app/api/cmds/[command]/route.ts
import { NextRequest, NextResponse } from "next/server";
import Command from "@/models/cmdModel";
import connectToDatabase from "@/lib/mongo";

export const runtime = "edge";

const pass = process.env.PSWD;

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const password = request.headers.get("Authorization");
        if (password !== pass)
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );

        connectToDatabase();

        const { slug } = params;
        const commandId = slug;

        const command = await Command.findById(commandId);

        if (!command) {
            return NextResponse.json(
                { message: "Command not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(command, {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "An error occurred", details: error },
            { status: 500 }
        );
    }
}
