import { Helmet } from "react-helmet";
import "../styles/MarcaPage.css";
import { buildWhatsAppUrl, appelInquiryMessage } from "../utils/whatsapp.js";

const PirelliPage = () => (
  <>
    <Helmet>
      <title>Neumáticos Pirelli en Encarnación Paraguay | Appel Neumáticos</title>
      <meta
        name="description"
        content="Distribuidores de Pirelli en Encarnación, Paraguay. P Zero, Cinturato, Diablo Rosso, Angel GT para auto y moto. Proveedor oficial de Fórmula 1. Consultá por WhatsApp."
      />
      <meta
        name="keywords"
        content="neumáticos Pirelli Encarnación, cubiertas Pirelli Paraguay, Pirelli P Zero, Pirelli Diablo Rosso, Pirelli Angel GT, Pirelli moto Paraguay, distribuidor Pirelli Encarnación"
      />
      <link rel="canonical" href="https://appelneumaticos.com/marcas/pirelli" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Neumáticos Pirelli en Encarnación Paraguay - Appel Neumáticos",
          description:
            "Pirelli disponible en Appel Neumáticos Showroom, Encarnación. P Zero, Cinturato, Diablo Rosso y Angel GT para auto y moto.",
          url: "https://appelneumaticos.com/marcas/pirelli",
          about: { "@type": "Brand", name: "Pirelli" },
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
            "radial-gradient(circle at top right, rgba(216,25,32,0.14), transparent 45%), radial-gradient(circle at bottom left, rgba(15,76,129,0.1), transparent 40%), #07111f",
        }}
      >
        <div className="marca-hero-inner">
          <span className="marca-badge">Proveedor oficial F1</span>
          <h1 className="marca-title">
            Neumáticos <span>Pirelli</span> en Encarnación, Paraguay
          </h1>
          <p className="marca-subtitle">
            La marca italiana preferida por Ferrari, Lamborghini y los equipos de
            Fórmula 1, disponible en Appel Neumáticos Showroom. Tecnología de
            competición para tu auto o moto, con la medida que necesitás.
          </p>
          <div className="marca-hero-cta">
            <a
              href={buildWhatsAppUrl(appelInquiryMessage("neumáticos Pirelli"))}
              target="_blank"
              rel="noopener noreferrer"
              className="marca-btn marca-btn-wa"
            >
              Consultar stock Pirelli
            </a>
            <a href="/motos/cubiertas" className="marca-btn marca-btn-secondary">
              Ver catálogo motos
            </a>
          </div>
        </div>
      </section>

      <section className="marca-section">
        <div className="marca-shell">
          <h2 className="marca-section-title">¿Por qué Pirelli?</h2>
          <p className="marca-section-desc">
            Pirelli es el sinónimo mundial de desempeño extremo y dinamismo. Fundada
            en Milán en 1872, es desde 2011 el proveedor exclusivo de Fórmula 1,
            equipando a todos los equipos de la grilla con sus compuestos más
            avanzados. Esa tecnología de pista se traduce directamente en los modelos
            de calle.
          </p>
          <div className="marca-features">
            <div className="marca-feature">
              <h3>Tecnología multi-compound</h3>
              <p>
                Pirelli utiliza compuestos distintos en la banda central y los
                hombros del neumático. El centro es más duro (duración) y los
                hombros más blandos (grip en curvas). Tecnología derivada
                directamente de la F1.
              </p>
            </div>
            <div className="marca-feature">
              <h3>Grip instantáneo</h3>
              <p>
                Los compuestos Pirelli están diseñados para dar agarre desde el
                primer metro, incluso antes de que la cubierta alcance su temperatura
                óptima. Ideal para conducción urbana dinámica y esporádica.
              </p>
            </div>
            <div className="marca-feature">
              <h3>Equipamiento de fábrica premium</h3>
              <p>
                Ferrari, Lamborghini, Bentley, Maserati, BMW M y Porsche eligen
                Pirelli como cubierta de fábrica. Un aval que habla por sí solo
                sobre la confianza de los fabricantes más exigentes del mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="marca-section marca-section-alt">
        <div className="marca-shell">
          <h2 className="marca-section-title">Líneas Pirelli disponibles</h2>
          <p className="marca-section-desc">
            Desde la cubierta deportiva más extrema hasta opciones equilibradas para
            uso diario, Pirelli tiene una línea para cada perfil de conductor.
          </p>
          <div className="marca-lines">
            {[
              {
                modelo: "Pirelli P Zero",
                desc: "La cubierta ultra-performance más icónica de Pirelli. Agarre máximo para autos deportivos y de lujo. Equipa de fábrica a Ferrari, McLaren y Porsche.",
              },
              {
                modelo: "Pirelli Cinturato P7 / P7C2",
                desc: "La línea touring de Pirelli para turismo. Mejor relación entre confort, duración y rendimiento en mojado. Para sedanes y berlinas de uso diario.",
              },
              {
                modelo: "Pirelli Scorpion (SUV y camionetas)",
                desc: "Línea todoterreno de Pirelli para SUV, pickups y 4x4. Tracción, resistencia al corte y estabilidad en ripio y asfalto.",
              },
              {
                modelo: "Pirelli Diablo Rosso II / IV (motos)",
                desc: "La cubierta sport de referencia para motos naked y supersport. Compuesto ultra-blando en hombros, agarre brutal en frenadas y salidas de curva.",
              },
              {
                modelo: "Pirelli Angel GT / GT II (motos)",
                desc: "Touring de alta performance para motos GT y naked de largo aliento. Excelente vida útil combinada con respuesta dinámica superior al promedio.",
              },
              {
                modelo: "Pirelli MT90 / MT 60 (motos custom)",
                desc: "Para motos custom, cruiser y scrambler. Perfil específico que combina estética clásica con comportamiento moderno.",
              },
            ].map((l) => (
              <div key={l.modelo} className="marca-line">
                <span className="marca-line-dot" style={{ background: "#d81920" }} />
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
          <h2 className="marca-section-title">¿Para quién es ideal Pirelli?</h2>
          <div className="marca-uses">
            {[
              {
                perfil: "Conductor dinámico y deportivo",
                detalle:
                  "Si disfrutás manejar de forma activa, Pirelli te da la respuesta inmediata y el grip en curva que necesitás para disfrutar el camino.",
              },
              {
                perfil: "Propietario de auto de alta gama",
                detalle:
                  "Si tu auto vino de fábrica con Pirelli, reemplazarlo con la misma marca garantiza que seguís aprovechando la dinámica original del vehículo.",
              },
              {
                perfil: "Motociclista sport o naked",
                detalle:
                  "El Diablo Rosso y el Angel GT son las cubiertas de referencia para motociclistas que exigen grip y respuesta tanto en el día a día como en salidas dinámicas.",
              },
              {
                perfil: "Pickuper y todoterreno",
                detalle:
                  "La línea Scorpion es una de las más completas del mercado para quien alterna entre asfalto y terrenos irregulares con exigencias de carga.",
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
              Consultá disponibilidad de Pirelli en Encarnación
            </h2>
            <p className="marca-cta-final-text">
              Escribinos con tu medida y modelo. Confirmamos stock y precio desde
              nuestro showroom a 300m de la Aduana Internacional.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(appelInquiryMessage("neumáticos Pirelli disponibles"))}
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

export default PirelliPage;
