const PersonalDetailItem = ({ icon: Icon, label, value, isContact }) => {
  const content = (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center portfolio-card border border-[hsl(var(--portfolio-border))]">
        <Icon size={16} className="portfolio-text-muted" aria-hidden="true" />
      </div>
      <div>
        <div className="text-sm portfolio-text-muted">{label}</div>
        <div className="font-medium portfolio-text">{value}</div>
      </div>
    </div>
  );

  if (isContact === "email") {
    return (
      <a
        href={`mailto:${value}`}
        className="hover:text-[hsl(var(--portfolio-orange))] transition-colors"
        aria-label={`Send email to ${value}`}
      >
        {content}
      </a>
    );
  }

  if (isContact === "phone") {
    return (
      <a
        href={`tel:${value.replace(/\s/g, "")}`}
        className="hover:text-[hsl(var(--portfolio-orange))] transition-colors"
        aria-label={`Call ${value}`}
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
};

const PersonalDetailsGrid = ({ details }) => (
  <div className="grid md:grid-cols-2 gap-6 mb-8" role="list">
    {details.map((detail, index) => (
      <div key={`${detail.label}-${index}`} role="listitem">
        <PersonalDetailItem {...detail} />
      </div>
    ))}
  </div>
);
export default PersonalDetailsGrid;
