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
        <div className={styles.footer} style={{ marginTop: '5rem' }}>
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
                    <Link href={'/universities'}>Universities</Link>
                    <Link href={'/professions'}>Professions</Link>
                    <Link href={'/specialities'}>Specialities</Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '3rem' }}>
                    <div className={styles.mediaLinks}>
                        <a href={'https://t.me/emporteme'} target="_blank"><FaTelegramPlane color="white" />Telegram</a>
                        <a href={'https://www.instagram.com/emporteme/'} target="_blank"><FiInstagram color="white" />Instagram</a>
                    </div>
                    <div className={styles.mediaLinks}>
                        <a href={'https://www.linkedin.com/in/magzhan-karatayev-87126b243/'} target="_blank"><FaLinkedinIn color="white" />LinkedinIn</a>
                        <a href={'mailto:magzhankarataev02@gmail.com'} target="_blank"><SiGmail color="white" />Gmail</a>
                    </div>
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