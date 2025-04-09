import { motion } from "framer-motion";
import "./styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section id="acerca-de" className="about-section">
      <div className="about-container">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Acerca de Nosotros
        </motion.h2>

        <motion.h1
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          En <strong>APPEL NEUMÁTICOS</strong>, somos líderes en la venta y distribución de neumáticos de alta calidad.
          Desde nuestros inicios, nos comprometimos a brindar a nuestros clientes productos confiables y un servicio
          profesional. Nuestra pasión por la seguridad y el rendimiento en el camino nos impulsa a ofrecer siempre lo mejor.
        </motion.h1>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="stat-item">
            🚗 +10,000 neumáticos vendidos
          </div>
          <div className="stat-item">
            🏆 15 años de experiencia
          </div>
          <div className="stat-item">
            🌎 Cobertura nacional
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
