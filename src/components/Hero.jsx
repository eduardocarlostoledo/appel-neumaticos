import { motion } from "framer-motion";
import "../styles/homepage.css";
import heroImage from "../images/baner.png";

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
              <span className="hp-badge">Appel Neumáticos Showroom</span>
              <motion.h1
                className="hp-title"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Neumáticos para moto, auto y camioneta en Encarnacion
              </motion.h1>

              <p className="hp-text">
                Estamos en la rotonda de la ruta internacional, a 300 m de la
                aduana. Consulta por WhatsApp, vemos medidas y marcas y te
                confirmamos stock antes de venir.
              </p>

              <div className="hp-pills">
                <span>Encarnacion, Paraguay</span>
                <span>Consultas desde Paraguay y Argentina</span>
                <span>WhatsApp como canal principal</span>
              </div>

              <div className="hp-cta-row">
                <a href="#productos" className="hp-btn hp-btn-primary">
                  Ver productos
                </a>
                <a href="#sucursales" className="hp-btn hp-btn-secondary">
                  Como llegar
                </a>
              </div>
            </div>

            <div className="hp-metrics" aria-label="Beneficios destacados">
              <div className="hp-metric">
                <strong>+20.000</strong>
                <span>Neumáticos vendidos</span>
              </div>
              <div className="hp-metric">
                <strong>15 años</strong>
                <span>de experiencia</span>
              </div>
              <div className="hp-metric">
                <strong>Local</strong>
                <span>Encarnacion, Paraguay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
