import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../styles/homepage.css";

const AboutUs = () => {
  return (
    <section className="hp-section" id="acerca-de">
      <Helmet>
        <title>Sobre Nosotros | Appel  Neumaticos Showroom</title>
        <meta
          name="description"
          content="Appel  Neumaticos Showroom en Encarnacion, Paraguay. Mas de 20.000 neumaticos vendidos, 15 anos de experiencia y cobertura nacional e internacional."
        />
      </Helmet>

      <motion.div
        className="hp-shell"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="hp-inner">
          <div className="hp-grid split">
            <div>
              <span className="hp-badge">Quienes somos</span>
              <h2 className="hp-title">Lideres en venta y distribucion</h2>
              <p className="hp-text">
                Appel  Neumaticos Showroom trabaja con una variedad enorme para
                auto, moto y camioneta. Somos especialistas en motos de alto
                rendimiento, motopistera y enduro. Atendemos Paraguay y
                Argentina con consulta directa por WhatsApp.
              </p>

              <div className="hp-pills">
                <span>+20.000 vendidos</span>
                <span>15 anos de experiencia</span>
                <span>Cobertura nacional e internacional</span>
              </div>

              <div className="hp-cta-row">
                <a href="#sucursales" className="hp-btn hp-btn-primary">
                  Ver ubicacion
                </a>
                <a href="#productos" className="hp-btn hp-btn-secondary">
                  Ver catalogo
                </a>
              </div>
            </div>

            <motion.div
              className="hp-metrics"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="hp-metric">
                <strong>Ubicacion</strong>
                <span>rotonda ruta internacional</span>
              </div>
              <div className="hp-metric">
                <strong>Marcas</strong>
                <span>Pirelli, Michelin, Bridgestone y mas</span>
              </div>
              <div className="hp-metric">
                <strong>WhatsApp</strong>
                <span>consulta directa</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
