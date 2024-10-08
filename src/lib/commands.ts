// import { Document } from "mongoose";

/** Type it should be from the DB */
export interface ISubcommand {
    name: string;
    description: string;
    use: string;
}
/** Type it should be from the DB */
export interface ICommand {
    name: string;
    description?: string;
    use?: string;
    subcommands?: ISubcommand[];
}
/** API Type it should be from the DB */
export interface ApiSubcommand {
    name: string;
    description: string;
    use: string;
}

/** API Type it should be from the DB */
export interface ApiCommand {
    name: string;
    description?: string;
    use?: string;
    subcommands?: ApiSubcommand[];
}

export type ApiCommandBody = ApiCommand | undefined;

/**
 * Converts a command document from the database to an API command object.
 *
 * @param cmd - The command document to convert. It must be a Mongoose Document,
 * implement the ICommand interface, and have a required '_id' field.
 *
 * @returns A Command object representing the API representation of the input command.
 * If the input command has subcommands, the returned Command object will include
 * a 'subcommands' field with an array of Subcommand objects. Otherwise, it will
 * include 'description' and 'use' fields.
 */
export async function docToApi(
    cmd: ICommand
    // cmd: Document<unknown, {}, ICommand> &
    //     ICommand &
    //     Required<{
    //         _id: string;
    //     }>
): Promise<ApiCommand> {
    "use server";
    const command: ApiCommand = {
        name: cmd.name,
    };

    // If a command has subcommands, it's use and description do not exist.

    if (cmd.subcommands && cmd.subcommands.length > 0) {
        command.subcommands = cmd.subcommands.map((subcmd) => ({
            name: subcmd.name,
            description: subcmd.description,
            use: subcmd.use,
        }));
    } else {
        command.description = cmd.description;
        command.use = cmd.use;
    }

    return command;
}
