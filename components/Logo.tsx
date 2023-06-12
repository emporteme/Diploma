import styles from '../styles/logo.module.scss'
import Link from 'next/link'

export function Logo() {
    return (
        <>
            <div className={styles.logo}>
                <Link href={'/'}>UniTree</Link>
            </div>
        </>
    )
}