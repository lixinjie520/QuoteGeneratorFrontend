import React from "react";

const CategoryFilter = () => {
  return (
    <div>
      <select
        name="category"
        id="category"
        className="border rounded w-30 px-3 py-1"
        //   onChange={e>e.target.value}
      >
        <option value="">Category</option>
        <option value="">All</option>
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
