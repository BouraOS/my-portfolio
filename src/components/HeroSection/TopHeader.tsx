import { Mail, Phone } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "../PortfolioSidebar/ThemeToggle";
import { useTheme } from "@/hooks/useTheme";

const TopHeader = ({ currentLanguage, onLanguageChange }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  return (
    <div className="flex items-center w-full mt-4">
      <address className="flex-1 flex flex-col sm:flex-row gap-2 sm:gap-8 portfolio-text-muted not-italic text-xs sm:text-sm md:text-base ">
        <a
          href="tel:+212691288849"
          className="flex items-center gap-2 hover:text-[hsl(var(--portfolio-orange))] transition-colors flex-wrap"
          aria-label="Phone number"
        >
          <Phone size={16} aria-hidden="true" />
          <span>+212 691-288849</span>
        </a>
        <a
          href="mailto:osamaboura@gmail.com"
          className="flex items-center gap-2 hover:text-[hsl(var(--portfolio-orange))] transition-colors flex-wrap"
          aria-label="Email address"
        >
          <Mail size={16} aria-hidden="true" />
          <span>osamaboura@gmail.com</span>
        </a>
      </address>
      <LanguageSwitcher
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
      />
      <div className="md:hidden">
        <ThemeToggle
          isDark={isDark}
          onToggle={toggleTheme}
          className="w-10 h-8 rounded-sm ml-2"
          hideTooltip
        />
      </div>
    </div>
  );
};
export default TopHeader;
