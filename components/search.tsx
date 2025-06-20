"use client";
import styles from '../styles/components/searchbar.module.css';
import Image from 'next/image';
import { useSearch } from '../contexts/SearchContext';

export default function SearchBar() {
    const { 
        searchQuery, 
        setSearchQuery, 
        selectedFilter, 
        setSelectedFilter 
    } = useSearch();

    const filters = ['All', 'Call Center', 'Support', 'Customer Stories', 'Webinars', 'Podcast'];

    return (
    <div className={styles.searchBlock}>
        <div className={styles.searchContainer}>
            <div className={styles.searchBarContainer}>
                <nav className={styles.filterNav} aria-label="Content filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`${styles.filterLink} ${selectedFilter === filter ? styles.filterLinkActive : ''}`}
                            onClick={() => setSelectedFilter(filter)}
                            aria-pressed={selectedFilter === filter}
                            aria-label={`Filter by ${filter}`}
                        >
                            {filter}
                        </button>
                    ))}
                    <button className={styles.filterLink} aria-label="Show more filter options">
                        More <Image src="/down_arrow.svg" alt="" width={5} height={5} aria-hidden="true" />
                    </button>
                </nav>
                <div className={styles.searchInputContainer}>
                    <input 
                        type="text" 
                        placeholder="Search podcasts and articles..." 
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="Search podcasts and articles"
                    />
                    <button className={styles.searchButton} aria-label="Search">
                        <Image src="/search.svg" alt="" width={28} height={28} aria-hidden="true" />
                    </button>
                </div>
                <div className={styles.mobileSearch}>
                    <input 
                        type="text" 
                        placeholder="Rechercher" 
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="Search podcasts and articles"
                    />
                    <button className={styles.mobileSearchButton} aria-label="Search">
                        <Image src="/search.svg" alt="" width={24} height={24} aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
} 