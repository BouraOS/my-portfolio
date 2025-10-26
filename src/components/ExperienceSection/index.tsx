import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import ExperienceCard from "./ExperienceCard";
import SidebarHeader from "./SidebarHeader";
import SkillBar from "./SkillBar";
import EducationCard from "./EducationCard";
import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
  const { t } = useTranslation();

  const experiences = t("experience.experienceList", { returnObjects: true });
  const educationList = t("education.list", { returnObjects: true });

  const skills = [
    { name: "Angular", percentage: 95 },
    { name: "Reactjs", percentage: 90 },
    { name: "React Native", percentage: 88 },
    { name: "Java", percentage: 85 },
    { name: "Spring Boot", percentage: 80 },
    { name: "JWT", percentage: 85 },
    { name: "API REST", percentage: 85 },
    { name: "MySQL", percentage: 80 },
    { name: "CI/CD", percentage: 90 },
    { name: "Keycloak", percentage: 70 },
    { name: "UI/UX Design", percentage: 60 },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-8 lg:px-16"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <AnimatedSectionHeader
              title={t("experience.title")}
              description={t("experience.description")}
            />

            <div className="space-y-8">
              {Object.values(experiences).map((exp, index) => (
                <ExperienceCard
                  key={index}
                  exp={exp}
                  index={index}
                  total={Object.values(experiences).length}
                />
              ))}
            </div>
          </div>

          {/* Skills & Education Sidebar */}
          <aside className="space-y-12">
            {/* Skills Section */}
            <section aria-labelledby="skills-heading">
              <SidebarHeader
                title={t("technicalSkills.title")}
                icon={BriefcaseBusiness}
              />
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section aria-labelledby="education-heading">
              <SidebarHeader
                title={t("education.title")}
                icon={GraduationCap}
              />
              <div className="space-y-4">
                {Object.values(educationList).map((edu, index) => (
                  <EducationCard key={index} edu={edu} index={index} />
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
