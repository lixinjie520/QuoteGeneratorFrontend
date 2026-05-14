import React, { useState } from "react";

const CategoryFilter = ({onCategoryChange}) => {
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const selectedCategory = e.target.value;

    setCategory(selectedCategory);

    onCategoryChange(selectedCategory);
  };

  return (
    <div className=" bg-white dark:bg-gray-600 dark:text-gray-50 mt-6">
      <select
        name="category"
        id="category"
        value={category}
        onChange={handleChange}
        className="border rounded max-w-sm px-3 py-1 text-center"
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
