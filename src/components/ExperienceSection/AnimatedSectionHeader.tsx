import useInView from "@/hooks/useInView";

const AnimatedSectionHeader = ({ title, description }) => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <header
      ref={ref}
      className={`mb-10 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h2 className="section-header">{title}</h2>
      {description && <p className="portfolio-text-muted">{description}</p>}
    </header>
  );
};

export default AnimatedSectionHeader;
