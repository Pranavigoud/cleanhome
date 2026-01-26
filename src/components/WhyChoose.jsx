import React from 'react';
import { Briefcase, Wallet, Leaf, Clock } from 'lucide-react';

export default function WhyChoose() {
  const features = [
    {
      id: 1,
      title: 'Verified & Trained Professionals',
      description: 'Every staff member undergoes rigorous background checks and training.',
      icon: Briefcase,
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      id: 2,
      title: 'Affordable & Transparent Pricing',
      description: 'No hidden costs. Pay for exactly what you see.',
      icon: Wallet,
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      id: 3,
      title: 'Eco-friendly Products',
      description: 'Safe for your kids, pets, and the environment.',
      icon: Leaf,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      id: 4,
      title: 'On-time Service Guarantee',
      description: 'We value your time. If we are late, you get a discount.',
      icon: Clock,
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Card with Illustration */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-sm h-64 sm:h-72 md:h-80 lg:h-96 flex flex-col items-center justify-center shadow-lg relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-teal-400 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-28 sm:w-40 h-28 sm:h-40 bg-teal-400 opacity-10 rounded-full translate-x-1/4 translate-y-1/4"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <p className="text-teal-100 text-sm sm:text-base md:text-lg font-medium mb-2">
                  Why choose
                </p>
                <h3 className="text-teal-100 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
                  Mechvex
                </h3>

                {/* Plant Illustration */}
                <div className="flex justify-center mb-2 sm:mb-4">
                  <div className="relative w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 flex items-center justify-center">
                    <svg viewBox="0 0 120 140" className="w-full h-full">
                      {/* Pot */}
                      <ellipse cx="60" cy="110" rx="35" ry="12" fill="white" opacity="0.9" />
                      <path
                        d="M 30 110 L 35 90 Q 60 85 85 90 L 90 110"
                        fill="white"
                        opacity="0.85"
                        stroke="white"
                        strokeWidth="0.5"
                      />

                      {/* Soil */}
                      <ellipse cx="60" cy="105" rx="30" ry="8" fill="#D2B48C" opacity="0.7" />

                      {/* Plant leaves */}
                      <g stroke="#7CB342" strokeWidth="2" fill="none" strokeLinecap="round">
                        {/* Left leaf */}
                        <path d="M 50 105 Q 35 75 40 40" />
                        <path d="M 50 105 Q 32 85 35 50" />

                        {/* Center leaf */}
                        <path d="M 60 105 Q 55 65 60 25" />
                        <path d="M 60 105 Q 65 65 60 25" />

                        {/* Right leaf */}
                        <path d="M 70 105 Q 85 75 80 40" />
                        <path d="M 70 105 Q 88 85 85 50" />
                      </g>

                      {/* Leaf details */}
                      <g fill="#7CB342" opacity="0.8">
                        <ellipse cx="42" cy="60" rx="3" ry="8" transform="rotate(-30 42 60)" />
                        <ellipse cx="58" cy="45" rx="3" ry="8" transform="rotate(-10 58 45)" />
                        <ellipse cx="78" cy="60" rx="3" ry="8" transform="rotate(30 78 60)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              Why Choose Mechvex?
            </h2>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="flex gap-3 sm:gap-4 md:gap-6 items-start"
                  >
                    {/* Icon */}
                    <div className={`${feature.iconBg} p-2.5 sm:p-3 md:p-4 rounded-lg flex-shrink-0`}>
                      <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${feature.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
