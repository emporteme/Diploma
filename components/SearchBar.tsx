import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../styles/SearchBar.module.scss";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search universities..."
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        <FaSearch />
      </button>
    </form>
    
  );
}