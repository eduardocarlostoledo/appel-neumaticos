import { Helmet } from "react-helmet";
import "../styles/ArgentinosPage.css";
import { buildWhatsAppUrl, appelInquiryMessage } from "../utils/whatsapp.js";

const ArgentinosPage = () => (
  <>
    <Helmet>
      <title>Neumáticos para argentinos en Encarnación, Paraguay | Appel Neumáticos</title>
      <meta
        name="description"
        content="Comprá neumáticos Michelin, Pirelli y Bridgestone en Paraguay desde Argentina. Appel Neumáticos Showroom está a 300m de la aduana de Encarnación, frente a Posadas, Misiones. Consultá por WhatsApp antes de cruzar."
      />
      <meta
        name="keywords"
        content="neumáticos para argentinos paraguay, cubiertas baratas encarnación, comprar neumáticos desde posadas, gomería encarnación paraguay argentina, cubiertas michelin pirelli encarnación, neumáticos misiones paraguay"
      />
      <link rel="canonical" href="https://appelneumaticos.com/neumaticos-para-argentinos" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Neumáticos para argentinos en Encarnación, Paraguay",
          description:
            "Guía para argentinos que quieren comprar neumáticos en Encarnación, Paraguay. Cómo llegar, qué marcas hay y cómo consultar antes de cruzar.",
          url: "https://appelneumaticos.com/neumaticos-para-argentinos",
          publisher: {
            "@type": "LocalBusiness",
            name: "Appel Neumáticos Showroom",
            url: "https://appelneumaticos.com",
            telephone: "+595975123030",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rotonda Ruta Internacional, 300m de la Aduana",
              addressLocality: "Encarnación",
              addressRegion: "Itapúa",
              addressCountry: "PY",
            },
          },
        })}
      </script>
    </Helmet>

    <div className="arg-page">
      {/* Hero */}
      <section className="arg-hero">
        <div className="arg-hero-inner">
          <span className="arg-badge">Para clientes de Argentina</span>
          <h1 className="arg-title">
            Neumáticos en Encarnación, Paraguay —{" "}
            <span className="arg-title-highlight">a metros de Posadas</span>
          </h1>
          <p className="arg-subtitle">
            Michelin, Pirelli, Bridgestone y más marcas premium en Appel Neumáticos
            Showroom. Cruzás el puente Roque González y ya estás acá. Escribinos
            antes por WhatsApp para confirmar stock.
          </p>
          <div className="arg-hero-cta">
            <a
              href={buildWhatsAppUrl(
                appelInquiryMessage("neumáticos, vengo desde Argentina")
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="arg-btn arg-btn-wa"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/place/Appel+Neumaticos+Showroom/@-27.358095,-55.850583,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="arg-btn arg-btn-maps"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="arg-section">
        <div className="arg-shell">
          <h2 className="arg-section-title">
            ¿Por qué comprar neumáticos en Paraguay desde Argentina?
          </h2>
          <div className="arg-cards">
            <div className="arg-card">
              <span className="arg-card-icon">📍</span>
              <h3>Ubicación inmejorable</h3>
              <p>
                Estamos en la Rotonda de la Ruta Internacional, a solo 300 metros
                de la Aduana Internacional. Cruzás el puente desde Posadas y en
                minutos estás en el local. No necesitás internarte en la ciudad.
              </p>
            </div>
            <div className="arg-card">
              <span className="arg-card-icon">🏷️</span>
              <h3>Precio en guaraníes o dólares</h3>
              <p>
                Podés pagar en guaraníes o consultar equivalencia en dólares. Te
                recomendamos preguntar por WhatsApp antes de cruzar qué moneda
                conviene traer según el tipo de cambio del día.
              </p>
            </div>
            <div className="arg-card">
              <span className="arg-card-icon">✅</span>
              <h3>Marcas premium disponibles</h3>
              <p>
                Michelin, Pirelli, Bridgestone, Dunlop, Firestone y más. Tanto para
                auto, moto como camioneta. Distribuidores autorizados con garantía
                de fábrica.
              </p>
            </div>
            <div className="arg-card">
              <span className="arg-card-icon">💬</span>
              <h3>Confirmá antes de cruzar</h3>
              <p>
                Escribinos por WhatsApp con tu medida y el modelo de neumático que
                buscás. Te confirmamos stock y precio al instante para que no hagas
                el viaje en vano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo llegar */}
      <section className="arg-section arg-section-dark">
        <div className="arg-shell">
          <h2 className="arg-section-title">Cómo llegar desde Posadas o el interior de Misiones</h2>
          <div className="arg-steps">
            <div className="arg-step">
              <span className="arg-step-num">1</span>
              <div>
                <strong>Escribinos antes por WhatsApp</strong>
                <p>
                  Envianos la medida de la cubierta que buscás (ej: 205/55 R16,
                  Michelin o Pirelli). Te confirmamos disponibilidad y precio en
                  minutos.
                </p>
              </div>
            </div>
            <div className="arg-step">
              <span className="arg-step-num">2</span>
              <div>
                <strong>Cruzá el puente Roque González de Santa Cruz</strong>
                <p>
                  El puente internacional une Posadas (Argentina) con Encarnación
                  (Paraguay). Pasás la aduana y en 300 metros ya estás en la
                  Rotonda de la Ruta Internacional donde está nuestro local.
                </p>
              </div>
            </div>
            <div className="arg-step">
              <span className="arg-step-num">3</span>
              <div>
                <strong>Llegás al Showroom</strong>
                <p>
                  Nos encontrás en la Rotonda de la Ruta Internacional, Encarnación,
                  Itapúa, Paraguay. Horario de atención: lunes a sábado de 05:45 a
                  17:30 hs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="arg-section">
        <div className="arg-shell">
          <h2 className="arg-section-title">
            Marcas disponibles para clientes de Argentina
          </h2>
          <p className="arg-section-desc">
            Contamos con stock permanente de las marcas más buscadas por clientes
            argentinos, en las medidas más comunes para el parque automotor de la
            región.
          </p>
          <div className="arg-brands">
            {[
              { nombre: "Michelin", detalle: "Primacy, CrossClimate, Pilot Sport, Pilot Road" },
              { nombre: "Pirelli", detalle: "P Zero, Cinturato, Diablo Rosso, Angel GT" },
              { nombre: "Bridgestone", detalle: "Turanza, Potenza, Dueler" },
              { nombre: "Dunlop", detalle: "Sport Maxx, SP Touring" },
              { nombre: "Firestone", detalle: "F600, TZ300" },
              { nombre: "Durable / Xbri", detalle: "Opciones económicas para vehículos de trabajo" },
            ].map((m) => (
              <div key={m.nombre} className="arg-brand-item">
                <strong className="arg-brand-name">{m.nombre}</strong>
                <span className="arg-brand-detail">{m.detalle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ rápida */}
      <section className="arg-section arg-section-dark">
        <div className="arg-shell">
          <h2 className="arg-section-title">
            Preguntas frecuentes de clientes argentinos
          </h2>
          <div className="arg-faq">
            {[
              {
                q: "¿Puedo pagar con pesos argentinos?",
                a: "Te recomendamos consultar por WhatsApp antes de venir para saber qué moneda conviene traer. Generalmente operamos en guaraníes o dólares, pero te orientamos sobre el cambio del día.",
              },
              {
                q: "¿Hacen el montaje en el local?",
                a: "Sí, podés hacer el montaje directamente en el showroom. También contamos con servicio de balanceo computarizado para que te vayas con todo listo.",
              },
              {
                q: "¿Puedo llevar las cubiertas a Argentina sin problemas?",
                a: "Los neumáticos pueden cruzar la aduana como equipaje personal dentro de los límites permitidos. Te recomendamos consultar con la aduana argentina las regulaciones vigentes para tu caso.",
              },
              {
                q: "¿Hacen envíos a Argentina?",
                a: "Sí, realizamos envíos. Consultanos por WhatsApp para que te informemos sobre el detalle logístico y los tiempos según tu destino.",
              },
            ].map((item, i) => (
              <div key={i} className="arg-faq-item">
                <strong className="arg-faq-q">{item.q}</strong>
                <p className="arg-faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="arg-cta-final">
        <div className="arg-shell arg-cta-final-inner">
          <div>
            <h2 className="arg-cta-final-title">
              Listo para cruzar. Pero primero escribinos.
            </h2>
            <p className="arg-cta-final-text">
              Confirmá medida, marca y precio por WhatsApp antes de salir de
              Posadas. Un asesor te atiende al instante.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(
              appelInquiryMessage("neumáticos, vengo desde Argentina / Posadas")
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="arg-btn arg-btn-wa arg-btn-lg"
          >
            Escribir al WhatsApp ahora
          </a>
        </div>
      </section>
    </div>
  </>
);

export default ArgentinosPage;
