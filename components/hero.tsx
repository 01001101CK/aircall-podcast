import styles from '../styles/components/hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.pageGradientBg}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <h1 id="hero-title" className={styles.title}>
            Discover audio stories<br />
            that entertain,<br />
            inform, and inspire.
          </h1>
          <div className={styles.subscribeSection}>
            <span className={styles.subscribeLabel}>Subscribe to our podcasts:</span>
            <div className={styles.podcastLinks} role="group" aria-label="Podcast platform links">
              <a href="#" className={styles.podcastLink} aria-label="Subscribe on Spotify">
                <Image src="/spotify.svg" alt="" width={84} height={30} aria-hidden="true" />
              </a>
              <a href="#" className={styles.podcastLink} aria-label="Subscribe on Deezer">
                <Image src="/deezer.svg" alt="" width={84} height={30} aria-hidden="true" />
              </a>
              <a href="#" className={styles.podcastLink} aria-label="Subscribe on Apple Podcasts">
                <Image src="/apple.svg" alt="" width={130} height={30} aria-hidden="true" />
              </a>
            </div>
            <div className={styles.podcastLinksMobile} role="group" aria-label="Podcast platform links mobile">
              <a href="#" className={styles.podcastLink} aria-label="Subscribe on Spotify">
                <Image src="/spotify_mobile.svg" alt="" width={32} height={32} aria-hidden="true" />
              </a>
              <a href="#" className={styles.podcastLink} aria-label="Subscribe on Deezer">
                <Image src="/deezer_mobile.svg" alt="" width={32} height={32} aria-hidden="true" />
              </a>
              <a href="#" className={styles.podcastLink} aria-label="Subscribe on Apple Podcasts">
                <Image src="/apple_mobile.svg" alt="" width={32} height={32} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroImages} aria-hidden="true">
          <Image className={styles.imageLeft} src="/Female-Yellow.png" alt="" width={250} height={250} loading="eager" />
          <Image className={styles.imageCenter} src="/Female-Blue.png" alt="" width={354} height={354} loading="eager" />
          <Image className={styles.imageRight} src="/Male-pink.png" alt="" width={299} height={299} loading="eager" />
        </div>
        <div className={styles.pageGradientBg}></div>
      </section>
    </div>
  );
} 