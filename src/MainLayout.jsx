import { Outlet } from "react-router-dom";
import Header from "./component/Header";

const MainLayout = ({ fetchQuotes, isDarkMode, toggleTheme }) => {
  return (
    <>
      <Header
        onQuoteUpdated={fetchQuotes}
        onThemeChange={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <Outlet />
    </>
  );
};

export default MainLayout;
