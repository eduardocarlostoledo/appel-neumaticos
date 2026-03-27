import { BrandBanner } from "./maxSeo/BrandBanner.jsx";
import { VehicleTypeSection } from "./maxSeo/VehicleTypeSection.jsx";
import { BrandShowcase } from "./maxSeo/BrandShowcase.jsx";
import { LocalSeoSection } from "./maxSeo/LocalSeoSection.jsx";
import { PricingSection } from "./maxSeo/PricingSection.jsx";
import "../styles/SeoSections.css";

const SeoSections = () => {
  return (
    <section className="seo-sections" aria-label="Secciones SEO y de consulta local">
      <BrandBanner />
      <VehicleTypeSection />
      <BrandShowcase />
      <LocalSeoSection />
      <PricingSection />
    </section>
  );
};

export default SeoSections;
