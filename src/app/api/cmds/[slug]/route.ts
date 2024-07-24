// src/app/api/cmds/[command]/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongo";
import { docToApi } from "@/lib/commands";
import { ICommand } from "@/models/cmdModel";

// const pass = process.env.PSWD;

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    "use server";
    try {
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
