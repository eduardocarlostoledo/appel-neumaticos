import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../styles/homepage.css";

import moto from "../images/cars/r1.jpg";
import hilux from "../images/cars/hilux.jpeg";
import supra from "../images/cars/supra.webp";

const CarsSelection = () => {
  const cards = [
    {
      image: moto,
      title: "Cubiertas para motos",
      desc: "Agarre y estabilidad para uso urbano, ruta y sport.",
      to: "/motos/cubiertas",
    },
    {
      image: hilux,
      title: "Cubiertas para camionetas",
      desc: "Mas resistencia para carga, trabajo y caminos mixtos.",
      to: "/camioneta-pickup/cubiertas",
    },
    {
      image: supra,
      title: "Cubiertas para autos",
      desc: "Confort y seguridad para ciudad y viaje.",
      to: "/autos/cubiertas",
    },
  ];

  return (
    <section className="hp-section" id="Neumáticos">
      <Helmet>
        <title>Appel Neumáticos Showroom | Inicio</title>
        <meta
          name="description"
          content="Neumáticos para motos, autos y camionetas en Encarnacion, Paraguay."
        />
        <link rel="canonical" href="https://www.appelneumaticos.com/" />
      </Helmet>

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
              <span className="hp-badge">Elegi por tipo de vehiculo</span>
              <h2 className="hp-title">Selecciona tu categoria</h2>
              <p className="hp-text">
                Si ya sabes que necesitas, entra directo a la categoria de tu
                vehiculo y consulta por WhatsApp.
              </p>
            </div>
          </div>

          <div
            className="hp-track cols-3"
            style={{ marginTop: "1.25rem", paddingBottom: "0.25rem" }}
          >
            {cards.map((card) => (
              <article className="hp-card" key={card.title}>
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "230px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div className="hp-card-body">
                  <h3 className="hp-card-title">{card.title}</h3>
                  <p className="hp-card-copy">{card.desc}</p>
                  <div className="hp-cta-row" style={{ marginTop: "0.25rem" }}>
                    <Link to={card.to} className="hp-btn hp-btn-primary">
                      Ver categoria
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CarsSelection;
