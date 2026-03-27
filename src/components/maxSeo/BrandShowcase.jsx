import bridgestoneLogo from "../../images/logos/bridgestone.jpg";
import dunlopLogo from "../../images/logos/dunlop.png";
import firestoneLogo from "../../images/logos/firestone.png";
import durableLogo from "../../images/logos/durable.png";
import michelinLogo from "../../images/logos/michelin.png";
import pirelliLogo from "../../images/logos/pirelli.png";
import xbriLogo from "../../images/logos/xbri.png";

export const BrandShowcase = () => {
  const brands = [
    {
      logo: bridgestoneLogo,
      alt: "Bridgestone",
      name: "Bridgestone",
    },
    {
      logo: pirelliLogo,
      alt: "Pirelli",
      name: "Pirelli",
    },
    {
      logo: michelinLogo,
      alt: "Michelin",
      name: "Michelin",
    },
    {
      logo: dunlopLogo,
      alt: "Dunlop",
      name: "Dunlop",
    },
    {
      logo: firestoneLogo,
      alt: "Firestone",
      name: "Firestone",
    },
    {
      logo: durableLogo,
      alt: "Durable",
      name: "Durable",
    },
    {
      logo: xbriLogo,
      alt: "Xbri",
      name: "Xbri",
    },
  ];

  return (
    <section className="seo-panel seo-panel-inner" itemScope itemType="https://schema.org/Organization">
      <div className="seo-header">
        <span className="seo-kicker">Marcas destacadas</span>
        <h2 className="seo-title" itemProp="name">
          Marcas lideres y variedad real
        </h2>
        <p className="seo-copy">
          Pirelli, Michelin, Bridgestone, Dunlop, Firestone, Durable, XDR,
          Brinalli y mas. Consulta disponibilidad por WhatsApp.
        </p>
      </div>

      <div className="seo-brand-strip">
        <div className="seo-brand-grid" itemProp="brand" itemScope itemType="https://schema.org/Brand">
          {brands.map((brand) => (
            <div key={brand.name} className="seo-brand">
              <img loading="lazy" src={brand.logo} alt={brand.alt} itemProp="logo" />
              <meta itemProp="name" content={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
