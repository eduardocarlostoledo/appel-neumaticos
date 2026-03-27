import { Link } from "react-router-dom";
import { appelInquiryMessage, buildWhatsAppUrl } from "../../utils/whatsapp.js";

export const BrandBanner = () => (
  <header
    className="seo-panel seo-panel-inner"
    itemScope
    itemType="https://schema.org/AutoPartsStore"
  >
    <div className="seo-header">
      <span className="seo-kicker">SEO local Encarnacion</span>
      <h1 className="seo-title" itemProp="name">
        Appel Neumáticos Showroom
      </h1>
      <p className="seo-copy" itemProp="description">
        Neumáticos para auto, moto y camioneta. Especialistas en motos de alto
        rendimiento, alta cilindrada y enduro. Consultas por WhatsApp desde Paraguay
        y Argentina.
      </p>
    </div>

    <div className="seo-pill-row">
      <span className="seo-pill">Rotonda Ruta Internacional</span>
      <span className="seo-pill">300 m de la aduana</span>
      <span className="seo-pill">+20.000 vendidos</span>
      <span className="seo-pill">15 años de experiencia</span>
    </div>

    <div className="seo-meta-row" style={{ marginTop: "1rem" }}>
      <Link to="/autos/cubiertas" className="seo-link seo-link-secondary">
        Ver cubiertas para autos
      </Link>
      <Link to="/motos/cubiertas" className="seo-link seo-link-secondary">
        Ver cubiertas para motos
      </Link>
      <a
        href={buildWhatsAppUrl(appelInquiryMessage("cubiertas y mas informacion"))}
        className="seo-link seo-link-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Consultar por WhatsApp
      </a>
    </div>

    <div hidden itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
      <span itemProp="streetAddress">Rotonda Ruta Internacional - 300 m de la aduana internacional</span>
      <span itemProp="addressLocality">Encarnacion</span>
      <span itemProp="addressRegion">Itapua</span>
      <span itemProp="addressCountry">Paraguay</span>
    </div>
    <meta itemProp="openingHours" content="Mo-Sa 05:45-17:30" />
  </header>
);
