/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from '../styles/aboutUs.module.scss'
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Contacts() {
    return (
        <>
            <div style={{ textAlign: 'center', fontSize: '1.7rem', fontWeight: '600', marginTop: '3rem' }}>About our <span style={{ color: '#066FCC ' }}>Team</span></div>
            <div className={styles["contact-us"]}>
                <p>
                    Our team at 'UniTree' is always available to help you with any inquiries or concerns you may have. Whether you need assistance with finding a university, getting directions, or exploring new stores, we're here to help. Please don't hesitate to get in touch with us through the contact information provided below.
                </p>
                <div className={styles["team-members"]}>
                    {/* Magzhan */}
                    <div className={styles["team-member"]}>
                        <h2>Magzhan</h2>
                        <div className={styles["contact-method"]}>
                            <FaPhone />
                            <a href="tel:+77766860653">+7 (776) 686 06 53</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaEnvelope />
                            <a href="mailto:magzhan_volk@outlook.com">magzhan_volk@outlook.com</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <SiGithub />
                            <a href="https://github.com/emporteme" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaInstagram />
                            <a href="https://instagram.com/emporteme?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaTelegram />
                            <a href="https://t.me/emporteme" target="_blank" rel="noopener noreferrer">Telegram</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaLinkedin />
                            <a href="https://www.linkedin.com/in/magzhan-karatayev-87126b243/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                    {/* Danial */}
                    <div className={styles["team-member"]}>
                        <h2>Danial</h2>
                        <div className={styles["contact-method"]}>
                            <FaPhone />
                            <a href="tel:+77760076001">+7 (776) 007 60 01</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaEnvelope />
                            <a href="mailto:danialserekov@gmail.com">danialserekov@gmail.com</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <SiGithub />
                            <a href="https://github.com/danialss" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaInstagram />
                            <a href="https://www.instagram.com/daniallsk/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaTelegram />
                            <a href="https://t.me/daniallsk" target="_blank" rel="noopener noreferrer">Telegram</a>
                        </div>
                    </div>

                    {/* Manas */}
                    < div className={styles["team-member"]} >
                        <h2>Manas</h2>
                        <div className={styles["contact-method"]}>
                            <FaPhone />
                            <a href="tel:+77075693448">+7 (707) 569 3448</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaEnvelope />
                            <a href="mailto:iskandermns@gmail.com">iskandermns@gmail.com</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <SiGithub />
                            <a href="https://github.com/i2wnik" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaInstagram />
                            <a href="https://www.instagram.com/oinamamenimen/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaTelegram />
                            <a href="https://t.me/oinamamenimen" target="_blank" rel="noopener noreferrer">Telegram</a>
                        </div>
                    </ div>
                </div >
            </div >
        </>
    )
}