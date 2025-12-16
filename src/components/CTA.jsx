import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Container */}
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl sm:rounded-4xl shadow-2xl overflow-hidden">
          {/* Content */}
          <div className="relative z-10 px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 text-center">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready for a spotless home?
            </h2>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-10 max-w-2xl mx-auto">
              Join thousands of happy customers who have reclaimed their weekends.
            </p>

            {/* Button */}
            <button className="bg-yellow-400 text-black font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full inline-flex items-center gap-2 hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg mb-4 sm:mb-6 min-h-[48px] text-sm sm:text-base">
              Book Your Clean Now
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>

            {/* Footer Text */}
            <p className="text-gray-400 text-xs sm:text-sm">
              No credit card required for quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
