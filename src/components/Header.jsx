import React, { useState } from 'react';
import { Trash2, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: '#FFFDF6' }} className="shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-yellow-400 p-2 rounded">
              <Trash2 className="w-5 sm:w-6 h-5 sm:h-6 text-black" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-black">CleanHome</span>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#services" className="text-gray-800 hover:text-gray-600 font-medium text-sm lg:text-base transition">
              Services
            </a>
            <a href="#how-it-works" className="text-gray-800 hover:text-gray-600 font-medium text-sm lg:text-base transition">
              How it works
            </a>
            <a href="#pricing" className="text-gray-800 hover:text-gray-600 font-medium text-sm lg:text-base transition">
              Pricing
            </a>
            <a href="#reviews" className="text-gray-800 hover:text-gray-600 font-medium text-sm lg:text-base transition">
              Reviews
            </a>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0">
            <button className="text-gray-800 hover:text-gray-600 font-medium px-3 lg:px-4 py-2 text-sm transition">
              Login
            </button>
            <button className="bg-yellow-400 text-black font-bold px-5 lg:px-6 py-2 rounded-full hover:bg-yellow-500 transition text-sm">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            <a
              href="#services"
              className="block text-gray-800 hover:text-gray-600 font-medium px-3 py-2 rounded hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="block text-gray-800 hover:text-gray-600 font-medium px-3 py-2 rounded hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="block text-gray-800 hover:text-gray-600 font-medium px-3 py-2 rounded hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#reviews"
              className="block text-gray-800 hover:text-gray-600 font-medium px-3 py-2 rounded hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 text-gray-800 hover:text-gray-600 font-medium px-3 py-2 rounded hover:bg-gray-100 transition">
                Login
              </button>
              <button className="flex-1 bg-yellow-400 text-black font-bold px-3 py-2 rounded-full hover:bg-yellow-500 transition">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
