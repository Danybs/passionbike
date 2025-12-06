import { useState } from 'react';
import logo from '../assets/logo.svg';
import styles from './Header.module.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="PassionBike Logo" style={{ height: '32px', marginRight: '0.5rem' }} />
        PassionBike
      </div>

      {/* Desktop Nav */}
      <nav className={styles.nav}>
        <a href="#home" className={styles.navLink}>
          Inicio
        </a>
        <a href="#services" className={styles.navLink}>
          Servicios
        </a>
        <a href="#contact" className={styles.navLink}>
          Contacto
        </a>
      </nav>

      <a
        href="https://wa.me/34650799416"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaButton}
      >
        Reservar Cita
      </a>

      {/* Mobile Hamburger */}
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
        <span
          className={styles.hamburgerLine}
          style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}
        ></span>
        <span className={styles.hamburgerLine} style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
        <span
          className={styles.hamburgerLine}
          style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}
        ></span>
      </button>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <nav className={styles.mobileNavOpen}>
          <a href="#home" className={styles.navLinkMobile} onClick={closeMenu}>
            Inicio
          </a>
          <a href="#services" className={styles.navLinkMobile} onClick={closeMenu}>
            Servicios
          </a>
          <a href="#contact" className={styles.navLinkMobile} onClick={closeMenu}>
            Contacto
          </a>
          <a
            href="https://wa.me/34650799416"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            style={{
              display: 'block',
              marginTop: '1rem',
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            Reservar Cita
          </a>
        </nav>
      )}
    </header>
  );
};
