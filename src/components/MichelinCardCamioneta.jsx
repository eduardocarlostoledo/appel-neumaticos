import "../styles/MichelinCard.css";
import camionetaImage from "../images/cars/hilux.jpeg";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const MichelinCardCamioneta = () => {
  return (
    <div className="michelin-card">
      <div className="michelin-card-content">
        <div className="michelin-info">
          <p className="michelin-subtitle">CAMIONETA / PICKUP</p>
          <h2 className="michelin-title">Carga, traccion y resistencia</h2>
          <p className="michelin-description">
            Consultanos por Michelin para camionetas y pickups. Confirmamos
            medida, uso y stock por WhatsApp.
          </p>
        </div>

        <div className="michelin-card-box">
          <img src={camionetaImage} alt="Cubiertas para camionetas" className="michelin-image" />
          <div className="michelin-label">
            <span className="brand">MICHELIN</span>
            <span className="model">LINEA ALL TERRAIN</span>
          </div>
        </div>
      </div>

      <div className="michelin-meta">
        <span className="type">All Terrain</span>
        <p className="luxury">Trabajo, ruta y caminos mixtos.</p>
        <a
          href={buildWhatsAppUrl(appelInquiryMessage("Michelin para camionetas"))}
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

export default MichelinCardCamioneta;
