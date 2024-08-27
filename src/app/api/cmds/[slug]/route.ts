import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongo";
import { ApiCommand, ApiCommandBody, docToApi, ICommand } from "@/lib/commands";
import readStreamToJSON from "@/lib/readstreamToJSON";

// const pass = process.env.PSWD;

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    "use server";
    try {
        // Get a singular command
        // GET https://y2b.pages.dev/api/cmds/[slug]

        // const password = request.headers.get("Authorization");
        // if (password !== pass)
        //     return NextResponse.json(
        //         { error: "Unauthorized" },
        //         { status: 401 }
        //     );

        const client = await connectToDatabase();

        const { slug } = params;
        const commandName = slug;

        const command = await client
            .db("site")
            .collection("commands")
            .findOne({ name: commandName });

        if (!command) {
            return NextResponse.json(
                { message: "Command not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(await docToApi(command as any as ICommand), {
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

export async function PUT(
    req: NextRequest,
    { params }: { params: { slug: string } }
) {
    ("use server");
    // Add a command or update an existing command.
    // PUT https://y2b.pages.dev/api/cmds/[slug]
    const password = req.headers.get("Authorization");
    if (password !== process.env.PSWD)
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const client = await connectToDatabase();
        const collection = client.db("site").collection("commands");

        const { slug } = params;
        const commandName = slug;

        console.log(req.body);

        if (!req.body)
            return NextResponse.json(
                { error: "No command data provided" },
                { status: 400 }
            );

        const bCmd = (await readStreamToJSON(
            req.body
        )) as any as ApiCommandBody;

        let cmd = (await collection.findOne({
            name: commandName,
        })) as any as ApiCommand;
        if (cmd) {
            if (bCmd?.subcommands?.length !== 0) {
                cmd.subcommands = bCmd?.subcommands;
            }

            cmd.description = bCmd?.description ?? cmd.description;
            cmd.use = bCmd?.use ?? cmd.use;

            // TO-DO, not done.

            // return NextResponse.json(
            //     { error: "Command exists!" },
            //     { status: 403 }
            // );
        }

        return NextResponse.json({ message: "ok" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "An error occurred", details: error },
            { status: 500 }
        );
    }
}
