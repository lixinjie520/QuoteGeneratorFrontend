import React from "react";
import QuoteDisplay from "./QuoteDisplay";
import { Link } from "react-router-dom";

const QuoteCard = ({ quote }) => {
  return (
    <Link to={`/quotes/${quote.id}`} className="block w-full">
      <QuoteDisplay quote={quote}/>
    </Link>
  );
};

export default QuoteCard;
