import { useTranslation } from "react-i18next";
import ServicesGrid from "./ServicesGrid";
import createServiceConfig from "./createServiceConfig";
import SectionHeader from "./SectionHeader";

const CallToAction = ({ contactText, buttonText, onContactClick }) => {
  const handleClick = () => {
    if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <div className="text-center mt-16">
      <p className="text-lg portfolio-text-muted mb-6">{contactText}</p>
      <button
        onClick={handleClick}
        className="portfolio-orange portfolio-orange-hover px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--portfolio-orange))] focus:ring-offset-2"
        aria-label={buttonText}
      >
        {buttonText}
      </button>
    </div>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();
  // Create services configuration
  const services = createServiceConfig(t);

  const handleContactClick = () => {
    // Scroll to contact section or open contact form
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="min-h-screen py-20 px-8 lg:px-16"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={t("services.title")}
          description={t("services.description")}
        />
        <ServicesGrid services={services} />
        <CallToAction
          contactText={t("services.contact")}
          buttonText={t("services.getInTouch")}
          onContactClick={handleContactClick}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
