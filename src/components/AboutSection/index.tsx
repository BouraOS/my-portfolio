import { lazy } from "react";
import { AtSign, Calendar, MapPin, Smartphone } from "lucide-react";
import { skills, socialLinks } from "@/constants";
import { useTranslation } from "react-i18next";

const ProfileSidebar = lazy(() => import("./ProfileSidebar"));
const PersonalDetailsGrid = lazy(() => import("./PersonalDetailsGrid"));
const Biography = lazy(() => import("./Biography"));

const AboutSection = () => {
  const { t } = useTranslation();

  const personalDetails = [
    {
      label: t("biography.info.name"),
      value: "Bouramada Oussama",
      icon: AtSign,
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
      label: t("biography.info.email.label"),
      value: t("biography.info.email.value"),
      icon: AtSign,
      isContact: "email",
    },
    {
      label: t("biography.info.phone.label"),
      value: t("biography.info.phone.value"),
      icon: Smartphone,
      isContact: "phone",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-8 lg:px-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="about-heading" className="section-header">
          {t("biography.title")}
        </h2>

        <div className="grid lg:grid-cols-3 gap-16">
          <ProfileSidebar socialLinks={socialLinks} />
          <div className="lg:col-span-2">
            <PersonalDetailsGrid details={personalDetails} />
            <Biography t={t} skills={skills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
