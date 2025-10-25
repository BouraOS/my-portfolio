import { AtSignIcon, Calendar, MapPin, SmartphoneIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const AboutSection = () => {
  const { t } = useTranslation();
  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  const personalDetails = [
    {
      label: t("biography.info.name"),
      value: "Bouramada Oussama",
      icon: AtSignIcon,
    },
    {
      label: t("biography.info.birthDate.label"),
      value: t("biography.info.birthDate.value"),
      icon: Calendar,
    },
    {
      label: t("biography.info.age.label"),
      value: t("biography.info.age.value"),
      icon: Calendar,
    },
    {
      label: t("biography.info.address.label"),
      value: t("biography.info.address.value"),
      icon: MapPin,
    },
    {
      label: t("biography.info.email"),
      value: "osamaboura@gmail.com",
      icon: AtSignIcon,
    },
    {
      label: t("biography.info.phone"),
      value: "+212 691-288849",
      icon: SmartphoneIcon,
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-header">{t("biography.title")}</h2>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Profile Image and Social Links */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-8">
              <div className="w-64 h-64 rounded-full portfolio-card overflow-hidden relative border-4 border-[hsl(var(--portfolio-orange))]">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--portfolio-orange))] to-[hsl(var(--portfolio-orange-hover))] opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/photo-profile.webp"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>

              {/* Online indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-[hsl(var(--portfolio-bg))] animate-pulse"></div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 portfolio-card rounded-lg flex items-center justify-center portfolio-text-muted hover:portfolio-text hover:border-[hsl(var(--portfolio-orange))] border border-transparent transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Personal Details */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {personalDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${"portfolio-card border border-[hsl(var(--portfolio-border))]"}`}
                    >
                      <Icon size={16} className="portfolio-text-muted" />
                    </div>
                    <div>
                      <div className="text-sm portfolio-text-muted">
                        {detail.label}
                      </div>
                      <div className="font-medium portfolio-text">
                        {detail.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Biography Text */}
            <div className="space-y-6 portfolio-text-muted leading-relaxed">
              <p>{t("biography.description.first")}</p>

              <p>{t("biography.description.second")}</p>

              <p>{t("biography.description.third")}</p>
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Angular",
                  "Reactjs",
                  "React Native",
                  "Java",
                  "Spring Boot",
                  "JWT",
                  "API REST",
                  "MySQL",
                  "CI/CD",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm portfolio-card rounded-full border border-[hsl(var(--portfolio-border))] portfolio-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
