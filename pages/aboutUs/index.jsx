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
                    <span style={{ color: 'transparent' }}>g</span>  We are a team of 3 dedicated professionals, each with their unique
                    expertise and passion for creating an exceptional website for searching universities with
                    and without a map. Our collaboration has resulted in a platform that caters to the
                    needs of users looking to find the best analytics experiences in their area.
                </p>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/about0.avif" alt="Team Photo 1" />
                </div>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h2>Our Team Members:</h2>
                <ul>
                    <li><strong>Magzhan</strong> - Frontend Developer (TypeScript and Next.js)</li>
                    <li><strong>Danial</strong> - Backend Developer (Django, PostgreSql)</li>
                    <li><strong>Manas</strong> - UX/UI Designer, Presentation Maker (Figma)</li>
                </ul>

                <p>
                    <span style={{ color: 'transparent' }}>g</span> Each member of our team has a diverse set of skills that contribute to
                    the success of our platform. We have collaborated to create a seamless user
                    experience, from the frontend interface to the backend infrastructure.
                </p>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/about1.avif" alt="Team Photo 1" />
                </div>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h2>Our Mission</h2>
                <p>
                    <span style={{ color: 'transparent' }}>g</span> Our mission is to make it easy for users to discover the best universities in Astana by providing a reliable and user-friendly platform. We believe that by connecting people to local universities, we can help support higher education and foster a sense of academic community.
                </p>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/about3.avif" alt="Team Photo 1" />
                </div>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h2>Our Vision</h2>
                <p>
                    <span style={{ color: 'transparent' }}>g</span> Our vision is to become the go-to platform for users seeking a comprehensive and up-to-date directory of universities in Astana. We strive to continuously improve our platform, incorporating user feedback and the latest technology to create an even better experience for our users.
                </p>


                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/about4.avif" alt="Team Photo 1" />
                </div>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <p>
                    <span style={{ color: 'transparent' }}>g</span> We are proud to have worked on this project for the Diploma work and believe that our efforts have resulted in a valuable solution for users to find and explore universities in their area.
                </p>

                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/about2.avif" alt="Team Photo 2" />
                </div>
            </div>
        </MainLayout>
    )
}
