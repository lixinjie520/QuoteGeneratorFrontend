import React, { useEffect, useState } from "react";
import QuoteDisplay from "../component/QuoteDisplay";
import { Link, useParams } from "react-router-dom";
import { getQuotesByCategory } from "../api/quoteApi";

const CategoryQuotesPage = () => {
  const { categoryName } = useParams();

  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryQuotes = async () => {
      try {
        setLoading(true);

        const res = await getQuotesByCategory(categoryName);
        setQuotes(res.data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to load quotes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryQuotes();
  }, [categoryName]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error)
    return (
      <p className="max-w-4xl max-auto text-2xl text-center text-red-500">
        {error}
      </p>
    );
  return (
    <div className="w-full min-h-dvh mx-auto bg-white dark:bg-gray-600 pb-10">
      <div className=" max-w-4xl pt-6">
        <h1 className="text-3xl text-center text-gray-700 dark:bg-gray-800 dark:text-gray-50  font-bold py-4 px-2 bg-amber-100 rounded-2xl mb-6 ">
          {categoryName}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quotes.map((quote) => (
            <Link to={`/quotes/${quote.id}`} key={quote.id}>
              <QuoteDisplay quote={quote} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryQuotesPage;
