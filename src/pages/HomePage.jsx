import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import QuoteList from "../component/QuoteList";
import SearchBar from "../component/SearchBar";
import CategoryFilter from "../component/CategoryFilter";
import axios from "axios";

const HomePage = ({
  quotes,
  loading,
  error,
  onSearch,
  onCategoryChange,
}) => {

  return (
    <div className="w-full h-full border-2 pb-6 ">
      <Hero />
      <section className="w-3xl md:w-4xl mx-auto flex items-center justify-center gap-4 mt-6">
        <SearchBar onSearch={onSearch} />
        <CategoryFilter onCategoryChange={onCategoryChange} />
      </section>

      <QuoteList quotes={quotes} loading={loading} error={error} />
      <Footer />
    </div>
  );
};

export default HomePage;
