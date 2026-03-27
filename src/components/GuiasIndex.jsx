import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/Guias.css";

const articulos = [
  {
    slug: "/guias/como-elegir-cubierta-moto-alta-cilindrada",
    titulo: "Cómo elegir cubiertas para motos de alta cilindrada",
    descripcion:
      "Guía completa para seleccionar el neumático correcto según el tipo de uso: sport, touring, naked y adventure. Comparativa de marcas, índices de velocidad y consejos para motos de 600cc en adelante.",
    categoria: "Motos",
    tiempo: "6 min de lectura",
  },
  {
    slug: "/guias/michelin-vs-pirelli-diferencias",
    titulo: "Michelin vs Pirelli: ¿cuál elegir para tu vehículo?",
    descripcion:
      "Comparativa detallada entre dos de las marcas más reconocidas del mundo. Analizamos tecnología, durabilidad, rendimiento en mojado y relación precio-valor para que puedas tomar la mejor decisión.",
    categoria: "Marcas",
    tiempo: "7 min de lectura",
  },
];

const GuiasIndex = () => (
  <>
    <Helmet>
      <title>Guías de neumáticos | Appel Neumáticos Encarnación Paraguay</title>
      <meta
        name="description"
        content="Guías y artículos para ayudarte a elegir el neumático ideal para tu auto, moto o camioneta. Consejos de expertos de Appel Neumáticos Showroom, Encarnación, Paraguay."
      />
      <meta
        name="keywords"
        content="guías neumáticos, elegir cubiertas, michelin vs pirelli, neumáticos alta cilindrada, appel neumáticos, encarnación paraguay"
      />
      <link rel="canonical" href="https://appelneumaticos.com/guias" />
    </Helmet>

    <section className="guias-index-section">
      <div className="guias-shell">
        <div className="guias-header">
          <span className="guias-kicker">Centro de recursos</span>
          <h1 className="guias-title">Guías y artículos sobre neumáticos</h1>
          <p className="guias-desc">
            Todo lo que necesitás saber para elegir la cubierta correcta para tu
            vehículo. Información técnica explicada de forma simple por el equipo
            de Appel Neumáticos Showroom, Encarnación.
          </p>
        </div>

        <div className="guias-grid">
          {articulos.map((art) => (
            <article key={art.slug} className="guia-card">
              <div className="guia-card-meta">
                <span className="guia-card-cat">{art.categoria}</span>
                <span className="guia-card-time">{art.tiempo}</span>
              </div>
              <h2 className="guia-card-title">{art.titulo}</h2>
              <p className="guia-card-desc">{art.descripcion}</p>
              <Link to={art.slug} className="guia-card-link">
                Leer artículo
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default GuiasIndex;
