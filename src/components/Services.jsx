import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../src/styles/Services.css";
import productInfo from "../../src/data/productInfo";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "motos", label: "Motos" },
  { id: "autos", label: "Autos" },
  { id: "camionetas", label: "Camionetas" },
  { id: "michelin", label: "Michelin" },
  { id: "pirelli", label: "Pirelli" },
];

const MOTO_BRANDS = ["PIRELLI", "MICHELIN", "RINALDI"];
const CAMIONETA_TAGS = ["SUV", "Pickup", "Camioneta", "All-Terrain"];
const AUTO_TAGS = ["Auto", "Auto Compacto", "Ciudad", "Performance"];

const matchesFilter = (item, filterId) => {
  switch (filterId) {
    case "motos":
      return MOTO_BRANDS.includes(item.brand);
    case "autos":
      return item.tags.some((t) => AUTO_TAGS.includes(t));
    case "camionetas":
      return item.tags.some((t) => CAMIONETA_TAGS.includes(t));
    case "michelin":
      return item.brand === "MICHELIN";
    case "pirelli":
      return item.brand === "PIRELLI";
    default:
      return true;
  }
};

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  const carouselRef = useRef(null);

  const filteredProducts = useMemo(
    () => productInfo.filter((item) => matchesFilter(item, activeFilter)),
    [activeFilter]
  );

  const scrollCarousel = (direction) => {
    const node = carouselRef.current;
    if (!node) return;
    const cardWidth = node.querySelector(".product-card")?.offsetWidth ?? 320;
    node.scrollBy({ left: direction * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <section className="services" id="productos">
      <div className="services-shell">
        <div className="services-hero">
          <span className="services-badge">Catalogo destacado</span>
          <h2>Neumaticos para auto, moto y camioneta</h2>
          <p className="services-description">
            Marcas nacionales e importadas. Motos de baja y alta cilindrada,
            enduro y cross. Te asesoramos en minutos por WhatsApp.
          </p>
          <div className="services-pills" aria-label="Beneficios clave">
            <span>Atencion inmediata</span>
            <span>Precios actualizados</span>
            <span>Stock disponible</span>
            <span>Envios a Posadas y Argentina</span>
          </div>
        </div>

        <div className="services-filters" role="group" aria-label="Filtrar por categoria">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter-chip${activeFilter === f.id ? " filter-chip--active" : ""}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="services-nav">
          <span className="services-count">
            <strong>{filteredProducts.length}</strong>{" "}
            {filteredProducts.length === 1 ? "producto" : "productos"}
          </span>
          <div className="carousel-arrows">
            <button
              type="button"
              className="arrow-btn"
              onClick={() => scrollCarousel(-1)}
              aria-label="Ver productos anteriores"
            >
              ←
            </button>
            <button
              type="button"
              className="arrow-btn arrow-btn--next"
              onClick={() => scrollCarousel(1)}
              aria-label="Ver mas productos"
            >
              →
            </button>
          </div>
        </div>

        <div className="products-carousel" ref={carouselRef} aria-label="Carrusel de productos">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <article className="product-card" key={item.id}>
                <Link to={`/productos/${item.id}`} className="product-image-link">
                  <div className="product-img">
                    <img
                      src={item.image}
                      alt={`${item.brand} ${item.model}`}
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="product-info">
                  <div className="product-topline">
                    <h3 className="brand-product">{item.brand}</h3>
                    <div
                      className="rating"
                      aria-label={`Calificacion ${item.rating} sobre 5`}
                    >
                      <span>★★★★★</span>
                      <span className="score">{item.rating}/5</span>
                      <span className="reviews">({item.reviews})</span>
                    </div>
                  </div>

                  <h4 className="model-product">{item.model}</h4>

                  <div className="tags" aria-label="Caracteristicas">
                    {item.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="benefit">
                    <span className="badge">Recomendado</span>
                    <p>{item.benefit}</p>
                  </div>

                  <div className="card-buttons">
                    <Link to={`/productos/${item.id}`} className="btn-outline">
                      Ver detalle
                    </Link>
                    <a
                      className="btn-yellow"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={buildWhatsAppUrl(
                        appelInquiryMessage(`${item.brand} ${item.model}`)
                      )}
                    >
                      Pedir por WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="empty-state">
              <h3>Sin productos en esta categoria</h3>
              <p>Consultanos por WhatsApp para mas opciones.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
