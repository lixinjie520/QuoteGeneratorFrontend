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
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const url = "http://localhost:8080/api/v1/quotes";

  useEffect(() => {
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
    fetchQuotes();
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quotes/:id" element={<QuoteDetailPage />} />
        <Route
          path="/categories"
          element={<CategoriesPage quotes={quotes} />}
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
