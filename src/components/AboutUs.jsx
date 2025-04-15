import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../../src/styles/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Appel Neumáticos Showroom</title>
        <meta
          name="description"
          content="Conoce nuestra historia y compromiso con la venta de neumáticos en Encarnación, Paraguay. Más de 15 años de experiencia nos respaldan."
        />
      </Helmet>

      <section
        id="acerca-de"
        className="about-section"
        itemScope
        itemType="http://schema.org/Organization"
      >
        <div className="about-container">
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            itemProp="name"
          >
            Appel Neumáticos
          </motion.h2>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            itemProp="description"
          >
            En <strong>APPEL NEUMÁTICOS</strong>, somos líderes en la venta y
            distribución de neumáticos de alta calidad. Desde nuestros inicios,
            nos comprometimos a brindar a nuestros clientes de <strong>Encarnación</strong> y todo <strong>Paraguay</strong> productos confiables y un servicio profesional. Nuestra pasión por la seguridad y el rendimiento en el camino nos impulsa a ofrecer siempre lo mejor.
          </motion.p>

          <motion.ul
            className="about-stats"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li className="stat-item">🚗 +10,000 neumáticos vendidos</li>
            <li className="stat-item">🏆 15 años de experiencia</li>
            <li className="stat-item">🌎 Cobertura nacional e internacional</li>
          </motion.ul>

          <motion.p
            className="about-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Conocé más visitando nuestro showroom en Encarnación o escribinos para recibir asesoramiento personalizado.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
