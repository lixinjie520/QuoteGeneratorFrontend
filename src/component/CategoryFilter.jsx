import React, { useState } from "react";

const CategoryFilter = ({onCategoryChange}) => {
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const selectedCategory = e.target.value;

    setCategory(selectedCategory);

    onCategoryChange(selectedCategory);
  };

  return (
    <div>
      <select
        name="category"
        id="category"
        value={category}
        onChange={handleChange}
        className="border rounded w-30 px-3 py-1"
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
