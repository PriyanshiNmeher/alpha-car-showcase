import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Alpha Motors</h3>
          <p className="text-gray-400 mb-6">Your trusted partner in premium automotive experiences</p>
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-sm">© 2024 Alpha Motors. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;