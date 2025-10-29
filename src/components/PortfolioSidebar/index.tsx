import { Command } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { navigationItems } from "@/constants";
import ThemeToggle from "./ThemeToggle";
import SidebarNavigation from "./SidebarNavigation";

const SidebarLogo = () => (
  <div
    className="w-12 h-12 rounded-lg flex items-center justify-center mb-8 text-[hsl(var(--portfolio-orange))]"
    role="img"
    aria-label="Portfolio logo"
  >
    <Command size={30} aria-hidden="true" />
  </div>
);

const PortfolioSidebar = ({ activeSection, onSectionChange }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <aside
      className="portfolio-sidebar fixed left-0 top-0 h-full w-20  flex-col items-center py-6 z-50 hidden lg:flex"
      aria-label="Sidebar navigation"
    >
      <SidebarLogo />
      <SidebarNavigation
        items={navigationItems}
        activeSection={activeSection}
        onSectionChange={onSectionChange}
      />
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
    </aside>
  );
};

export default PortfolioSidebar;
