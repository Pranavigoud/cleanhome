import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function NameModal({ isOpen, onClose, onBack, onContinue, currentStep = 14, totalSteps = 14 }) {
  const [name, setName] = useState('');
  const [isMarketingOptIn, setIsMarketingOptIn] = useState(true);
  const [error, setError] = useState('');

  const isValidName = (value) => {
    // Name validation - at least 2 characters, only letters, spaces, hyphens, and apostrophes
    const namePattern = /^[a-zA-Z\s'-]{2,}$/;
    return namePattern.test(value.trim());
  };

  const handleContinue = () => {
    if (!name.trim()) {
      setError('Please enter your full name');
      return;
    }

    if (!isValidName(name)) {
      setError('Please enter a valid full name');
      return;
    }

    setError('');
    onContinue({ name: name.trim(), marketingOptIn: isMarketingOptIn });
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                What is your name?
              </h2>
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
          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-700 font-medium mb-4">
            Please tell us your name:
          </p>

          {/* Name Input */}
          <div className="mb-6">
            {error && (
              <div className="mb-4 bg-red-100 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleContinue()}
              className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400 text-sm sm:text-base transition"
            />
          </div>

          {/* Marketing Checkbox */}
          <div className="mb-8 flex items-start gap-3">
            <input
              type="checkbox"
              id="marketing"
              checked={isMarketingOptIn}
              onChange={(e) => setIsMarketingOptIn(e.target.checked)}
              className="w-5 h-5 rounded cursor-pointer accent-blue-500 mt-0.5 flex-shrink-0"
            />
            <label htmlFor="marketing" className="text-sm text-gray-700 cursor-pointer">
              I am happy to receive occasional marketing emails from Bark
            </label>
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
