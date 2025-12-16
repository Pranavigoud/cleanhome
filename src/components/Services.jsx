import React from 'react';
import { Home, Sparkles, Box, Check } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Standard Clean',
      description: 'Perfect for maintaining a tidy home. Includes dusting, mopping, vacuuming, and bathroom sanitation.',
      icon: Home,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      features: [
        'Weekly / Bi-weekly',
        '2-3 hours duration',
      ],
      popular: false,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      title: 'Deep Clean',
      description: 'A thorough top-to-bottom clean. We tackle baseboards, inside appliances, and detailed scrubbing.',
      icon: Sparkles,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      features: [
        'One-time or Monthly',
        '4-6 hours duration',
      ],
      popular: true,
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      title: 'Move-in / Move-out',
      description: 'Ensure your security deposit is returned or start fresh in your new home. Empty home requirement.',
      icon: Box,
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-50',
      features: [
        'Includes cabinets',
        'Fridge & Oven interior',
      ],
      popular: false,
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 sm:mb-16 px-2 sm:px-0">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-3">
              Tailored to your needs
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Choose the perfect clean for your home. Flexible options for every lifestyle.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#pricing" className="inline-flex items-center gap-2 text-black font-semibold hover:text-gray-600 transition text-sm sm:text-base">
              View full pricing
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                  service.popular
                    ? 'md:scale-105 md:shadow-2xl border-2 border-yellow-400'
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-yellow-400 text-black font-bold px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card Background */}
                <div className="bg-white">
                  {/* Image Section */}
                  <div className="h-40 sm:h-48 md:h-56 w-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8">
                    {/* Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${service.bgColor}`}>
                        <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
