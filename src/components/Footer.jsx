import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  const serviceLinks = [
    { label: 'Deep Cleaning', href: '#' },
    { label: 'Sofa & Carpet', href: '#' },
    { label: 'Garden Maintenance', href: '#' },
    { label: 'Pest Control', href: '#' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="LOKSAR" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white">LOKSAR</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional home cleaning and gardening services tailored for modern living.
            </p>
          </div>

          {/* Services Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-base mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-base mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.href === '/about' ? (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
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
            <h3 className="text-white font-semibold text-base mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 9876 543 210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@loksar.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  hello@loksar.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-xs">
              © 2024 Loksar Professional Cleaning. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
