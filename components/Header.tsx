import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Logo } from '../components/Logo'
import styles from "../styles/header.module.scss";

export default function Header() {

    /* Code for headerActive class */

    const router = useRouter();

    /* Code for SearchBar */

    const [searchResults, setSearchResults] = useState<string[]>([]);
    const handleSearch = (query: string) => {
        // Perform search and update search results
        setSearchResults([]);
    };

    /* Code for burger menu */

    const [showLinks, setShowLinks] = useState(false);
    const toggleShowLinks = () => setShowLinks(!showLinks);

    /* App */
    return (
        <nav className={styles.nav}>
            <>
                <Logo />
            </>
            <>
                <div className={showLinks ? `${styles.links} ${styles.show}` : `${styles.links}`}>
                    <ul className="mainText">
                        <li className={router.pathname === '/' ? `${styles.activeHeader}` : ''}><Link href="/">Home</Link></li>
                        <li className={router.pathname.startsWith('/universities') ? `${styles.activeHeader}` : ''}><Link href="/universities">Universities</Link></li>
                        <li className={router.pathname.startsWith('/professions') ? `${styles.activeHeader}` : ''}><Link href="/professions">Professions</Link></li>
                        <li className={router.pathname.startsWith('/specialities') ? `${styles.activeHeader}` : ''}><Link href="/specialities">Specialities</Link></li>
                        <li className={router.pathname.startsWith('/aboutUs') ? `${styles.activeHeader}` : ''}><Link href="/aboutUs">About us</Link></li>
                        <li className={router.pathname.startsWith('/country') ? `${styles.activeHeader}` : ''}><Link href="/country">Country</Link></li>
                        <li className={router.pathname.startsWith('/favourites') ? `${styles.activeHeader}` : ''}><Link href="/favourites">Favourites</Link></li>
                    </ul>
                </div>
            </>

            <div className={showLinks ? `${styles.burger} ${styles.active}` : `${styles.burger}`} onClick={toggleShowLinks}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}
