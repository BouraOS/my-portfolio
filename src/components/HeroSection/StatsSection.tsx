const StatItem = ({ value, label }) => (
  <div>
    <div
      className="text-3xl font-bold text-[hsl(var(--portfolio-orange))]"
      aria-label={`${value} ${label}`}
    >
      {value}
    </div>
    <div className="text-sm portfolio-text-muted">{label}</div>
  </div>
);

const StatsSection = ({ t }) => (
  <section
    className="grid grid-cols-3 gap-8 pt-8 border-t border-[hsl(var(--portfolio-border))]"
    aria-label="Professional statistics"
  >
    <StatItem value="2+" label={t("hero.experience")} />
    <StatItem value="30+" label={t("hero.projects")} />
    <StatItem value="10+" label={t("hero.clients")} />
  </section>
);
export default StatsSection;
