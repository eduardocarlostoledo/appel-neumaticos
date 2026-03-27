import { useEffect } from "react";
import SEO from "../components/maxSeo/SEO.jsx";
import RouteLanding from "./RouteLanding.jsx";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";
import productInfo from "../data/productInfo.js";

const CamionetaCubiertas = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const showcase = productInfo
    .filter((item) =>
      item.tags.some((tag) => ["SUV", "Pickup", "All-Terrain", "Camioneta"].includes(tag))
    )
    .slice(0, 3)
    .map((item) => ({
      badge: "Camioneta",
      image: item.image,
      title: `${item.brand} ${item.model}`,
      copy: item.benefit,
      cta: {
        label: "Pedir mas informacion",
        href: buildWhatsAppUrl(appelInquiryMessage(`${item.brand} ${item.model}`)),
        target: "_blank",
        rel: "noopener noreferrer",
      },
    }));

  return (
    <>
      <SEO
        title="Cubiertas para Camionetas en Encarnación | Appel Neumáticos"
        description="Cubiertas para camionetas y pickup con foco en carga y ruta. Consultas por WhatsApp en Appel Neumáticos Showroom."
        canonicalUrl="https://appelneumaticos.com/camioneta-pickup/cubiertas"
      />

      <RouteLanding
        badge="Cubiertas para camionetas"
        title="Cubiertas para camionetas y pickup con consulta inmediata"
        description="Mostramos opciones para trabajo, carga y ruta. Confirmamos stock por WhatsApp."
        points={["Carga", "Ruta", "Uso mixto"]}
        metrics={[
          { value: "Resistencia", label: "para trabajo y viaje" },
          { value: "WhatsApp", label: "consulta directa" },
          { value: "Stock", label: "confirmado" },
        ]}
        ctaPrimary={{
          label: "Pedir mas informacion",
          href: buildWhatsAppUrl(appelInquiryMessage("cubiertas para camionetas y pickup")),
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        ctaSecondary={{
          label: "Ver catalogo",
          href: "/#productos",
        }}
        showcase={showcase}
      />
    </>
  );
};

export default CamionetaCubiertas;
