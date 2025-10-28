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

export default FilterButton;
