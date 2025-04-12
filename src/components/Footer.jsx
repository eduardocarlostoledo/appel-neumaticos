import {React} from "react";
import {BrandBanner} from "../../src/components/maxSeo/BrandBanner";
import {VehicleTypeSection} from "../../src/components/maxSeo/VehicleTypeSection";
import {BrandShowcase} from "../../src/components/maxSeo/BrandShowcase";
import {LocalSeoSection} from "../../src/components/maxSeo/LocalSeoSection";
import {PricingSection} from "../../src/components/maxSeo/PricingSection";
import "../../src/styles/Footer.css";

  // Footer component
  // This component is responsible for rendering the footer of the website.
  // It includes contact information, a brand banner, vehicle types, brand showcase, local SEO section, and pricing section.
  // The footer is styled using CSS and includes links to WhatsApp and email.   



const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
  <p>© 2024 Appel Neumaticos Showroom - Todos los derechos reservados</p>
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

          
    <BrandBanner />
    <VehicleTypeSection />
    <BrandShowcase />
    <LocalSeoSection />
    <PricingSection />
  


        </div>
      </footer>
    );
  };
  
  export default Footer;