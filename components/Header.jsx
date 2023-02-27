import styles from '../styles/header.module.css'
import Link from 'next/link'
export default function Header() {
    return (
        <div className={styles.nav}>
            <Link href={'/'}>
                <div className={styles.logo}>
                    DIPLOMA
                </div>
            </Link>
            <div className={styles.gap}>
                <div className={styles.search}></div>
                <div className={styles.gap}>
                    <div className={styles.links}>
                        <ul>
                            <li><Link href={'/'}>Universities</Link></li>
                            <li><Link href={'/'}>Ranking</Link></li>
                            <li><Link href={'/'}>Prepare</Link></li>
                            <li><Link href={'/'}>About us</Link></li>
                        </ul>
                    </div>
                    <Link href={'/'}>
                        <div className={styles.account}>
                            account
                        </div>
                    </Link>
                </div>
            </div>


        </div>
    )
}