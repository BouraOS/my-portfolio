import {
  Monitor,
  Code,
  Search,
  Smartphone,
  Database,
  Palette,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = [
    // {
    //   icon: Monitor,
    //   title: 'Web Design',
    //   description: 'Creating beautiful, user-friendly interfaces that capture your brand essence and provide exceptional user experiences across all devices.',
    // },
    {
      icon: Code,
      title: t("services.serviceList.webDevelopment.title"),
      description:
        "Building robust, scalable web applications using modern technologies and best practices to bring your digital vision to life.",
    },
    {
      icon: Search,
      title: t("services.serviceList.seoOptimization.title"),
      description: t("services.serviceList.seoOptimization.description"),
    },
    {
      icon: Smartphone,
      title: t("services.serviceList.mobileDevelopment.title"),
      description: t("services.serviceList.mobileDevelopment.description"),
    },
    {
      icon: Database,
      title: t("services.serviceList.backendDevelopment.title"),
      description: t("services.serviceList.backendDevelopment.description"),
    },
    {
      icon: Palette,
      title: t("services.serviceList.uiuxDesign.title"),
      description: t("services.serviceList.uiuxDesign.description"),
    },
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-header text-center">{t("services.title")}</h2>
          <p className="text-lg portfolio-text-muted max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="portfolio-card p-8 hover:scale-105 transition-all duration-300 hover:border-[hsl(var(--portfolio-orange))] group cursor-pointer"
              >
                <div className="portfolio-orange w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-[hsl(var(--portfolio-bg))]" />
                </div>

                <h3 className="text-xl font-semibold portfolio-text mb-4 group-hover:text-[hsl(var(--portfolio-orange))] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="portfolio-text-muted leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="w-0 h-0.5 bg-[hsl(var(--portfolio-orange))] mt-6 group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg portfolio-text-muted mb-6">
            {t("services.contact")}
          </p>
          <button className="portfolio-orange portfolio-orange-hover px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105">
            {t("services.getInTouch")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
