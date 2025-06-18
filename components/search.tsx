import styles from './searchbar.module.css';
import Image from 'next/image';

export default function SearchBar() {
    return (
        <div className={styles.searchBarContainer}>
            <nav className={styles.filterNav}>
                <a className={styles.filterLink}>All</a>
                <a className={styles.filterLink}>Call Center</a>
                <a className={styles.filterLink}>Support</a>
                <a className={styles.filterLink}>Customer Stories</a>
                <a className={styles.filterLink}>Webinars</a>
                <a className={styles.filterLinkActive}>Podcast</a>
                <a className={styles.filterLink}>
                    More <Image src="/down_arrow.svg" alt="Down Arrow" width={5} height={5} />
                </a>
            </nav>
            <button className={styles.searchButton} aria-label="Search">
                <Image src="/search.svg" alt="Search" width={28} height={28} />
            </button>
        </div>
    );
} 