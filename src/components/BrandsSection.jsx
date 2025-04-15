import { motion } from "framer-motion";
import "../../src/styles/BrandsSection.css";

// Importar logos de las marcas
import bridgestoneLogo from "../images/logos/bridgestone.jpg";
import dunlopLogo from "../images/logos/dunlop.png";
import firestoneLogo from "../images/logos/firestone.png";
import durableLogo from "../images/logos/durable.png";
import michelinLogo from "../images/logos/michelin.png";
import pirelliLogo from "../images/logos/pirelli.png";
import xbriLogo from "../images/logos/xbri.png";

const BrandsSection = () => {
  // Lista de marcas con logos importados
  const brands = [
    {
      name: "Neumatico Cubierta Appel neumatico showroom Bridgestone",
      logo: bridgestoneLogo,
    },
    {
      name: "Neumatico Cubierta Appel neumatico showroom Dunlop",
      logo: dunlopLogo,
    },
    {
      name: "Neumatico Cubierta Appel neumatico showroom Firestone",
      logo: firestoneLogo,
    },
    {
      name: "Neumatico Cubierta Appel neumatico showroom Durable",
      logo: durableLogo,
    },
    {
      name: "Neumatico Cubierta Appel neumatico showroom Michelin",
      logo: michelinLogo,
    },
    {
      name: "Neumatico Cubierta Appel neumatico showroom Pirelli",
      logo: pirelliLogo,
    },
    {
      name: "Neumatico Cubierta Appel neumatico showroom Xbri",
      logo: xbriLogo,
    },
  ];

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Retraso entre cada hijo
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="brands-section" id="marcas">
      <div className="container">
        <h2>
          Marcas de Neumáticos en Appel Showroom: Pirelli, Michelin, Bridgestone
          y más
        </h2>
        <p className="brands-description">
          Trabajamos con las principales marcas de cubiertas del mundo, como
          Michelin, Pirelli, Bridgestone, Firestone, Dunlop, Durable, y XBRI,
          para asegurar calidad, seguridad y rendimiento.
        </p>

        <motion.div
          className="brands-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Animación solo una vez
        >
          {brands.map((brand, index) => (
            <motion.div
              className="brand-card"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }} // Efecto hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                loading="lazy"
                src={brand.logo}
                alt={brand.name}
                className="brand-logo"
              />
              {/* <p className="brand-name">{brand.name}</p> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
