import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onCategoryFilterChange }) => {
  return (
    <div>
      <label>Filter by category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryFilterChange(e.target.value)}
      >
        <option value="All">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
