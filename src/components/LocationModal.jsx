import React, { useState } from 'react';
import { X, MapPin } from 'lucide-react';

export default function LocationModal({ isOpen, onClose, onBack, onContinue, onShowSuccess, currentStep = 11, totalSteps = 11 }) {
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  // Validation Logic
  const leicesterAreas = [
    'LE1', 'LE2', 'LE3', 'LE4', 'LE5', 'LE6', 'LE7', 'LE8', 'LE9', 'LE10', 'LE11', 'LE12', 'LE13', 'LE14', 'LE15', 'LE16', 'LE17', 'LE18', 'LE19',
    'Leicester', 'Leicestershire', 'Loughborough', 'Hinckley', 'Market Harborough', 'Coalville', 'Ashby', 'Melton'
  ];

  const validateLocation = (input) => {
    const upperInput = input.toUpperCase().trim();
    // Check if input contains any of the LE prefixes or town names
    return leicesterAreas.some(area => upperInput.includes(area.toUpperCase()));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    
    // Clear error if valid, or show error if user is typing something clearly wrong (optional, usually better to validate on submit)
    if (error) setError('');
  };

  const handleContinue = () => {
    if (!location.trim()) {
      setError('Please enter a location');
      return;
    }
    
    if (!validateLocation(location)) {
      setError('Sorry, we currently only serve Leicester and surrounding areas (LE postcodes).');
      return;
    }
    
    setError('');
    onShowSuccess({ location: location.trim() });
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
                Where do you need the Cleaner?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                The postcode or town for the address where you want the Cleaner.
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
          {/* Location Input */}
          <div className="mb-6">
            {error && (
              <div className="mb-4 bg-red-100 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition">
              <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Enter postcode (e.g. LE1)"
                value={location}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleContinue()}
                className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              We currently serve Leicester and surrounding LE postcodes.
            </p>
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