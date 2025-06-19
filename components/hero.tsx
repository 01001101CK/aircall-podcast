import styles from './hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.pageGradientBg}>
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Discover audio stories<br />
          that entertain,<br />
          inform, and inspire.
        </h1>
        <div className={styles.subscribeSection}>
          <span className={styles.subscribeLabel}>Subscribe to our podcasts:</span>
          <div className={styles.podcastLinks}>
            <a href="#" className={styles.podcastLink} aria-label="Spotify">
              <Image src="/spotify.svg" alt="Spotify" width={84} height={30} />
            </a>
            <a href="#" className={styles.podcastLink} aria-label="Deezer">
                          <Image src="/deezer.svg" alt="Deezer" width={84} height={30} />
            </a>
            <a href="#" className={styles.podcastLink} aria-label="Apple Podcast">
                          <Image src="/apple.svg" alt="Apple" width={130} height={30} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.heroImages}>
              <Image className={styles.imageLeft} src="/Female-Yellow.png" alt="Podcast 1" width={250} height={250} loading="eager"/>
              <Image className={styles.imageCenter} src="/Female-Blue.png" alt="Podcast 2" width={354} height={354} loading="eager"/>
              <Image className={styles.imageRight} src="/Male-pink.png" alt="Podcast 3" width={299} height={299} loading="eager"/>
      </div>
          <div className={styles.pageGradientBg}></div>
    </section>
      </div>
  );
} 