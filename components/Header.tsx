import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
//import { FaUser, FaBars } from "react-icons/fa";
//import SearchBar from "../components/SearchBar";
import { Logo } from '../components/Logo'
import styles from "../styles/header.module.css";

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
            <div className={styles.gap}>
                <div className={showLinks ? `${styles.links} ${styles.show}` : `${styles.links}`}>
                    <ul className="mainText">
                        <li className={router.pathname === '/' ? `${styles.activeHeader}` : ''}><Link href="/">Home</Link></li>
                        <li className={router.pathname === '/universities' ? `${styles.activeHeader}` : ''}><Link href="/universities">Universities</Link></li>
                        <li className={router.pathname === '/rating' ? `${styles.activeHeader}` : ''}><Link href="/rating">Rating</Link></li>
                        <li className={router.pathname === '/aboutUs' ? `${styles.activeHeader}` : ''}><Link href="/aboutUs">About us</Link></li>
                        <li className={router.pathname === '/country' ? `${styles.activeHeader}` : ''}><Link href="/country">Country</Link></li>
                    </ul>
                </div>
                <Link href={'/apply'}>
                    <div className={router.pathname === '/apply' ? `${styles.activeBtn} ${styles.btn}` : `${styles.btn}`} >
                        <div className="mainText">Apply</div>
                    </div>
                </Link>
            </div>

            <div className={showLinks ? `${styles.burger} ${styles.active}` : `${styles.burger}`} onClick={toggleShowLinks}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}
