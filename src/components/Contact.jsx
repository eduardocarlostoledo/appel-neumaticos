import { useEffect } from "react";
import { Helmet } from "react-helmet";
import RouteLanding from "./RouteLanding.jsx";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Contacto | Appel Neumáticos Showroom</title>
        <meta
          name="description"
          content="Contacta a Appel Neumáticos Showroom en Encarnacion. Consultas por WhatsApp para auto, moto y camioneta."
        />
      </Helmet>

      <RouteLanding
        badge="Contacto"
        title="WhatsApp directo para consultas y stock"
        description="La forma mas rapida de comprar es por WhatsApp. Indicanos marca, medida y tipo de vehiculo y te respondemos con stock y opciones."
        points={[
          "WhatsApp principal",
          "Ubicacion clara",
          "Consulta rapida",
        ]}
        metrics={[
          { value: "05:45-17:30", label: "lunes a sabado" },
          { value: "Encarnacion", label: "Itapua, Paraguay" },
          { value: "WhatsApp", label: "respuesta directa" },
        ]}
        ctaPrimary={{
          label: "Pedir mas informacion",
          href: buildWhatsAppUrl(appelInquiryMessage("contacto general")),
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        ctaSecondary={{
          label: "Ver ubicacion",
          href: "/#sucursales",
        }}
      >
        <p style={{ marginTop: "1rem", color: "rgba(255,255,255,0.72)" }}>
          Desarrollo web por{" "}
          <a
            href="https://www.toledoconsultora.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.toledoconsultora.com
          </a>
        </p>

        <div
          className="hp-track cols-3"
          style={{ marginTop: "0.5rem", paddingBottom: "0.25rem" }}
        >
          <article className="hp-card">
            <div className="hp-card-body">
              <h2 className="hp-card-title">Telefono</h2>
              <p className="hp-card-copy">+595 982 706 757</p>
            </div>
          </article>
          <article className="hp-card">
            <div className="hp-card-body">
              <h2 className="hp-card-title">WhatsApp</h2>
              <p className="hp-card-copy">
                Consultas desde Paraguay y Argentina.
              </p>
            </div>
          </article>
          <article className="hp-card">
            <div className="hp-card-body">
              <h2 className="hp-card-title">Direccion</h2>
              <p className="hp-card-copy">
                Rotonda Ruta Internacional, a 300 m de la aduana.
              </p>
            </div>
          </article>
        </div>
      </RouteLanding>
    </>
  );
};

export default Contact;
