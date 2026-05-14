import React from "react";
import { Link } from "react-router-dom";

const CategoriesPage = ({ quotes }) => {
  // 統計每個 category 出現幾次
  const categoryCounts = quotes.reduce((acc, quote) => {
    acc[quote.category] = (acc[quote.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    count,
  }));

  return (
    <section className="w-full min-h-screen mx-auto text-center px-6 py-10 mt-18 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-2">
        Categories
      </h1>
      <p className="text-gray-500 mb-8 dark:text-gray-50">
        Browse quotes by topic.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {categories.map((category) => (
          <Link
            to={`/category/${category.name}`}
            key={category.name}
            className="rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer bg-blue-100 dark:bg-gray-600 "
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-50">
              {category.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-50 mt-2">
              {category.count} quotes
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesPage;
