import {React} from "react";
import {BrandBanner} from "../../src/components/maxSeo/BrandBanner";
import {VehicleTypeSection} from "../../src/components/maxSeo/VehicleTypeSection";
import {BrandShowcase} from "../../src/components/maxSeo/BrandShowcase";
import {LocalSeoSection} from "../../src/components/maxSeo/LocalSeoSection";
import {PricingSection} from "../../src/components/maxSeo/PricingSection";
import "./styles/Footer.css";

  // Footer component
  // This component is responsible for rendering the footer of the website.
  // It includes contact information, a brand banner, vehicle types, brand showcase, local SEO section, and pricing section.
  // The footer is styled using CSS and includes links to WhatsApp and email.   



const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <p>© 2024 Appel Neumaticos - Todos los derechos reservados</p>
          <a href="https://wa.me/595975123030" >📞 https://wa.me/595975123030 </a>
          <p>📧 info@appelneumaticos.com</p>
          
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