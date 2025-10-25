const NavItem = ({ item, isActive, onClick }) => {
  const Icon = item.icon;

  return (
    <li>
      <button
        onClick={onClick}
        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 group relative ${
          isActive
            ? "portfolio-orange"
            : "hover:bg-[hsl(var(--portfolio-card))] portfolio-text-muted hover:portfolio-text"
        }`}
        aria-label={`Navigate to ${item.label}`}
        aria-current={isActive ? "page" : undefined}
      >
        <Icon size={20} aria-hidden="true" />

        {/* Tooltip */}
        <span className="absolute left-16 px-2 py-1 bg-[hsl(var(--portfolio-card))] portfolio-text rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-[hsl(var(--portfolio-border))]">
          {item.label}
        </span>
      </button>
    </li>
  );
};

const SidebarNavigation = ({ items, activeSection, onSectionChange }) => (
  <nav className="flex-1" aria-label="Main navigation">
    <ul className="flex flex-col space-y-4" role="list">
      {items.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          isActive={activeSection === item.id}
          onClick={() => onSectionChange(item.id)}
        />
      ))}
    </ul>
  </nav>
);

export default SidebarNavigation;
