import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/homepage.css";

import bridgestoneLogo from "../images/logos/bridgestone.jpg";
import dunlopLogo from "../images/logos/dunlop.png";
import firestoneLogo from "../images/logos/firestone.png";
import durableLogo from "../images/logos/durable.png";
import michelinLogo from "../images/logos/michelin.png";
import pirelliLogo from "../images/logos/pirelli.png";
import xbriLogo from "../images/logos/xbri.png";

const BrandsSection = () => {
  const brands = [
    { name: "Bridgestone", logo: bridgestoneLogo },
    { name: "Dunlop", logo: dunlopLogo },
    { name: "Firestone", logo: firestoneLogo },
    { name: "Durable", logo: durableLogo },
    { name: "Michelin", logo: michelinLogo },
    { name: "Pirelli", logo: pirelliLogo },
    { name: "Xbri", logo: xbriLogo },
  ];

  return (
    <section className="hp-section" id="marcas">
      <motion.div
        className="hp-shell"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="hp-inner">
          <div className="hp-grid">
            <div>
              <span className="hp-badge">Marcas disponibles</span>
              <h2 className="hp-title">Marcas lideres y alternativas reales</h2>
              <p className="hp-text">
                Pirelli, Michelin, Bridgestone, Dunlop, Firestone, Durable, XDR,
                Brinalli y mas. Consultanos por disponibilidad y medidas.
              </p>
            </div>

            <div className="hp-cta-row" style={{ marginTop: 0 }}>
              <Link
                to="/marcas-appel-neumaticos-showroom"
                className="hp-btn hp-btn-secondary"
              >
                Ver todas las marcas
              </Link>
            </div>
          </div>

          <div
            className="hp-track cols-logos"
            style={{ marginTop: "1.25rem", paddingBottom: "0.25rem" }}
          >
            {brands.map((brand) => (
              <article className="hp-card" key={brand.name} style={{ padding: "1rem" }}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "86px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrandsSection;

