import { Link } from "react-router-dom";
import "../../src/styles/Location.css";

const Location = () => {
  return (
    <section className="location" id="sucursales">
      <div className="container-map">
        <h2>¿Dónde Estamos?</h2>

        <div className="google-map">
          <iframe
            title="Ubicación de Appel Neumáticos en Encarnación"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d885.8912351549054!2d-55.851786724189196!3d-27.35806680361256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDIxJzI5LjAiUyA1NcKwNTEnMDIuMSJX!5e0!3m2!1ses!2sar!4v1742416736106!5m2!1ses!2sar"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="address">
          <h3>Visitanos o contactanos</h3>

          <div className="social-links">
            <a
              href="https://wa.me/595975123030"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon whatsapp"
              title="Contactar por WhatsApp"
            >
              🟢 WhatsApp
            </a>

            <a
              href="https://www.instagram.com/appel_neumaticos_showroom/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              title="Seguir en Instagram"
            >
              📸 Instagram
            </a>

            <a
              href="https://maps.app.goo.gl/dN9obMRMWov6Euvu5"
              aria-label="Ubicación en Google Maps"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon maps"
              title="Ver en Google Maps"
            >
              📍 Google Maps
            </a>
          </div>

          <address>
            <p>📍 J4RX+PQ9 Encarnación, Paraguay</p>
            <p>Rotonda Ruta Internacional - 300mt de la aduana internacional</p>
            <p>🚚 Envíos a todo Paraguay y Argentina</p>
          </address>
        </div>
      </div>


    </section>
  );
};

export default Location;
