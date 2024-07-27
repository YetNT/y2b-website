// lib/mongodb.ts

import { MongoClient } from "mongodb";

let client: MongoClient;

async function connectToDatabase(): Promise<MongoClient> {
    "use server";
    if (!client) {
        client = new MongoClient(process.env.MONGODB_URI ?? "");
        await client.connect();
    }
    return client;
}

export default connectToDatabase;
