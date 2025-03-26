import { motion } from "framer-motion";
import "./styles/BrandsSection.css";

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
    { name: "Bridgestone", logo: bridgestoneLogo },
    { name: "Dunlop", logo: dunlopLogo },
    { name: "Firestone", logo: firestoneLogo },
    { name: "Durable", logo: durableLogo },
    { name: "Michelin", logo: michelinLogo },
    { name: "Pirelli", logo: pirelliLogo },
    { name: "Xbri", logo: xbriLogo },
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
        <h2>NUESTRAS MARCAS</h2>
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
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
              {/* <p className="brand-name">{brand.name}</p> */}
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default BrandsSection;