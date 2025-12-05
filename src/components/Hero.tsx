import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Pasión sobre Ruedas.<br />Servicio con Precisión.
                </h1>
                <p className={styles.subtitle}>
                    Mantenimiento y reparación experta para que nada te detenga.
                    Dale a tu bicicleta el cuidado premium que se merece.
                </p>
                <div className={styles.ctaGroup}>
                    <a href="https://wa.me/34650799416" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Reservar Cita</a>
                    <a href="#services" className={styles.secondaryButton}>Ver Tarifas</a>
                </div>
            </div>
        </section>
    );
};
