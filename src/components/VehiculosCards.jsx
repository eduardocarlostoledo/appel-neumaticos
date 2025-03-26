import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./styles/VehiculosCards.css";

// Importar imágenes
import moto from "../images/cars/r1.jpg";
import hilux from "../images/cars/hilux.jpeg";
import supra from "../images/cars/supra.webp";

const CarsSelection = () => {
  const cars = [
    { image: moto, title: "Neumáticos para Motos", desc: "Pura potencia y estilo" },
    { image: hilux, title: "Neumáticos para Camionetas", desc: "Seguridad y resistencia" },
    { image: supra, title: "Neumáticos para Autos", desc: "Velocidad y diseño" },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cars.length) % cars.length);
  };

  return (
    <section className="slider-section" id="neumaticos">
      <div className="slider-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="slide"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img
              src={cars[current].image}
              alt={`Slide ${current}`}
              className="slider-image"
            />
            <div className="slider-content">
              <h2>{cars[current].title}</h2>
              <p>{cars[current].desc}</p>
              <button className="slider-btn">Ver Más</button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Botones */}
        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>
        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>

        {/* Indicadores */}
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
