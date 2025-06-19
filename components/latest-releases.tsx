"use client";
import styles from '../styles/components/latest-releases.module.css';
import Image from 'next/image';
import { useSearch } from '../contexts/SearchContext';

export default function LatestReleases() {
  const { sortedPodcasts, sortBy, setSortBy, isSearching } = useSearch();

  return (
    <main className={styles.latestReleasesMain}>
      <section className={styles.latestReleasesSection}>
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>
            {isSearching ? `Search Results (${sortedPodcasts.length} podcasts)` : 'The latest releases'}
          </h2>
          <label htmlFor="sortSelect" className={styles.sortLabel} style={{display: 'none'}}>Sort by</label>
          <select
            id="sortSelect"
            className={styles.sortButton}
            aria-label="Sort by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="date">Date</option>
            <option value="title">Title</option>
            <option value="duration">Duration</option>
          </select>
        </div>
        <div className={styles.releasesGrid}>
          {sortedPodcasts.map((podcast) => (
            <article className={styles.releaseCard} key={podcast.id}>
              <div className={styles.cardImageWrapper}>
                <Image 
                  src={podcast.image} 
                  alt={podcast.title} 
                  fill 
                  className='size-full object-cover' 
                  loading="eager" 
                />
              </div>
              <div className={styles.cardMeta}>
                <span className={styles.cardMetaEpisode}>{podcast.episode}</span>
                <span className={styles.cardMetaDuration}>{podcast.duration}</span>
              </div>
              <h3 className={styles.cardTitle}>{podcast.title}</h3>
              <div className={styles.cardListenRow}>
                <Image src="/listen.svg" alt="Play" width={24} height={24} />
                <span className={styles.listenText}>Listen now</span>
              </div>
            </article>
          ))}
          {!isSearching && (
            <>
              <article className={styles.releaseCard + ' ' + styles.comingSoon}>
                <div className={styles.cardImageWrapper + ' ' + styles.placeholderImage}>
                  <span className={styles.comingSoonText}>Coming soon</span>
                </div>
                <div className={styles.cardMeta + ' ' + styles.placeholderMeta}>
                  <div className={styles.placeholderMetaBlock} />
                </div>
                <div className={styles.cardTitle + ' ' + styles.placeholderTitle} />
              </article>
              <article className={styles.releaseCard + ' ' + styles.comingSoon}>
                <div className={styles.cardImageWrapper + ' ' + styles.placeholderImage}>
                  <span className={styles.comingSoonText}>Coming soon</span>
                </div>
                <div className={styles.cardMeta + ' ' + styles.placeholderMeta}>
                  <div className={styles.placeholderMetaBlock} />
                </div>
                <div className={styles.cardTitle + ' ' + styles.placeholderTitle} />
              </article>
            </>
          )}
        </div>
      </section>
    </main>
  );
} 