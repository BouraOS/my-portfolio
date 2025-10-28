import { Download } from "lucide-react";
import StatsSection from "./StatsSection";

// Hero Content Component
const HeroContent = ({ t, downloadCV }) => (
  <div className="space-y-8">
    <header>
      <h1 className="text-5xl lg:text-6xl font-bold portfolio-text mb-4">
        Bouramada Oussama
      </h1>
      <h2 className="text-2xl lg:text-3xl font-light text-[hsl(var(--portfolio-orange))] mb-6">
        {t("hero.title")}
      </h2>
      <p className="text-lg portfolio-text-muted leading-relaxed max-w-lg">
        {t("hero.description")}
      </p>
    </header>

    <div className="flex flex-wrap gap-4">
      <button
        type="button"
        onClick={downloadCV}
        className="portfolio-orange portfolio-orange-hover px-8 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-200 hover:scale-105"
        aria-label="Download CV"
      >
        <Download size={18} aria-hidden="true" />
        <span>{t("hero.downloadCv")}</span>
      </button>
    </div>

    <StatsSection t={t} />
  </div>
);

export default HeroContent;
