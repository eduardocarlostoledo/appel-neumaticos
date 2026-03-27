import { Helmet } from "react-helmet";
import "../styles/MarcaPage.css";
import { buildWhatsAppUrl, appelInquiryMessage } from "../utils/whatsapp.js";

const MichelinPage = () => (
  <>
    <Helmet>
      <title>Neumáticos Michelin en Encarnación Paraguay | Appel Neumáticos</title>
      <meta
        name="description"
        content="Distribuidores autorizados de Michelin en Encarnación, Paraguay. Cubiertas Michelin para auto, moto y camioneta. Pilot Sport, Primacy, CrossClimate, Anakee. Consultá por WhatsApp."
      />
      <meta
        name="keywords"
        content="neumáticos Michelin Encarnación, cubiertas Michelin Paraguay, Michelin Pilot Sport, Michelin Primacy, Michelin moto Paraguay, distribuidor Michelin Encarnación"
      />
      <link rel="canonical" href="https://appelneumaticos.com/marcas/michelin" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Neumáticos Michelin en Encarnación Paraguay - Appel Neumáticos",
          description:
            "Distribuidor autorizado de Michelin en Encarnación. Cubiertas para auto, moto y camioneta.",
          url: "https://appelneumaticos.com/marcas/michelin",
          about: {
            "@type": "Brand",
            name: "Michelin",
          },
          provider: {
            "@type": "LocalBusiness",
            name: "Appel Neumáticos Showroom",
            url: "https://appelneumaticos.com",
            telephone: "+595975123030",
          },
        })}
      </script>
    </Helmet>

    <div className="marca-page">
      <section
        className="marca-hero"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(244,67,54,0.12), transparent 45%), radial-gradient(circle at bottom right, rgba(255,255,255,0.04), transparent 40%), #07111f",
        }}
      >
        <div className="marca-hero-inner">
          <span className="marca-badge">Distribuidor autorizado</span>
          <h1 className="marca-title">
            Neumáticos <span>Michelin</span> en Encarnación, Paraguay
          </h1>
          <p className="marca-subtitle">
            La marca número uno del mundo en tecnología de neumáticos, disponible
            en Appel Neumáticos Showroom. Modelos para auto, moto y camioneta con
            asesoramiento personalizado y respuesta inmediata por WhatsApp.
          </p>
          <div className="marca-hero-cta">
            <a
              href={buildWhatsAppUrl(appelInquiryMessage("neumáticos Michelin"))}
              target="_blank"
              rel="noopener noreferrer"
              className="marca-btn marca-btn-wa"
            >
              Consultar stock Michelin
            </a>
            <a href="/autos/cubiertas" className="marca-btn marca-btn-secondary">
              Ver catálogo
            </a>
          </div>
        </div>
      </section>

      <section className="marca-section">
        <div className="marca-shell">
          <h2 className="marca-section-title">¿Por qué Michelin?</h2>
          <p className="marca-section-desc">
            Michelin es el fabricante de neumáticos más grande del mundo y el
            referente en seguridad, durabilidad y eficiencia energética. Sus
            neumáticos son el resultado de más de 130 años de investigación
            continua y presencia en competición de alto nivel.
          </p>
          <div className="marca-features">
            <div className="marca-feature">
              <h3>Máxima durabilidad</h3>
              <p>
                La tecnología EverGrip de Michelin genera nuevos canales de
                drenaje a medida que la cubierta se desgasta, manteniendo el
                rendimiento durante toda la vida útil del neumático.
              </p>
            </div>
            <div className="marca-feature">
              <h3>Seguridad en mojado</h3>
              <p>
                Los compuestos de sílice de alta densidad mejoran la adherencia
                en frío y en mojado. En pruebas independientes, Michelin lidera
                consistentemente los rankings de frenada en lluvia.
              </p>
            </div>
            <div className="marca-feature">
              <h3>Eficiencia de combustible</h3>
              <p>
                La baja resistencia al rodamiento de los neumáticos Michelin
                contribuye a reducir el consumo de combustible del vehículo,
                especialmente en uso urbano e interurbano frecuente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="marca-section marca-section-alt">
        <div className="marca-shell">
          <h2 className="marca-section-title">Líneas Michelin disponibles</h2>
          <p className="marca-section-desc">
            Contamos con stock de las líneas más demandadas del catálogo Michelin
            para el mercado local y regional.
          </p>
          <div className="marca-lines">
            {[
              {
                modelo: "Michelin Primacy 4 / 4+",
                desc: "La cubierta de turismo más equilibrada de Michelin. Excelente freno en mojado, bajo nivel de ruido y larga vida útil. Ideal para sedanes, berlinas y compactos de uso diario.",
              },
              {
                modelo: "Michelin CrossClimate 2",
                desc: "Neumático todo-tiempo que funciona en verano, invierno y lluvia intensa. Para quienes buscan un solo set de cubiertas con rendimiento seguro en todas las condiciones.",
              },
              {
                modelo: "Michelin Pilot Sport 4 / 4S",
                desc: "La línea sport de referencia para autos de alto rendimiento. Grip máximo, respuesta dinámica y tecnología derivada de la competición de endurance.",
              },
              {
                modelo: "Michelin Pilot Road 5 / 6 (motos)",
                desc: "La cubierta touring de referencia para motos. Excelente rendimiento en mojado, larga duración y estabilidad a alta velocidad en largas distancias.",
              },
              {
                modelo: "Michelin Anakee Adventure (motos)",
                desc: "Para motos adventure y trail. Diseño mixto que ofrece buen comportamiento tanto en asfalto como en caminos de tierra y ripio.",
              },
              {
                modelo: "Michelin Latitude / Agilis (camionetas)",
                desc: "Línea para SUV y camionetas. Combina tracción, estabilidad de carga y confort para vehículos de trabajo y uso mixto.",
              },
            ].map((l) => (
              <div key={l.modelo} className="marca-line">
                <span className="marca-line-dot" />
                <div>
                  <strong>{l.modelo}</strong>
                  <p>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marca-section">
        <div className="marca-shell">
          <h2 className="marca-section-title">¿Para quién es ideal Michelin?</h2>
          <div className="marca-uses">
            {[
              {
                perfil: "Conductor urbano frecuente",
                detalle:
                  "Si recorrés muchos kilómetros por año en ciudad o ruta, el mayor kilometraje de Michelin te da mejor costo por km a largo plazo.",
              },
              {
                perfil: "Viajero frecuente en ruta",
                detalle:
                  "La estabilidad a alta velocidad y el rendimiento en mojado de Michelin son ideales para quienes hacen viajes largos con frecuencia.",
              },
              {
                perfil: "Motociclista touring",
                detalle:
                  "La línea Pilot Road y Anakee está especialmente diseñada para motociclistas que recorren largas distancias con seguridad y confort.",
              },
              {
                perfil: "Conductor que prioriza seguridad",
                detalle:
                  "Michelin es la elección de quienes no quieren compromisos en frenada bajo lluvia y valoran la predictibilidad del neumático en límite.",
              },
            ].map((u) => (
              <div key={u.perfil} className="marca-use">
                <strong>{u.perfil}</strong>
                <p>{u.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marca-cta-final">
        <div className="marca-cta-final-inner">
          <div>
            <h2 className="marca-cta-final-title">
              Consultá disponibilidad de Michelin en Encarnación
            </h2>
            <p className="marca-cta-final-text">
              Escribinos con la medida y el modelo que buscás. Confirmamos stock y
              precio al instante desde nuestro showroom en la Ruta Internacional.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(appelInquiryMessage("neumáticos Michelin disponibles"))}
            target="_blank"
            rel="noopener noreferrer"
            className="marca-btn marca-btn-wa"
            style={{ whiteSpace: "nowrap" }}
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  </>
);

export default MichelinPage;
