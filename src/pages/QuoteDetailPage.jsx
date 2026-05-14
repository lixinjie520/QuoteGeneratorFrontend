import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import QuoteDisplay from "../component/QuoteDisplay";
import { useParams } from "react-router-dom";
import { getQuoteById } from "../api/quoteApi";


const QuoteDetailPage = ({onQuoteUpdated}) => {
  const { id } = useParams();

  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setLoading(true)
        const response = await getQuoteById(id);

        setQuote(response.data);// 更新當前頁面
      } catch (err) {
        console.error(err);

        if (err.response?.status === 404) {
          setError("This quote does not exist.");
        } else {
          setError("Failed to load quote.Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading quotes...</p>;
  if (error)
    return (
      <p className="max-w-4xl max-auto text-2xl text-center mt-20 text-red-500">
        {error}
      </p>
    );
  if (!quote) return <p className="text-center mt-10">No quotes found.</p>;

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-600 mx-auto h-full pb-6  mt-18 ">
      <div className="max-w-md mx-auto pt-8">
        <QuoteDisplay
          quote={quote}
          showDates={true}
          onUpdate={setQuote}
          onQuoteUpdated={onQuoteUpdated}
        />
      </div>
    </div>
  );
};

export default QuoteDetailPage;
