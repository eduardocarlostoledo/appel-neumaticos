import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../styles/Guias.css";
import { buildWhatsAppUrl, appelInquiryMessage } from "../../utils/whatsapp.js";

const ComoElegirMotoAlta = () => (
  <>
    <Helmet>
      <title>Cómo elegir cubiertas para motos de alta cilindrada | Appel Neumáticos</title>
      <meta
        name="description"
        content="Guía completa para elegir el neumático correcto para tu moto de alta cilindrada. Tipos sport, touring, naked y adventure. Índices de velocidad, marcas recomendadas y dónde comprar en Encarnación, Paraguay."
      />
      <meta
        name="keywords"
        content="cubiertas moto alta cilindrada, neumáticos deportivos moto, Pirelli Diablo Rosso, Michelin Pilot, neumáticos moto Encarnación Paraguay, cubiertas para naked"
      />
      <link
        rel="canonical"
        href="https://appelneumaticos.com/guias/como-elegir-cubierta-moto-alta-cilindrada"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cómo elegir cubiertas para motos de alta cilindrada",
          description:
            "Guía completa para seleccionar el neumático correcto según el tipo de uso: sport, touring, naked y adventure.",
          author: {
            "@type": "Organization",
            name: "Appel Neumáticos Showroom",
            url: "https://appelneumaticos.com",
          },
          publisher: {
            "@type": "Organization",
            name: "Appel Neumáticos Showroom",
            logo: {
              "@type": "ImageObject",
              url: "https://appelneumaticos.com/logo.png",
            },
          },
          datePublished: "2025-06-01",
          dateModified: "2026-03-26",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
              "https://appelneumaticos.com/guias/como-elegir-cubierta-moto-alta-cilindrada",
          },
        })}
      </script>
    </Helmet>

    <section className="guia-article-section">
      <div className="guia-article-shell">
        <Link to="/guias" className="guia-article-back">
          Volver a guías
        </Link>

        <div className="guia-article-meta">
          <span className="guia-article-cat">Motos</span>
          <span className="guia-article-time">6 min de lectura</span>
        </div>

        <h1 className="guia-article-h1">
          Cómo elegir cubiertas para motos de alta cilindrada
        </h1>

        <p className="guia-article-intro">
          Elegir mal la cubierta de tu moto puede costar caro: mayor desgaste,
          menor agarre y riesgo en curvas. Esta guía te explica qué mirar antes
          de comprar, qué marcas usar según tu estilo de manejo y por qué en
          Appel Neumáticos Showroom siempre encontrás el modelo que buscás.
        </p>

        <div className="guia-article-body">
          <h2>¿Qué significa "alta cilindrada" en materia de neumáticos?</h2>
          <p>
            En el mundo de las motos, se considera alta cilindrada a partir de
            los 600cc, aunque la exigencia real sobre el neumático depende mucho
            del uso que se le dé. Una naked de 650cc en ciudad no genera el mismo
            estrés sobre la cubierta que una deportiva de 1000cc en pista o una
            adventure de 1200cc en ripio. Por eso el primer criterio de selección
            siempre es el <strong>tipo de uso</strong>, no solo la cilindrada.
          </p>

          <h2>Los cuatro tipos de cubiertas para motos de alta cilindrada</h2>

          <p>
            <strong>Sport / Hiperdeportivas:</strong> Diseñadas para máximo agarre
            en asfalto seco y mojado. Compuesto blando con zona central más duro
            para preservar el rendimiento en el desgaste. Ideales para motos tipo
            supersport, superbike y naked de alta performance. Marcas recomendadas:
            Pirelli Diablo Rosso IV, Michelin Power 6.
          </p>

          <p>
            <strong>Touring / Gran Turismo:</strong> Prioridad en durabilidad,
            confort y estabilidad a alta velocidad durante largas distancias.
            Compuesto más duro con mayor kilometraje. Para motos tipo bagger,
            tourer y naked de largo aliento. Marcas recomendadas: Pirelli Angel GT II,
            Michelin Pilot Road 5.
          </p>

          <p>
            <strong>Naked / Mixtas:</strong> El equilibrio entre grip sport y
            duración touring. Muy demandadas porque se adaptan a uso urbano diario
            y también a salidas de fin de semana con manejo dinámico. Marcas
            recomendadas: Pirelli Angel GT, Michelin Pilot Street Radial.
          </p>

          <p>
            <strong>Adventure / Trail:</strong> Perfil alto con canal central para
            asfalto y hombros con tacos para tierra. Para motos tipo GS, Africa
            Twin, Tenere y similares. Marcas recomendadas: Michelin Anakee Adventure,
            Pirelli Scorpion Trail.
          </p>

          <h2>Cómo leer la medida de tu cubierta</h2>
          <p>
            Toda cubierta tiene impreso en el flanco una secuencia como{" "}
            <strong>180/55 ZR17</strong>. Así se interpreta:
          </p>
          <ul>
            <li>
              <strong>180</strong>: ancho de la cubierta en milímetros.
            </li>
            <li>
              <strong>55</strong>: perfil (altura del flanco como porcentaje del
              ancho). A menor número, más bajo y sport es el perfil.
            </li>
            <li>
              <strong>ZR</strong>: índice de velocidad. Z = más de 240 km/h.
              R = construcción radial (la más común en alta cilindrada).
            </li>
            <li>
              <strong>17</strong>: diámetro de llanta en pulgadas.
            </li>
          </ul>
          <p>
            Nunca cambies la medida homologada para tu moto sin consultar al
            fabricante o a un experto. Cambiar el perfil o el ancho afecta la
            geometría de la moto y puede hacerla impredecible en curvas.
          </p>

          <h2>Índice de velocidad: ¿qué letra importa más?</h2>
          <p>
            El índice de velocidad indica la velocidad máxima para la que fue
            certificada la cubierta con carga nominal. Para motos de alta
            cilindrada los más comunes son:
          </p>
          <ul>
            <li><strong>H</strong> = hasta 210 km/h</li>
            <li><strong>V</strong> = hasta 240 km/h</li>
            <li><strong>W</strong> = hasta 270 km/h</li>
            <li><strong>Y</strong> = hasta 300 km/h</li>
            <li><strong>Z / ZR</strong> = más de 240 km/h (clasificación genérica)</li>
          </ul>
          <p>
            Siempre usá una cubierta con índice de velocidad igual o superior al
            máximo de tu moto. Usar una cubierta subdimensionada para las
            velocidades que alcanzás es peligroso y puede generar falla estructural.
          </p>

          <h2>Michelin vs Pirelli para motos de alta cilindrada</h2>
          <p>
            Ambas son excelentes marcas y compiten directamente en los segmentos
            más altos. La diferencia principal está en la filosofía de diseño:
            Pirelli tiende a priorizar el grip máximo en condiciones extremas y es
            la cubierta oficial de MotoGP. Michelin apuesta por un equilibrio más
            progresivo entre agarre, durabilidad y comportamiento en mojado.
          </p>
          <p>
            Para uso en calle diaria con salidas sport esporádicas, la línea Michelin
            Pilot o Pirelli Angel GT son opciones muy equilibradas. Para trackdays
            o conducción muy dinámica, el Pirelli Diablo Rosso o el Michelin Power
            son la elección natural.
          </p>

          <h2>¿Cuándo cambiar las cubiertas de la moto?</h2>
          <ul>
            <li>
              Cuando el indicador de desgaste (TWI) queda al ras de la superficie
              de rodadura.
            </li>
            <li>
              Si aparecen grietas en el flanco, aunque el dibujo esté bien.
            </li>
            <li>
              Después de una caída fuerte, aunque no se vean daños externos.
            </li>
            <li>
              Pasados 5 años desde la fecha de fabricación, independientemente del
              estado visual (la goma pierde propiedades con el tiempo).
            </li>
          </ul>

          <h2>¿Dónde comprar en Encarnación?</h2>
          <p>
            En Appel Neumáticos Showroom contamos con stock permanente de cubiertas
            para motos de alta cilindrada de Pirelli y Michelin. Estamos sobre la
            Rotonda de la Ruta Internacional, a 300m de la Aduana, accesibles
            tanto desde Paraguay como desde Posadas, Argentina.
          </p>
          <p>
            Escribinos por WhatsApp con el modelo de tu moto y la medida que
            necesitás. Te confirmamos stock y precio al instante.
          </p>
        </div>

        <div className="guia-article-cta">
          <h3>¿Tenés dudas sobre qué cubierta necesitás?</h3>
          <p>
            Escribinos con el modelo de tu moto y te asesoramos sin costo. Stock
            disponible en Encarnación, Paraguay.
          </p>
          <a
            href={buildWhatsAppUrl(
              appelInquiryMessage("cubiertas para moto de alta cilindrada")
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="guia-article-cta-btn"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  </>
);

export default ComoElegirMotoAlta;
