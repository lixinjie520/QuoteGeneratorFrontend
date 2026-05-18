import React from 'react'
import SearchBar from '../component/SearchBar';
import CategoryFilter from '../component/CategoryFilter';
import QuoteList from '../component/QuoteList';

const QuotesPage = ({quotes, onSearch, onQuoteUpdated, onCategoryChange, error, loading}) => {
    return (
      <div className="w-full min-h-screen mx-auto mt-18 bg-white dark:bg-gray-900">
        <section className="relative max-w-2xl flex items-center justify-center mx-auto gap-4">
          <SearchBar onSearch={onSearch} onQuoteUpdated={onQuoteUpdated} />
          <CategoryFilter onCategoryChange={onCategoryChange} />
        </section>
        <QuoteList
          quotes={quotes}
          onQuoteUpdated={onQuoteUpdated}
          loading={loading}
          error={error}
        />
      </div>
    );
}

export default QuotesPage
