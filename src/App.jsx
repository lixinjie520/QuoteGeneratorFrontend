import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuoteDetailPage from "./pages/QuoteDetailPage";
import AddQuotePage from "./component/AddQuoteForm";
import EditQuotePage from "./component/EditQuoteForm";
import CategoriesPage from "./pages/CategoriesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Toaster } from "react-hot-toast";
import categoryQuotesPage from "./pages/categoryQuotesPage";
import Header from "./component/Header";
import axios from "axios";

function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [displayedQuotes, setDisplayedQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const url = "http://localhost:8080/api/v1/quotes";

  // 取得所有資料
  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);

      setAllQuotes(response.data);
      setDisplayedQuotes(response.data);

      setError("");
    } catch (error) {
      setError("Failed to load quotes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // 搜尋關鍵字
  const searchQuotes = async (keyword) => {
    try {
      setLoading(true);

      const response = await axios.get(url, {
        params: { keyword },
      });

      setDisplayedQuotes(response.data);
      setError("");
    } catch (error) {
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

      const response = await axios.get(url, {
        params: { category },
      });

      setDisplayedQuotes(response.data);
      setError("");
    } catch (error) {
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
      <Header />
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
            />
          }
        />
        <Route path="/quotes/:id" element={<QuoteDetailPage />} />
        <Route
          path="/categories"
          element={<CategoriesPage quotes={allQuotes} />}
        />
        <Route
          path="/categories/:categoryName"
          element={<categoryQuotesPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
