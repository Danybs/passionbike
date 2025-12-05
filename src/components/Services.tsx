import styles from './Services.module.css';

export const Services = () => {
    const services = [
        {
            title: "Puesta a Punto Básica",
            price: "45€",
            description: "Ideal para mantenimiento regular. Manten tu bici suave y segura.",
            features: [
                "Ajuste de frenos y cambios",
                "Lubricación de cadena",
                "Revisión de seguridad",
                "Inflado de neumáticos"
            ]
        },
        {
            title: "Revisión Completa",
            price: "85€",
            description: "El servicio más popular. Limpieza profunda y ajuste total.",
            features: [
                "Todo lo de la Básica",
                "Limpieza profunda de transmisión",
                "Centrado de ruedas",
                "Engrase de dirección y pedalier"
            ]
        },
        {
            title: "Premium Overhaul",
            price: "150€",
            description: "Como estrenar bici nueva. Desmontaje completo y reconstrucción.",
            features: [
                "Desmontaje completo",
                "Limpieza ultrasónica de piezas",
                "Sustitución de cables y fundas",
                "Revisión de rodamientos"
            ]
        }
    ];

    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestros Servicios</h2>
                    <p className={styles.subtitle}>
                        Tarifas transparentes para un trabajo de primera clase.
                        Sin sorpresas, solo resultados.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>
                                {service.title}
                                <span className={styles.price}>{service.price}</span>
                            </h3>
                            <p className={styles.description}>{service.description}</p>
                            <ul className={styles.features}>
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className={styles.feature}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


                {/* E-Bike Rental Section */}
                <div id="rental" className={styles.rentalSection}>
                    <div className={styles.rentalHeader}>
                        <h3 className={styles.rentalTitle}>Nuevo Servicio: Alquiler de E-Bikes</h3>
                        <p className={styles.rentalDescription}>
                            Descubre Oviedo y sus alrededores con nuestras bicicletas eléctricas de montaña de última generación.
                            Potencia y diversión garantizada.
                        </p>
                    </div>

                    <div className={styles.rentalGrid}>
                        <img src="/images/rental-promo.jpg" alt="Alquiler MTB Eléctrica" className={styles.rentalImage} />
                        <img src="/images/ebike-1.jpg" alt="E-Bike en la montaña" className={styles.rentalImage} />
                        <img src="/images/ebike-2.jpg" alt="Ruta en bicicleta" className={styles.rentalImage} />
                    </div>

                    <div className={styles.rentalCta}>
                        <a
                            href="https://wa.me/34650799416?text=Hola,%20estoy%20interesado%20en%20el%20alquiler%20de%20E-Bikes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.rentalButton}
                        >
                            Reservar Bici
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
