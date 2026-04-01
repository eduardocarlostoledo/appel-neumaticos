import { motion } from "framer-motion";
import "../styles/homepage.css";
import heroImage from "../images/baner.png";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const Hero = () => {
  return (
    <section
      className="hp-section"
      id="inicio"
      style={{
        backgroundImage: `linear-gradient(rgba(7, 10, 20, 0.58), rgba(7, 10, 20, 0.72)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hp-shell">
        <div className="hp-inner">
          <div className="hp-grid split">
            <div>
              <span className="hp-badge">Appel Neumaticos Showroom</span>
              <motion.h1
                className="hp-title"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Cubiertas al mejor precio en Encarnacion
              </motion.h1>

              <p className="hp-text">
                Entrega rapida y asesoramiento real por WhatsApp. Encontra
                neumaticos para auto, moto, pickup y camioneta sin vueltas.
              </p>

              <div className="hp-pills">
                <span>Respuestas en minutos</span>
                <span>Paraguay y Argentina</span>
                <span>Stock confirmado</span>
              </div>

              <div className="hp-cta-row">
                <a
                  href={buildWhatsAppUrl(
                    appelInquiryMessage("consulta de stock y precios")
                  )}
                  className="hp-btn hp-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar ahora por WhatsApp
                </a>
                <a href="#productos" className="hp-btn hp-btn-secondary">
                  Ver productos
                </a>
              </div>
            </div>

            <div className="hp-metrics" aria-label="Beneficios destacados">
              <div className="hp-metric">
                <strong>+20.000</strong>
                <span>neumaticos vendidos</span>
              </div>
              <div className="hp-metric">
                <strong>15 anos</strong>
                <span>de experiencia</span>
              </div>
              <div className="hp-metric">
                <strong>Ubicacion</strong>
                <span>rotonda ruta internacional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
