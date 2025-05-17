import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../../src/styles/VehiculosCards.css";

import moto from "../images/cars/r1.jpg";
import hilux from "../images/cars/hilux.jpeg";
import supra from "../images/cars/supra.webp";

const CarsSelection = () => {
  const cars = [
    { image: moto, title: "Neumáticos para Motos", desc: "Pura potencia y estilo" },
    { image: hilux, title: "Neumáticos para Camionetas", desc: "Seguridad y resistencia" },
    { image: supra, title: "Neumáticos para Autos", desc: "Velocidad y diseño" }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % cars.length), 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="slider-section" id="neumaticos">
      <Helmet>
        <title>Appel Neumáticos Showroom | Inicio</title>
        <meta name="description" content="Neumáticos para motos, autos y camionetas en Encarnación - Appel Neumáticos Showroom." />
        <link rel="canonical" href="https://www.appelneumaticos.com/" />
      </Helmet>

      <div className="slider-container-enhanced">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="slide-enhanced"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${cars[current].image})`
            }}
          >
            <div className="slider-overlay-content">
              <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                {cars[current].title}
              </motion.h2>
              <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                {cars[current].desc}
              </motion.p>
              <motion.a
                className="slider-btn"
                href="#productos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver productos
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="indicators">
          {cars.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsSelection;
