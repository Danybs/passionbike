import styles from './Footer.module.css';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div>
                    <h3 className={styles.sectionTitle}>PassionBike</h3>
                    <p>Servicios premium de reparación y mantenimiento para entusiastas del ciclismo.</p>
                </div>

                <div>
                    <h3 className={styles.sectionTitle}>Servicios</h3>
                    <ul className={styles.linkList}>
                        <li><a href="#services" className={styles.link}>Puesta a Punto</a></li>
                        <li><a href="#services" className={styles.link}>Reparaciones</a></li>
                        <li><a href="#rental" className={styles.link}>Alquiler de Bicicletas</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className={styles.sectionTitle}>Contacto</h3>
                    <ul className={styles.linkList}>
                        <li className={styles.contactItem}>
                            <MapPin size={18} className={styles.iconInline} />
                            C/ Virrey Abascal, 15 (Oviedo)
                        </li>
                        <li className={styles.contactItem}>
                            <Phone size={18} className={styles.iconInline} />
                            <a href="https://wa.me/34650799416" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>650 799 416</a>
                        </li>
                        <li className={styles.contactItem}>
                            <Mail size={18} className={styles.iconInline} />
                            <a href="mailto:adri6g@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>adri6g@gmail.com</a>
                        </li>
                        <li className={styles.contactItem}>
                            <Instagram size={18} className={styles.iconInline} />
                            <a href="https://www.instagram.com/passionbikeoviedotaller/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>@passionbikeoviedotaller</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>&copy; {new Date().getFullYear()} PassionBike. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};
