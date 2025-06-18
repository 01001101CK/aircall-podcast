import styles from './searchbar.module.css';

export default function SearchBar() {
  return (
    <form className={styles.searchBarContainer} role="search">
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  );
} 