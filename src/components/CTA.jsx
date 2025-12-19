import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#0D6B7D' }}>
      {/* Decorative Background Icons */}
      <div className="absolute top-10 right-10 opacity-10">
        <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor" color="white">
          <path d="M50 10 L60 40 L92 40 L67 60 L77 90 L50 70 L23 90 L33 60 L8 40 L40 40 Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="currentColor" color="white">
          <circle cx="50" cy="50" r="45" />
          <path d="M50 30 Q60 40 50 50 Q40 40 50 30" opacity="0.7" fill="currentColor" color="blue" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            A Cleaner Home & Greener Garden<br />in Just One Click
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-opacity-90 mb-6 sm:mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Join thousands of happy homeowners who trust Loksar for their home needs.
          </p>

          {/* Button */}
          <button className="bg-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full inline-flex items-center justify-center hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg mb-10 sm:mb-12 text-base sm:text-lg font-semibold" style={{ color: '#0D6B7D' }}>
            Contact Us
          </button>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">Safe</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">Verified</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
