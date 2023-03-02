// Main imports
import Link from "next/link"
import { Logo } from '../components/Logo'
// Icon imports
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { SiGmail } from "react-icons/si"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
// Style imports
import styles from '../styles/footer.module.css'
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Logo />
                    <div className={styles.slogan}>
                        Find Your University
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
                    <a href={'#'} target="_blank"><FaTelegramPlane color="white" /></a>
                    <a href={'#'} target="_blank"><FiInstagram color="white" /></a>
                    <a href={'#'} target="_blank"><FaLinkedinIn color="white" /></a>
                    <a href={'#'} target="_blank"><SiGmail color="white" /></a>
                </div>
                <div className={styles.contacts}>
                    <a href="tell:+77766860652">+7 (776) 686 06 52</a>
                    <a href="mail:magzhan_volk@outlook.com">magzhan_volk@outlook.com</a>
                    <a href="tell:+77766860654">+7 (776) 686 06 54</a>
                    <a href="mail:magzhan_volk@outlook.com">magzhan_volk@outlook.com</a>
                </div>

            </div>
            <div className={styles.line} />
            <div className={styles.copyright}>
                <AiOutlineCopyrightCircle />
                <div className='subText'>Copyright. All rights reserved</div>
            </div>
        </div>
    )
}