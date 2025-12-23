import React, { useState } from 'react';
import { X, Mail, User, Phone } from 'lucide-react';

export default function GardeningEmailModal({ isOpen, onClose, onNext, onBack, progress = 0 }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const isValidPhone = (value) => {
    const phonePattern = /^[\d\s\-\+\(\)]{10,}$/;
    return phonePattern.test(value.replace(/\s/g, ''));
  };

  const handleInputChange = (field, value) => {
    if (field === 'name') setName(value);
    else if (field === 'email') setEmail(value);
    else if (field === 'phone') setPhone(value);
    if (error) setError('');
  };

  const handleContinue = () => {
    if (!name.trim()) {
      setError('Please enter your full name');
      return;
    }

    if (!email.trim()) {
      setError('Please enter a valid email address');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!phone.trim()) {
      setError('Please enter a valid phone number');
      return;
    }

    if (!isValidPhone(phone)) {
      setError('Please enter a valid phone number (at least 10 digits)');
      return;
    }

    setError('');
    if (onNext) {
      onNext({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim()
      });
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full max-h-[90vh] overflow-hidden relative">
        {/* Close Button */}
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={onClose}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition duration-200"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-4">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex gap-2 mb-1">
              <div className="h-1.5 flex-1 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xs text-gray-500">Step 11 of 12</p>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
            Enter your details to receive quotes
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-gray-600 mb-5">
            We'll use this to send you quotes from professionals
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-4 bg-red-100 text-red-600 px-3 py-2 rounded-lg text-xs font-medium">
              {error}
            </div>
          )}

          {/* Full Name Input */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition">
              <User className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition">
              <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleContinue()}
                className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Phone Number Input */}
          <div className="mb-5">
            <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition">
              <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input
                type="tel"
                placeholder="+44 (123) 456 7890"
                value={phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleContinue()}
                className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400 text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-3">
            <button
              onClick={onBack}
              className="px-6 py-2.5 rounded-lg font-semibold text-gray-700 text-sm transition-all border border-gray-300 hover:bg-gray-50"
            >
              Back
            </button>
            <button
              onClick={handleContinue}
              disabled={!name.trim() || !email.trim() || !phone.trim() || error !== ''}
              className="px-6 py-2.5 rounded-lg font-semibold text-white text-sm transition-all"
              style={{
                backgroundColor: (name.trim() && email.trim() && phone.trim() && error === '') ? '#0D6B7D' : '#D1D5DB',
                cursor: (name.trim() && email.trim() && phone.trim() && error === '') ? 'pointer' : 'not-allowed',
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
