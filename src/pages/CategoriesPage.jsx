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
    <section className="max-w-4xl mx-auto text-center px-6 py-10 mt-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Categories</h1>
      <p className="text-gray-500 mb-8">Browse quotes by topic.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {categories.map((category) => (
          <Link
            to={`/category/${category.name}`}
            key={category.name}
            className="rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer bg-blue-100"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {category.name}
            </h2>
            <p className="text-gray-600 mt-2">{category.count} quotes</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesPage;
