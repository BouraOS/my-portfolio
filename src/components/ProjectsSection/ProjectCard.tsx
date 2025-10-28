import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from ".";
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
    </div>
  );
};

export default ProjectCard;
