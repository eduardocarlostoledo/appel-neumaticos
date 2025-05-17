import "../../src/styles/Services.css";
import React from "react";
import { Link } from "react-router-dom";

// Cargar imágenes dinámicamente desde /images
//const images = import.meta.glob("../images/prod*.jpg", { eager: true });

import productInfo from "../../src/data/productInfo"

const Services = () => {
  //const imageArray = Object.values(images).map((img) => img.default);

  return (
    <section className="services" id="productos">
      <div className="container-services">
        <h2>Venta de Neumáticos y Cubiertas para Autos, Motos y Camionetas</h2>
        <p className="services-description">
          En Appel Neumáticos contamos con un amplio catálogo de cubiertas para
          todo tipo de vehículos. Elegí entre las mejores marcas para tu auto,
          moto o camioneta.
        </p>

        <div className="grid-productos">
          {productInfo.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-img">
                <img
                  src={item.image}
                  alt={`${item.brand} ${item.model}`}
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <h4 className="brand-product">{item.brand}</h4>
                <h3 className="model-product">{item.model}</h3>

                <div className="rating">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span className="score">{item.rating}/5</span>
                  <span className="reviews">({item.reviews})</span>
                </div>

                <div className="tags">
                  {item.tags.map((tag, i) => (
                    <span className="tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="benefit">
                  <span className="badge">Durability</span>
                  <p>{item.benefit}</p>
                </div>

                <div className="card-buttons">
                   <Link
                    to={`/productos/${item.id}`}
                    className="btn-outline"
                  >
                    Ver detalles
                  </Link>


                  <a
                    className="btn-yellow"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/595975123030?text=Hola%20Appel%2C%20quiero%20consultar%20por%20la%20cubierta%20${encodeURIComponent(
                      item.brand
                    )}%20${encodeURIComponent(item.model)}`}
                  >
                   WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
