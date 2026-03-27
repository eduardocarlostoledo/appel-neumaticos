import "../styles/MichelinCard.css";
import motoImage from "../images/cars/r1.jpg";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const MichelinCardMoto = () => {
  return (
    <div className="michelin-card">
      <div className="michelin-card-content">
        <div className="michelin-info">
          <p className="michelin-subtitle">MOTO ALTO RENDIMIENTO</p>
          <h2 className="michelin-title">Motopistera y enduro con agarre real</h2>
          <p className="michelin-description">
            Especialistas en motos de alto rendimiento. Consultanos por Michelin
            para sport, alta cilindrada y enduro.
          </p>
        </div>

        <div className="michelin-card-box">
          <img src={motoImage} alt="Cubiertas para motos" className="michelin-image" />
          <div className="michelin-label">
            <span className="brand">MICHELIN</span>
            <span className="model">LINEA PERFORMANCE</span>
          </div>
        </div>
      </div>

      <div className="michelin-meta">
        <span className="type">Sport / Enduro</span>
        <p className="luxury">Estabilidad, frenado y agarre superiores.</p>
        <a
          href={buildWhatsAppUrl(appelInquiryMessage("Michelin para motos"))}
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

export default MichelinCardMoto;
