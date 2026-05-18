import React, { useState } from "react";

const CategoryFilter = ({onCategoryChange}) => {
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const selectedCategory = e.target.value;

    setCategory(selectedCategory);

    onCategoryChange(selectedCategory);
  };

  return (
    <div className="mt-4 flex justify-center">
      <select
        name="category"
        id="category"
        value={category}
        onChange={handleChange}
        className="border rounded max-w-xs md:max-w-sm px-1 md:px-3 py-1 text-center dark:bg-gray-600 dark:text-gray-50"
      >
        <option value="">Category</option>
        <option value="motivation">Motivation</option>
        <option value="growth">Growth</option>
        <option value="learning">Learning</option>
        <option value="action">Action</option>
        <option value="wisdom">Wisdom</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
