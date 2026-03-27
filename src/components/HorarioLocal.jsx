import horarioImg from "../images/horario.png";
import "../styles/HorarioLocal.css";
import { buildWhatsAppUrl, appelInquiryMessage } from "../utils/whatsapp.js";

const HorarioLocal = () => (
  <section
    className="hl-section"
    aria-label="Horarios de atención y ubicación de Appel Neumáticos"
    itemScope
    itemType="https://schema.org/LocalBusiness"
  >
    <meta itemProp="name" content="Appel Neumáticos Showroom" />
    <meta itemProp="telephone" content="+595975123030" />
    <meta itemProp="url" content="https://appelneumaticos.com" />
    <link itemProp="hasMap" href="https://www.google.com/maps/place/Appel+Neumaticos+Showroom/@-27.358095,-55.850583,17z" />
    <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" hidden>
      <span itemProp="streetAddress">Rotonda Ruta Internacional, 300m de la Aduana Internacional</span>
      <span itemProp="addressLocality">Encarnación</span>
      <span itemProp="addressRegion">Itapúa</span>
      <span itemProp="postalCode">6000</span>
      <span itemProp="addressCountry">PY</span>
    </div>
    <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates" hidden>
      <meta itemProp="latitude" content="-27.358095" />
      <meta itemProp="longitude" content="-55.850583" />
    </div>

    <div className="hl-shell">
      <div className="hl-inner">
        <div className="hl-info">
          <span className="hl-kicker">Atención al cliente</span>
          <h2 className="hl-title">Horarios y cómo llegar</h2>
          <p className="hl-text">
            Estamos ubicados en la <strong>Rotonda de la Ruta Internacional</strong>,
            a 300 metros de la Aduana Internacional en Encarnación, Paraguay.
            Prácticamente al cruzar el puente Roque González de Santa Cruz desde Argentina.
          </p>

          <div className="hl-facts">
            <div className="hl-fact">
              <span className="hl-fact-label">Dirección</span>
              <span className="hl-fact-value">Rotonda Ruta Internacional, Encarnación, Itapúa</span>
            </div>
            <div className="hl-fact">
              <span className="hl-fact-label">Lunes a Sábado</span>
              <span className="hl-fact-value" itemProp="openingHours" content="Mo-Sa 05:45-17:30">
                05:45 – 17:30 hs
              </span>
            </div>
            <div className="hl-fact">
              <span className="hl-fact-label">WhatsApp</span>
              <span className="hl-fact-value">+595 975 123030</span>
            </div>
            <div className="hl-fact">
              <span className="hl-fact-label">Calificación Google</span>
              <span
                className="hl-fact-value hl-rating"
                itemProp="aggregateRating"
                itemScope
                itemType="https://schema.org/AggregateRating"
              >
                <meta itemProp="ratingValue" content="4.9" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="reviewCount" content="47" />
                4.9 / 5 estrellas
              </span>
            </div>
          </div>

          <div className="hl-cta-row">
            <a
              href={buildWhatsAppUrl(appelInquiryMessage("horarios y disponibilidad"))}
              target="_blank"
              rel="noopener noreferrer"
              className="hl-btn hl-btn-wa"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/place/Appel+Neumaticos+Showroom/@-27.358095,-55.850583,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="hl-btn hl-btn-maps"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        <div className="hl-image-wrap">
          <img
            src={horarioImg}
            alt="Horarios de atención Appel Neumáticos Showroom Encarnación Paraguay"
            loading="lazy"
            className="hl-image"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HorarioLocal;
