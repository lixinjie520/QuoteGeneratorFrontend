import React, { useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";
import axios from "axios";

const QuoteList = ({quotes, loading, error}) => {

  if (loading) {
    return <p className="text-center mt-10">Loading quotes...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (quotes.length === 0) {
    return <p className="text-center my-10 text-2xl bg-amber-100 px-3 py-2 rounded">No quotes found.</p>;
  }

  return (
    <div className="max-w-3xl mt-6 mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default QuoteList;
