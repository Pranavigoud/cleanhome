import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';

export default function EmailModal({ isOpen, onClose, onBack, onContinue, currentStep = 12, totalSteps = 12 }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const handleContinue = () => {
    if (!email.trim()) {
      setError('Please enter a valid email address');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    onContinue({ email: email.trim() });
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
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
                What email address would you like quotes sent to?
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
          {/* Email Input */}
          <div className="mb-6">
            {error && (
              <div className="mb-4 bg-red-100 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition">
              <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleContinue()}
                className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
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
        </div>
      </div>
    </div>
  );
}
