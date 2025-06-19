import Image from 'next/image';
import styles from '../styles/components/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.logoRow}>
                    <Image src="/icon.svg" alt="Aircall logo" width={40} height={40} />
                    <span className={styles.slogan}>The phone system for the modern business</span>
                </div>
            </div>
            <div className={styles.footerNavContainer}>
            <div className={styles.footerNavSection}>
                <div className={styles.footerCol}>
                    <div className={styles.colTitle}>WHY AIRCALL</div>
                    <a href="#">Country coverage</a>
                    <a href="#">Pricing</a>
                    <a href="#" className={styles.statusRow}>
                        Status <span className={styles.statusBadge}>99.9%</span>
                    </a>
                    <a href="#">Developer</a>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.colTitle}>PRODUCT</div>
                    <a href="#">Integrations</a>
                    <a href="#">Features</a>
                    <a href="#">Quality and reliability</a>
                    <a href="#">Apps</a>
                    <a href="#">Request a demo</a>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.colTitle}>SOLUTIONS</div>
                    <a href="#">Call Center</a>
                    <a href="#">Inbound Call Center Software</a>
                    <a href="#">Support</a>
                    <a href="#">Sales</a>
                    <a href="#">Outbound Call Center Software</a>
                    <a href="#">Phone System</a>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.colTitle}>RESOURCES</div>
                    <a href="#">Blog</a>
                    <a href="#">FAQ <Image src="/arrow_ne.svg" alt="arrow" width={8} height={8} className={styles.linkIcon} /></a>
                    <a href="#">Customer Studies</a>
                    <a href="#">Partner Stories</a>
                    <a href="#">Become a partner</a>
                </div>
                <div className={styles.footerCol}>
                    <div className={styles.colTitle}>COMPANY</div>
                    <a href="#">Request a Demo</a>
                    <a href="#">Contact Us</a>
                    <a href="#">About Us</a>
                    <a href="#" className={styles.jobsRow}>
                        Jobs <span className={styles.hiringBadge}>We're hiring!</span>
                    </a>
                    <a href="#">Press</a>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.legalLinks}>
                    <span>© Aircall</span>
                    <a href="#">Privacy</a>
                    <a href="#">Terms of use</a>
                    <a href="#">Site map</a>
                </div>
                <div className={styles.socialLinks}>
                    <a href="#"><Image src="/twitter.svg" alt="Twitter" width={28} height={28} /></a>
                    <a href="#"><Image src="/facebook.svg" alt="Facebook" width={28} height={28} /></a>
                    <a href="#"><Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} /></a>
                </div>
                </div>
            </div>
        </footer>
    );
}