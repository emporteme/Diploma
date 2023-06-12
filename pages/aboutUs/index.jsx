/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import MainLayout from '../../components/MainLayout'
// import styles
import styles from '../../styles/aboutUs.module.scss'
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Index() {
    return (
        <MainLayout spacing='0 5vw'>
            <div className={styles["about-us"]}>
                <h1>About Our Team</h1>
                <p>
                    We are a team of 3 dedicated professionals, each with their unique
                    expertise and passion for creating an exceptional website for searching universities with
                    and without a map. Our collaboration has resulted in a platform that caters to the
                    needs of users looking to find the best analitics experiences in their area.
                </p>

                <h2>Our Team Members:</h2>
                <ul>
                    <li><strong>Magzhan</strong> - Frontend Developer (TypeScript and Next.js)</li>
                    <li><strong>Danial</strong> - Backend Developer (Django, PostgreSql)</li>
                    <li><strong>Manas</strong> - UX/UI Designer, Presentation Maker (Figma)</li>
                </ul>

                <p>
                    Each member of our team has a diverse set of skills that contribute to
                    the success of our platform. We have collaborated to create a seamless user
                    experience, from the frontend interface to the backend infrastructure.
                </p>

                <h2>Our Mission</h2>
                <p>
                    Our mission is to make it easy for users to discover the best universities in Astana by providing a reliable and user-friendly platform. We believe that by connecting people to local universities, we can help support higher education and foster a sense of academic community.
                </p>

                <h2>Our Vision</h2>
                <p>
                    Our vision is to become the go-to platform for users seeking a comprehensive and up-to-date directory of universities in Astana. We strive to continuously improve our platform, incorporating user feedback and the latest technology to create an even better experience for our users.
                </p>


                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/team1.jpg" alt="Team Photo 1" />
                </div>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <p>
                    We are proud to have worked on this project for the Diploma work and believe that our efforts have resulted in a valuable solution for users to find and explore universities in their area.
                </p>

                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/team2.jpg" alt="Team Photo 2" />
                </div>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={styles["contact-us"]}>
                <h1>Contact Us</h1>
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
                            <FaLinkedin />
                            <a href="https://www.linkedin.com/in/magzhan-karatayev-87126b243/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaInstagram />
                            <a href="https://instagram.com/emporteme?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaTelegram />
                            <a href="https://t.me/emporteme" target="_blank" rel="noopener noreferrer">Telegram</a>
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
        </MainLayout>
    )
}