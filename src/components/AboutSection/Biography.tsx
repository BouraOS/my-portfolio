const SkillTag = ({ skill }) => (
  <li>
    <span className="px-3 py-1 text-sm portfolio-card rounded-full border border-[hsl(var(--portfolio-border))] portfolio-text">
      {skill}
    </span>
  </li>
);
const SkillsList = ({ skills }) => (
  <nav aria-label="Technical skills">
    <ul className="flex flex-wrap gap-3 pt-4" role="list">
      {skills.map((skill) => (
        <SkillTag key={skill} skill={skill} />
      ))}
    </ul>
  </nav>
);
const Biography = ({ t, skills }) => (
  <article className="space-y-6 portfolio-text-muted leading-relaxed">
    <p>{t("biography.description.first")}</p>
    <p>{t("biography.description.second")}</p>
    <p>{t("biography.description.third")}</p>
    <SkillsList skills={skills} />
  </article>
);

export default Biography;
