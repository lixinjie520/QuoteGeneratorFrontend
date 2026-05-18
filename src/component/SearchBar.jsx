import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const SearchBar = ({ onSearch, onQuoteUpdated }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
    if (e.target.value === "") {
      onQuoteUpdated()
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(keyword);
  };

  const handleClear = () => {
    setKeyword("");
    onQuoteUpdated();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl md:w-full mx-auto flex items-center justify-center gap-4 mt-6"
    >
      <div className="relative flex justify-center max-w-3xl gap-4 mx-4">
        <input
          type="text"
          name="keyword"
          value={keyword}
          onChange={handleChange}
          placeholder="search quotes..."
          className="border max-w-md md:min-w-lg rounded px-3 py-1 bg-white text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />

        {keyword && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer"
          >
            <FaTimes size={14} />
          </button>
        )}
        <button
          type="submit"
          className="max-w-sm rounded-lg bg-green-300 px-3 py-1 cursor-pointer text-green-700 hover:text-green-900 hover:bg-green-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100 "
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
