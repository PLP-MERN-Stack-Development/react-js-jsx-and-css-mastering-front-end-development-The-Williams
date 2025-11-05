import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <Navbar />
    <main className="flex-grow max-w-7xl mx-auto p-6 w-full">{children}</main>
    <Footer />
  </div>
);

export default Layout;
