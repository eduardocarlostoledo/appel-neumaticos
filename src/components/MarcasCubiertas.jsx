import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import "../styles/BrandsSection.css";

// Importar logos
import bridgestoneLogo from "../images/logos/bridgestone.jpg";
import dunlopLogo from "../images/logos/dunlop.png";
import firestoneLogo from "../images/logos/firestone.png";
import durableLogo from "../images/logos/durable.png";
import michelinLogo from "../images/logos/michelin.png";
import pirelliLogo from "../images/logos/pirelli.png";
import xbriLogo from "../images/logos/xbri.png";

const MarcasCubiertas = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const brands = [
    { name: "Bridgestone", logo: bridgestoneLogo },
    { name: "Dunlop", logo: dunlopLogo },
    { name: "Firestone", logo: firestoneLogo },
    { name: "Durable", logo: durableLogo },
    { name: "Michelin", logo: michelinLogo },
    { name: "Pirelli", logo: pirelliLogo },
    { name: "Xbri", logo: xbriLogo },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <Helmet>
        <title>Marcas de Neumáticos en Encarnación | Appel Neumáticos Showroom</title>
        <meta
          name="description"
          content="Distribuidor autorizado de neumáticos Pirelli, Michelin, Bridgestone, Dunlop, Firestone, Durable, XBRI en Encarnación Paraguay."
        />
        <link rel="canonical" href="https://appelneumaticos.com/marcas" />
      </Helmet>

      <section className="brands-section" id="marcas">
        <div className="container-marcas">
          <span className="badge">Distribuidores Oficiales</span>
          <h1>Las Mejores Marcas de Neumáticos en Encarnación</h1>
          <p className="brands-description">
            En <strong>Appel Neumáticos Showroom</strong> nos especializamos en proveer neumáticos de alta calidad para autos, motos y camionetas. Contamos con stock permanente de las marcas más reconocidas del mundo.
          </p>

          <p className="brands-description">
            Nuestra selección incluye opciones para todos los terrenos y necesidades: neumáticos deportivos, touring, all-terrain, off-road, urbanos y de alto rendimiento. Con asesoramiento personalizado y envíos a todo Paraguay y Argentina.
          </p>

          <motion.div
            className="brands-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {brands.map((brand, index) => (
              <motion.div
                className="brand-card"
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  loading="lazy"
                  src={brand.logo}
                  alt={`Neumáticos ${brand.name} en Appel Showroom`}
                  className="brand-logo"
                />
              </motion.div>
            ))}
          </motion.div>

          <p className="brands-description">
            Visitá nuestro showroom en Encarnación para recibir asesoramiento personalizado. Garantizamos neumáticos originales, con garantía de fábrica y precios competitivos. ¡Elegí calidad, elegí Appel!
          </p>
        </div>
      </section>
    </>
  );
};


export default MarcasCubiertas;