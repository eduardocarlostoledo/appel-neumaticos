import { appelInquiryMessage, buildWhatsAppUrl } from "../../utils/whatsapp.js";

export const LocalSeoSection = () => (
  <section className="seo-panel seo-panel-inner" itemScope itemType="https://schema.org/AutoPartsStore">
    <div className="seo-header">
      <span className="seo-kicker">SEO local</span>
      <h2 className="seo-title">
        Appel Neumáticos en Encarnacion, Paraguay
      </h2>
      <p className="seo-copy" itemProp="description">
        Ubicacion real, consulta por WhatsApp y una pagina pensada para quienes
        buscan cubiertas desde Google o Maps antes de venir al local.
      </p>
    </div>

    <div className="seo-local-grid">
      <div className="seo-map">
        <div className="seo-map-box">
          <p>
            Evitamos el mapa embebido para que la pagina cargue mas rapido. El
            acceso a la ubicacion sigue disponible en un clic.
          </p>
          <div className="seo-map-cta">
            <a
              className="seo-link seo-link-primary"
              href="https://www.google.com/maps/search/?api=1&query=Appel%20Neum%C3%A1ticos%20Encarnaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir en Google Maps
            </a>
            <a
              className="seo-link seo-link-secondary"
              href={buildWhatsAppUrl(appelInquiryMessage("ubicacion y disponibilidad"))}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="seo-cta-grid">
        <article className="seo-mini-card">
          <strong>Encarnacion, Itapua</strong>
          <p>Consulta local para usuarios de Paraguay y Argentina.</p>
        </article>
        <article className="seo-mini-card">
          <strong>Google y Maps</strong>
          <p>La pagina responde a la intencion real de busqueda local.</p>
        </article>
        <article className="seo-mini-card">
          <strong>Auto, moto y camioneta</strong>
          <p>Las categorias se entienden rapido y llevan a la conversacion.</p>
        </article>
        <article className="seo-mini-card">
          <strong>WhatsApp como cierre</strong>
          <p>Todo el recorrido termina en una consulta directa desde la web.</p>
        </article>
      </div>
    </div>

    <div hidden>
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="streetAddress">Rotonda Ruta Internacional - 300mt de la aduana internacional</span>
        <span itemProp="addressLocality">Encarnacion</span>
        <span itemProp="addressRegion">Itapua</span>
        <span itemProp="addressCountry">Paraguay</span>
      </div>
      <meta itemProp="openingHours" content="Mo-Sa 05:45-17:30" />
      <link itemProp="url" href="https://www.appelneumaticos.com" />
    </div>
  </section>
);
