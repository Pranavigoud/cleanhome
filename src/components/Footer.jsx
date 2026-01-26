import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Footer() {
  const serviceLinks = [
    { label: 'Cleaning Services', href: '#services' },
    { label: 'Gardening Services', href: '#services' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img src={logo} alt="Mechvex" className="h-8 sm:h-10 w-auto" />
              {/* <span className="text-xl sm:text-2xl font-bold text-white">Mechvex</span> */}
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Professional home cleaning and gardening services tailored for modern living.
            </p>
          </div>

          {/* Services Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-sm sm:text-base mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-sm sm:text-base mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.href === '/about' ? (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-sm sm:text-base mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+447926999783" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm break-all">
                  +44 7926 999 783
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@mechvex.com" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm break-all">
                  contact@mechvex.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">Leicester, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-xs">
              © 2025 Mechvex Professional Cleaning. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://wa.me/447926999783"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
