import styles from './Contact.module.css';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div>
                        <h2 className={styles.title}>Visítanos</h2>
                        <p className={styles.text}>
                            Estamos listos para atenderte. Pásate por nuestro taller para una consulta gratuita o reserva tu cita online.
                        </p>
                    </div>

                    <div className={styles.details}>
                        <div className={styles.detailItem}>
                            <MapPin className={styles.icon} />
                            <span className={styles.value}>C/ Virrey Abascal, 15 (Oviedo)</span>
                        </div>

                        <div className={styles.detailItem}>
                            <Clock className={styles.icon} />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span className={styles.value}>Lun - Vie: 9:30–13:30, 17:00–20:00</span>
                                <span className={styles.value}>Sáb: Cerrado</span>
                            </div>
                        </div>

                        <div className={styles.detailItem}>
                            <Phone className={styles.icon} />
                            <a href="https://wa.me/34650799416" target="_blank" rel="noopener noreferrer" className={styles.value} style={{ textDecoration: 'none', color: 'inherit' }}>650 799 416</a>
                        </div>

                        <div className={styles.detailItem}>
                            <Mail className={styles.icon} />
                            <a href="mailto:adri6g@gmail.com" className={styles.value} style={{ textDecoration: 'none', color: 'inherit' }}>adri6g@gmail.com</a>
                        </div>

                        <div className={styles.detailItem}>
                            <Instagram className={styles.icon} />
                            <a href="https://www.instagram.com/passionbikeoviedotaller/" target="_blank" rel="noopener noreferrer" className={styles.value} style={{ textDecoration: 'none', color: 'inherit' }}>@passionbikeoviedotaller</a>
                        </div>
                    </div>
                </div>

                <div className={styles.mapContainer}>
                    {/* Placeholder for Google Maps iframe */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.1362746248246!2d-5.84513!3d43.35326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368cc2a4b59705%3A0xe017131278f06f79!2sPassion%20Bike!5e0!3m2!1ses!2ses!4v1764951434509!5m2!1ses!2ses"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    );
};
