import axios from "axios";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import toast from "react-hot-toast";

const EditQuoteForm = ({ quote, onClose, onUpdate, onQuoteUpdated }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    content: `${quote.content}`,
    author: `${quote.author}`,
    category: `${quote.category}`,
  });
  const url = "http://localhost:8080/api/v1/quotes";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editData = async () => {
    setLoading(true);
    try {
      const response = await axios.put(`${url}/${quote.id}`, formData);
      toast.success("Successfully updated.");
      onUpdate(response.data);//更新詳細頁
      onQuoteUpdated()//更新首頁
      setFormData({
        content: "",
        author: "",
        category: "",
      });
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update quote.Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editData();
  };
  // 使用 Portal 將 Modal 掛載到 body 下
  return createPortal(
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* 黑色背景遮罩 */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 表單容器 */}
      <div className="relative w-full max-w-lg bg-amber-50 dark:bg-gray-800 border border-amber-100 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden transition-all">
        {/* 右上角關閉按鈕 */}
        <div
          onClick={onClose}
          className="absolute top-2 right-2 rounded-full w-8 h-8 flex justify-center items-center text-xl text-gray-500 hover:text-gray-700 dark:hover:text-white cursor-pointer bg-gray-200 dark:bg-gray-700 transition duration-200"
        >
          ✕
        </div>

        {/* 狀態顯示：載入中或錯誤 */}
        {loading && (
          <div className="absolute inset-0 z-10 bg-white/80 dark:bg-gray-800/80 flex items-center justify-center text-green-600 font-bold">
            正在更新...
          </div>
        )}

        <form onSubmit={handleSubmit} className="py-10 px-6">
          <h1 className="text-center font-bold mb-8 text-2xl bg-amber-200 dark:bg-amber-600 dark:text-white px-4 py-2 rounded shadow-sm">
            Add New Quote
          </h1>

          <div className="space-y-5">
            {/* content */}
            <div>
              <label
                htmlFor="content"
                className="text-lg font-medium block dark:text-gray-200 mb-2"
              >
                Content:
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                id="content"
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-amber-400 outline-none h-32"
              />
            </div>

            {/* author */}
            <div>
              <label
                htmlFor="author"
                className="text-lg font-medium block dark:text-gray-200 mb-2"
              >
                Author:
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                id="author"
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
              />
            </div>

            {/* category & buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-8">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full sm:w-auto border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg text-center outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="">-- Category --</option>
                <option value="Motivation">Motivation</option>
                <option value="Growth">Growth</option>
                <option value="Wisdom">Wisdom</option>
                <option value="Learning">Learning</option>
                <option value="Action">Action</option>
              </select>

              <div className="flex gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-6 py-2 rounded-lg bg-red-300 text-red-600 hover:bg-red-500 hover:text-white transition duration-200 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-none px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition duration-200 font-semibold shadow-md"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
};
export default EditQuoteForm;
