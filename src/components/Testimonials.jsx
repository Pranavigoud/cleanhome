import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      service: 'Deep Clean',
      location: 'New York',
      quote: '"The cleaner arrived exactly on time and did an incredible job. My kitchen hasn\'t looked this good since I moved in!"',
      avatar: '👩‍🦰',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mike Thompson',
      service: 'Standard Clean',
      location: 'Chicago',
      quote: '"Super easy booking process. I love that I don\'t have to keep cash on hand, and the pricing is very transparent."',
      avatar: '👨‍💼',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      service: 'Move-out Clean',
      location: 'Austin',
      quote: '"Move-out cleaning was a lifesaver. Got my full deposit back thanks to the amazing team at CleanHome."',
      avatar: '👩‍🦱',
      rating: 5,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Don't just take our word for it
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-800 text-base leading-relaxed mb-8 font-medium">
                {testimonial.quote}
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>

                {/* Details */}
                <div>
                  <p className="font-bold text-black text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.service} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
