import { useEffect } from "react";
import { Helmet } from "react-helmet";
import RouteLanding from "./RouteLanding.jsx";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const Balanceo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Servicio de Balanceo en Encarnación | Appel Neumáticos</title>
        <meta
          name="description"
          content="Balanceo para Neumáticos en Encarnacion, Paraguay. Consultas y turnos por WhatsApp."
        />
      </Helmet>

      <RouteLanding
        badge="Servicio de balanceo"
        title="Balanceo para mejorar confort y desgaste"
        description="Si sentis vibracion o cambiaste cubiertas, consulta por balanceo. Confirmamos disponibilidad por WhatsApp."
        points={["Confort", "Seguridad", "Desgaste parejo"]}
        metrics={[
          { value: "Menos", label: "vibracion en ruta" },
          { value: "Mejor", label: "desgaste de cubiertas" },
          { value: "WhatsApp", label: "consulta directa" },
        ]}
        ctaPrimary={{
          label: "Pedir mas informacion",
          href: buildWhatsAppUrl(appelInquiryMessage("servicio de balanceo")),
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        ctaSecondary={{
          label: "Ver ubicacion",
          href: "/#sucursales",
        }}
      >
        <div className="hp-pills" aria-label="Cuando hacerlo">
          <span>Al cambiar cubiertas</span>
          <span>Si hay vibracion</span>
          <span>Mantenimiento preventivo</span>
        </div>
      </RouteLanding>
    </>
  );
};

export default Balanceo;
