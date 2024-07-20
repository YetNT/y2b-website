// page.tsx

"use client";

import s from './page.module.css'
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
        <div className={s.features}>
            <div className={s.feature}>
                <picture><img src="features/work.png" alt="a pic" className={s.featureImg}/></picture>
                <span>Work jobs for coins,</span>
            </div>
            <div className={s.feature}>
                <picture><img src="features/rob.png" alt="a pic" className={s.featureImg} /></picture>
                <span>Rob other users for their coins,</span>
            </div>
            <div className={s.feature}>
                <picture><img src="features/shar4e.png" alt="a pic"  className={s.featureImg}/></picture>
                <span>Share your coins to those in need,</span>
            </div>
            <div className={s.feature}>
                <picture><img src="features/shurg.png" alt="a pic"  className={s.featureImg}/></picture>
                <span>..or just casually climb the leaderboard with no worries.</span>
            </div>
            <div className={s.feature}>
                <picture><img src="features/upcoming.png" alt="a pic" className={s.featureImg}/></picture>
                <span>and (soon to be) many more!</span>
            </div>
        </div>
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