// Route to overwrite the entire commands.json file.
// POST https://y2b.pages.dev/api/cmds/update
import { NextRequest, NextResponse } from "next/server";
import model, { ICommand } from "@/models/Commands";
import connectToDatabase from "@/lib/mongo";
export const runtime = "edge";

// Secret password for authentication
const pass = process.env.PSWD;

async function readStreamToArray(stream: any | null): Promise<any[]> {
    if (!stream) {
        return [];
    }

    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
        chunks.push(chunk);
    }
    return JSON.parse(Buffer.concat(chunks).toString());
}

export async function POST(req: NextRequest) {
    const password = req.headers.get("Authorization");
    if (password !== pass) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const commands = await readStreamToArray(req.body);

    try {
        await connectToDatabase();
        // Remove all existing commands
        await model.deleteMany({});

        // Insert new commands
        let formattedCommands: any[] = [];
        if (commands) {
            formattedCommands = commands.map((cmd) => ({
                _id: cmd._id, // Use '_id' as '_id'
                description: cmd.description ?? "",
                use: cmd.use ?? "",
                subcommands: cmd.subcommands ?? [],
            }));
        }

        const updatedCommands = await model.insertMany(formattedCommands);

        return NextResponse.json(
            {
                updatedCommands,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update commands" },
            { status: 500 }
        );
    }
}
