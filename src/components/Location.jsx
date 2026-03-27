import "../styles/homepage.css";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const Location = () => {
  return (
    <section className="hp-section" id="sucursales">
      <div className="hp-shell">
        <div className="hp-inner">
          <div className="hp-grid split">
            <div>
              <span className="hp-badge">Ubicacion</span>
              <h2 className="hp-title">Visitanos en Encarnación o consulta online</h2>
              <p className="hp-text">
                Podés encontrarnos en Google a través de nuestra ficha de Negocios o Maps buscando "Appel Neumáticos Showroom". Estamos en la rotonda de la ruta internacional, a 300 m de la aduana. Consulta por WhatsApp, tenemos todas las medidas y modelos!
              </p>

              <div className="hp-cta-row">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Appel%20Neum%C3%A1ticos%20Encarnaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hp-btn hp-btn-primary"
                >
                  Abrir en Google Maps
                </a>
                <a
                  href={buildWhatsAppUrl(
                    appelInquiryMessage("ubicacion y mas informacion")
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hp-btn hp-btn-secondary"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>

            <div>
              <div className="hp-metrics">
                <div className="hp-metric">
                  <strong>Encarnacion</strong>
                  <span>Itapua, Paraguay</span>
                </div>
                <div className="hp-metric">
                  <strong>Lunes a Sabado</strong>
                  <span>05:45 a 17:30</span>
                </div>
                <div className="hp-metric">
                  <strong>Atencion</strong>
                  <span>WhatsApp e Instagram</span>
                </div>
              </div>

              <div
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="hp-text" style={{ marginBottom: "0.75rem" }}>
                  Rotonda Ruta Internacional, a 300 m de la aduana internacional.
                </p>
                <div className="hp-pills">
                  <span>Consultas Paraguay y Argentina</span>
                  <span>Atencion directa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
