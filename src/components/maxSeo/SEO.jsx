import "../../styles/SEO.css"; // Asegúrate de que la ruta sea correcta
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Appel Neumáticos | Venta en Encarnación",
  description = "Distribuidor autorizado de Michelin, Pirelli y más. Envíos a Paraguay y Argentina.",
  keywords = "neumáticos, cubiertas, Encarnación, Paraguay",
  canonicalUrl = typeof window !== 'undefined' ? window.location.href : '',
  ogImage = "https://www.appelneumaticos.com/og-default.jpg",
  twitterImage = "https://www.appelneumaticos.com/twitter-default.jpg"
}) => {
  return (
    <Helmet>
      {/* Básico */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="es_PY" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoPartsStore",
          "name": "Appel Neumáticos",
          "description": description,
          "url": canonicalUrl,
          "logo": "https://www.appelneumaticos.com/logo.png"
        })}
      </script>
    </Helmet>
  );
};