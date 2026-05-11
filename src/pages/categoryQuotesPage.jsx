import React, { useEffect, useState } from "react";
import QuoteDisplay from "../component/QuoteDisplay";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryQuotesPage = () => {
  const { categoryName } = useParams();
  
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const url = "http://localhost:8080/api/v1/quotes";

  useEffect(() => {
    const fetchCategoryQuotes = async () => {
      try {
        setLoading(true);

        const res = await axios.get(`${url}/category/${categoryName}`);
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
  
    if (loading) return <p className="mt-20 text-center">Loading...</p>;
    if (error) return (
      <p className="max-w-4xl max-auto text-2xl text-center mt-20 text-red-500">
        {error}
      </p>
    );
  return (
    <div className="mt-20 max-w-4xl m-auto ">
      <h1 className="text-3xl text-center text-gray-700  font-bold py-4 px-2 bg-amber-100 rounded-2xl ">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quotes.map((quote) => (
          <QuoteDisplay key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default CategoryQuotesPage;
