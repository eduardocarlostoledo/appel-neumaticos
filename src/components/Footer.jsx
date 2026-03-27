import { Link } from "react-router-dom";
import "../../src/styles/Footer.css";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Inicio</h4>
            <Link to="/">Home</Link>
            <a href="/#productos">Productos</a>
            <a href="/#marcas">Marcas destacadas</a>
            <a href="/#sucursales">Ubicacion</a>
            <a href="/#faq">Preguntas frecuentes</a>
          </div>

          <div className="footer-column">
            <h4>Categorias</h4>
            <Link to="/autos/cubiertas">Cubiertas para autos</Link>
            <Link to="/motos/cubiertas">Cubiertas para motos</Link>
            <Link to="/camioneta-pickup/cubiertas">Cubiertas para camionetas</Link>
            <Link to="/marcas-appel-Neumáticos-showroom">Marcas</Link>
          </div>

          <div className="footer-column">
            <h4>Marcas</h4>
            <Link to="/marcas/michelin">Michelin</Link>
            <Link to="/marcas/pirelli">Pirelli</Link>
            <Link to="/marcas/bridgestone">Bridgestone</Link>
            <Link to="/neumaticos-para-argentinos">Para clientes de Argentina</Link>
          </div>

          <div className="footer-column">
            <h4>Guias y recursos</h4>
            <Link to="/guias">Centro de guías</Link>
            <Link to="/guias/como-elegir-cubierta-moto-alta-cilindrada">
              Cómo elegir cubiertas para motos
            </Link>
            <Link to="/guias/michelin-vs-pirelli-diferencias">
              Michelin vs Pirelli
            </Link>
            <Link to="/servicios/balanceo">Balanceo</Link>
          </div>

          <div className="footer-column">
            <h4>Informacion</h4>
            <Link to="/quienes-somos">Quienes somos</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/politica-de-privacidad">Politica de privacidad</Link>
            <a href="/security-policy">Politica de seguridad</a>
          </div>

          <div className="footer-column">
            <h4>Contacto</h4>
            <a
              href={buildWhatsAppUrl(
                appelInquiryMessage("informacion general desde el sitio")
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              WhatsApp
            </a>
            <a href="mailto:info@appelneumaticos.com">info@appelneumaticos.com</a>
            <a
              href="https://www.toledoconsultora.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.toledoconsultora.com
            </a>
          </div>
        </div>

        <div className="contact-info">
          <p>© {new Date().getFullYear()} Appel Neumáticos Showroom - Todos los derechos reservados</p>
          <p>Sitio informativo con consultas centralizadas por WhatsApp.</p>
          <p>
            Desarrollado por{" "}
            <a
              href="https://www.toledoconsultora.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.toledoconsultora.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
