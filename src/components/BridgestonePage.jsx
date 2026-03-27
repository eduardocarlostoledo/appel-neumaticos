import { Helmet } from "react-helmet";
import "../styles/MarcaPage.css";
import { buildWhatsAppUrl, appelInquiryMessage } from "../utils/whatsapp.js";

const BridgestonePage = () => (
  <>
    <Helmet>
      <title>Neumáticos Bridgestone en Encarnación Paraguay | Appel Neumáticos</title>
      <meta
        name="description"
        content="Distribuidores de Bridgestone en Encarnación, Paraguay. Turanza, Potenza, Dueler para auto, camioneta y SUV. El mayor fabricante de neumáticos del mundo. Consultá por WhatsApp."
      />
      <meta
        name="keywords"
        content="neumáticos Bridgestone Encarnación, cubiertas Bridgestone Paraguay, Bridgestone Turanza, Bridgestone Dueler, Bridgestone camioneta Paraguay, distribuidor Bridgestone Encarnación"
      />
      <link rel="canonical" href="https://appelneumaticos.com/marcas/bridgestone" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Neumáticos Bridgestone en Encarnación Paraguay - Appel Neumáticos",
          description:
            "Bridgestone disponible en Appel Neumáticos Showroom, Encarnación. Turanza, Potenza y Dueler para auto, SUV y camioneta.",
          url: "https://appelneumaticos.com/marcas/bridgestone",
          about: { "@type": "Brand", name: "Bridgestone" },
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
            "radial-gradient(circle at top left, rgba(255,102,0,0.1), transparent 45%), radial-gradient(circle at bottom right, rgba(15,76,129,0.12), transparent 40%), #07111f",
        }}
      >
        <div className="marca-hero-inner">
          <span className="marca-badge">Líder mundial en volumen</span>
          <h1 className="marca-title">
            Neumáticos <span>Bridgestone</span> en Encarnación, Paraguay
          </h1>
          <p className="marca-subtitle">
            El mayor fabricante de neumáticos del mundo por volumen de producción,
            con presencia en Encarnación a través de Appel Neumáticos Showroom.
            Cobertura para auto, SUV y camioneta con asesoramiento experto.
          </p>
          <div className="marca-hero-cta">
            <a
              href={buildWhatsAppUrl(appelInquiryMessage("neumáticos Bridgestone"))}
              target="_blank"
              rel="noopener noreferrer"
              className="marca-btn marca-btn-wa"
            >
              Consultar stock Bridgestone
            </a>
            <a
              href="/camioneta-pickup/cubiertas"
              className="marca-btn marca-btn-secondary"
            >
              Ver catálogo camionetas
            </a>
          </div>
        </div>
      </section>

      <section className="marca-section">
        <div className="marca-shell">
          <h2 className="marca-section-title">¿Por qué Bridgestone?</h2>
          <p className="marca-section-desc">
            Bridgestone fue fundada en Japón en 1931 y hoy opera en más de 150
            países. Es la marca que más neumáticos fabrica en el mundo y tiene
            presencia en todos los segmentos del mercado. Sus cubiertas combinan
            la precisión japonesa con tecnología de punta aplicada a las condiciones
            de uso más exigentes.
          </p>
          <div className="marca-features">
            <div className="marca-feature">
              <h3>Precisión japonesa</h3>
              <p>
                La filosofía de fabricación Bridgestone se basa en tolerancias
                mínimas y control de calidad estricto. Cada neumático que sale
                de su planta cumple los mismos estándares que las series de
                primera línea.
              </p>
            </div>
            <div className="marca-feature">
              <h3>Tecnología Run-Flat</h3>
              <p>
                Bridgestone es pionero en neumáticos Run-Flat que permiten
                continuar rodando hasta 80 km a 80 km/h luego de una pérdida
                de presión, sin necesidad de parar en el acto.
              </p>
            </div>
            <div className="marca-feature">
              <h3>Especialista en camionetas</h3>
              <p>
                La línea Dueler de Bridgestone es una de las más completas del
                mercado para SUV, 4x4 y pickups. Combina carga, tracción y
                estabilidad para los vehículos más demandantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="marca-section marca-section-alt">
        <div className="marca-shell">
          <h2 className="marca-section-title">Líneas Bridgestone disponibles</h2>
          <p className="marca-section-desc">
            Las líneas de mayor demanda del catálogo Bridgestone para el mercado
            paraguayo y argentino.
          </p>
          <div className="marca-lines">
            {[
              {
                modelo: "Bridgestone Turanza T005 / T001",
                desc: "La cubierta de turismo principal de Bridgestone. Excelente freno en mojado, bajo ruido interior y larga vida útil para sedanes y berlinas.",
              },
              {
                modelo: "Bridgestone Potenza S001 / Sport",
                desc: "Línea ultra-performance de Bridgestone para autos deportivos. Alta velocidad, grip en curvas y frenadas precisas incluso en condiciones húmedas.",
              },
              {
                modelo: "Bridgestone Dueler H/T (camionetas)",
                desc: "Highway Terrain: la opción más vendida para SUV y pickups de uso predominantemente en asfalto. Confort de turismo con capacidad de carga.",
              },
              {
                modelo: "Bridgestone Dueler A/T (camionetas)",
                desc: "All Terrain: para quienes alternan asfalto con tierra y ripio. Tacos pronunciados en hombros para tracción fuera del camino sin sacrificar confort en ruta.",
              },
              {
                modelo: "Bridgestone Ecopia",
                desc: "Línea eco-friendly con la menor resistencia al rodamiento del catálogo Bridgestone. Para quienes priorizan el ahorro de combustible y la huella ambiental.",
              },
            ].map((l) => (
              <div key={l.modelo} className="marca-line">
                <span
                  className="marca-line-dot"
                  style={{ background: "#ff6600" }}
                />
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
          <h2 className="marca-section-title">¿Para quién es ideal Bridgestone?</h2>
          <div className="marca-uses">
            {[
              {
                perfil: "Propietario de camioneta o SUV",
                detalle:
                  "La línea Dueler es una de las más completas del mercado para pickups y 4x4. Bridgestone es el equipo de fábrica de muchas camionetas japonesas.",
              },
              {
                perfil: "Conductor que busca equilibrio y confiabilidad",
                detalle:
                  "Bridgestone Turanza es la cubierta de turismo más equilibrada para quien no quiere comprometer seguridad ni gastar en exceso.",
              },
              {
                perfil: "Conductor sport con enfoque en auto",
                detalle:
                  "La línea Potenza Sport ofrece un nivel de agarre y respuesta muy cercano al de las marcas más extremas, con mejor durabilidad para uso diario.",
              },
              {
                perfil: "Usuario urbano con foco en eficiencia",
                detalle:
                  "La línea Ecopia de Bridgestone es ideal para quienes hacen muchos kilómetros en ciudad y quieren reducir el consumo de combustible.",
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
              Consultá disponibilidad de Bridgestone en Encarnación
            </h2>
            <p className="marca-cta-final-text">
              Escribinos con tu medida y modelo. Stock disponible en nuestro
              showroom sobre la Ruta Internacional, Encarnación, Paraguay.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(
              appelInquiryMessage("neumáticos Bridgestone disponibles")
            )}
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

export default BridgestonePage;
