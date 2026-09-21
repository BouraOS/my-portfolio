import { lazy } from "react";
import { useTranslation } from "react-i18next";

const cvFiles = {
  en: {
    url: "/cv/Bouramada_0ussama_Fullstack_CV_EN.pdf",
    filename: "Bouramada_0ussama_Fullstack_CV_EN.pdf",
  },
  fr: {
    url: "/cv/Bouramada_0ussama_Fullstack_CV_FR.pdf",
    filename: "Bouramada_0ussama_Fullstack_CV_FR.pdf",
  },
} as const;

const TopHeader = lazy(() => import("./TopHeader"));
const HeroContent = lazy(() => import("./HeroContent"));
const ProfileImageLoader = lazy(() => import("./ProfileImage"));

const HeroSection = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const downloadCV = () => {
    const language = i18n.language as keyof typeof cvFiles;
    const { url, filename } = cvFiles[language] ?? cvFiles.en;
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.rel = "noopener";
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
