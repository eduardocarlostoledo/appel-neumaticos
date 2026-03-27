import { useEffect } from "react";
import { Helmet } from "react-helmet";
import RouteLanding from "./RouteLanding.jsx";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Quienes Somos | Appel Neumáticos Showroom</title>
        <meta
          name="description"
          content="Appel Neumáticos Showroom en Encarnacion, Paraguay. Mas de 20.000 Neumáticos vendidos, 15 años de experiencia y cobertura nacional e internacional."
        />
      </Helmet>

      <RouteLanding
        badge="Quienes somos"
        title="Appel Neumáticos Showroom en el circuito comercial de Encarnacion"
        description="Somos lideres en venta y distribucion de Neumáticos de alta calidad. Trabajamos con una gran variedad de marcas y un enfoque fuerte en motos de alto rendimiento, alta cilindrada y enduro. El cierre de ventas se hace por WhatsApp."
        points={[
          "Rotonda ruta internacional",
          "Paraguay y Argentina",
          "WhatsApp directo",
        ]}
        metrics={[
          { value: "+20.000", label: "Neumáticos vendidos" },
          { value: "15 años", label: "de experiencia" },
          { value: "Cobertura", label: "nacional e internacional" },
        ]}
        ctaPrimary={{
          label: "Pedir mas informacion",
          href: buildWhatsAppUrl(appelInquiryMessage("quienes somos")),
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        ctaSecondary={{
          label: "Ver ubicacion",
          href: "/#sucursales",
        }}
      />
    </>
  );
};

export default AboutUsPage;
