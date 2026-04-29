import React from "react";

const QuoteDisplay = ({ quote, showDates = false }) => {
  return (
    <div className="relative w-md mx-auto bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 pt-8 m-1">
      <div className="absolute top-2 right-3 text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        {quote.category}
      </div>
      <p className="text-lg md:text-xl font-medium text-gray-800 text-center leading-relaxed mt-4">
        "{quote.content}"
      </p>

      <div className="flex justify-end items-center mt-2 text-gray-500">
        <span className="w-6 h-px bg-blue-400 mr-2"></span>
        <p className="text-sm"> {quote.author} </p>
      </div>

      {showDates && (
        <div
          className="flex justify-between items-center mt-6 "
        >
          <div className="flex gap-2">
            <button className="text-sm px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer">
              Edit
            </button>

            <button className="text-sm px-3 py-1 rounded-md bg-red-100 text-red-600 hover:bg-red-200 cursor-pointer">
              Delete
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500 space-y-1">
            <p>Created: {new Date(quote.createdAt).toLocaleString()}</p>
            <p>
              Updated:{" "}
              {quote.updatedAt === null
                ? new Date(quote.createdAt).toLocaleString()
                : new Date(quote.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteDisplay;
