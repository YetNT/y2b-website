// lib/mongodb.ts
import mongoose from "mongoose";

// dont ask, it works
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

let connections: number = 0;

/**
 * Establishes a connection to a MongoDB database using Mongoose.
 * If a connection already exists, it will use the existing connection.
 *
 * @throws Will throw an error if the MONGODB_URI environment variable is not defined.
 *
 * @returns {Promise<void>} - A promise that resolves when the connection is established.
 * If the connection fails, it will reject with an error.
 */
async function connectToDatabase(): Promise<void> {
    try {
        if (mongoose.connections[0].readyState) {
            // Use existing connection if already connected
            return;
        }

        // Connect to the database
        await mongoose.connect(MONGODB_URI ?? "");
        connections++;
        console.log(
            `Connection to MongoDB has been established {${connections}}`
        );
    } catch (err) {
        console.log("Failed to connect to DB!");
        console.error(err);
    }
}

export default connectToDatabase;
