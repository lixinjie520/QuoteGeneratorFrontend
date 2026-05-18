import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

const MainLayout = ({ fetchQuotes, isDarkMode, toggleTheme }) => {
  return (
    <>
      <Header
        onQuoteUpdated={fetchQuotes}
        onThemeChange={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <main className="flex-1 pt-18">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
