// Route to get the entire commands.json file.
// GET https://y2b.pages.dev/api/cmds/
import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";
import { cmds } from "./cmds/route";
import { cmdsSlug } from "./cmds/[slug]/route";
import { cmdsUpdate } from "./cmds/update/route";
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
            info: "All the routes require an Authorization Header with the correct Auth for them to work, FYI",
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
