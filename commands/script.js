function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

async function cmd() {
    let outputAr = [];

    for (i in commands) {
        if (commands[i].subcommand === undefined) {
            outputAr.push(
                `<c class='command' id="${
                    commands[i].name
                }"> <div class='commandHead'> <div class="commandName"> ${capFirstLetter(
                    commands[i].name
                )} </div> <div class='commandUse'> ${
                    commands[i].use
                } </div></div><div class='commandDesc'>${
                    commands[i].description
                }</div></c>`
            );
        } else {
            let subcommands = [];
            subcommands.push(
                `<c class="command" id="${
                    commands[i].name
                }"><div class="commandHead"><div class="commandName">${capFirstLetter(
                    commands[i].name
                )}</div><div class="commandUse">This command contains subcommands</div></div><div class="commandDesc"><div class="subcommands">`
            );
            for (x in commands[i].subcommand) {
                subcommands.push(
                    `<subcommand id="${commands[i].subcommand[x].name}"> <div class="subcommandHead"><div class="subcommandName">${commands[i].subcommand[x].name}</div><div class="subcommandUse">${commands[i].subcommand[x].use}</div></div><div class="subcommandDesc">${commands[i].subcommand[x].description}</div></subcommand>`
                );
            }
            subcommands.push(`</div></div></c>`);
            let outputSub = subcommands.join("");
            outputAr.push(outputSub);
        }
    }
    document.getElementById("commands").innerHTML = outputAr.join("");
}

function searchFor() {
    var input = document.getElementById("search");
    var targetId = input.value.trim();
    var targetElement = document.getElementById(targetId.toLowerCase());

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
}

document
    .getElementById("search")
    .addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchFor();
        }
    });

const commandsObject = [
    // not used, but here. for refrencing.
    {
        name: "daily",
        description: "Receive your daily reward of 1000",
        use: "/daily",
    },
    {
        name: "rob",
        description: "Rob other people for some quick cash. Can end badly",
        use: "/rob [victim:User]",
    },
    {
        name: "work",
        description: "Work for cash",
        use: "/work [job:{choices}]",
    },
    {
        name: "balance",
        description:
            "View your or another user's coin balance, bank and networth",
        use: "/balance (userid:User)",
    },
    {
        name: "report",
        subcommand: [
            {
                name: "user",
                description: "Report a user.",
                use: "/report user [who:User] [reason:String]",
            },
            {
                name: "server",
                description: "Report a server",
                use: "/report server [reason:String]",
            },
            {
                name: "bug",
                description: "Report a bug",
                use: "/report bug [type:{choices}] [description:String]",
            },
        ],
    },
];
