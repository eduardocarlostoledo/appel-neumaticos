import "../../styles/NeumaticosMichelin.css"; // Asegúrate de que la ruta sea correcta
import { Helmet } from 'react-helmet-async';

function NeumaticosMichelin() {
  const pageTitle = "Neumáticos Michelin en Encarnación | Appel Neumáticos";
  const pageDescription = "Ofertas exclusivas en neumáticos Michelin para autos, camionetas y SUVs. Distribuidor autorizado en Itapúa con envíos a todo Paraguay y Argentina. ¡Garantía oficial!";
  const canonicalUrl = "https://www.appelneumaticos.com/neumaticos-michelin";

  return (
    <>
      <Helmet>
        {/* Meta tags básicos */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph / Facebook */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="product" />
        <meta 
          property="og:image" 
          content="https://www.appelneumaticos.com/images/michelin-og.jpg" 
        />
        <meta property="og:site_name" content="Appel Neumáticos" />
        <meta property="og:locale" content="es_PY" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta 
          name="twitter:image" 
          content="https://www.appelneumaticos.com/images/michelin-twitter.jpg" 
        />

        {/* Schema.org para producto */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Neumáticos Michelin",
            "description": pageDescription,
            "brand": {
              "@type": "Brand",
              "name": "Michelin"
            },
            "offers": {
              "@type": "Offer",
              "url": canonicalUrl,
              "priceCurrency": "PYG",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      {/* Resto del componente */}
    </>
  );
}