import { Link } from "react-router-dom";
import { appelInquiryMessage, buildWhatsAppUrl } from "../../utils/whatsapp.js";

export const PricingSection = () => (
  <section className="seo-panel seo-panel-inner" itemScope itemType="https://schema.org/OfferCatalog">
    <div className="seo-header">
      <span className="seo-kicker">Consulta y stock</span>
      <h2 className="seo-title" itemProp="name">
        Escribi al WhatsApp y te enviamos informacion del amplio stock y variedad
      </h2>
      <p className="seo-copy">
        Appel Neumaticos Showroom estamos en Instagram, Tik Tok, tenemos variedad
        de precios, modelos y disenos. Enviamos a Posadas Misiones y Argentina.
      </p>
    </div>

    <div className="seo-cta-grid">
      <article className="seo-cta-card" itemScope itemType="https://schema.org/Offer">
        <strong>Consulta de medidas</strong>
        <p>Auto, moto y camioneta. Ideal para quien viene desde Google o Maps.</p>
      </article>
      <article className="seo-cta-card" itemScope itemType="https://schema.org/Offer">
        <strong>Stock por marca</strong>
        <p>Pirelli, Michelin, Bridgestone, Dunlop, Firestone, Durable, XDR, Brinalli.</p>
      </article>
      <article className="seo-cta-card" itemScope itemType="https://schema.org/Offer">
        <strong>Link directo</strong>
        <p>La consulta termina en WhatsApp con mensaje desde appelneumaticos.com.</p>
      </article>
      <article className="seo-cta-card">
        <strong>Ver categorias</strong>
        <div className="seo-card-links" style={{ marginTop: "0.75rem" }}>
          <Link className="seo-link seo-link-secondary" to="/autos/cubiertas">
            Autos
          </Link>
          <Link className="seo-link seo-link-secondary" to="/motos/cubiertas">
            Motos
          </Link>
          <Link className="seo-link seo-link-secondary" to="/camioneta-pickup/cubiertas">
            Camionetas
          </Link>
          <a
            className="seo-link seo-link-primary"
            href={buildWhatsAppUrl(appelInquiryMessage("stock y medidas"))}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar ahora
          </a>
        </div>
      </article>
    </div>
  </section>
);
