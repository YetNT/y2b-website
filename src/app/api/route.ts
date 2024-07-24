// Route to get the entire commands.json file.
// GET https://y2b.pages.dev/api/cmds/
import { NextRequest, NextResponse } from "next/server";
const cmds = new ApiRoute(
    "/cmds/",
    "GET",
    "Gets an array of all the commands in the DB"
);
const cmdsSlug = new ApiRoute(
    "/cmds/[slug]/",
    "GET",
    "Get a single command with the name [slug]."
);
const cmdsUpdate = new ApiRoute(
    "/cmds/update/",
    "POST",
    "Batch update all the commands in the database. (Drops everything, and inserts the given array of commands)",
    true
);
import { ApiRoute, Route } from "@/lib/apiTypes";

// dont ask why i do it like this, i want to, it's my code.
const arr = [
    new ApiRoute("/", "GET", "how do you think you're here"),
    cmds,
    cmdsSlug,
    cmdsUpdate,
];

export async function GET(request: NextRequest) {
    "use server";

    try {
        let body: { info: string; routes: Route[] } = {
            info: "Some routes may require the Authorization header.",
            routes: await Promise.all(
                arr.map(async (route) => await route.toRoute())
            ),
        };

        return NextResponse.json(body, {
            status: 200,
        });
    } catch (error) {
        return NextResponse.json(
            { error: "An error occurred", details: error },
            { status: 500 }
        );
    }
}
