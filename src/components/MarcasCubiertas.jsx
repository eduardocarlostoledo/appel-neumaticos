import { useEffect } from "react";
import { Helmet } from "react-helmet";
import RouteLanding from "./RouteLanding.jsx";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const MarcasCubiertas = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Marcas de Neumaticos | Appel Neumaticos Showroom</title>
        <meta
          name="description"
          content="Marcas de Neumaticos en Encarnacion: Pirelli, Michelin, Bridgestone, Dunlop, Firestone, Durable, XDR, Brinalli y mas."
        />
        <link rel="canonical" href="https://appelneumaticos.com/marcas-appel-neumaticos-showroom" />
      </Helmet>

      <RouteLanding
        badge="Marcas disponibles"
        title="Marcas reconocidas y variedad real"
        description="Trabajamos con Pirelli, Michelin, Bridgestone, Dunlop, Firestone, Durable, XDR, Brinalli y otras. Consultanos por WhatsApp para confirmar stock."
        points={["Auto, moto y camioneta", "Stock por marca", "WhatsApp directo"]}
        metrics={[
          { value: "Variedad", label: "para todo tipo de vehiculo" },
          { value: "Marcas", label: "lideres y alternativas" },
          { value: "WhatsApp", label: "consulta rapida" },
        ]}
        ctaPrimary={{
          label: "Pedir mas informacion",
          href: buildWhatsAppUrl(appelInquiryMessage("marcas de Neumaticos")),
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        ctaSecondary={{
          label: "Ver catalogo",
          href: "/#productos",
        }}
      />
    </>
  );
};

export default MarcasCubiertas;


