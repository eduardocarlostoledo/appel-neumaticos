import { useEffect } from "react";
import { Helmet } from "react-helmet";
import RouteLanding from "./RouteLanding.jsx";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const Alineacion = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Servicio de Alineacion en Encarnación | Appel Neumáticos</title>
        <meta
          name="description"
          content="Alineacion para autos y camionetas en Encarnacion. Consultas por WhatsApp."
        />
      </Helmet>

      <RouteLanding
        badge="Servicio de alineacion"
        title="Alineacion para seguridad y desgaste parejo"
        description="Si sentis que el vehiculo tira hacia un lado o cambiaste cubiertas, consulta por alineacion. Coordinamos por WhatsApp."
        points={["Seguridad", "Desgaste parejo", "Confort"]}
        metrics={[
          { value: "Control", label: "mejor manejo" },
          { value: "Consumo", label: "mas eficiente" },
          { value: "WhatsApp", label: "consulta directa" },
        ]}
        ctaPrimary={{
          label: "Pedir mas informacion",
          href: buildWhatsAppUrl(appelInquiryMessage("servicio de alineacion")),
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

export default Alineacion;
