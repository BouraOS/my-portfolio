import useInView from "@/hooks/useInView";
import { useEffect, useState } from "react";

const SkillBar = ({ skill, index }) => {
  const [ref, isInView] = useInView<HTMLDivElement>();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(skill.percentage);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.percentage, index]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex justify-between mb-2">
        <span className="portfolio-text font-medium">{skill.name}</span>
        <span
          className={`text-[hsl(var(--portfolio-orange))] font-semibold transition-all duration-300 ${
            width > 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          {width}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: `${width}%`,
            transition: "width 1s ease-out",
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
