import styles from './latest-releases.module.css';
import Image from 'next/image';

export default function LatestReleases() {
  return (
    <main className={styles.latestReleasesMain}>
      <section className={styles.latestReleasesSection}>
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>The latest releases</h2>
          <label htmlFor="sortSelect" className={styles.sortLabel} style={{display: 'none'}}>Sort by</label>
          <select
            id="sortSelect"
            className={styles.sortButton}
            aria-label="Sort by"
            defaultValue=""
          >
            <option value="" disabled>Sort by</option>
            <option value="date">Date</option>
            <option value="title">Title</option>
            <option value="duration">Duration</option>
          </select>
        </div>
        <div className={styles.releasesGrid}>
          <article className={styles.releaseCard}>
            <div className={styles.cardImageWrapper}>
                <Image src="/podcast1.png" alt="The Power of Conversation" fill className={styles.cardImage} />
            </div>
            <div className={styles.cardMeta}>
              <span className={styles.cardMetaEpisode}>S01E01</span>
              <span className={styles.cardMetaDuration}>32MIN</span>
            </div>
            <h3 className={styles.cardTitle}>The Data-Driven Way to Put Customers First</h3>
            <div className={styles.cardListenRow}>
                <Image src="/listen.svg" alt="Play" width={24} height={24} />
              <span className={styles.listenText}>Listen now</span>
            </div>
          </article>
          <article className={styles.releaseCard}>
            <div className={styles.cardImageWrapper}>
                <Image src="/podcast2.png" alt="The Power of Conversation" fill className={styles.cardImage} />
            </div>
            <div className={styles.cardMeta}>
              <span className={styles.cardMetaEpisode}>S01E01</span>
              <span className={styles.cardMetaDuration}>32MIN</span>
            </div>
            <h3 className={styles.cardTitle}>What Is Interactive Voice Response</h3>
            <div className={styles.cardListenRow}>
              <Image src="/listen.svg" alt="Play" width={24} height={24} />
              <span className={styles.listenText}>Listen now</span>
            </div>
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
          <article className={styles.releaseCard + ' ' + styles.comingSoon}>
            <div className={styles.cardImageWrapper + ' ' + styles.placeholderImage}>
              <span className={styles.comingSoonText}>Coming soon</span>
            </div>
            <div className={styles.cardMeta + ' ' + styles.placeholderMeta}>
              <div className={styles.placeholderMetaBlock} />
            </div>
            <div className={styles.cardTitle + ' ' + styles.placeholderTitle} />
          </article>
        </div>
      </section>
    </main>
  );
} 