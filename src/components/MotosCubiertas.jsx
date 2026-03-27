import { useEffect } from "react";
import SEO from "../components/maxSeo/SEO.jsx";
import RouteLanding from "./RouteLanding.jsx";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";
import productInfo from "../data/productInfo.js";

const MotosCubiertas = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const showcase = productInfo
    .filter((item) =>
      item.tags.some((tag) =>
        ["Sport", "Touring", "Scooter", "Enduro", "Trail", "Moto"].includes(tag)
      )
    )
    .slice(0, 3)
    .map((item) => ({
      badge: "Moto",
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
        title="Cubiertas para Motos en Encarnación | Appel Neumáticos"
        description="Especialistas en motos de alto rendimiento, alta cilindrada y enduro. Consultas por WhatsApp en Appel Neumáticos Showroom."
        canonicalUrl="https://appelneumaticos.com/motos/cubiertas"
      />

      <RouteLanding
        badge="Cubiertas para motos"
        title="Especialistas en motos de alto rendimiento y enduro"
        description="Agarre, estabilidad y seguridad. Consultanos por WhatsApp y te confirmamos stock y medidas."
        points={["Alto rendimiento", "Motopistera", "Enduro y trail"]}
        metrics={[
          { value: "Agarre", label: "para ruta y ciudad" },
          { value: "WhatsApp", label: "consulta directa" },
          { value: "Stock", label: "confirmado" },
        ]}
        ctaPrimary={{
          label: "Pedir mas informacion",
          href: buildWhatsAppUrl(appelInquiryMessage("cubiertas para motos")),
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

export default MotosCubiertas;
