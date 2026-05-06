import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(keyword);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-lg  gap-4"
    >
      <input
        type="text"
        name="keyword"
        value={keyword}
        onChange={handleChange}
        placeholder="search quotes..."
        className="border rounded w-xs px-3 py-1"
      />
      <button
        type="submit"
        className="w-20 rounded bg-green-300 px-3 py-1 cursor-pointer text-green-700 hover:text-green-900 hover:bg-green-400 "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
