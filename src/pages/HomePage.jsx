import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import QuoteList from "../component/QuoteList";
import SearchBar from "../component/SearchBar";
import CategoryFilter from "../component/CategoryFilter";
import axios from "axios";

const HomePage = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const url = "http://localhost:8080/api/v1/quotes";

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setQuotes(response.data);
      setError("");
    } catch (error) {
      setError("Failed to load quotes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const searchQuotes = async (keyword) => {
    try {
      setLoading(true);

      const response = await axios.get(`${url}/search`, {
        params: { keyword },
      });

      setQuotes(response.data);
      setError("");
    } catch (error) {
      setError("Failed to search quotes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  },[])
  return (
    <div className="w-full h-full border-2 pb-6 ">
      <Header />
      <Hero />
      <section className="w-3xl md:w-4xl mx-auto flex items-center justify-center gap-4 mt-6">
        <SearchBar onSearch={ searchQuotes } />
        <CategoryFilter />
      </section>

      <QuoteList quotes={quotes} loading={loading} error={error} />
      <Footer />
    </div>
  );
};

export default HomePage;
