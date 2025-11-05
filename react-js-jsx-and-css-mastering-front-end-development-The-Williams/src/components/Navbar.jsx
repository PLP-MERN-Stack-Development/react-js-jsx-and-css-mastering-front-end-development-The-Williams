// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-gray-200 dark:bg-gray-900 py-4 shadow">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          My React Task Manager
        </h1>

        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
