import { Helmet } from "react-helmet";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const Sucursales = () => {
  return (
    <section className="hp-section" id="sucursales">
      <Helmet>
        <title>Sucursales | Appel Neumáticos Showroom</title>
        <meta
          name="description"
          content="Appel Neumáticos Showroom en Encarnacion, Paraguay. Rotonda Ruta Internacional a 300 m de la aduana. Consultas por WhatsApp."
        />
        <link rel="canonical" href="https://appelneumaticos.com/#sucursales" />
      </Helmet>

      <div className="hp-shell">
        <div className="hp-inner">
          <div className="hp-grid split">
            <div>
              <span className="hp-badge">Sucursal principal</span>
              <h2 className="hp-title">Encarnacion, Paraguay</h2>
              <p className="hp-text">
                Rotonda Ruta Internacional, a 300 m de la aduana. Te atendemos
                por WhatsApp para confirmar stock y medidas.
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
                    appelInquiryMessage("ubicacion y sucursales")
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
                  <strong>Horario</strong>
                  <span>05:45 a 17:30</span>
                </div>
                <div className="hp-metric">
                  <strong>Instagram</strong>
                  <a
                    href="https://www.instagram.com/appel_neumaticos_showroom/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @appel_neumaticos_showroom
                  </a>
                </div>
                <div className="hp-metric">
                  <strong>Maps</strong>
                  <a
                    href="https://maps.app.goo.gl/dN9obMRMWov6Euvu5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver ubicacion
                  </a>
                </div>
              </div>
              <div className="hp-pills" style={{ marginTop: "1rem" }}>
                <span>Paraguay y Argentina</span>
                <span>WhatsApp directo</span>
                <span>Zona comercial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sucursales;
