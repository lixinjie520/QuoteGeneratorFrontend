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
    >
      <div className="relative flex justify-center w-2xl  gap-4">
        <input
          type="text"
          name="keyword"
          value={keyword}
          onChange={handleChange}
          placeholder="search quotes..."
          className="border border-gray-400 rounded-lg w-2xl px-3 py-1"
        />

        {keyword && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-33 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer"
          >
            <FaTimes size={14} />
          </button>
        )}
        <button
          type="submit"
          className="w-30 rounded-lg bg-green-300 px-3 py-1 cursor-pointer text-green-700 hover:text-green-900 hover:bg-green-400 "
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
