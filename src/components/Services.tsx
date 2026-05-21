import { useState, useEffect } from 'react';
import { Wrench, CircleGauge, Zap, Bike, Target, X } from 'lucide-react';
import imgMecanica from '../assets/images/mecanica-general.jpg';
import imgSuspensiones from '../assets/images/suspensiones.jpg';
import imgMotores from '../assets/images/motores.jpg';
import imgMontaje1 from '../assets/images/montajecarta1.jpg';
import imgMontaje3 from '../assets/images/montajecarta3.jpg';
import imgRuedasCarta from '../assets/images/ruedas_carta.jpg';
import imgMontajeRuedas from '../assets/images/montajeruedas.jpg';
import certAmpliacionDt3 from '../assets/images/cert-ampliacion-dt3.jpg';
import certBosch from '../assets/images/cert-bosch.jpg';
import certDt3_2023 from '../assets/images/cert-dt3-2023.jpg';
import certDt3 from '../assets/images/cert-dt3.jpg';
import imgRentalPromo from '../assets/images/rental-promo.jpg';
import imgEbike1 from '../assets/images/ebike-1.jpg';
import imgEbike2 from '../assets/images/ebike-2.jpg';
import styles from './Services.module.css';

export const Services = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightboxSrc ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxSrc]);

  return (
    <>
      {/* ───── 1. TALLER ───── */}
      <section id="taller" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}>Taller</h2>
            <p className={styles.subtitle}>
              Servicio profesional de mantenimiento y reparación para cualquier marca y modelo.
            </p>
          </div>

          {/* Mecánica General */}
          <div className={styles.serviceBlock}>
            <div className={styles.serviceInfo}>
              <div className={styles.titleRow}>
                <div className={styles.serviceIcon}>
                  <Wrench size={28} />
                </div>
                <h3 className={styles.serviceTitle}>Mecánica General</h3>
              </div>
              <p className={styles.serviceDescription}>
                Se realiza cualquier tipo de mantenimiento y reparación de cualquier marca y modelo
                de bicicleta. Ponemos tu bici a punto para que nada te detenga.
              </p>
            </div>
            <div className={styles.serviceImage}>
              <img
                src={imgMecanica}
                alt="Mecánica general de bicicletas"
                onClick={() => setLightboxSrc(imgMecanica)}
              />
            </div>
          </div>

          {/* Mecánica Específica */}
          <div className={styles.header} style={{ marginTop: '3rem' }}>
            <h3 className={styles.subSectionTitle}>Mecánica Específica</h3>
          </div>

          <div className={styles.specificGrid}>
            {/* Suspensiones */}
            <div className={styles.specificCard}>
              <div className={styles.specificImageWrap}>
                <img
                  src={imgSuspensiones}
                  alt="Servicio de suspensiones"
                  onClick={() => setLightboxSrc(imgSuspensiones)}
                />
              </div>
              <div className={styles.specificContent}>
                <div className={styles.titleRow}>
                  <div className={styles.serviceIcon}>
                    <CircleGauge size={24} />
                  </div>
                  <h4 className={styles.specificTitle}>Suspensiones</h4>
                </div>
                <p className={styles.specificDescription}>
                  Reparaciones y mantenimientos desde los más básicos hasta los más completos de
                  horquillas y amortiguadores. Trabajamos con las principales marcas: FOX, ROCKSHOX,
                  LEFTY, entre otras.
                </p>
                <span className={styles.badge}>Certificados Oficiales</span>
              </div>
            </div>

            {/* Bicis Eléctricas y Motores */}
            <div className={styles.specificCard}>
              <div className={styles.specificImageWrap}>
                <img
                  src={imgMotores}
                  alt="Servicio de bicis eléctricas y motores"
                  onClick={() => setLightboxSrc(imgMotores)}
                />
              </div>
              <div className={styles.specificContent}>
                <div className={styles.titleRow}>
                  <div className={styles.serviceIcon}>
                    <Zap size={24} />
                  </div>
                  <h4 className={styles.specificTitle}>Bicis Eléctricas y Motores</h4>
                </div>
                <p className={styles.specificDescription}>
                  Mantenimientos y reparaciones de sistemas eléctricos. Trabajamos principalmente
                  con: BOSCH, SHIMANO y BAFANG.
                </p>
                <span className={styles.badge}>Certificados Oficiales</span>
              </div>
            </div>
          </div>

          {/* Certificados */}
          <div className={styles.certsSection}>
            <h3 className={styles.subSectionTitle}>Nuestros Certificados</h3>
            <div className={styles.certsGrid}>
              <img
                src={certBosch}
                alt="Certificado Bosch"
                className={styles.certImage}
                onClick={() => setLightboxSrc(certBosch)}
              />
              <img
                src={certDt3}
                alt="Certificado Diagnostic Tool 3"
                className={styles.certImage}
                onClick={() => setLightboxSrc(certDt3)}
              />
              <img
                src={certDt3_2023}
                alt="Certificado Diagnostic Tool 3 - 2023"
                className={styles.certImage}
                onClick={() => setLightboxSrc(certDt3_2023)}
              />
              <img
                src={certAmpliacionDt3}
                alt="Ampliación Diagnostic Tool 3"
                className={styles.certImage}
                onClick={() => setLightboxSrc(certAmpliacionDt3)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── 2. MONTAJES A LA CARTA ───── */}
      <section id="montajes" className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}>Montajes a la Carta</h2>
            <p className={styles.subtitle}>
              Construimos tu bicicleta o tus ruedas exactamente como las imaginas, pieza a pieza.
            </p>
          </div>

          <div className={styles.montajesGrid}>
            <div className={styles.montajesCard}>
              <div className={styles.montajesImageWrap}>
                <img
                  src={imgMontaje1}
                  alt="Montaje a la carta - componentes"
                  onClick={() => setLightboxSrc(imgMontaje1)}
                />
                <img
                  src={imgMontaje3}
                  alt="Montaje a la carta - detalle"
                  onClick={() => setLightboxSrc(imgMontaje3)}
                />
              </div>
              <div className={styles.montajesContent}>
                <div className={styles.titleRow}>
                  <Bike size={28} className={styles.montajesIcon} />
                  <h3 className={styles.montajesTitle}>Bicis</h3>
                </div>
                <p className={styles.montajesDescription}>
                  Montajes completos a medida. Elige cada componente y nosotros lo ensamblamos con
                  precisión profesional.
                </p>
              </div>
            </div>

            <div className={styles.montajesCard}>
              <div className={styles.montajesImageWrap}>
                <img
                  src={imgRuedasCarta}
                  alt="Montaje artesanal de ruedas"
                  onClick={() => setLightboxSrc(imgRuedasCarta)}
                />
                <img
                  src={imgMontajeRuedas}
                  alt="Montaje de ruedas a medida"
                  onClick={() => setLightboxSrc(imgMontajeRuedas)}
                />
              </div>
              <div className={styles.montajesContent}>
                <div className={styles.titleRow}>
                  <Target size={28} className={styles.montajesIcon} />
                  <h3 className={styles.montajesTitle}>Ruedas</h3>
                </div>
                <p className={styles.montajesDescription}>
                  Montaje artesanal de ruedas. Selecciona bujes, radios y llantas para un
                  rendimiento óptimo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 3. ALQUILER BICICLETAS ELÉCTRICAS ───── */}
      <section id="alquiler" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}>Alquiler de Bicicletas Eléctricas</h2>
            <p className={styles.subtitle}>
              Bicicletas eléctricas de montaña de alta gama. Desde <strong>65&nbsp;€/día</strong>.
              Con posibilidad de rutas guiadas (consultar precio).
            </p>
          </div>

          <div className={styles.rentalGrid}>
            <img
              src={imgRentalPromo}
              alt="Alquiler MTB Eléctrica"
              className={styles.rentalImage}
              onClick={() => setLightboxSrc(imgRentalPromo)}
            />
            <img
              src={imgEbike1}
              alt="E-Bike en la montaña"
              className={styles.rentalImage}
              onClick={() => setLightboxSrc(imgEbike1)}
            />
            <img
              src={imgEbike2}
              alt="Ruta en bicicleta"
              className={styles.rentalImage}
              onClick={() => setLightboxSrc(imgEbike2)}
            />
          </div>

          <div className={styles.rentalInfo}>
            <p>
              También disponemos de diferentes tracks dependiendo del nivel y la dificultad. Rutas
              para todos los públicos, desde iniciación hasta los más expertos.
            </p>
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
      </section>
      {/* Lightbox */}
      {lightboxSrc && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxSrc(null)}>
          <button
            className={styles.lightboxClose}
            onClick={() => setLightboxSrc(null)}
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>
          <img
            src={lightboxSrc}
            alt="Imagen ampliada"
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
