import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import RouteLanding from "./RouteLanding.jsx";
import productInfo from "../data/productInfo.js";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { slug } = useParams();
  const product = productInfo.find((p) => p.id === slug);

  if (!product) {
    return (
      <RouteLanding
        badge="Producto no encontrado"
        title="No encontramos la cubierta"
        description="Podes volver al catalogo o consultar por WhatsApp."
        ctaPrimary={{
          label: "Pedir mas informacion",
          href: buildWhatsAppUrl(appelInquiryMessage("catalogo de productos")),
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        ctaSecondary={{
          label: "Volver al catalogo",
          href: "/#productos",
        }}
      />
    );
  }

  const related = productInfo
    .filter((item) => item.id !== product.id)
    .slice(0, 3)
    .map((item) => ({
      badge: "Relacionado",
      image: item.image,
      title: `${item.brand} ${item.model}`,
      copy: item.benefit,
      cta: {
        label: "Pedir mas informacion",
        href: buildWhatsAppUrl(appelInquiryMessage(`${item.brand} ${item.model}`)),
        target: "_blank",
        rel: "noopener noreferrer",
      },
    }));

  return (
    <>
      <Helmet>
        <title>{`${product.brand} ${product.model} | Appel Neumáticos`}</title>
        <meta name="description" content={product.benefit} />
      </Helmet>

      <RouteLanding
        badge="Detalle de producto"
        title={`${product.brand} ${product.model}`}
        description={product.detail}
        points={product.tags}
        metrics={[
          { value: `${product.rating}/5`, label: "valoracion" },
          { value: `${product.reviews}`, label: "consultas" },
          { value: product.specifications?.uso || "Uso", label: "aplicacion" },
        ]}
        ctaPrimary={{
          label: "Pedir mas informacion",
          href: buildWhatsAppUrl(appelInquiryMessage(`${product.brand} ${product.model}`)),
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        ctaSecondary={{
          label: "Volver al catalogo",
          href: "/#productos",
        }}
        showcase={related}
      >
        <div className="hp-card" style={{ padding: "1rem" }}>
          <div className="hp-card-body">
            <h2 className="hp-card-title">Especificaciones</h2>
            <div className="hp-pills" style={{ marginTop: 0 }}>
              {product.specifications
                ? Object.entries(product.specifications).map(([key, value]) => (
                    <span key={key}>
                      {key}: {value}
                    </span>
                  ))
                : null}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Link to="/#productos" className="hp-btn hp-btn-secondary">
            Ver mas productos
          </Link>
        </div>
      </RouteLanding>
    </>
  );
};

export default ProductDetail;
