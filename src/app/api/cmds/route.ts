// Route to get the entire commands.json file.
// GET https://y2b.pages.dev/api/cmds/
import { NextRequest, NextResponse } from "next/server";
import { ICommand } from "@/models/cmdModel";
import connectToDatabase from "@/lib/mongo";
import { ApiCommand, docToApi, Subcommand } from "@/lib/commands";
import { ApiRoute } from "@/lib/apiTypes";

export const cmds = new ApiRoute(
    "/cmds/",
    "GET",
    "Gets an array of all the commands in the DB"
);

// Secret password for authentication
const SECRET_PASSWORD = process.env.PSWD;

export async function GET(request: NextRequest) {
    "use server";
    // Check for the correct password in the headers
    const password = request.headers.get("Authorization");
    if (password !== SECRET_PASSWORD) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const client = await connectToDatabase();
        const commandsDb: ICommand[] = (await client
            .db("site")
            .collection("commands")
            .find()
            .toArray()) as unknown as ICommand[];
        console.log(commandsDb);

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
