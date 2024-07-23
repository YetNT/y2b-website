// src/models/Command.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ISubcommand extends Document {
    name: string;
    description: string;
    use: string;
}

export interface ICommand extends Document {
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

const CommandSchema: Schema = new Schema(
    {
        _id: { type: String, required: true },
        description: { type: String },
        use: { type: String },
        subcommands: { type: [SubcommandSchema] },
    },
    { _id: true }
);

const Command =
    mongoose.models?.Command ||
    mongoose.model<ICommand>("Command", CommandSchema);

export default Command;
