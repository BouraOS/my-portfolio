import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink, Github, Filter, X } from "lucide-react";
import useInView from "@/hooks/useInView";

// Project Interface
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

// Filter Options
const filterOptions = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Apps" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "fullstack", label: "Full Stack" },
  { value: "backend", label: "Backend" },
];

// Project Card Component
const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group portfolio-card overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          loading="lazy"
          src={project.image}
          alt={project.title}
          className="w-full h-48 transition-transform duration-300 group-hover:scale-110"
          style={{
            objectFit: project.category === "mobile" ? "cover" : "fill",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div
            className={`flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all duration-200 hover:scale-110"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink size={20} className="text-gray-800" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all duration-200 hover:scale-110"
                aria-label={`View ${project.title} source code`}
              >
                <Github size={20} className="text-gray-800" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Title and Status */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold portfolio-text group-hover:text-[hsl(var(--portfolio-orange))] transition-colors duration-300">
            {project.title}
          </h3>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === "completed"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : project.status === "in-progress"
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            }`}
          >
            {project.status === "completed"
              ? "Completed"
              : project.status === "in-progress"
              ? "In Progress"
              : "Planned"}
          </span>
        </div>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Project Year */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {project.year}
        </div>
      </div>
    </div>
  );
};

// Filter Button Component
const FilterButton: React.FC<{
  filter: { value: string; label: string };
  isActive: boolean;
  onClick: () => void;
}> = ({ filter, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        isActive
          ? "portfolio-orange text-white"
          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
      }`}
    >
      {filter.label}
    </button>
  );
};

// Main ProjectsSection Component
const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });
  const projectsData: Project[] = t("projects.list", {
    returnObjects: true,
  }) as Project[];
  console.log("projectsData: ", projectsData);
  // Filter projects based on selected filter
  const filteredProjects = useMemo(() => {
    if (selectedFilter === "all") {
      return projectsData;
    }
    return projectsData.filter(
      (project) => project.category === selectedFilter
    );
  }, [selectedFilter, projectsData]);

  // Get unique technologies for additional filtering
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projectsData.forEach((project) => {
      project?.technologies?.forEach((tech) => {
        techs.add(tech);
      });
    });
    return Array.from(techs).sort();
  }, [projectsData]);

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
        <div
          className={`mb-12 transition-all duration-1000 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Filter Toggle for Mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 portfolio-orange text-white rounded-lg font-medium"
              >
                <Filter size={20} />
                <span>{t("projects.filterBy")}</span>
              </button>
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:flex flex-wrap gap-3">
              {filterOptions.map((filter) => (
                <FilterButton
                  key={filter.value}
                  filter={filter}
                  isActive={selectedFilter === filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                />
              ))}
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium portfolio-text">
                    {t("projects.filterBy")}
                  </span>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.map((filter) => (
                    <FilterButton
                      key={filter.value}
                      filter={filter}
                      isActive={selectedFilter === filter.value}
                      onClick={() => {
                        setSelectedFilter(filter.value);
                        setShowFilters(false);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Project Count */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"} found
            </div>
          </div>
        </div>

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

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
