import { Schema, Document } from "mongoose";

export interface ISubcommand {
    name: string;
    description: string;
    use: string;
}

export interface ICommand {
    _id: string;
    description?: string;
    use?: string;
    subcommands?: ISubcommand[];
}

const SubcommandSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    use: { type: String, required: true },
});

const CommandSchema: Schema = new Schema({
    _id: { type: String, required: true },
    description: { type: String },
    use: { type: String },
    subcommands: [SubcommandSchema],
});

// With the MongoDB native driver, you typically interact with collections directly
// const Command = mongoose.model<ICommand>("Command", CommandSchema);

export default CommandSchema; // Export the schema for direct use in MongoDB operations
