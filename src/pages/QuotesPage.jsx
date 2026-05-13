import React from 'react'
import SearchBar from '../component/SearchBar';
import CategoryFilter from '../component/CategoryFilter';
import QuoteList from '../component/QuoteList';

const QuotesPage = ({quotes, onSearch, onQuoteUpdated, onCategoryChange, error, loading}) => {
    return (
      <>
        <section className="w-3xl md:w-4xl mx-auto flex items-center justify-between gap-4 mt-30 mb-10">
          <SearchBar onSearch={onSearch} onQuoteUpdated={onQuoteUpdated} />
          <CategoryFilter onCategoryChange={onCategoryChange} />
        </section>
        <QuoteList
          quotes={quotes}
          onQuoteUpdated={onQuoteUpdated}
          loading={loading}
          error={error}
        />
      </>
    );
}

export default QuotesPage
