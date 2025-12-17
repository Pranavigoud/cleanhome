import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function PropertyTypeModal({ isOpen, onClose, onContinue, onShowFrequency, currentStep = 1, totalSteps = 11 }) {
  const [selectedProperty, setSelectedProperty] = useState('');
  const [otherText, setOtherText] = useState('');

  const properties = [
    { id: 'bungalow', label: 'Bungalow' },
    { id: 'commercial', label: 'A Commercial property' },
    { id: 'flat', label: 'Flat or Apartment' },
    { id: 'house', label: 'House' },
    { id: 'other', label: 'Other' },
  ];

  const handleContinue = () => {
    if (selectedProperty) {
      onShowFrequency({ type: selectedProperty, other: otherText });
    }
  };

  if (!isOpen) return null;

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50 p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        {/* Image Header */}
        <div className="relative h-28 bg-gradient-to-r from-blue-400 to-blue-600 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
            alt="Cleaning supplies"
            className="w-full h-full object-cover"
          />
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white rounded-full p-1.5 hover:bg-gray-100 transition shadow-lg"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5">
          {/* Progress Bar */}
          <div className="mb-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-700 ease-out rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {/* Heading */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
            What kind of property needs cleaning?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-4">
            Get quotes for cleaners today!
          </p>

          {/* Radio Options */}
          <div className="space-y-1.5 mb-4">
            {properties.map((property) => (
              <div
                key={property.id}
                className="flex items-center border border-gray-200 rounded-lg p-2.5 sm:p-3 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition"
                onClick={() => setSelectedProperty(property.id)}
              >
                <input
                  type="radio"
                  name="property"
                  value={property.id}
                  checked={selectedProperty === property.id}
                  onChange={(e) => setSelectedProperty(e.target.value)}
                  className="w-4 h-4 text-blue-500 cursor-pointer flex-shrink-0"
                />
                <label className="ml-2.5 sm:ml-3 flex-1 cursor-pointer text-gray-700 font-medium text-xs sm:text-sm">
                  {property.label}
                </label>
              </div>
            ))}
          </div>

          {/* Other Input Field */}
          {selectedProperty === 'other' && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Please specify"
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
                className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm"
              />
            </div>
          )}

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!selectedProperty}
            className="w-full bg-blue-500 text-white font-bold py-2 sm:py-2.5 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
