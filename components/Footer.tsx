/* eslint-disable react/no-unescaped-entities */
// Main imports
import Link from "next/link"
import { Logo } from '../components/Logo'
// Icon imports
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { SiGmail } from "react-icons/si"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
// Style imports
import styles from '../styles/footer.module.scss'
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <div className={styles.slogan}>
                        Our website is a platform that provides information and resources to individuals who are interested in pursuing higher education
                    </div>
                </div>
                <div className={styles.pageLinks}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/universities'}>Universities</Link>
                    <Link href={'/rating'}>Rating</Link>
                    <Link href={'/aboutUs'}>About Us</Link>
                    <Link href={'/country'}>Country</Link>
                </div>
                <div className={styles.mediaLinks}>
                    <a href={'https://t.me/emporteme'} target="_blank"><FaTelegramPlane color="white" />Telegram</a>
                    <a href={'https://www.instagram.com/emporteme/'} target="_blank"><FiInstagram color="white" />Instagram</a>
                    <a href={'https://www.linkedin.com/in/magzhan-karatayev-87126b243/'} target="_blank"><FaLinkedinIn color="white" />LinkedinIn</a>
                    <a href={'mailto:magzhankarataev02@gmail.com'} target="_blank"><SiGmail color="white" />Gmail</a>
                </div>
                <div className={styles.contacts}>
                    <a href="tel:+77766860652">+7 (776) 686 06 52</a>
                    <a href="tel:+77766860653">+7 (776) 686 06 53</a>
                    <a href="mailto:201597@astanait.edu.kz">201597@astanait.edu.kz</a>
                    <a href="mailto:201597@astanait.edu.kz">201694@astanait.edu.kz</a>
                    <a href="mailto:201597@astanait.edu.kz">201717@astanait.edu.kz</a>
                </div>

            </div>
            <div className={styles.line} />
            <div className={styles.copyright}>
                <AiOutlineCopyrightCircle />
                <div className='mainText'>Copyright.  All rights reserved</div>
            </div>
        </div>
    )
}