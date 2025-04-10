// Importación organizada (rutas consistentes)
import bridgestoneLogo from "../../images/logos/bridgestone.jpg";
import dunlopLogo from "../../images/logos/dunlop.png";
import firestoneLogo from "../../images/logos/firestone.png";
import durableLogo from "../../images/logos/durable.png";
import michelinLogo from "../../images/logos/michelin.png";
import pirelliLogo from "../../images/logos/pirelli.png";
import xbriLogo from "../../images/logos/xbri.png";
import "../../styles/BrandShowcase.css"; // Asegúrate de que la ruta sea correcta
export const BrandShowcase = () => {
  // Datos estructurados para mapeo
  const brands = [
    { 
      logo: bridgestoneLogo, 
      alt: "Bridgestone - Neumáticos premium para autos y camionetas en Encarnación",
      name: "Bridgestone"
    },
    { 
      logo: pirelliLogo, 
      alt: "Pirelli - Cubiertas de alto rendimiento para motos y autos deportivos",
      name: "Pirelli"
    },
    { 
      logo: michelinLogo, 
      alt: "Michelin - Neumáticos de larga duración y seguridad para todo tipo de vehículos",
      name: "Michelin"
    },
    { 
      logo: dunlopLogo, 
      alt: "Dunlop - Neumáticos para autos y camionetas con tecnología avanzada",
      name: "Dunlop"
    },
    { 
      logo: firestoneLogo, 
      alt: "Firestone - Cubiertas confiables para autos y camionetas en Paraguay",
      name: "Firestone"
    },
    { 
      logo: durableLogo, 
      alt: "Durable - Neumáticos económicos y resistentes para vehículos comerciales",
      name: "Durable"
    },
    { 
      logo: xbriLogo, 
      alt: "Xbri - Neumáticos de calidad para autos y camionetas en Paraguay",
      name: "Xbri"
    }
  ];

  return (
    <section 
      className="brands"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <h2>Distribuidor Autorizado de <span itemProp="name">Marcas Internacionales</span></h2>
      
      <div 
        className="brand-logos"
        itemProp="brand"
        itemScope
        itemType="https://schema.org/Brand"
      >
        {brands.map((brand) => (
          <div key={brand.name} className="brand-item">
            <img
              loading="lazy"
              src={brand.logo}
              alt={brand.alt}
              width="120"
              height="80"
              itemProp="logo"
            />
            <meta itemProp="name" content={brand.name} />
          </div>
        ))}
      </div>

      {/* Microdata para search engines */}
      <div hidden>
        <link itemProp="url" href="https://www.appelneumaticos.com" />
        <span itemProp="makesOffer">Venta de neumáticos nuevos</span>
      </div>
    </section>
  );
};