const ContactInfoCard = ({ info }) => {
  const Icon = info.icon;
  const content = (
    <div className="flex items-start space-x-4">
      <div
        className="portfolio-orange w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
        aria-hidden="true"
      >
        <Icon size={20} className="text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium portfolio-text">{info.title}</h4>
        <p className="text-[hsl(var(--portfolio-orange))] font-medium break-words">
          {info.value}
        </p>
        <p className="text-sm portfolio-text-muted">{info.subtitle}</p>
      </div>
    </div>
  );

  if (info.href) {
    return (
      <a
        href={info.href}
        className="block hover:opacity-80 transition-opacity"
        aria-label={`${info.title}: ${info.value}`}
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
};

export default ContactInfoCard;
