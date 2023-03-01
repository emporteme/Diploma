import { useState } from "react";
import Link from "next/link";
import { FaUser, FaBars } from "react-icons/fa";
import SearchBar from "../components/SearchBar";
import styles from "../styles/header.module.css";

export default function Header() {
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const handleSearch = (query: string) => {
        // Perform search and update search results
        setSearchResults([]);
    };

    const [showLinks, setShowLinks] = useState(false);

    const toggleShowLinks = () => setShowLinks(!showLinks);

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>DIPLOMA</div>
            <div className={styles.search}>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className={showLinks ? `${styles.links} ${styles.show}` : `${styles.links}`}>
                <ul>
                    <li><a href="#">Universities</a></li>
                    <li><a href="#">Rating</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
                <div className={styles.account}>
                    <FaUser />
                </div>
            </div>

            <div className={showLinks ? `${styles.burger} ${styles.active}` : `${styles.burger}`} onClick={toggleShowLinks}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}
