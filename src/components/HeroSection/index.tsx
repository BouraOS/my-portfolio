import { lazy } from "react";
import { useTranslation } from "react-i18next";

const TopHeader = lazy(() => import("./TopHeader"));
const HeroContent = lazy(() => import("./HeroContent"));
const ProfileImageLoader = lazy(() => import("./ProfileImage"));

const HeroSection = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const downloadCV = () => {
    // const lang = i18n.language;
    // const cvUrl = `/cv/bouramada-oussama-cv-${lang}.pdf`;
    const cvUrl = `/cv/bouramada-oussama-cv-fr.pdf`;
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = `Bouramada-Oussama-CV-fr.pdf`;
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-80 lg:min-h-screen py-20 flex items-center px-8 lg:px-16"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto w-full">
        <header className="flex justify-between items-start mb-16">
          <TopHeader
            t={t}
            currentLanguage={i18n.language}
            onLanguageChange={changeLanguage}
          />
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HeroContent t={t} downloadCV={downloadCV} />
          <ProfileImageLoader />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
