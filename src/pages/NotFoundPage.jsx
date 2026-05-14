import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
      <h1 className="text-7xl font-bold text-green-500">404</h1>

      <p className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
        Page Not Found
      </p>

      <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
