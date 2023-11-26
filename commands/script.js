function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const commandsObject = {
    economy: [
        { name: 'daily', description: 'Receive your daily reward of 1000', use: "/daily" },
        { name: 'rob', description: 'Rob other people for some quick cash. Can end badly', use: "/rob [victim:User]" },
        { name: 'work', description: 'Work for cash', use: "/work [job:{choices}]" },
        { name: 'balance', description: "View your or another user's coin balance, bank and networth", use: "/balance (userid:User)" },
        { name: 'deposit', description: 'Deposit coins into your bank', use: "/deposit [amount:Number]" },
        { name: 'withdraw', description: 'Withdraw coins from your bank', use: "/withdraw [amount:Number]" },
        { name: 'buy', description: 'Buy from the shop', use: "/buy [item:{choices}] [amount:Number]" },
        { name: 'promocode', description: 'Redeem promocodes hidden around anywhere for coins and items', use: "/promocode [code:String]" },
        { name: 'share', description: 'Share your wealth (or items) with other people', use: "/share [user:User] [amount:Number] [item:{choices}]" },
        { name: 'shop', description: 'Shop for items that are definitely not overpriced', use: "/shop" },
        { name: 'inventory', description: "View your or another user's inventory", use: "/inventory [user:User]" },
        { name: 'leaderboard', description: 'View the coins leaderboard and a random leaderboard', use: "/leaderboard" },
        { name: 'item', description: "View an item's information.", use: "/item [item:{choices}]" },
        {
            name: 'challenge', subcommand: [
                { name: "buttons", description: 'Click the right button for a reward!', use: "/challenge buttons" }
            ]
        },
        { name: 'vote', description: 'Vote for the bot on top.gg and discordbotlist', use: "/vote" },
        { name: 'crystalize', description: 'Crystalize your rocks', use: "/crystalize [amount:Number (higher than 50)]" },
	    {name:"forge", description: "Forge items from other items and list forgable items", use:"/forge"}
    ],
    other: [
        { name: 'help', description: 'Get help with commands. List commands and their description', use: "/help" },
        { name: 'ping', description: 'Pong!', use: "/ping" },
        { name: 'info', description: "Bot's info and other stuff", use: "/info" },
        {
            name: "command", subcommand: [
                { name: "list", description: 'list disabled and enabled commands', use: "/command list" },
                { name: "enable", description: 'Enable a disabled command. Requires Manage Members Permission', use: "/command enable [command:{choices}]" },
                { name: "disable", description: 'Disables an enabled command. Requires Manage Members Permission', use: "/command disable [command:{choices}]" }
            ]
        },
	{
		name:"report", subcommand: [
			{name:"user", description: "Report a user.", use: "/report user [who:User] [reason:String]"},
			{name:"server", description: "Report a server", use:"/report server [reason:String]"},
			{name:"bug", description: "Report a bug", use:"/report bug [type:{choices}] [description:String]"}
		]
	}
    ]
}

function cmd() {
    let economyCommands = commandsObject.economy
    let otherCommands = commandsObject.other
    let outputAr = []

    for (i in economyCommands) {
        if (economyCommands[i].subcommand === undefined) {
            outputAr.push(`<div class='command' id="${economyCommands[i].name}"> <div class='commandHead'> <div class="commandName"> ${capFirstLetter(economyCommands[i].name)} </div> <div class='commandUse'> ${economyCommands[i].use} </div></div><div class='commandDesc'>${economyCommands[i].description}</div></div>`)
        } else {
            let subcommands = []
            subcommands.push(`<div class="command" id="${economyCommands[i].name}"><div class="commandHead"><div class="commandName">${capFirstLetter(economyCommands[i].name)}</div><div class="commandUse">This command contains subcommands</div></div><div class="commandDesc"><div class="subcommands">`)
            for (x in economyCommands[i].subcommand) {
                subcommands.push(`<subcommand id="${economyCommands[i].subcommand[x].name}"> <div class="subcommandHead"><div class="subcommandName">${economyCommands[i].subcommand[x].name}</div><div class="subcommandUse">${economyCommands[i].subcommand[x].use}</div></div><div class="subcommandDesc">${economyCommands[i].subcommand[x].description}</div></subcommand>`)
            }
            subcommands.push(`</div></div></div>`)
            let outputSub = subcommands.join('')
            outputAr.push(outputSub)
        }
    }

    for (i in otherCommands) {
        if (otherCommands[i].subcommand === undefined) {
            outputAr.push(`<div class='command' id="${otherCommands[i].name}"> <div class='commandHead'> <div class="commandName"> ${capFirstLetter(otherCommands[i].name)} </div> <div class='commandUse'> ${otherCommands[i].use} </div></div><div class='commandDesc'>${otherCommands[i].description}</div></div>`)
        } else {
            let subcommands = []
            console.log(capFirstLetter("Ay bro"))
            subcommands.push(`<div class="command" id="${otherCommands[i].name}"><div class="commandHead"><div class="commandName">${capFirstLetter(otherCommands[i].name)}</div><div class="commandUse">This command contains subcommands</div></div><div class="commandDesc"><div class="subcommands">`)
            for (x in otherCommands[i].subcommand) {
                subcommands.push(`<subcommand id="${otherCommands[i].subcommand[x].name}"> <div class="subcommandHead"><div class="subcommandName">${otherCommands[i].subcommand[x].name}</div><div class="subcommandUse">${otherCommands[i].subcommand[x].use}</div></div><div class="subcommandDesc">${otherCommands[i].subcommand[x].description}</div></subcommand>`)
            }
            subcommands.push(`</div></div></div>`)
            let outputSub = subcommands.join('')
            outputAr.push(outputSub)
        }
    }

    document.getElementById("commands").innerHTML = outputAr.join('')

}

function searchFor() {
    var input = document.getElementById("search");
    var targetId = input.value.trim();
    var targetElement = document.getElementById(targetId.toLowerCase());

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
}

document.getElementById("search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchFor()
    }
})
