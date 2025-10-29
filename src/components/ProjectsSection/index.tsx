import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import useInView from "@/hooks/useInView";
import ProjectCard from "./ProjectCard";
import FilterControls from "./FilterControls";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "web" | "mobile" | "fullstack" | "backend";
  features: {
    [key: string]: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  status: "completed" | "in-progress" | "planned";
  year: number;
}

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const projectsData: Project[] = t("projects.list", {
    returnObjects: true,
  }) as Project[];

  // Filter projects based on selected filter
  const filteredProjects = useMemo(() => {
    if (selectedFilter === "all") {
      return projectsData;
    }
    return projectsData.filter(
      (project) => project.category === selectedFilter
    );
  }, [selectedFilter, projectsData]);

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen py-20 px-8 lg:px-16"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="projects-heading" className="section-header">
            {t("projects.title")}
          </h2>
          <p
            className={`text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t("projects.description")}
          </p>
        </div>

        {/* Filter Controls */}
        <FilterControls
          inView={inView}
          setShowFilters={setShowFilters}
          showFilters={showFilters}
          t={t}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          filteredProjects={filteredProjects}
        />
        {/* Projects Grid */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold portfolio-text mb-4">
                {t("projects.noProjects")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t("projects.tryDifferentFilter")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
