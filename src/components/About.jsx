import React from 'react';
import { Award, Users, Target, Leaf, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function About() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const values = [
    {
      id: 1,
      title: 'Quality Service',
      description: 'We maintain the highest standards of cleanliness and professionalism in every job.',
      icon: Award,
    },
    {
      id: 2,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We listen, adapt, and deliver excellence.',
      icon: Users,
    },
    {
      id: 3,
      title: 'Eco-Conscious',
      description: 'We use environment-friendly products that are safe for your family and pets.',
      icon: Leaf,
    },
    {
      id: 4,
      title: 'Reliability',
      description: 'Punctual, trustworthy, and consistent in delivering exceptional results.',
      icon: Target,
    },
  ];

  const team = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      bio: 'With 15+ years in the cleaning industry, Rajesh founded LOKSAR to revolutionize home care.',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Head of Operations',
      bio: 'Ensures seamless service delivery and maintains our high quality standards across all operations.',
    },
    {
      id: 3,
      name: 'Amit Patel',
      position: 'Training Director',
      bio: 'Oversees rigorous training programs for all service professionals to ensure excellence.',
    },
  ];

  const stats = [
    { label: 'Happy Customers', value: '2000+' },
    { label: 'Services Completed', value: '15000+' },
    { label: 'Team Members', value: '50+' },
    { label: 'Years of Experience', value: '15+' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <img src={logo} alt="LOKSAR" className="h-10 sm:h-12 w-auto" />
              <span className="text-xl sm:text-2xl font-bold" style={{ color: '#0D6B7D' }}>LOKSAR</span>
            </Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium text-xs sm:text-sm transition">
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-10 sm:py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
              About <span style={{ color: '#0D6B7D' }}>LOKSAR</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-3 sm:px-0">
              Revolutionizing home care with professional, eco-friendly, and reliable cleaning and gardening services across Leicester, UK.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-10 sm:py-16 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                LOKSAR was founded with a simple mission: to make professional home cleaning and gardening services accessible and affordable for every household in India.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                What started as a small team of passionate cleaners has grown into a trusted network of professionals serving thousands of happy customers across major Indian cities. We believe that a clean home and a beautiful garden are the foundation of a happy life.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Today, LOKSAR stands as a beacon of quality, reliability, and sustainability in the home care industry, setting new standards through innovation, professionalism, and customer-centric services.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 rounded-3xl h-56 sm:h-72 md:h-80 lg:h-96 shadow-2xl flex items-center justify-center">
              <div className="text-center text-white px-4">
                <div className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4">🏡</div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold">Trusted by thousands of happy homeowners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-10 sm:py-16 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2" style={{ color: '#0D6B7D' }}>
                  {stat.value}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-10 sm:py-16 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4"
                  style={{ borderTopColor: '#0D6B7D' }}
                >
                  <div className="mb-3 sm:mb-4">
                    <IconComponent className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12" style={{ color: '#0D6B7D' }} />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-50 py-10 sm:py-16 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
              Passionate professionals dedicated to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <div className="text-5xl sm:text-6xl">👤</div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {member.name}
                  </h3>
                  <p className="font-semibold text-teal-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 sm:py-16 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              Why Choose LOKSAR?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              'Verified and trained professional staff with rigorous background checks',
              'Eco-friendly products that are safe for children, pets, and the environment',
              'Transparent pricing with no hidden costs',
              'On-time service guarantee with compensation if we\'re late',
              '24/7 customer support for any queries or concerns',
              'Flexible scheduling including weekends and holidays',
              'Quality assurance team for consistent excellence',
              'Customized service packages tailored to your needs',
            ].map((reason, index) => (
              <div key={index} className="flex gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" style={{ color: '#0D6B7D' }} />
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Loksar Professional Cleaning. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
