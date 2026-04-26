import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import QuoteList from "../component/QuoteList";
import SearchBar from "../component/SearchBar";

const HomePage = () => {
  return (
    <div className="w-full h-full border-2 pb-6 ">
      <Header />
      <Hero />
      <SearchBar />
      <QuoteList />
      <Footer />
    </div>
  );
};

export default HomePage;
