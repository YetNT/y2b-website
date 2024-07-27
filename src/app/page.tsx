// page.tsx

"use client";

import s from './page.module.css'

const Features = () => {
    /**
     * @interface Feature
     */
    interface Feature {
        src: string;
        alt?: string;
        desc: string;
    }

    function alt(cmd: string): string {
        return `Image showing the use of the /${cmd} slash command.`;
    }

    const features: Feature[] = [
        { src: "features/work.png", desc: "Work jobs for coins,", alt: alt("work") },
        { src: "features/rob.png", desc: "Rob other users for their coins,", alt: alt("rob") },
        { src: "features/shar4e.png", desc: "Share your coins to those in need,", alt: alt("share") },
        { src: "features/shurg.png", desc: "or just casually climb the leaderboard with no", alt: "Random meme image." },
        { src: "features/upcoming.png", desc: "and (soon to be) many more!", alt: alt("crystalize") },
    ]

    return (
        <div className={s.features}>
            {features.map((feature, index) => (
                <div className={s.feature} key={index}>
                    <picture>
                        <img src={feature.src} alt={feature.alt || "a pic"} className={s.featureImg} />
                    </picture>
                    <span>{feature.desc}</span>
                </div>
            ))}
        </div>
    )
}

const Home = () => {
    const newPopup = (url: string) => {
            window.open(
                url,
                "popUpWindow",
                "height=800,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes"
        );
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key !== "y") {
            return;
        }
        const answer = prompt(
            "Enter code for free bobux (entering wrong codes will result in consequences)"
        );
    // made the answer actually claimable lol
        if (answer !== "yetbot.tk") {
            window.location.replace("https://www.youtube.com/watch?v=xvFZjo5PgG0");
            return;
        }

        alert("Claim this promocode(remove the square brackets and no spaces): [webæ¹¥¶¿áá³¤ë_!] ");
    };
    return (
    <main className={s.main} data-page="home">
        <h1 className={s.mainTitle}>
            Become the richest user in your server today, with Yet 2.0
        </h1>
        <div className={s.buttons}>
            <button type="button" className={s.btn} onClick={() => { 
                window.open("https://discord.com/oauth2/authorize?client_id=701280304182067251&permissions=412317141056&scope=applications.commands%20bot")
            }}> Invite </button>
            <button type="button" className={s.btn} onClick={() => {
                window.open("https://github.com/Yetity/y2b")
            }}> Github</button>
        </div>
        <picture><img src="coinz.png" alt="coin" id="coin" className={s.coin} width={100} height={100} onContextMenu={(e) => e.preventDefault()} /></picture>
        <Features />
        <span className={s.goDoIt}>
            So what you waiting for? Go&nbsp;
        <a
            href="https://discord.com/oauth2/authorize?client_id=701280304182067251&permissions=412317141056&scope=applications.commands%20bot"
            id="inviteRed"
            target="_blank"
            rel="noopener noreferrer"
        >
            invite
        </a>
        	&nbsp;the bot right now
        </span>
        <div className={s.links}>
            <div className={s.buttons}>
                <button type="button" className={s.btn} onClick={() => { window.location.href = '/tos/'; }}>
                    Terms Of Service
                </button>
                <button type="button" className={s.btn} onClick={() => { window.location.href = '/pp/'; }}>
                    Privacy Policy
                </button>
            </div>
        </div>
        <div className={s.container}>
            <div className={s.credits}>
                <div className={s.user}>
                    <picture><img className={s.creditsImg} src="credits/yet.jpeg" alt="Yet"/></picture>
                    <div className={s.creditsContent}>
                        <div className={s.contri}>Bot Owner/Creator, HTML, CSS, Animations, Images</div>
                        <br />
                        <div className={s.userLinks}>
                            <a href="https://yetnt.pages.dev">Website</a>
                        </div>
                    </div>
                </div>
                <div className={s.user}>
                    <picture><img className={s.creditsImg} src="credits/flo.png" alt="Flo" /></picture>
                    <div className={s.creditsContent}>
                        <div className={s.contri}>ToS, Ideas,</div>
                        <br />
                        <div className={s.userLinks}>
                            <a href="https://devflo.pages.dev">Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div id="copyright">
                &copy;2024 Yet 2.0 Bot. All rights reserved.
            </div>
        </footer>
    </main>
    );
};

export default Home;