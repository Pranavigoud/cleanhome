import React, { useState } from 'react';
import { ArrowRight, MapPin, Check } from 'lucide-react';

export default function Hero() {
  const [zipCode, setZipCode] = useState('');

  return (
    <section style={{ backgroundColor: '#FFFDF6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span className="font-bold text-sm">
                #1 RATED CLEANING SERVICE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Sparkling Homes,<br />
              <span className="relative">
                Zero Stress.
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-16 sm:w-24 h-1 bg-yellow-400"></span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Experience the joy of a spotless home without lifting a finger. Professional, vetted cleaners starting at just $89.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="flex-1 flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-full min-h-[48px] sm:min-h-auto">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
                />
              </div>
              <button className="bg-yellow-400 text-black font-bold px-6 sm:px-8 py-3 rounded-full hover:bg-yellow-500 transition flex items-center justify-center gap-2 whitespace-nowrap min-h-[48px] text-sm sm:text-base active:scale-95">
                Get Started
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>

            {/* Testimonials Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              {/* Avatar Group */}
              <div className="flex -space-x-3">
                {/* Avatar placeholders - replace with actual images */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-700 font-bold text-sm">
                  +2k
                </div>
              </div>
              <p className="text-gray-700 font-medium">
                Trusted by 2,000+ happy neighbors
              </p>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative hidden lg:block">
            {/* Main Image Container */}
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Hero Image */}
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Modern minimalist living room with clean design and natural light"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Satisfaction Badge */}
            <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-lg p-4 border-2 border-green-500">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 p-2 rounded-full">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">
                    100% Satisfaction
                  </p>
                  <p className="text-gray-600 text-xs">
                    Money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
