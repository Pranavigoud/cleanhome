import React from 'react';
import { User, Calendar, Sofa } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Choose Service',
      description: 'Select from our wide range of cleaning or gardening packages.',
      icon: User,
      borderColor: 'border-teal-600',
      iconColor: 'text-teal-600',
      borderColorHex: '#0D6B7D',
      iconColorHex: '#0D6B7D',
    },
    {
      id: 2,
      title: 'Select Date & Time',
      description: 'Pick a convenient slot. We are available on weekends too!',
      icon: Calendar,
      borderColor: 'border-teal-600',
      iconColor: 'text-teal-600',
      borderColorHex: '#0D6B7D',
      iconColorHex: '#0D6B7D',
    },
    {
      id: 3,
      title: 'Sit Back & Relax',
      description: 'Our professionals will handle the work while you enjoy your time.',
      icon: Sofa,
      borderColor: 'border-green-600',
      iconColor: 'text-green-600',
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 py-12 sm:py-16 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            How It Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Easy booking process in just 3 simple steps
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting lines - hidden on mobile */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 flex items-center justify-between px-24">
            <div className="flex-1 h-0.5 bg-gray-300"></div>
            <div className="flex-1 h-0.5 bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon Circle */}
                  <div className="mb-6 sm:mb-8 relative z-10">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 ${step.borderColor} flex items-center justify-center bg-white hover:shadow-lg transition-shadow`}>
                      <IconComponent className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${step.iconColor}`} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title with number */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3">
                    {step.id}. {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
