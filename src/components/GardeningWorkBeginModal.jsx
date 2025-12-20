import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function GardeningWorkBeginModal({ isOpen, onClose, onNext, onBack, progress = 0 }) {
  const [selectedTime, setSelectedTime] = useState('');
  const [otherValue, setOtherValue] = useState('');

  const timeOptions = [
    { id: 'flexible', label: "I'm flexible" },
    { id: 'asap', label: 'As soon as possible' },
    { id: 'next-days', label: 'In the next few days' },
    { id: 'next-weeks', label: 'In the next few weeks' },
    { id: 'next-months', label: 'In next few months' },
    { id: 'other', label: 'Other' },
  ];

  const handleContinue = () => {
    if (selectedTime && onNext) {
      const value = selectedTime === 'other' ? otherValue : selectedTime;
      onNext(value);
      setSelectedTime('');
      setOtherValue('');
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
            <p className="text-xs text-gray-500">Step 8 of 10</p>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold text-center text-gray-900 mb-4">
            When do you want the work to begin?
          </h2>

          {/* Time Options */}
          <div className="space-y-2 mb-4 max-h-[35vh] overflow-y-auto scrollbar-hide">
            {timeOptions.map((option) => (
              <label
                key={option.id}
                className="flex items-center p-2.5 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <input
                  type="radio"
                  name="time"
                  value={option.id}
                  checked={selectedTime === option.id}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-5 h-5 cursor-pointer"
                />
                <span className="ml-3 text-sm text-gray-700">
                  {option.label}
                </span>
              </label>
            ))}
          </div>

          {/* Other Input */}
          {selectedTime === 'other' && (
            <div className="mb-4 p-2.5 bg-gray-50 rounded-lg border border-gray-300">
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Please specify:
              </label>
              <input
                type="text"
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
                placeholder="Enter when you want work to begin"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
          )}

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
              disabled={!selectedTime || (selectedTime === 'other' && !otherValue.trim())}
              className="px-6 py-2.5 rounded-lg font-semibold text-white text-sm transition-all"
              style={{
                backgroundColor: (selectedTime && (selectedTime !== 'other' || otherValue.trim())) ? '#0D6B7D' : '#D1D5DB',
                cursor: (selectedTime && (selectedTime !== 'other' || otherValue.trim())) ? 'pointer' : 'not-allowed',
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
