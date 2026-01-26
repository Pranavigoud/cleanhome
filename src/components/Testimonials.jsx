import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  React.useEffect(() => {
    handleScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);
  const testimonials = [
    {
      id: 1,
      name: 'David Smith',
      location: 'Leicester',
      quote: 'The team was punctual and very professional. My kitchen looks brand new! Highly recommend Mechvex.',
      initials: 'P',
      rating: 5,
    },
    {
      id: 2,
      name: 'Rahul Verma',
      location: 'Leicester',
      quote: 'Used their gardening service for my balcony garden. The gardener was knowledgeable and very polite.',
      initials: 'R',
      rating: 4.5,
    },
    {
      id: 3,
      name: 'George Williams',
      location: 'Leicester',
      quote: 'Move-in cleaning was a lifesaver. They handled everything from floor to ceiling. Great value for money.',
      initials: 'A',
      rating: 5,
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Leicester',
      quote: 'Excellent service and very affordable. The cleaning staff was courteous and did a thorough job.',
      initials: 'V',
      rating: 5,
    },
    {
      id: 5,
      name: 'John Jones',
      location: 'Leicester',
      quote: 'Fantastic gardening work! My garden has never looked better. Definitely booking again.',
      initials: 'N',
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Arjun Kapoor',
      location: 'Leicester',
      quote: 'Best cleaning service in the city. Professional, reliable, and reasonably priced.',
      initials: 'A',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-12 sm:py-16 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Left Arrow Button - Hidden on mobile */}
          <button
            onClick={() => {
              if (canScrollLeft) scroll('left');
            }}
            className={`hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 md:-translate-x-16 z-20 p-2 rounded-full transition-all duration-300 ${
              canScrollLeft
                ? 'text-white cursor-pointer'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            style={canScrollLeft ? { backgroundColor: '#0D6B7D' } : {}}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button - Hidden on mobile */}
          <button
            onClick={() => {
              if (canScrollRight) scroll('right');
            }}
            className={`hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 md:translate-x-16 z-20 p-2 rounded-full transition-all duration-300 ${
              canScrollRight
                ? 'text-white cursor-pointer'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            style={canScrollRight ? { backgroundColor: '#0D6B7D' } : {}}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 md:gap-8 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollBehavior: 'smooth' }}
          >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 flex-shrink-0 w-full sm:w-80 md:w-96"
            >
              {/* Customer Info Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                {/* Avatar with Initials */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-base sm:text-lg">
                    {testimonial.initials}
                  </span>
                </div>

                {/* Name and Location */}
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 text-sm sm:text-base truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm truncate">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                      i < Math.floor(testimonial.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : i < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
