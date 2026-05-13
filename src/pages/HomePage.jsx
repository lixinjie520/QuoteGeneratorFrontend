import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import QuoteList from "../component/QuoteList";
import SearchBar from "../component/SearchBar";
import CategoryFilter from "../component/CategoryFilter";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = ({
  quotes,
  loading,
  error,
  onSearch,
  onCategoryChange,
  onQuoteUpdated,
}) => {

  const featuredQuotes = quotes.slice(0, 4);
  return (
    <div className="w-full h-full pb-6 ">
      <Hero quotes={quotes} />
      <section className="w-3xl md:w-4xl mx-auto flex items-center justify-center gap-4 mt-6">
        <SearchBar onSearch={onSearch} onQuoteUpdated={onQuoteUpdated} />
      </section>
      <h2 className="text-2xl font-bold text-center mt-8 mb-6">
        Featured Quotes
      </h2>
      <QuoteList
        quotes={featuredQuotes}
        onQuoteUpdated={onQuoteUpdated}
        loading={loading}
        error={error}
      />
      <Link
        to="/quotes"
        className="block w-fit mx-auto my-6 px-5 py-2 rounded bg-blue-300 text-blue-800 hover:bg-blue-400 transition duration-200" 
      >
        Browse All Quotes
      </Link>
      <Footer />
    </div>
  );
};

export default HomePage;
