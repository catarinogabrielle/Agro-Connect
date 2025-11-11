'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { Leaf, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Leaf size={24} className={styles.logoIcon} />
                        <span className={styles.logoText}>Agro-Connect</span>
                    </Link>
                </div>

                <nav className={styles.nav}>
                    <Link href="/servicos">Serviços</Link>
                    <Link href="/insumos">Insumos</Link>
                    <Link href="/fretes">Fretes</Link>
                    <Link href="/dashboard" className={styles.dashboardLink}>Dashboard</Link>
                </nav>

                <div className={styles.auth}>
                    <Link href="/login?tab=register" className={styles.registerButton}>
                        Registrar
                    </Link>

                    <button
                        className={styles.menuToggle}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

            </div>

            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/servicos" onClick={() => setIsMenuOpen(false)}>Serviços</Link>
                    <Link href="/insumos" onClick={() => setIsMenuOpen(false)}>Insumos</Link>
                    <Link href="/fretes" onClick={() => setIsMenuOpen(false)}>Fretes</Link>
                    <Link href="/dashboard" className={styles.dashboardLink} onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                </div>
            )}
        </header>
    );
};

export default Header;