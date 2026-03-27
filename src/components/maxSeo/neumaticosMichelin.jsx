import "../../styles/NeumaticosMichelin.css";
import { Helmet } from "react-helmet-async";

function NeumaticosMichelin() {
  const pageTitle = "Neumáticos Michelin en Encarnación | Appel Neumáticos";
  const pageDescription =
    "Consulta Neumáticos Michelin para auto, moto y camioneta en Encarnacion. Atencion por WhatsApp para Paraguay y Argentina.";
  const canonicalUrl = "https://www.appelneumaticos.com/Neumáticos-michelin";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://www.appelneumaticos.com/logo.png" />
        <meta property="og:site_name" content="Appel Neumáticos" />
        <meta property="og:locale" content="es_PY" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.appelneumaticos.com/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Neumáticos Michelin",
            description: pageDescription,
            brand: {
              "@type": "Brand",
              name: "Michelin",
            },
            offers: {
              "@type": "Offer",
              url: canonicalUrl,
              priceCurrency: "PYG",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>
    </>
  );
}

export default NeumaticosMichelin;
