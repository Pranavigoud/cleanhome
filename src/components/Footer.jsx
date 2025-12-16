import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Safety', href: '#' },
      { label: 'Cancellation', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  };

  const socialLinks = [
    { label: 'FB', href: '#' },
    { label: 'TW', href: '#' },
    { label: 'IG', href: '#' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-yellow-400 p-2 rounded">
                <Trash2 className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-black">CleanHome</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Making homes happier, one clean at a time. Professional, reliable, and trustworthy.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-black mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-black mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-black mb-6">Stay in the loop</h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-gray-800 placeholder-gray-400"
              />
              <button className="w-full bg-black text-white font-bold py-3 rounded-full hover:bg-gray-900 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Copyright */}
            <p className="text-gray-600 text-sm">
              © 2023 CleanHome Inc. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mt-6 md:mt-0">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-black transition-colors font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
