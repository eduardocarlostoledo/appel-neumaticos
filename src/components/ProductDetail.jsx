import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import productData from "../data/productData.js";
import "../styles/ProductDetail-michelin.css";
import { useEffect } from "react";

const ProductDetail = () => {

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  
  const { id } = useParams();

  const product = productData.find((p) => p.id === id);

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <motion.section
      className="product-detail"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1>{product.brand} {product.model}</h1>
      <img src={product.image} alt={product.model} />

      <p><strong>Beneficio:</strong> {product.benefit}</p>
      <p><strong>Descripción:</strong> {product.detail}</p>

      {product.specifications && (
        <table className="spec-table">
          <tbody>
            {Object.entries(product.specifications).map(([key, value]) => (
              <tr key={key}>
                <th>{key}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <a
        className="btn-yellow"
        href={`https://wa.me/595975123030?text=Hola%20Appel%2C%20quiero%20comprar%20la%20cubierta%20${encodeURIComponent(product.brand)}%20${encodeURIComponent(product.model)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Consultar por WhatsApp
      </a>

      <h3 style={{ marginTop: "3rem" }}>También te puede interesar:</h3>
      <div className="related-products">
        {productData
          .filter((p) => p.id !== product.id)
          .slice(0, 3)
          .map((related, idx) => (
            <Link
              key={idx}
              to={`/productos/${related.id}`}
              className="related-card"
            >
              <img src={related.image} alt={related.model} />
              <p>{related.brand} {related.model}</p>
            </Link>
          ))}
      </div>
    </motion.section>
  );
};

export default ProductDetail;
