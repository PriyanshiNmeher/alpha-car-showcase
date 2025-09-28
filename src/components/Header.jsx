import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Alpha Motors</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Cars
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;