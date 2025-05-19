import { BrandBanner } from "../../src/components/maxSeo/BrandBanner";
import { VehicleTypeSection } from "../../src/components/maxSeo/VehicleTypeSection";
import { BrandShowcase } from "../../src/components/maxSeo/BrandShowcase";
import { LocalSeoSection } from "../../src/components/maxSeo/LocalSeoSection";
import { PricingSection } from "../../src/components/maxSeo/PricingSection";
import "../../src/styles/SeoSections.css";
const SeoSections = () => {
  return (
    <section className="seo-sections">
      <BrandBanner />
      <VehicleTypeSection />
      <BrandShowcase />
      <LocalSeoSection />
      <PricingSection />
    </section>
  );
};

export default SeoSections;
