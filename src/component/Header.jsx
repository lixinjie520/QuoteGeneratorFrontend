import React, { useEffect, useState } from 'react'
import { FaBars,FaMoon,FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Header = () => {

  const navItems = [
    { name: "Quotes", to: "/" },
    { name: "Categories", to: "/categories" },
    { name: "+ Add Quote", to: "/quotes/add" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false); //點選後自動收合選單
  }
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  // 切換 dark class 到 html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  },[isDarkMode])
  const toggleTheme = () => {
    setIsDarkMode((prev)=>!prev)
  }
  return (
    <header className="flex w-full h-18 mx-auto justify-between items-center font-semibold  py-4 fixed top-0 left-0 right-0 z-50  shadow shadow-gray-400 bg-gray-300 dark:bg-gray-700 dark:text-white dark:shadow-gray-800 pr-4 ">
      <div className="flex justify-start ml-20 text-2xl bg-white cursor-pointer dark:bg-gray-700 dark:text-white rounded-2xl ">
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
          {isDarkMode ? <FaSun></FaSun> : <FaMoon></FaMoon>}
        </button>
        {/* Desktop Menu */}
        <ul className="md:flex gap-4 hidden ">
          {navItems.map((item, index) => (
            <Link key={index} to={item.to}>
              {item.name}{" "}
            </Link>
          ))}
        </ul>

        {/* Bars Icon - mobile only */}
        <div className="text-end pr-4 md:hidden pt-1.5">
          <button onClick={handleClick}>
            <FaBars className="cursor-pointer "></FaBars>
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col items-center text-lg font-normal py-2 bg-amber-950 text-white absolute top-14  right-0 w-32 md:hidden ">
            {navItems.map((item, index) => (
              <li key={index} className="mobile-menu" onClick={handleLinkClick}>
                <a href={item.href}> {item.name} </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header