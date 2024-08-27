import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongo";
import { ApiCommand, docToApi, ICommand } from "@/lib/commands";
import readStreamToJSON from "@/lib/readstreamToJSON";

// // Secret password for authentication
// const SECRET_PASSWORD = process.env.PSWD;

export async function GET() {
    // Route to get the entire db
    // GET https://y2b.pages.dev/api/cmds/
    ("use server");
    // Check for the correct password in the headers
    // const password = request.headers.get("Authorization");
    // if (password !== SECRET_PASSWORD) {
    //     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    try {
        const client = await connectToDatabase();
        const commandsDb: ICommand[] = (await client
            .db("site")
            .collection("commands")
            .find()
            .toArray()) as unknown as ICommand[];

        const commands: ApiCommand[] = await Promise.all(
            commandsDb.map(async (cmd) => {
                return await docToApi(cmd);
            })
        );

        return NextResponse.json(
            {
                commands,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "An error occurred", details: error },
            { status: 500 }
        );
    }
}

// Secret password for authentication
const pass = process.env.PSWD;

export async function PUT(req: NextRequest) {
    // Route to batch update the db
    // GET https://y2b.pages.dev/api/cmds/
    const password = req.headers.get("Authorization");
    if (password !== pass) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const commands = await readStreamToJSON(req.body);

    try {
        const client = await connectToDatabase();
        const collection = client.db("site").collection("commands");
        // Remove all existing commands
        await collection.deleteMany({});

        // Insert new commands
        let formattedCommands: ICommand[] = [];
        if (commands) {
            // to sanitize the commands. we don't want any other nonsense
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
