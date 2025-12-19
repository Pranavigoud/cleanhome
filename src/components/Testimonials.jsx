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
      name: 'Priya Sharma',
      location: 'Mumbai',
      quote: 'The team was punctual and very professional. My kitchen looks brand new! Highly recommend Loksar.',
      initials: 'P',
      rating: 5,
    },
    {
      id: 2,
      name: 'Rahul Verma',
      location: 'Bangalore',
      quote: 'Used their gardening service for my balcony garden. The gardener was knowledgeable and very polite.',
      initials: 'R',
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Anjali Gupta',
      location: 'Delhi NCR',
      quote: 'Move-in cleaning was a lifesaver. They handled everything from floor to ceiling. Great value for money.',
      initials: 'A',
      rating: 5,
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Pune',
      quote: 'Excellent service and very affordable. The cleaning staff was courteous and did a thorough job.',
      initials: 'V',
      rating: 5,
    },
    {
      id: 5,
      name: 'Neha Patel',
      location: 'Hyderabad',
      quote: 'Fantastic gardening work! My garden has never looked better. Definitely booking again.',
      initials: 'N',
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Arjun Kapoor',
      location: 'Kolkata',
      quote: 'Best cleaning service in the city. Professional, reliable, and reasonably priced.',
      initials: 'A',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={() => {
              if (canScrollLeft) scroll('left');
            }}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 p-2 rounded-full transition-all duration-300 ${
              canScrollLeft
                ? 'text-white cursor-pointer'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            style={canScrollLeft ? { backgroundColor: '#0D6B7D' } : {}}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => {
              if (canScrollRight) scroll('right');
            }}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 p-2 rounded-full transition-all duration-300 ${
              canScrollRight
                ? 'text-white cursor-pointer'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            style={canScrollRight ? { backgroundColor: '#0D6B7D' } : {}}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollBehavior: 'smooth' }}
          >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex-shrink-0 w-full sm:w-96"
            >
              {/* Customer Info Header */}
              <div className="flex items-center gap-4 mb-6">
                {/* Avatar with Initials */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {testimonial.initials}
                  </span>
                </div>

                {/* Name and Location */}
                <div>
                  <p className="font-bold text-gray-900 text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
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
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
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
