import { motion } from "framer-motion";
import { useState } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <div className="navbar-brand">
          <span className="logo">🛞</span>
          <h1 className="company-name">APPEL NEUMÁTICOS</h1>
        </div>

        {/* Menu */}
        <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
        <li><a href="#">Inicio</a></li>
          {/* <li><a href="#neumaticos">Neumáticos</a></li> */}
          <li><a href="#productos">Productos</a></li>
          <li><a href="#marcas">Marcas</a></li>
          <li><a href="#sucursales">Sucursales</a></li>
          <li><a href="#acerca-de">Acerca de</a></li>
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
