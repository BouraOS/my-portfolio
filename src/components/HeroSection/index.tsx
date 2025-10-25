import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ContactInfo from "./ContactInfo";
import HeroContent from "./HeroContent";
import ProfileImageLoader from "./ProfileImage";

const HeroSection = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-8 lg:px-16"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header with contact info and language switcher */}
        <header className="flex justify-between items-start mb-16">
          <ContactInfo />
          <LanguageSwitcher
            currentLanguage={i18n.language}
            onLanguageChange={changeLanguage}
          />
        </header>

        {/* Main hero content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HeroContent t={t} />
          <ProfileImageLoader />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
