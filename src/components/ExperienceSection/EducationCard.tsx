import useInView from "@/hooks/useInView";
import { GraduationCap } from "lucide-react";

const EducationCard = ({ edu, index }) => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`portfolio-card p-4 transition-all duration-500 hover:border-[hsl(var(--portfolio-orange))] hover:shadow-md cursor-pointer group ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg portfolio-accent-soft flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <GraduationCap
            size={20}
            className="text-[hsl(var(--portfolio-orange))]"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold portfolio-text group-hover:text-[hsl(var(--portfolio-orange))] transition-colors">
            {edu.degree}
          </h4>
          <p className="text-[hsl(var(--portfolio-orange))] mb-1 text-sm">
            {edu.school}
          </p>
          <p className="text-sm portfolio-text-muted">{edu.period}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
