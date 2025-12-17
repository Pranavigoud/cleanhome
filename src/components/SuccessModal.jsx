import React from 'react';
import { X, Check } from 'lucide-react';

export default function SuccessModal({ isOpen, onClose, onBack, onContinue, onShowEmailModal }) {
  if (!isOpen) return null;

  const handleContinueClick = () => {
    onShowEmailModal();
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50 p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        {/* Background gradient */}
        <div className="bg-gradient-to-b from-teal-50 to-white p-8 sm:p-10">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-1.5 hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Success Message */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
            Great! We've found you the perfect matches.
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-600 text-center mb-8">
            Lastly, we need your details to attach to your request.
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-50 transition text-sm"
            >
              Back
            </button>
            <button
              onClick={handleContinueClick}
              className="flex-1 bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition text-sm"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
