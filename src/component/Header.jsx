import React, { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddQuoteForm from "./AddQuoteForm";

const Header = ({ onQuoteUpdated, onThemeChange, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu 狀態
  const [isFormOpen, setIsFormOpen] = useState(false); // 表單彈窗狀態

  const navItems = [
    { name: "Quotes", to: "/quotes" },
    { name: "Categories", to: "/categories" },
    { name: "+ Add Quote", to: "#", isModal: true },
  ];

  const handleItemClick = (e, item) => {
    if (item.isModal) {
      e.preventDefault(); // 阻止路由跳轉
      setIsFormOpen(true); // 開啟彈窗
      setIsOpen(false); // 如果是手機版，關閉選單
    } else {
      setIsFormOpen(false);
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); //點選後自動收合選單
  };

  return (
    <>
      <header className="flex w-full h-18 mx-auto justify-between items-center font-semibold  py-4 fixed top-0 left-0 right-0 z-50  shadow shadow-gray-400 bg-gray-100 dark:bg-gray-700 dark:text-white dark:shadow-gray-800 pr-4 ">
        {/* Logo部分 */}
        <div className="flex justify-start ml-6 lg:ml-20 text-2xl bg-white cursor-pointer dark:bg-gray-700 dark:text-white rounded-2xl ">
          <Link
            to="/"
            className="w-38 bg-linear-to-r from-green-400 via-amber-500  to-blue-400 flex justify-center font-bold text-xl py-2 text-black/50 dark:text-white items-center rounded-2xl "
          >
            Quote Hub
          </Link>
        </div>

        {/* 導航欄 */}
        <nav className="text-xl relative flex">
          {/* Desktop Menu */}
          <button
            className="pr-3 text-lg cursor-pointer focus:outline-none"
            onClick={toggleTheme}
          >
            {onThemeChange ? <FaSun /> : <FaMoon />}
          </button>

          <ul className="md:flex gap-4 hidden ">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                onClick={(e) => handleItemClick(e, item)}
              >
                {item.name}
              </Link>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div className="text-end md:hidden pt-1.5">
            <button onClick={handleClick}>
              <FaBars className="cursor-pointer "></FaBars>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="flex flex-col items-center text-lg font-normal py-2 bg-gray-600 text-white absolute top-14  -right-3 w-32 md:hidden ">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.to} onClick={(e) => handleItemClick(e, item)}>
                    {" "}
                    {item.name}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>
      {/* 懸浮表單component */}
      <AddQuoteForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onQuoteUpdated={onQuoteUpdated}
      />
    </>
  );
};

export default Header;
