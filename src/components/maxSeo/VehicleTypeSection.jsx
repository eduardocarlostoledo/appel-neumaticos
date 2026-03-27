import { Link } from "react-router-dom";
import autoImage from "../../images/cars/supra.webp";
import motoImage from "../../images/cars/r1.jpg";
import pickupImage from "../../images/cars/hilux.jpeg";

export const VehicleTypeSection = () => {
  const vehicleTypes = [
    {
      name: "Autos",
      image: autoImage,
      alt: "Cubiertas para autos en Encarnacion",
      description: "Opciones para ciudad, ruta y uso familiar con consulta rapida.",
      link: "/autos/cubiertas",
    },
    {
      name: "Motos",
      image: motoImage,
      alt: "Cubiertas para motos en Encarnacion",
      description: "Alto rendimiento, alta cilindrada y enduro con foco en agarre.",
      link: "/motos/cubiertas",
    },
    {
      name: "Camionetas",
      image: pickupImage,
      alt: "Cubiertas para camionetas y pickup en Encarnacion",
      description: "Soluciones para trabajo, carga y ruta con resistencia y traccion.",
      link: "/camioneta-pickup/cubiertas",
    },
  ];

  return (
    <section className="seo-panel seo-panel-inner" itemScope itemType="https://schema.org/ItemList">
      <div className="seo-header">
        <span className="seo-kicker">Tipos de vehiculo</span>
        <h2 className="seo-title" itemProp="name">
          Elegi la categoria correcta y consulta en un clic
        </h2>
        <p className="seo-copy">
          Esta grilla te lleva directo a la categoria correcta y a WhatsApp.
        </p>
      </div>

      <div className="seo-grid-3" itemProp="itemListElement">
        {vehicleTypes.map((vehicle, index) => (
          <article
            key={vehicle.name}
            className="seo-card"
            itemProp="item"
            itemScope
            itemType="https://schema.org/Product"
          >
            <div className="seo-card-media">
              <img loading="lazy" src={vehicle.image} alt={vehicle.alt} itemProp="image" />
            </div>
            <div className="seo-card-body">
              <h3 itemProp="name">Cubiertas para {vehicle.name.toLowerCase()}</h3>
              <p itemProp="description">{vehicle.description}</p>
              <div className="seo-card-links">
                <Link className="seo-link seo-link-primary" to={vehicle.link}>
                  Ver categoria
                </Link>
                <span className="seo-link seo-link-secondary">Posicion SEO {index + 1}</span>
              </div>
            </div>
            <meta itemProp="position" content={index + 1} />
          </article>
        ))}
      </div>
    </section>
  );
};
