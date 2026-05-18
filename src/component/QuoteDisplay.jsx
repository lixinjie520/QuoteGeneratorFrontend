import React, { useState } from "react";
import EditQuoteForm from "./EditQuoteForm";
import DeleteForm from "./DeleteForm";

const QuoteDisplay = ({ quote, showDates = false, onUpdate , onQuoteUpdated }) => {
  const [isEditBtnClicked, setIsEditBtnClicked] = useState(false);
  const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);

  return (
    <div className="relative w-full mx-auto rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
      <div className="absolute top-2 right-3 text-xs bg-blue-100 text-blue-600 dark:bg-gray-600 dark:text-gray-50 px-3 py-1 rounded-full">
        {quote.category}
      </div>
      <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 text-center leading-relaxed mt-4">
        "{quote.content}"
      </p>

      <div className="flex justify-end items-center mt-2 text-gray-500">
        <span className="w-6 h-px bg-blue-400 mr-2"></span>
        <p className="text-sm"> {quote.author} </p>
      </div>

      {showDates && (
        <div className="flex justify-between items-center mt-6 gap-2">
          <div className="flex gap-3">
            <button
              onClick={() => setIsEditBtnClicked(true)}
              className="text-sm px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-200 cursor-pointer dark:bg-gray-600 dark:text-gray-50 dark:hover:bg-gray-900 dark:hover:text-gray-200"
            >
              Edit
            </button>

            <button
              onClick={() => setIsDeleteBtnClicked(true)}
              className="text-sm px-3 py-1 rounded-md bg-red-300 text-red-600 hover:bg-red-500 hover:text-white dark:bg-gray-600 dark:text-gray-50 dark:hover:bg-gray-900 dark:hover:text-gray-200 transition duration-200 cursor-pointer"
            >
              Delete
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500 space-y-1">
            <p>Created: {new Date(quote.createdAt).toLocaleString()}</p>
            <p>
              Updated:
              {quote.updatedAt === null
                ? new Date(quote.createdAt).toLocaleString()
                : new Date(quote.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      )}

      {isEditBtnClicked && (
        <EditQuoteForm
          quote={quote}
          onClose={() => setIsEditBtnClicked(false)}
          onUpdate={onUpdate}
          onQuoteUpdated={onQuoteUpdated}
        />
      )}

      {isDeleteBtnClicked && (
        <DeleteForm
          quote={quote}
          onClose={() => setIsDeleteBtnClicked(false)}
          onQuoteUpdated={onQuoteUpdated}
        />
      )}
    </div>
  );
};

export default QuoteDisplay;
