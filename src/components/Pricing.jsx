import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      id: 1,
      title: 'Studio / 1BR',
      price: '$99',
      duration: 'Approx. 2hours',
      featured: false,
      features: [
        '1 Bathroom',
        'Kitchen & Living Room',
        'Standard Cleaning Supplies',
      ],
      buttonText: 'Choose Plan',
    },
    {
      id: 2,
      title: '2 Bedroom',
      price: '$149',
      duration: 'Approx. 3.5 hours',
      featured: true,
      badge: 'BEST VALUE',
      features: [
        'Up to 2 Bathrooms',
        'Kitchen, Dining & Living',
        'Bed Linen Change',
        'Eco-friendly Products',
      ],
      buttonText: 'Book Now',
    },
    {
      id: 3,
      title: '3+ Bedroom',
      price: '$199+',
      duration: '4+ hours',
      featured: false,
      features: [
        '2.5+ Bathrooms',
        'Full Family Home',
        'Priority Scheduling',
      ],
      buttonText: 'Choose Plan',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
            Simple, transparent pricing
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            No hidden fees. What you see is what you pay.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-center">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl transition-all duration-300 ${
                plan.featured
                  ? 'md:scale-105 border-2 border-yellow-400 shadow-2xl'
                  : 'border border-gray-200 shadow-lg hover:shadow-xl'
              } ${plan.featured ? 'bg-white' : 'bg-gray-50'}`}
            >
              {/* Best Value Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-yellow-400 text-black font-bold px-4 py-1 rounded-full text-sm">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className={`p-8 ${plan.featured ? 'pt-12' : ''}`}>
                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-4">
                  {plan.title}
                </h3>

                {/* Price Section */}
                <div className="mb-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-black">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">/ clean</span>
                  </div>
                </div>

                {/* Duration */}
                <p className="text-sm text-gray-500 mb-8">
                  {plan.duration}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                    plan.featured
                      ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                      : 'border-2 border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
