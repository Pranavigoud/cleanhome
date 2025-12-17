import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function CleaningTypeModal({ isOpen, onClose, onBack, onShowCurrentCleaner, currentStep = 6, totalSteps = 11 }) {
  const [selectedType, setSelectedType] = useState('');
  const [otherText, setOtherText] = useState('');

  const types = [
    { id: 'standard', label: 'Standard cleaning' },
    { id: 'deep', label: 'Deep cleaning' },
    { id: 'moveout', label: 'Move-out cleaning' },
    { id: 'other', label: 'Other' },
  ];

  const handleContinue = () => {
    if (selectedType) {
      onShowCurrentCleaner({ cleaningType: selectedType, other: otherText });
    }
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
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                What type of cleaning would you like?
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
          {/* Radio Options */}
          <div className="space-y-2 mb-6">
            {types.map((type) => (
              <div
                key={type.id}
                className="flex items-center border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition"
                onClick={() => setSelectedType(type.id)}
              >
                <input
                  type="radio"
                  name="type"
                  value={type.id}
                  checked={selectedType === type.id}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-4 h-4 text-blue-500 cursor-pointer flex-shrink-0"
                />
                <label className="ml-3 flex-1 cursor-pointer text-gray-700 font-medium text-xs sm:text-sm">
                  {type.label}
                </label>
              </div>
            ))}
          </div>

          {/* Other Input Field */}
          {selectedType === 'other' && (
            <div className="mb-6">
              <input
                type="text"
                placeholder="Please specify"
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm"
              />
            </div>
          )}

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
              disabled={!selectedType}
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
