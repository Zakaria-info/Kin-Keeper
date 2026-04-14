import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-7xl font-bold text-red-500">404</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
