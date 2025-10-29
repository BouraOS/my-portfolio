const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <header className="mb-16">
    <h2 className="section-header">{title}</h2>
    <p className="text-lg portfolio-text-muted max-w-2xl">{subtitle}</p>
  </header>
);

export default SectionHeader;
