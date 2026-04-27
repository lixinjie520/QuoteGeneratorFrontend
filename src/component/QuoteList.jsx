import React, { useEffect, useState } from 'react'
import QuoteCard from './QuoteCard'
import axios from 'axios';

const QuoteList = () => {

  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuotes = async () => {
      
      try {
        const response = await axios.get("http://localhost:8080/api/v1/quotes");

        setQuotes(response.data)
      } catch (err) {
        console.error("Failed to fetch quotes:", err);
        setError("Failed to load quotes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [])
  
  if (loading) {
    return <p className="text-center mt-10">Loading quotes...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (quotes.length === 0) {
    return <p className="text-center mt-10">No quotes found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5 mx-auto max-w-4xl">
      {
        quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))
      }  
    </div>
  );
}

export default QuoteList