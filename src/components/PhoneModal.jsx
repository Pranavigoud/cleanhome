import React, { useState } from 'react';
import { X, Phone } from 'lucide-react';

export default function PhoneModal({ isOpen, onClose, onBack, onContinue, currentStep = 13, totalSteps = 13 }) {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const isValidPhone = (value) => {
    // UK phone number validation - accepts various formats
    const phonePattern = /^(?:(?:\+|00)44\s?|0)(?:\d\s?){9,10}$/;
    const cleanedPhone = value.replace(/\s/g, '');
    return phonePattern.test(cleanedPhone) || cleanedPhone.length >= 10;
  };

  const handleContinue = () => {
    if (!phone.trim()) {
      setError('Please enter a valid phone number');
      return;
    }

    if (!isValidPhone(phone)) {
      setError('Please enter a valid phone number');
      return;
    }

    setError('');
    onContinue({ phone: phone.trim() });
  };

  const handleInputChange = (e) => {
    setPhone(e.target.value);
    if (error) setError('');
  };

  if (!isOpen) return null;

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50 p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        {/* Header with Progress */}
        <div className="bg-white border-b border-gray-200 p-5 sm:p-6">
          {/* Progress Bar */}
          <div className="mb-6 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-700 ease-out rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {/* Close Button */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Your number is safe with us.
              </h2>
              <p className="text-sm text-gray-600">
                Some matches prefer to provide quotes over the phone to get more details.
              </p>
            </div>
            <button
              onClick={onClose}
              className="bg-gray-100 rounded-full p-1.5 hover:bg-gray-200 transition flex-shrink-0"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6">
          {/* Phone Input */}
          <div className="mb-6">
            {error && (
              <div className="mb-4 bg-red-100 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition">
              <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleContinue()}
                className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={onBack}
              className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-2.5 rounded-lg hover:bg-gray-50 transition text-sm"
            >
              Back
            </button>
            <button
              onClick={handleContinue}
              className="flex-1 bg-blue-500 text-white font-bold py-2.5 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
            >
              Continue
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-xs text-center text-gray-500">
            By clicking continue, you confirm your agreement to our{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
