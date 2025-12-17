import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function BestDaysModal({ isOpen, onClose, onBack, onShowSupplyMaterials, currentStep = 8, totalSteps = 11 }) {
  const [selectedDays, setSelectedDays] = useState([]);
  const [otherText, setOtherText] = useState('');

  const days = [
    { id: 'any', label: 'Any' },
    { id: 'monday', label: 'Monday' },
    { id: 'tuesday', label: 'Tuesday' },
    { id: 'wednesday', label: 'Wednesday' },
    { id: 'thursday', label: 'Thursday' },
    { id: 'friday', label: 'Friday' },
    { id: 'saturday', label: 'Saturday' },
    { id: 'sunday', label: 'Sunday' },
    { id: 'dontknow', label: "I don't know" },
    { id: 'other', label: 'Other' },
  ];

  const handleCheckboxChange = (id) => {
    setSelectedDays((prev) =>
      prev.includes(id) ? prev.filter((day) => day !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selectedDays.length > 0) {
      onShowSupplyMaterials({ bestDays: selectedDays, other: otherText });
    }
  };

  if (!isOpen) return null;

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50 p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        {/* Header with Progress */}
        <div className="bg-white border-b border-gray-200 p-5 sm:p-6 sticky top-0">
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
                When are the best days for cleaning?
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
          {/* Checkbox Options */}
          <div className="space-y-2 mb-6">
            {days.map((day) => (
              <div
                key={day.id}
                className="flex items-center border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition"
                onClick={() => handleCheckboxChange(day.id)}
              >
                <input
                  type="checkbox"
                  name="days"
                  value={day.id}
                  checked={selectedDays.includes(day.id)}
                  onChange={() => handleCheckboxChange(day.id)}
                  className="w-4 h-4 text-blue-500 cursor-pointer flex-shrink-0 rounded"
                />
                <label className="ml-3 flex-1 cursor-pointer text-gray-700 font-medium text-xs sm:text-sm">
                  {day.label}
                </label>
              </div>
            ))}
          </div>

          {/* Other Input Field */}
          {selectedDays.includes('other') && (
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
              disabled={selectedDays.length === 0}
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
