import { Helmet } from "react-helmet";
import RouteLanding from "./RouteLanding.jsx";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Politica de privacidad | Appel Neumáticos Showroom</title>
        <meta
          name="description"
          content="Politica de privacidad general de Appel Neumáticos Showroom. Sitio informativo con consultas por WhatsApp."
        />
      </Helmet>

      <RouteLanding
        badge="Politica de privacidad"
        title="Uso general del sitio"
        description="Este texto es generico y se puede afinar luego. El sitio se usa para brindar informacion, mostrar marcas y recibir consultas por WhatsApp."
        points={["Sitio informativo", "WhatsApp principal", "Enlaces externos"]}
        metrics={[
          { value: "Apple", label: "Neumáticos Showroom" },
          { value: "Encarnacion", label: "Paraguay" },
          { value: "WhatsApp", label: "consulta directa" },
        ]}
        ctaPrimary={{
          label: "Consultar por WhatsApp",
          href: buildWhatsAppUrl(appelInquiryMessage("politica de privacidad")),
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        ctaSecondary={{
          label: "Volver al inicio",
          href: "/",
        }}
      />
    </>
  );
};

export default PrivacyPolicy;
