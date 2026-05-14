import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuoteDetailPage from "./pages/QuoteDetailPage";
import AddQuotePage from "./component/AddQuoteForm";
import EditQuotePage from "./component/EditQuoteForm";
import CategoriesPage from "./pages/CategoriesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Toaster } from "react-hot-toast";
import CategoryQuotesPage from "./pages/CategoryQuotesPage";
import Header from "./component/Header";
import {
  getAllQuotes,
  getQuotesByCategory,
  searchQuotesByKeyword,
} from "./api/quoteApi";
import QuotesPage from "./pages/QuotesPage";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [displayedQuotes, setDisplayedQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // 切換 dark class 到 html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // 取得所有資料
  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await getAllQuotes();

      setAllQuotes(response.data);
      setDisplayedQuotes(response.data);

      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load quotes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // 搜尋關鍵字
  const searchQuotes = async (keyword) => {
    try {
      setLoading(true);

      const response = await searchQuotesByKeyword(keyword);

      setDisplayedQuotes(response.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to search quotes.");
    } finally {
      setLoading(false);
    }
  };

  // 分類呈現
  const filterByCategory = async (category) => {
    try {
      setLoading(true);

      if (!category) {
        await fetchQuotes();
        return;
      }

      const response = await getQuotesByCategory(category);

      setDisplayedQuotes(response.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to filter quotes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <Header
        onQuoteUpdated={fetchQuotes}
        onThemeChange={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              quotes={displayedQuotes}
              loading={loading}
              error={error}
              onSearch={searchQuotes}
              onCategoryChange={filterByCategory}
              onQuoteUpdated={fetchQuotes}
            />
          }
        />
        <Route
          path="/quotes"
          element={
            <QuotesPage
              quotes={displayedQuotes}
              loading={loading}
              error={error}
              onSearch={searchQuotes}
              onCategoryChange={filterByCategory}
              onQuoteUpdated={fetchQuotes}
            />
          }
        />
        <Route
          path="/quotes/:id"
          element={<QuoteDetailPage onQuoteUpdated={fetchQuotes} />}
        />
        <Route
          path="/categories"
          element={<CategoriesPage quotes={allQuotes} />}
        />
        <Route
          path="/category/:categoryName"
          element={<CategoryQuotesPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
