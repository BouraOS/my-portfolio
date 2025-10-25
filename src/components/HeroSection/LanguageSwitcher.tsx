import { cn } from "@/lib/utils";

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }) => {
  const isEnglish = currentLanguage === "en";

  const buttonClass = (isActive) =>
    cn(
      "px-3 py-1 text-sm transition-colors duration-200",
      isActive
        ? "portfolio-orange portfolio-orange-hover rounded"
        : "border border-[hsl(var(--portfolio-border))] portfolio-text rounded hover:border-[hsl(var(--portfolio-orange))] hover:text-[hsl(var(--portfolio-orange))]"
    );

  return (
    <div className="flex space-x-2" role="group" aria-label="Language selector">
      <button
        onClick={() => onLanguageChange("en")}
        className={buttonClass(isEnglish)}
        aria-pressed={isEnglish}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange("fr")}
        className={buttonClass(!isEnglish)}
        aria-pressed={!isEnglish}
        aria-label="Switch to French"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
