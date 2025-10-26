import { lazy } from "react";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { skillsRate } from "@/constants";

const AnimatedSectionHeader = lazy(() => import("./AnimatedSectionHeader"));
const ExperienceCard = lazy(() => import("./ExperienceCard"));
const SidebarHeader = lazy(() => import("./SidebarHeader"));
const SkillBar = lazy(() => import("./SkillBar"));
const EducationCard = lazy(() => import("./EducationCard"));

const ExperienceSection = () => {
  const { t } = useTranslation();

  const experiences = t("experience.experienceList", { returnObjects: true });
  const educationList = t("education.list", { returnObjects: true });

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
                {skillsRate.map((skill, index) => (
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
