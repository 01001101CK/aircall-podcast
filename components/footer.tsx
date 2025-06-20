import Image from 'next/image';
import styles from '../styles/components/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer} role="contentinfo" aria-label="Site footer">
            <div className={styles.footerTop}>
                <div className={styles.logoRow}>
                    <Image src="/icon.svg" alt="Aircall logo" width={40} height={40} />
                    <span className={styles.slogan}>The phone system for the modern business</span>
                </div>
            </div>
            <div className={styles.footerNavContainer}>
                <nav className={styles.footerNavSection} aria-label="Footer navigation">
                    <div className={styles.footerCol}>
                        <h3 className={styles.colTitle}>WHY AIRCALL</h3>
                        <a href="#" aria-label="Learn about Aircall's country coverage">Country coverage</a>
                        <a href="#" aria-label="View Aircall pricing plans">Pricing</a>
                        <a href="#" className={styles.statusRow} aria-label="Check Aircall system status">
                            Status <span className={styles.statusBadge} aria-label="System uptime">99.9%</span>
                        </a>
                        <a href="#" aria-label="Developer resources and API documentation">Developer</a>
                    </div>
                    <div className={styles.footerCol}>
                        <h3 className={styles.colTitle}>PRODUCT</h3>
                        <a href="#" aria-label="Browse Aircall integrations">Integrations</a>
                        <a href="#" aria-label="Explore Aircall features">Features</a>
                        <a href="#" aria-label="Learn about Aircall's quality and reliability">Quality and reliability</a>
                        <a href="#" aria-label="Download Aircall mobile apps">Apps</a>
                        <a href="#" aria-label="Request a personalized demo">Request a demo</a>
                    </div>
                    <div className={styles.footerCol}>
                        <h3 className={styles.colTitle}>SOLUTIONS</h3>
                        <a href="#" aria-label="Call center solutions">Call Center</a>
                        <a href="#" aria-label="Inbound call center software">Inbound Call Center Software</a>
                        <a href="#" aria-label="Customer support solutions">Support</a>
                        <a href="#" aria-label="Sales team solutions">Sales</a>
                        <a href="#" aria-label="Outbound call center software">Outbound Call Center Software</a>
                        <a href="#" aria-label="Business phone system">Phone System</a>
                    </div>
                    <div className={styles.footerCol}>
                        <h3 className={styles.colTitle}>RESOURCES</h3>
                        <a href="#" aria-label="Read Aircall blog articles">Blog</a>
                        <a href="#" aria-label="Frequently asked questions">
                            FAQ 
                            <Image 
                                src="/arrow_ne.svg" 
                                alt="" 
                                width={8} 
                                height={8} 
                                className={styles.linkIcon}
                                aria-hidden="true"
                            />
                        </a>
                        <a href="#" aria-label="Customer case studies">Customer Studies</a>
                        <a href="#" aria-label="Partner success stories">Partner Stories</a>
                        <a href="#" aria-label="Become an Aircall partner">Become a partner</a>
                    </div>
                    <div className={styles.footerCol}>
                        <h3 className={styles.colTitle}>COMPANY</h3>
                        <a href="#" aria-label="Request a product demonstration">Request a Demo</a>
                        <a href="#" aria-label="Contact Aircall support">Contact Us</a>
                        <a href="#" aria-label="Learn about Aircall company">About Us</a>
                        <a href="#" className={styles.jobsRow} aria-label="View job opportunities at Aircall">
                            Jobs <span className={styles.hiringBadge} aria-label="We are currently hiring">We're hiring!</span>
                        </a>
                        <a href="#" aria-label="Press releases and media resources">Press</a>
                    </div>
                </nav>
                <div className={styles.footerBottom}>
                    <div className={styles.legalLinks}>
                        <span>© Aircall</span>
                        <a href="#" aria-label="Privacy policy">Privacy</a>
                        <a href="#" aria-label="Terms of use">Terms of use</a>
                        <a href="#" aria-label="Site map">Site map</a>
                    </div>
                    <div className={styles.socialLinks} role="navigation" aria-label="Social media links">
                        <a href="#" aria-label="Follow Aircall on Twitter">
                            <Image src="/twitter.svg" alt="" width={28} height={28} aria-hidden="true" />
                        </a>
                        <a href="#" aria-label="Follow Aircall on Facebook">
                            <Image src="/facebook.svg" alt="" width={28} height={28} aria-hidden="true" />
                        </a>
                        <a href="#" aria-label="Follow Aircall on LinkedIn">
                            <Image src="/linkedin.svg" alt="" width={28} height={28} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}