import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center w-lg mt-6 mx-auto gap-4">
      <input
        type="text"
        placeholder="search quotes..."
        className="border rounded   w-xs px-3 py-1"
      />
      <button className="w-20 rounded bg-green-400 px-3 py-1 cursor-pointer">
        Search
      </button>
    </div>
  );
}

export default SearchBar