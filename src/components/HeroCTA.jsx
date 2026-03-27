import mockupImg from "../images/mockup.png";
import "../styles/HeroCTA.css";
import { buildWhatsAppUrl, appelInquiryMessage } from "../utils/whatsapp.js";

const HeroCTA = () => (
  <section className="hcta-section" aria-label="Solicitar cotización de neumáticos">
    <div className="hcta-shell">
      <div className="hcta-inner">
        <div className="hcta-content">
          <span className="hcta-label">Consulta sin costo</span>
          <h2 className="hcta-title">Si buscás la mejor cotización</h2>
          <p className="hcta-text">
            Un asesor te está esperando. Escribinos al WhatsApp con la medida de tu
            cubierta y te confirmamos stock y precio antes de que vengas al local.
            Sin vueltas, sin esperas.
          </p>
          <a
            href={buildWhatsAppUrl(appelInquiryMessage("cotización de neumáticos"))}
            target="_blank"
            rel="noopener noreferrer"
            className="hcta-btn"
          >
            Escribinos al WhatsApp
          </a>
        </div>
        <div className="hcta-image">
          <img
            src={mockupImg}
            alt="Consultá el precio de neumáticos por WhatsApp con Appel Neumáticos Encarnación"
            loading="lazy"
            width="480"
            height="420"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroCTA;
