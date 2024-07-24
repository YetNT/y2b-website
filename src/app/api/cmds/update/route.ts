// Route to overwrite the entire commands.json file.
// POST https://y2b.pages.dev/api/cmds/update
import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";
import connectToDatabase from "@/lib/mongo";
import { ApiRoute } from "@/lib/apiTypes";
import { ApiCommand } from "@/lib/commands";
import { ICommand } from "@/models/cmdModel";

export const cmdsUpdate = new ApiRoute(
    "/cmds/update/",
    "POST",
    "Batch update all the commands in the database"
);
// Secret password for authentication
const pass = process.env.PSWD;

async function readStreamToArray(stream: any | null): Promise<any[]> {
    "use server";
    // jkrfcdo j
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
        const client = await connectToDatabase();
        const collection = client.db("site").collection("commands");
        // Remove all existing commands
        await collection.deleteMany({});

        // Insert new commands
        let formattedCommands: ICommand[] = [];
        if (commands) {
            formattedCommands = commands.map(
                (cmd: ApiCommand): ICommand => ({
                    name: cmd.name, // Use '_id' as '_id'
                    description: cmd.description ?? "",
                    use: cmd.use ?? "",
                    subcommands: cmd.subcommands ?? [],
                })
            );
        }

        const updatedCommands = await collection.insertMany(formattedCommands);

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
