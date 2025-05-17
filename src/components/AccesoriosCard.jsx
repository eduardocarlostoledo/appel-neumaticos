import React from "react";
import { motion } from "framer-motion";
import "../styles/AccesoriosCard.css";

const AccesoriosCard = () => {
  return (
    <motion.section
      className="accesorios-card"
      style={{
        backgroundImage: 'url("/src/images/frente.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="accesorios-overlay">
        <motion.div
          className="accesorios-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2><em>En Encarnación Paraguay comprá tus neumáticos en</em></h2>
          <h3><em>APPEL NEUMÁTICOS SHOWROOM</em></h3>
          <p>
            En Appel Neumáticos Showroom, no solo vendemos cubiertas, brindamos la mejor atención y tenemos los productos de mejor calidad y precio.
          </p>
          <p>
            Además, te llevamos tus productos hasta la Argentina.
          </p>
           <a href="#productos" className="cta-accesorios">Ver Productos</a>
          <a
            href="https://wa.me/595975123030?text=Quiero%20comprar%20cubiertas%20y%20recibir%20en%20la%20argentina"
            className="cta-accesorios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AccesoriosCard;
