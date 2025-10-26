const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <article
      className="portfolio-card p-8 hover:scale-105 transition-all duration-300 hover:border-[hsl(var(--portfolio-orange))] group cursor-pointer focus-within:ring-2 focus-within:ring-[hsl(var(--portfolio-orange))] focus-within:outline-none"
      tabIndex={0}
      role="button"
      aria-label={`Learn more about ${service.title}`}
    >
      <div
        className="portfolio-orange w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        aria-hidden="true"
      >
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold portfolio-text mb-4 group-hover:text-[hsl(var(--portfolio-orange))] transition-colors duration-300">
        {service.title}
      </h3>
      <p className="portfolio-text-muted leading-relaxed">
        {service.description}
      </p>

      {/* Hover Indicator */}
      <div
        className="w-0 h-0.5 bg-[hsl(var(--portfolio-orange))] mt-6 group-hover:w-full transition-all duration-300"
        aria-hidden="true"
      />
    </article>
  );
};
const ServicesGrid = ({ services }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
    {services.map((service) => (
      <div key={service.id} role="listitem">
        <ServiceCard service={service} />
      </div>
    ))}
  </div>
);

export default ServicesGrid;
