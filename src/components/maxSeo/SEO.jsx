import "../../styles/SEO.css";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "Appel Neumáticos Showroom | Encarnacion, Paraguay",
  description = "Cubiertas para auto, moto y camioneta en Encarnacion. Consulta directa por WhatsApp desde la web.",
  keywords = "Neumáticos, cubiertas, encarnacion, paraguay, whatsapp",
  canonicalUrl = typeof window !== "undefined" ? window.location.href : "",
  ogImage = "https://www.appelneumaticos.com/logo.png",
  twitterImage = "https://www.appelneumaticos.com/logo.png",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="es_PY" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoPartsStore",
          name: "Appel Neumáticos Showroom",
          description,
          url: canonicalUrl,
          logo: "https://www.appelneumaticos.com/logo.png",
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
