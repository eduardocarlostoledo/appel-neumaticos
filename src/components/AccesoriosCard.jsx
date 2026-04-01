import { motion } from "framer-motion";
import "../styles/homepage.css";
import frente from "../images/frente.jpg";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const AccesoriosCard = () => {
  return (
    <section className="hp-section">
      <motion.div
        className="hp-shell"
        style={{
          background: `linear-gradient(rgba(7, 10, 20, 0.62), rgba(7, 10, 20, 0.54)), url(${frente}) center/cover no-repeat`,
        }}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="hp-inner">
          <div className="hp-grid split">
            <div>
              <span className="hp-badge">Cubiertas y asesoramiento</span>
              <h2 className="hp-title">
                Elegi la medida correcta para tu auto, moto o camioneta
              </h2>
              <p className="hp-text">
                Trabajamos con Pirelli, Michelin, Bridgestone, Dunlop, Firestone,
                Durable, XDR, Brinalli y mas. Si llegaste por Google o Maps,
                consultanos por WhatsApp y te confirmamos stock.
              </p>

              <div className="hp-pills">
                <span>Asesoramiento real</span>
                <span>Consultas Paraguay y Argentina</span>
                <span>Auto, moto y camioneta</span>
              </div>

              <div className="hp-cta-row">
                <a href="#productos" className="hp-btn hp-btn-primary">
                  Ver catalogo
                </a>
                <a
                  href={buildWhatsAppUrl(
                    appelInquiryMessage("cubiertas y recibir asesoramiento")
                  )}
                  className="hp-btn hp-btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>

            <div className="hp-metrics">
              <div className="hp-metric">
                <strong>Especialidad</strong>
                <span>moto alto rendimiento</span>
              </div>
              <div className="hp-metric">
                <strong>Ubicacion</strong>
                <span>rotonda ruta internacional</span>
              </div>
              <div className="hp-metric">
                <strong>WhatsApp</strong>
                <span>respuesta rapida</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AccesoriosCard;
