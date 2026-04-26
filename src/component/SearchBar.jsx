import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center w-lg  gap-4">
      <input
        type="text"
        placeholder="search quotes..."
        className="border rounded w-xs px-3 py-1"
      />
      <button className="w-20 rounded bg-green-300 px-3 py-1 cursor-pointer text-green-700 hover:text-green-900 hover:bg-green-400 ">
        Search
      </button>
    </div>
  );
}

export default SearchBar