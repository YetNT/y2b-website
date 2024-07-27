/* eslint-disable react/no-unescaped-entities */
"use client";

import s from "./page.module.css"

const PrivacyPolicy = () => {
    return (
        <main className={s.main}>
            <h1 className={s.h1}>Privacy Policy</h1>
            <div className={s.pp}>
                <div className={s.ppTitle}>Introduction</div>
                <div className={s.ppDescription}>
                    Welcome to Yet 2.0 bot's Privacy Policy! Your privacy is
                    important to us. This Privacy Policy explains how we
                    collect, use, and protect your information when you use our
                    bot.
                </div>
                <div>
                    These terms have last been edited: 15 June 2024 17:37 CAT
                </div>
            </div>

            <div className={s.pp}>
                <div className={s.ppTitle}>Data Collection</div>
                <div className={s.ppDescription}>
                    In order to facilitate the proper functionality of our bot,
                    we collect your
                    <a
                        href="https://discord.com/developers/docs/reference#snowflakes"
                        >Discord user ID&#x2197;</a
                    >. Please note that our bot does not collect any of your
                    other data whatsoever.
                </div>
                <div className={s.ppDescription}>
                    Similar to your Discord user ID, (IF) you have commands
                    disabled in your server we also colect your server's ID.
                </div>
            </div>

            <div className={s.pp}>
                <div className={s.ppTitle}>Data Usage</div>
                <div className={s.ppDescription}>
                    We use the collected data to:
                    <ul>
                        <li>Provide and improve the bot’s functionalities.</li>
                        <li>
                            Respond to your commands and interactions with the
                            bot.
                        </li>
                    </ul>
                </div>
            </div>

            <div className={s.pp}>
                <div className={s.ppTitle}>Data Sharing</div>
                <div className={s.ppDescription}>
                    We do not share your personal data with third parties,
                    except as necessary to comply with legal obligations.
                </div>
            </div>

            <div className={s.pp}>
                <div className={s.ppTitle}>Data Storage and Security</div>
                <div className={s.ppDescription}>
                    We take reasonable measures to protect your data from
                    unauthorized access, use, or disclosure. However, please be
                    aware that no method of data transmission over the internet
                    is completely secure.
                </div>
            </div>

            <div className={s.pp}>
                <div className={s.ppTitle}>User Rights</div>
                <div className={s.ppDescription}>
                    You have the right to:
                    <ul>
                        <li>
                            Request access to the data we have collected about
                            you and/or your server.
                        </li>
                        <li>Request correction or deletion of your data.</li>
                    </ul>
                </div>
            </div>

            <div className={s.pp}>
                <div className={s.ppTitle}>Changes to this Privacy Policy</div>
                <div className={s.ppDescription}>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page.
                </div>
            </div>

            <div className={s.pp}>
                <div className={s.ppTitle}>Contact Us</div>
                <div className={s.ppDescription}>
                    If you have any questions about this Privacy Policy or the
                    bot's data collection practices, please contact me (@yetnt)
                    on discord, as of right now I do not own an email address to
                    manage for the bot.
                </div>
            </div>
        </main>
    )
};

export default PrivacyPolicy;