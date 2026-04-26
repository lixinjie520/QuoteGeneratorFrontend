import React from 'react'
import { Link } from 'react-router-dom';

const QuoteCard = ({quote}) => {
  return (
    <Link
      // to={`/quotes/${id}`}
      className="block w-md mx-auto bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
    >
      <p className="text-lg md:text-xl font-medium text-gray-800 text-center leading-relaxed">
        "{quote.content}"
      </p>

      <div className="flex justify-end items-center mt-2 text-gray-500">
        <span className="w-6 h-px bg-blue-400 mr-2"></span>
        <p className="text-sm"> {quote.author} </p>
      </div>

      <div
        className="flex justify-between items-center mt-6 "
        onClick={(e) => e.preventDefault()} // 防止點擊按鈕觸發 Link
      >
        <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {quote.category}
        </span>

        <div className="flex gap-2">
          <button className="text-sm px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer">
            Edit
          </button>

          <button className="text-sm px-3 py-1 rounded-md bg-red-100 text-red-600 hover:bg-red-200 cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </Link>
  );
}

export default QuoteCard