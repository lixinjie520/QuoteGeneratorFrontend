import axios from "axios";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DeleteForm = ({ quote, onClose }) => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const url = "http://localhost:8080/api/v1/quotes";

  const DeleteData = async () => {
    setLoading(true)
    try {
      await axios.delete(`${url}/${quote.id}`)
      toast.success("Quote deleted successfully!");
      onClose()
      navigate("/")
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete quote.Please try again later.");
      onClose()
    } finally {
      setLoading(false)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    DeleteData();
  };
  return createPortal(
    <div className="fixed inset-0  z-100 flex justify-center items-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      {/* 表單容器 */}
      <div className="relative w-full max-w-md bg-amber-50 dark:bg-gray-800 border border-amber-100 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden transition-all">
        {/* 右上角關閉按鈕 */}
        <div
          onClick={onClose}
          className="absolute top-2 right-2 rounded-full w-8 h-8 flex justify-center items-center text-xl text-gray-500 hover:text-gray-700 dark:hover:text-white cursor-pointer bg-gray-200 dark:bg-gray-700 transition duration-200 "
        >
          ✕
        </div>

        <form onSubmit={handleSubmit} className="py-10 px-6">
          <p className="text-center mb-6 text-lg dark:bg-amber-600 dark:text-white px-4 py-2">
            Are you sure you want to delete this quote?
          </p>
          <div className="flex justify-center items-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 sm:flex-none px-4 py-1 rounded-lg bg-red-300 text-red-600 hover:bg-red-500 hover:text-white transition duration-200 font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 sm:flex-none px-4 py-1 rounded-lg bg-green-300 text-green-600 hover:bg-green-500 hover:text-white transition duration-200 font-semibold cursor-pointer"
            >
              Yes
            </button>

            {loading ? "Deleting..." : ""}
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default DeleteForm;
