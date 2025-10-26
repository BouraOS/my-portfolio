const SectionHeader = ({ title, description }) => (
  <header className="text-center mb-16">
    <h2 className="section-header text-center">{title}</h2>
    <p className="text-lg portfolio-text-muted max-w-2xl mx-auto">
      {description}
    </p>
  </header>
);

export default SectionHeader;
