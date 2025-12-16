import React from 'react';
import { Calendar, Building2, Briefcase } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Book Online',
      description: 'Select your date and time in 60 seconds. Secure payment and instant confirmation.',
      icon: Calendar,
    },
    {
      id: 2,
      title: 'We Clean',
      description: 'Our vetted professional arrives equipped with eco-friendly supplies.',
      icon: Building2,
    },
    {
      id: 3,
      title: 'You Relax',
      description: 'Come home to a sparkling house and enjoy your free time.',
      icon: Briefcase,
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            Cleaning made simple
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            We've optimized every step of the process so you can reclaim your time.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Dashed connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="flex flex-col items-center text-center relative z-10">
                  {/* Icon Circle */}
                  <div className="mb-8 flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow mb-6">
                      <IconComponent className="w-12 h-12 text-yellow-400" strokeWidth={1.5} />
                    </div>
                    
                    {/* Dashed lines connecting to center on mobile */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden w-0.5 h-8 bg-dashed border-l-2 border-dashed border-gray-300 mb-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {step.id}. {step.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
