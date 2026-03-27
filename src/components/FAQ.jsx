import { useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/FAQ.css";

const faqs = [
  {
    question: "¿Dónde está ubicado Appel Neumáticos?",
    answer:
      "Estamos en la Rotonda de la Ruta Internacional en Encarnación, Itapúa, Paraguay, a tan solo 300 metros de la Aduana Internacional (puente Roque González de Santa Cruz). Si venís desde Posadas, Argentina, cruzás el puente y en minutos ya estás en el local.",
  },
  {
    question: "¿Atienden a clientes que vienen de Argentina o de Posadas?",
    answer:
      "Sí, atendemos a diario a clientes que cruzan desde Posadas, Misiones y otras provincias argentinas. Te recomendamos escribirnos por WhatsApp antes de cruzar para confirmar stock y precio, así el viaje vale la pena desde el primer momento.",
  },
  {
    question: "¿Qué marcas de neumáticos tienen disponibles?",
    answer:
      "Somos distribuidores autorizados de Michelin, Pirelli y Bridgestone, las tres marcas líderes a nivel mundial. Además contamos con Dunlop, Firestone, Durable y Xbri, cubriendo desde opciones económicas hasta las mejores cubiertas premium del mercado para auto, moto y camioneta.",
  },
  {
    question: "¿Cómo sé si tienen mi medida en stock antes de ir?",
    answer:
      "La forma más rápida es escribirnos por WhatsApp con la medida que necesitás (por ejemplo: 205/55 R16 o 180/55-17 ZR). En minutos te confirmamos disponibilidad, precio y tiempo de entrega si no hubiera stock en ese momento.",
  },
  {
    question: "¿Hacen envíos a Argentina y a otras provincias de Paraguay?",
    answer:
      "Sí, realizamos envíos a todo el territorio de Paraguay y también a Argentina. Consultanos por WhatsApp para que te indiquemos el detalle logístico según tu destino y el producto que necesitás.",
  },
  {
    question: "¿Cuáles son los horarios de atención?",
    answer:
      "Atendemos de lunes a sábado de 05:45 a 17:30 hs. El local permanece cerrado los domingos y feriados nacionales. Te recomendamos avisarnos por WhatsApp antes de venir para confirmar disponibilidad del producto.",
  },
  {
    question: "¿Ofrecen servicio de balanceo?",
    answer:
      "Sí, contamos con servicio de balanceo computarizado con tecnología digital. Un balanceo correcto extiende considerablemente la vida útil de los neumáticos, evita vibraciones en el volante y garantiza una conducción estable y segura.",
  },
  {
    question: "¿Tienen financiación disponible?",
    answer:
      "Sí, ofrecemos opciones de financiación directa. Consultanos por WhatsApp para conocer las condiciones vigentes, ya que pueden variar según el producto y el monto total de la compra.",
  },
  {
    question: "¿Tienen neumáticos para motos de alta cilindrada?",
    answer:
      "Sí, contamos con una línea especializada para motos de alta cilindrada: cubiertas deportivas, touring y naked de marcas como Pirelli (Diablo Rosso, Angel GT) y Michelin (Pilot Road, Pilot Power). Consultanos con el modelo de tu moto y te asesoramos sobre la mejor opción.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <section className="faq-section" id="faq" aria-label="Preguntas frecuentes sobre Appel Neumáticos">
        <div className="faq-shell">
          <div className="faq-header">
            <span className="faq-kicker">Preguntas frecuentes</span>
            <h2 className="faq-title">
              Todo lo que necesitás saber antes de comprar
            </h2>
            <p className="faq-desc">
              Resolvemos las dudas más comunes sobre nuestros productos, servicios
              y cómo llegar al local desde Paraguay y Argentina.
            </p>
          </div>

          <div
            className="faq-list"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item${open === i ? " faq-item--open" : ""}`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span itemProp="name">{faq.question}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="faq-answer"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
