import { lazy } from "react";
import { useTranslation } from "react-i18next";
import createContactConfig from "./createContactConfig";

const SectionHeader = lazy(() => import("./SectionHeader"));
const Footer = lazy(() => import("../FooterSection"));
const ContactForm = lazy(() => import("./ContactForm"));
const ContactSidebar = lazy(() => import("./ContactSidebar"));

const ContactSection = () => {
  const { t } = useTranslation();
  const contactInfo = createContactConfig(t);

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-8 lg:px-16"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="grid lg:grid-cols-3 gap-12">
          <ContactSidebar contactInfo={contactInfo} t={t} />

          <div className="lg:col-span-2">
            <ContactForm t={t} />
          </div>
        </div>

        <Footer t={t} />
      </div>
    </section>
  );
};

export default ContactSection;
