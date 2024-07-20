"use client"

import React from 'react';
import s from './page.module.css';
import commands from './commands';

const searchFor = () => {
    const input = document.getElementById("search") as HTMLInputElement;
    const targetId = input.value.trim().toLowerCase();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
};

const Command = (
    { 
        name, description, use, subcommands 
    }: {
        name: string, description: string|undefined, use:string|undefined, subcommands:undefined|{
            name: string, description: string, use:string
        }[]
    }) => (
    <div id={name.toLowerCase()} className={s.command}>
        <div className={s.commandHead}>
            <div className={s.commandName}>{name}</div>
            <div className={s.commandUse}>{use || ""}</div>
        </div>
        <div className={s.commandDesc}>
            {description}
            {/* Render subcommands only if it is defined and not empty */}
            {subcommands && subcommands.length > 0 && (
                <div className={s.subcommands}>
                    {subcommands.map((sub, index) => (
                        <div key={index} className={s.subcommand}>
                            <div className={s.subcommandHead}>
                                <div className={s.subcommandName}>{sub.name}</div>
                                <div className={s.subcommandUse}>{sub.use}</div>
                            </div>
                            <div className={s.subcommandDesc}>{sub.description}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
);

const Commands = () => {
    return (
        <main className={s.main}>
            <h1 className={s.h1}>Commands</h1>
            <div className={s.searchBar}>
                <input
                    type="text"
                    id="search"
                    className={s.search}
                    placeholder="Enter command name"
                />
                <button onClick={() => searchFor()}>Go!</button>
            </div>
            <div className={s.howTo}>[] = required, () = optional</div>
            <div className={s.commands}>
                {commands.map((cmd, index) => (
                    <Command
                        key={index}
                        name={cmd.name}
                        description={cmd.description}
                        use={cmd.use}
                        subcommands={cmd.subcommand}
                    />
                ))}
            </div>
            <footer>
                <div className={s.copyright}>
                    &copy;2023 Yet 2.0 Bot. All rights reserved.
                </div>
            </footer>
        </main>
    );
};

export default Commands;
