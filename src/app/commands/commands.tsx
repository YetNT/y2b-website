export interface Subcommand {
    name: string,
    description: string,
    use: string;
}

export interface Command {
    name: string;
    description?: string;
    use?: string;
    subcommands?: Subcommand[]|undefined;
}

import commands from './commands.json';

export default commands;