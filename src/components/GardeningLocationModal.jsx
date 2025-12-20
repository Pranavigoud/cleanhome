import React, { useState } from 'react';
import { X, MapPin } from 'lucide-react';

export default function GardeningLocationModal({ isOpen, onClose, onNext, onBack, progress = 0 }) {
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  // Leicester and nearby UK areas for validation
  const leicesterAreas = [
    'LE1', 'LE2', 'LE3', 'LE4', 'LE5', 'LE6', 'LE7', 'LE8', 'LE9', 'LE10', 'LE11', 'LE12', 'LE13', 'LE14', 'LE15', 'LE16', 'LE17', 'LE18', 'LE19',
    'Leicester', 'Leicestershire', 'Loughborough', 'Hinckley', 'Market Harborough', 'Coalville', 'Ashby', 'Melton'
  ];

  const validateLocation = (input) => {
    const upperInput = input.toUpperCase().trim();
    const isValid = leicesterAreas.some(area => upperInput.includes(area));
    return isValid;
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    if (value.trim() && !validateLocation(value)) {
      setError('Please enter a valid Leicester or nearby area postcode/location');
    } else {
      setError('');
    }
  };

  const handleContinue = () => {
    if (!location.trim()) {
      setError('Please enter a location');
      return;
    }
    if (!validateLocation(location)) {
      setError('Please enter a valid Leicester or nearby area postcode/location');
      return;
    }
    if (onNext) {
      onNext(location);
      setLocation('');
      setError('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full max-h-[80vh] overflow-hidden relative">
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
          <div className="mb-3">
            <div className="flex gap-2 mb-1">
              <div className="h-1.5 flex-1 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xs text-gray-500">Step 10 of 10</p>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold text-center text-gray-900 mb-2">
            Where do you need the Gardener?
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-gray-600 text-center mb-6">
            The postcode or town for the address where you want the Gardener.
          </p>

          {/* Location Input */}
          <div className="mb-6">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={location}
                onChange={handleLocationChange}
                placeholder="Enter your postcode or town (e.g., LE1, Leicester)"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none text-sm ${
                  error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                }`}
              />
            </div>
            {error && (
              <p className="text-red-500 text-xs mt-2">{error}</p>
            )}
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
              disabled={!location.trim() || error !== ''}
              className="px-6 py-2.5 rounded-lg font-semibold text-white text-sm transition-all"
              style={{
                backgroundColor: (location.trim() && error === '') ? '#0D6B7D' : '#D1D5DB',
                cursor: (location.trim() && error === '') ? 'pointer' : 'not-allowed',
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
