import "../styles/MichelinCard.css";
import autoImage from "../images/cars/supra.webp";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const MichelinCardAuto = () => {
  return (
    <div className="michelin-card">
      <div className="michelin-card-content">
        <div className="michelin-info">
          <p className="michelin-subtitle">DESTACADO PARA AUTOS</p>
          <h2 className="michelin-title">Confort y seguridad en ciudad y ruta</h2>
          <p className="michelin-description">
            Consultanos por opciones Michelin para autos. Confirmamos medida y
            disponibilidad por WhatsApp.
          </p>
        </div>

        <div className="michelin-card-box">
          <img src={autoImage} alt="Cubiertas para autos" className="michelin-image" />
          <div className="michelin-label">
            <span className="brand">MICHELIN</span>
            <span className="model">LINEA DESTACADA</span>
          </div>
        </div>
      </div>

      <div className="michelin-meta">
        <span className="type">Touring</span>
        <p className="luxury">Conduccion silenciosa y eficiente.</p>
        <a
          href={buildWhatsAppUrl(appelInquiryMessage("Michelin para autos"))}
          className="details-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MichelinCardAuto;
