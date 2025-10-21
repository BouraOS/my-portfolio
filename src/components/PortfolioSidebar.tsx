import { Home, User, Code, Mail, Sun, Moon, LayoutDashboard, BriefcaseBusiness, Command } from 'lucide-react';
import { useState } from 'react';

interface PortfolioSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const PortfolioSidebar = ({ activeSection, onSectionChange }: PortfolioSidebarProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navigationItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'services', icon: Code, label: 'Services' },
    { id: 'experience', icon: BriefcaseBusiness, label: 'Experience' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="portfolio-sidebar fixed left-0 top-0 h-full w-20 flex flex-col items-center py-6 z-50">
      {/* Logo */}
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-8 text-[hsl(var(--portfolio-orange))] ">
        {/* <span className="text-xl font-bold">P</span> */}
        <Command size={30} />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 flex-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 group relative ${
                isActive 
                  ? 'portfolio-orange' 
                  : 'hover:bg-[hsl(var(--portfolio-card))] portfolio-text-muted hover:portfolio-text'
              }`}
              aria-label={item.label}
            >
              <Icon size={20} />
              
              {/* Tooltip */}
              <div className="absolute left-16 px-2 py-1 bg-[hsl(var(--portfolio-card))] portfolio-text rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-[hsl(var(--portfolio-border))]">
                {item.label}
              </div>
            </button>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="w-12 h-12 rounded-lg flex items-center justify-center portfolio-text-muted hover:portfolio-text hover:bg-[hsl(var(--portfolio-card))] transition-all duration-200"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default PortfolioSidebar;