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
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 pb-6">
      <Hero quotes={quotes} />
      <div className="w-full mx-auto">
        <SearchBar onSearch={onSearch} onQuoteUpdated={onQuoteUpdated} />
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
          className="block w-fit mx-auto my-6 px-5 py-2 rounded bg-blue-300 text-blue-800 hover:bg-blue-400 dark:bg-gray-600 dark:text-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition duration-200"
        >
          Browse All Quotes
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
