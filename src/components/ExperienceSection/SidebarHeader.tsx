import useInView from "@/hooks/useInView";

const SidebarHeader = ({ title, icon: Icon }) => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`flex items-center gap-2 mb-6 transition-all duration-500 ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
    >
      {Icon && (
        <Icon size={24} className="text-[hsl(var(--portfolio-orange))]" />
      )}
      <h3 className="text-xl font-semibold portfolio-text">{title}</h3>
    </div>
  );
};

export default SidebarHeader;
