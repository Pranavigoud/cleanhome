import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import ContactModal from './ContactModal';

export default function CTA() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-24 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#0D6B7D' }}>
      {/* Decorative Background Icons */}
      <div className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-8 md:right-10 opacity-10">
        <svg className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32" viewBox="0 0 100 100" fill="currentColor" color="white">
          <path d="M50 10 L60 40 L92 40 L67 60 L77 90 L50 70 L23 90 L33 60 L8 40 L40 40 Z" />
        </svg>
      </div>
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-8 md:left-10 opacity-10">
        <svg className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24" viewBox="0 0 100 100" fill="currentColor" color="white">
          <circle cx="50" cy="50" r="45" />
          <path d="M50 30 Q60 40 50 50 Q40 40 50 30" opacity="0.7" fill="currentColor" color="blue" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
            A Cleaner Home & Greener Garden<br className="hidden sm:block" />in Just One Click
          </h2>

          {/* Subheading */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-opacity-90 mb-6 sm:mb-8 px-2 sm:px-0" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Join thousands of happy homeowners who trust Loksar for their home needs.
          </p>

          {/* Button */}
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-white font-bold px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 rounded-full inline-flex items-center justify-center hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base md:text-lg font-semibold" style={{ color: '#0D6B7D' }}>
            Contact Us
          </button>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap px-2">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm md:text-base font-medium">Safe</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm md:text-base font-medium">Verified</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm md:text-base font-medium">Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
}
