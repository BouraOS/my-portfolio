import { filterOptions } from "@/constants";
import { Filter, X } from "lucide-react";
import FilterButton from "./FilterButton";

function FilterControls({
  inView,
  setShowFilters,
  showFilters,
  t,
  selectedFilter,
  setSelectedFilter,
  filteredProjects,
}) {
  return (
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
  );
}

export default FilterControls;
