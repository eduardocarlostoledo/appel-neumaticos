import { Link } from "react-router-dom";
import { useState } from "react";
import "../../src/styles/Navbar.css";
import logo from "../images/logo.png";
import { appelInquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <section className="layout">
        <div className="grow1">
          <a className="logo" href="/">
            <img
              loading="lazy"
              src={logo}
              alt="Appel  Neumaticos Showroom Encarnacion"
              className="logo-image"
            />
          </a>
        </div>

        <div className="grow1">
          <div className="navbar-brand">
            <h1 className="company-name">Appel  NEUMATICOS</h1>
            <h2 className="company-name-sub">SHOWROOM</h2>
          </div>
        </div>

        <div className="grow1">
          <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/autos/cubiertas" onClick={handleLinkClick}>
                Autos
              </Link>
            </li>
            <li>
              <Link to="/motos/cubiertas" onClick={handleLinkClick}>
                Motos
              </Link>
            </li>
            <li>
              <Link to="/camioneta-pickup/cubiertas" onClick={handleLinkClick}>
                Camionetas
              </Link>
            </li>
            <li>
              <Link to="/marcas-appel-neumaticos-showroom" onClick={handleLinkClick}>
                Marcas
              </Link>
            </li>
            <li>
              <Link to="/sucursales" onClick={handleLinkClick}>
                Sucursales
              </Link>
            </li>
            <li>
              <Link to="/quienes-somos" onClick={handleLinkClick}>
                Acerca
              </Link>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl(
                  appelInquiryMessage("contacto desde el menu principal")
                )}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
