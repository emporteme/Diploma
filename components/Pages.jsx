/* eslint-disable @next/next/no-img-element */
import styles from '../styles/pages.module.scss';
import Link from 'next/link';

export default function Pages() {
    return (
        <>
            <div style={{ textAlign: 'center', fontSize: '1.7rem', fontWeight: '600', marginBottom: '2rem' }}>Main functionalities</div>
            <div className={styles.pages}>
                <div className={styles.left}>
                    <Link href={'/universities'} className={styles.up}>
                        <div >
                            Universities
                        </div>
                    </Link>
                    <div className={styles.down}>
                        <Link href={'/professions'} className={styles.left}>
                            <div>Professions</div>
                        </Link>
                        <Link href={'/specialities'} className={styles.right}>
                            <div>Specialities</div>
                        </Link>
                    </div>
                </div>
                <Link href={'/specialities'} className={styles.right}>
                    <div>Map</div>
                </Link>
            </div>
        </>
    )
}