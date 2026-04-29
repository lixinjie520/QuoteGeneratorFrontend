import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import QuoteDisplay from "../component/QuoteDisplay";
import { useParams } from "react-router-dom";
import axios from "axios";


const QuoteDetailPage = () => {
  const { id } = useParams();

  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/quotes/${id}`,
        );

        setQuote(response.data);
      } catch (err) {
        console.error("Failed to fetch quote:", err);
        setError("Failed to load quote.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [id]);

    if (loading) return <p className="text-center mt-10">Loading quotes...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
    if (!quote) return <p className="text-center mt-10">No quotes found.</p>;

  return (
    <div className="w-full h-full pb-6 ">
      <Header />
      <QuoteDisplay quote={quote} showDates={true}/>
    </div>
  );
};

export default QuoteDetailPage;
