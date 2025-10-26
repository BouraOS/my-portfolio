import useInView from "@/hooks/useInView";
import { BriefcaseBusiness, Calendar, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
// Animated Experience Card Component
const ExperienceCard = ({ exp, index, total }) => {
  const { t } = useTranslation();
  const [ref, isInView] = useInView<HTMLDivElement>();
  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline connector */}
      {!isLast && (
        <div
          className={`hidden md:block absolute left-6 top-16 w-0.5 bg-[hsl(var(--portfolio-border))] transition-all duration-1000 ${
            isInView ? "h-full opacity-100" : "h-0 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 150 + 300}ms` }}
        />
      )}

      <div className="flex gap-6">
        {/* Timeline icon */}
        <div
          className={`hidden md:flex portfolio-orange w-12 h-12 rounded-full items-center justify-center flex-shrink-0 relative z-10 transition-all duration-500 ${
            isInView ? "scale-100 rotate-0" : "scale-0 rotate-180"
          }`}
          style={{ transitionDelay: `${index * 150 + 100}ms` }}
        >
          <BriefcaseBusiness size={20} className="text-white" />
        </div>

        {/* Card content */}
        <article className="portfolio-card p-6 flex-1 hover:border-[hsl(var(--portfolio-orange))] hover:shadow-lg transition-all duration-300 group">
          <div className="flex flex-wrap items-start justify-between mb-4 gap-3">
            <div>
              <h3 className="text-xl font-semibold portfolio-text mb-1 group-hover:text-[hsl(var(--portfolio-orange))] transition-colors">
                {exp.role}
              </h3>
              <h4 className="text-lg text-[hsl(var(--portfolio-orange))] mb-2">
                {exp.company}
              </h4>
            </div>
            <span className="portfolio-orange px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
              {exp.type ?? "Full Time"}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mb-4 text-sm portfolio-text-muted">
            <div className="flex items-center gap-1">
              <Calendar size={14} aria-hidden="true" />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} aria-hidden="true" />
              <span>{exp.location}</span>
            </div>
          </div>

          <p className="portfolio-text-muted mb-4 leading-relaxed">
            {exp.description}
          </p>

          <div className="space-y-2">
            <h5 className="font-medium portfolio-text">
              {t("experience.keyAchievements")}
            </h5>
            <ul className="space-y-2" role="list">
              {exp.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2 text-sm portfolio-text-muted transition-all duration-500 ${
                    isInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{
                    transitionDelay: `${index * 150 + 400 + idx * 100}ms`,
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-[hsl(var(--portfolio-orange))] rounded-full mt-2 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ExperienceCard;
