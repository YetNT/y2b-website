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


const commands: Command[] = [
    {
        name:"what",
        use: "/use",
        
    },
    {
        name: "challenge",
        subcommands: [
            {
                name: "buttons",
                description: "Click the right button for a reward!",
                use: "/challenge buttons ",
            },
        ],
    },
    {
        name: "crystalize",
        description: "Crystalize your rocks.",
        use: "/crystalize [amount:Number] ",
    },
    {
        name: "daily",
        description: "Receive your daily reward of 1000",
        use: "/daily ",
    },
    {
        name: "promocode",
        description:
            "Redeem promocodes hidden around anywhere for coins and items",
        use: "/promocode [code:String] ",
    },
    {
        name: "rob",
        description: "Rob other people for some quick cash. Can end badly",
        use: "/rob [victim:User] ",
    },
    {
        name: "steal",
        description: "Steal from another user's inventory!",
        use: "/steal [victim:User] ",
    },
    {
        name: "share",
        description: "Share your wealth (or items) with other people",
        use: "/share [user:User] [amount:Integer] (item:{choices}) ",
    },
    {
        name: "vote",
        description: "Vote for the bot on top.gg and discordbotlist",
        use: "/vote ",
    },
    {
        name: "work",
        description: "Work for cash",
        use: "/work [job:{choices}] ",
    },
    {
        name: "balance",
        description:
            "View your or another user's coin balance, bank and networth",
        use: "/balance (user:User) ",
    },
    {
        name: "deposit",
        description: "Deposit coins into your bank",
        use: "/deposit [amount:Number] ",
    },
    {
        name: "inventory",
        description: "View your or another user's inventory",
        use: "/inventory (user:User) ",
    },
    {
        name: "leaderboard",
        description: "View the coins leaderboard and a random leaderboard",
        use: "/leaderboard ",
    },
    {
        name: "withdraw",
        description: "Withdraw coins from your bank",
        use: "/withdraw [amount:Number] ",
    },
    {
        name: "buy",
        description: "Buy from the shop",
        use: "/buy [item:{choices}] [amount:Integer] ",
    },
    {
        name: "forge",
        description: "Forge a new item from other items!",
        use: "/forge ",
    },
    {
        name: "item",
        description: "View an item's information.",
        use: "/item [item:{choices}] ",
    },
    {
        name: "sell",
        description: "Sell an item for some coins",
        use: "/sell [item:{choices}] [amount:Integer] ",
    },
    {
        name: "shop",
        description: "Shop for items that are definitely not overpriced",
        use: "/shop ",
    },
    {
        name: "command",
        subcommands: [
            {
                name: "list",
                description:
                    "List enabled and disabled commands in the server.",
                use: "/command list ",
            },
            {
                name: "enable",
                description: "Enable a command in this server",
                use: "/command enable [command:{choices}] ",
            },
            {
                name: "disable",
                description: "Disable a command in this server",
                use: "/command disable [command:{choices}] ",
            },
        ],
    },
    {
        name: "help",
        description:
            "Get help with commands. List commands and their description",
        use: "/help ",
    },
    {
        name: "info",
        description: "Bot's info and other stuff",
        use: "/info ",
    },
    {
        name: "ping",
        description: "Pong!",
        use: "/ping ",
    },
    {
        name: "report",
        subcommands: [
            {
                name: "bug",
                description:
                    "Report a bug you've found or saw. Make sure to be as descriptive as possible",
                use: "/report bug [type:{choices}] [description:String] ",
            },
            {
                name: "user",
                description: "Report a user for breaking ToS",
                use: "/report user [who:User] [reason:String] ",
            },
            {
                name: "server",
                description: "Report a server for ToS breaking activities",
                use: "/report server [reason:String] ",
            },
        ],
    },
];

export default commands;