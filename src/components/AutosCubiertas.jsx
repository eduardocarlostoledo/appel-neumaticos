import { useEffect } from "react";
import SEO from "../components/maxSeo/SEO.jsx";
import RouteLanding from "./RouteLanding.jsx";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";
import productInfo from "../data/productInfo.js";

const AutosCubiertas = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const showcase = productInfo
    .filter((item) =>
      item.tags.some((tag) =>
        ["Auto", "SUV", "Pickup", "Auto Compacto", "City Car"].includes(tag)
      )
    )
    .slice(0, 3)
    .map((item) => ({
      badge: "Auto",
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
        title="Cubiertas para Autos en Encarnación | Appel Neumáticos"
        description="Cubiertas para autos con asesoramiento y stock. Consultas por WhatsApp en Appel Neumáticos Showroom."
        canonicalUrl="https://appelneumaticos.com/autos/cubiertas"
      />

      <RouteLanding
        badge="Cubiertas para autos"
        title="Cubiertas para autos con consulta directa"
        description="Mostramos opciones de marcas lideres y confirmamos stock por WhatsApp. Atendemos Paraguay y Argentina."
        points={["Uso urbano", "Ruta y viajes", "Asesoramiento tecnico"]}
        metrics={[
          { value: "WhatsApp", label: "respuesta rapida" },
          { value: "Stock", label: "consultas directas" },
          { value: "Marcas", label: "reconocidas" },
        ]}
        ctaPrimary={{
          label: "Pedir mas informacion",
          href: buildWhatsAppUrl(appelInquiryMessage("cubiertas para autos")),
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

export default AutosCubiertas;
