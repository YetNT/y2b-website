// Route to overwrite the entire commands.json file.
// POST https://y2b.pages.dev/api/cmds/update
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Path to the JSON file
const jsonFilePath = path.resolve("src", "app", "commands", "test.json");

// Secret password for authentication
const pass = process.env.PSWD;

export async function POST(request: NextRequest) {
    // Check for the correct password in the headers
    const password = request.headers.get("Authorization");
    if (password !== pass) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        // Get the JSON data from the request body
        const data = await request.json();

        // Write the new data to the JSON file, effectively overwriting the existing content
        fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2), "utf-8");

        // Return success response
        return NextResponse.json(
            {
                message: "Data overwritten successfully",
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
