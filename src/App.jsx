import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuoteDetailPage from "./pages/QuoteDetailPage";
import AddQuotePage from "./component/AddQuoteForm";
import EditQuotePage from "./component/EditQuoteForm";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" toastOptions={{duration:3000}} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quotes/:id" element={<QuoteDetailPage />} />
        <Route path="/categories" element={<CategoryPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
