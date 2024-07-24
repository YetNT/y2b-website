/* eslint-disable react/no-unescaped-entities */

import s from "./page.module.css"

const Tos = () => {
    return (
        <main className={s.main}>
            <h1 className={s.h1}>Terms of Service</h1>
            <div className={s.tos}>
                <div className={s.tosTitle}>Landing</div>
                <div className={s.tosDescription}>
                    Welcome to the Terms of Service ("Terms") of Yet 2.0 ("Us,"
                    "We," or "Our"). We are pleased to offer services that
                    enhance your Discord server's experience. These services are
                    subject to the terms displayed on this page. By utilizing
                    our service (Yet 2.0 or the Yet 2.0 website), you
                    automatically agree to and accept our terms of service and
                    regulations.
                </div>
                <div>
                    These terms have last been edited: 15 June 2024 17:37 CAT
                </div>
            </div>

            <div className={s.tos}>
                <div className={s.tosTitle}>Data Collection</div>
                <div className={s.tosDescription}>
                    For information on what data we collect and how it is used,
                    please refer to our <a href="../pp">Privacy Policy</a>.
                </div>
            </div>

            <div className={s.tos}>
                <div className={s.tosTitle}>Command Use</div>
                <div className={s.tosDescription}>
                    When utilizing any of our bot's commands, it is imperative
                    that you adhere to the following guidelines:
                    <br />
                    Do not attempt to crash the bot through spamming or any
                    other means. It is strictly forbidden to use the bot to
                    disseminate misinformation, such as falsely claiming that
                    Yet 2.0 raided your server.
                    <br />
                    Engaging in any form of scamming others using the bot is
                    strictly prohibited. Regardless of whether you have reported
                    them or not, abusing any bugs or glitches is strictly
                    prohibited.
                </div>
            </div>

            <div className={s.tos}>
                <div className={s.tosTitle}>Impersonation</div>
                <div className={s.tosDescription}>
                    Under no circumstances should you impersonate the bot, or
                    any member of our esteemed staff or development team.
                </div>
            </div>

            <div className={s.tos}>
                <div className={s.tosTitle}>Our Rights</div>
                <div className={s.tosDescription}>
                    We reserve the right to blacklist you or your server in the
                    event of any violation of the aforementioned regulations.
                    <br />
                    Please note that these Terms of Service are subject to
                    change without prior notice. It is your responsibility to
                    periodically review these terms. By continuing to utilize
                    our service or access the Yet 2.0 website following any
                    modifications to the terms, you agree to be bound by the
                    revised terms.
                    <br />
                    If you have any inquiries or concerns regarding these Terms
                    of Service, please do not hesitate to contact us through our
                    official Discord server.
                </div>
            </div>
        </main>
    )
};

export default Tos;