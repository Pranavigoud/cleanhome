import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src={logo} alt="LOKSAR" className="h-12 w-auto" />
            <span className="text-2xl font-bold" style={{ color: '#0D6B7D' }}>LOKSAR</span>
          </Link>

          {/* Navigation Menu - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition">
              Services
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition">
              How it Works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition">
              Testimonials
            </a>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition">
              About Us
            </Link>
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
              className="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#testimonials"
              className="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
