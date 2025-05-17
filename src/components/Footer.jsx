import { React } from "react";
import { Link } from "react-router-dom";
import "../../src/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <p>© 2024 Appel Neumáticos Showroom - Todos los derechos reservados</p>

        <div className="contact-info">
          <a
            href="https://wa.me/595975123030"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Contactar por WhatsApp"
              width="24"
              height="24"
            />
          </a>
          <p>📧 info@appelneumaticos.com</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Productos</h4>
            <Link to="/autos/cubiertas">Cubiertas para Autos</Link>
            <Link to="/motos/cubiertas">Cubiertas para Motos</Link>
            <Link to="/camioneta-pickup/cubiertas">Cubiertas para Camionetas</Link>
          </div>

          <div className="footer-column">
            <h4>Servicios</h4>
            {/* <Link to="/servicios/alineacion">Alineación</Link> */}
            <Link to="/servicios/balanceo">Balanceo</Link>
          </div>

          <div className="footer-column">
            <h4>Empresa</h4>
            <Link to="/quienes-somos">Quiénes Somos</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
