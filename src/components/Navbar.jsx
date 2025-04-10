import { motion } from "framer-motion";
import { useState } from "react";
import "../../src/styles/Navbar.css";
import logo from '../images/logo.png'; // Asegúrate de que la ruta es correcta
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <div className="navbar-brand">
        <a className="logo" href="/">
    <img loading="lazy"
      src={logo}
      alt="Toledo Consultora IT Neumatico Cubierta Appel neumatico showroom " 
      className="logo-image"
    />
  </a>
          <h1 className="company-name">APPEL NEUMÁTICOS</h1>
        </div>

        {/* Menu */}
        <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
          <li><a href="#" onClick={handleLinkClick}>Inicio</a></li>
          {/* <li><a href="#neumaticos" onClick={handleLinkClick}>Neumáticos</a></li> */}
          <li><a href="#productos" onClick={handleLinkClick}>Productos</a></li>
          <li><a href="#marcas" onClick={handleLinkClick}>Marcas</a></li>
          <li><a href="#sucursales" onClick={handleLinkClick}>Sucursales</a></li>
          <li><a href="#acerca-de" onClick={handleLinkClick}>Acerca de</a></li>
        </ul>

        {/* Contacto */}
        <div className="navbar-contact">
          <a href="tel:+595984679739" className="contact-link">
            📞 +595 984 679739
          </a>
        </div>

        {/* Toggle */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
