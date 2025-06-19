"use client";
import Link from 'next/link';
import styles from '../styles/components/header.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.mobileHeader}>
                <div className={styles.logoGroup}>
                    <Image src="/logo.svg" alt="Aircall Logo" width={125} height={35} />
                </div>
                <button
                    className={styles.menuButton}
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(true)}
                >
                    <Image src="/hamburger-menu.svg" alt="Menu" width={65} height={19} />
                </button>
            </div>

            {/* Mobile Modal Menu */}
            {mounted && menuOpen && (
                <div className={styles.mobileMenuOverlay} onClick={() => setMenuOpen(false)}>
                    <div className={styles.mobileMenu} onClick={e => e.stopPropagation()}>
                        <button
                            className={styles.closeButton}
                            aria-label="Close menu"
                            onClick={() => setMenuOpen(false)}
                        >
                            &times;
                        </button>
                        <nav className={styles.mobileNav}>
                            <Link href="#" className={styles.mobileNavLink}>Why Aircall</Link>
                            <Link href="#" className={styles.mobileNavLink}>Solutions</Link>
                            <Link href="#" className={styles.mobileNavLink}>Pricing</Link>
                            <Link href="#" className={styles.mobileNavLink}>Resources</Link>
                            <Link href="#" className={styles.mobileNavLink}>Partners</Link>
                            <Link href="#" className={styles.mobileNavLink}>Company</Link>
                        </nav>
                    </div>
                </div>
            )}

            <div className={styles.actions}>
                <span className={styles.phone}>+1 888 240 6923</span>
                <Link href="#" className={styles.contact}>Contact Us</Link>
                <Link href="#" className={styles.login}>Login</Link>
                <select className={styles.languageSelect}>
                    <option>FR</option>
                    <option>EN</option>
                </select>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.container}>
                <Image className={styles.logo} src="/logo.svg" alt="Aircall Logo" width={139.81} height={40} />
                <nav className={styles.nav}>
                    <Link href="#" className={styles.navLink}>Why Aircall <Image src="/down_arrow.svg" alt="Down Arrow" width={5} height={5} /></Link>
                    <Link href="#" className={styles.navLink}>Solutions<Image src="/down_arrow.svg" alt="Down Arrow" width={5} height={5} /></Link>
                    <Link href="#" className={styles.navLink}>Pricing<Image src="/down_arrow.svg" alt="Down Arrow" width={5} height={5} /></Link>
                    <Link href="#" className={styles.navLink}>Ressources<Image src="/down_arrow.svg" alt="Down Arrow" width={5} height={5} /></Link>
                    <Link href="#" className={styles.navLink}>Partners<Image src="/down_arrow.svg" alt="Down Arrow" width={5} height={5} /></Link>
                    <Link href="#" className={styles.navLink}>Company<Image src="/down_arrow.svg" alt="Down Arrow" width={5} height={5} /></Link>
                </nav>
                <Link href="#" className={styles.tryButton}>Try for free</Link>
            </div>
        </header>
    );
}