import { appelInquiryMessage, buildWhatsAppUrl } from "../../utils/whatsapp.js";

export const LocalSeoSection = () => (
  <section className="seo-panel seo-panel-inner" itemScope itemType="https://schema.org/AutoPartsStore">
    <div className="seo-header">
      <span className="seo-kicker">Encarnacion, Paraguay</span>
      <h2 className="seo-title">Cubiertas con stock y asesoramiento rapido</h2>
      <p className="seo-copy" itemProp="description">
        Escribi al WhatsApp y te pasamos opciones reales para auto, moto y camioneta.
        Estamos en la rotonda de la ruta internacional, a 300 m de la aduana.
      </p>
    </div>

    <div className="seo-local-grid">
      <div className="seo-map">
        <div className="seo-map-box">
          <p>
            Abrinos en Google Maps y llegas directo al showroom. Si sos de Paraguay
            o Argentina, consultanos por stock antes de venir.
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
          <p>Rotonda ruta internacional, 300 m de la aduana.</p>
        </article>
        <article className="seo-mini-card">
          <strong>Atencion inmediata</strong>
          <p>Respondemos por WhatsApp con stock y medidas.</p>
        </article>
        <article className="seo-mini-card">
          <strong>Auto, moto y camioneta</strong>
          <p>Opciones para todo tipo de vehiculo y uso.</p>
        </article>
        <article className="seo-mini-card">
          <strong>Paraguay y Argentina</strong>
          <p>Enviamos a Posadas Misiones y Argentina.</p>
        </article>
      </div>
    </div>

    <div hidden>
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="streetAddress">Rotonda Ruta Internacional - 300 m de la aduana internacional</span>
        <span itemProp="addressLocality">Encarnacion</span>
        <span itemProp="addressRegion">Itapua</span>
        <span itemProp="addressCountry">Paraguay</span>
      </div>
      <meta itemProp="openingHours" content="Mo-Sa 05:45-17:30" />
      <link itemProp="url" href="https://www.appelneumaticos.com" />
    </div>
  </section>
);
