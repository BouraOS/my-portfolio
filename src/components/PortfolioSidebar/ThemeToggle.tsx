import { Sun, Moon } from "lucide-react";
const ThemeToggle = ({ isDark, onToggle }) => (
  <button
    onClick={onToggle}
    className="w-12 h-12 rounded-lg flex items-center justify-center portfolio-text-muted hover:portfolio-text hover:bg-[hsl(var(--portfolio-card))] transition-all duration-200 relative group"
    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    aria-pressed={isDark}
  >
    <div className="relative w-5 h-5">
      <Sun
        size={20}
        className={`absolute inset-0 transition-all duration-300 ${
          isDark
            ? "opacity-0 rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100"
        }`}
        aria-hidden="true"
      />
      <Moon
        size={20}
        className={`absolute inset-0 transition-all duration-300 ${
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"
        }`}
        aria-hidden="true"
      />
    </div>

    {/* Tooltip */}
    <span className="absolute left-16 px-2 py-1 bg-[hsl(var(--portfolio-card))] portfolio-text rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-[hsl(var(--portfolio-border))]">
      {isDark ? "Light mode" : "Dark mode"}
    </span>
  </button>
);

export default ThemeToggle;
