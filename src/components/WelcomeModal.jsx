import React, { useState } from 'react';
import { X } from 'lucide-react';
import RequestDetailModal from './RequestDetailModal';

export default function WelcomeModal({ isOpen, onClose, onBack, onSubmit, userName = 'User', currentStep = 12, totalSteps = 12 }) {
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleSubmit = () => {
    setShowDetailModal(true);
  };

  const handleDetailSubmit = (detailData) => {
    // Return the promise here too
    return onSubmit(detailData);
  };

  const handleDetailClose = () => {
    setShowDetailModal(false);
    onClose();
  };

  const handleDetailBack = () => {
    setShowDetailModal(false);
  };
  
  if (!isOpen && !showDetailModal) return null;

  return (
    <>
      {isOpen && !showDetailModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="bg-white border-b border-gray-200 p-5 sm:p-6">
              <div className="mb-6 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-700 ease-out rounded-full"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Welcome back, {userName}
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                It looks like you've used us before. Submit your request now and we'll help you log in to view your matches.
              </p>

              <div className="flex gap-3 mb-4">
                <button
                  onClick={onBack}
                  className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-50 transition text-sm"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition text-sm"
                >
                  Submit request
                </button>
              </div>

              <p className="text-center text-xs text-gray-500">
                By clicking continue, you confirm your agreement to our{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      <RequestDetailModal
        isOpen={showDetailModal}
        onClose={handleDetailClose}
        onSubmit={handleDetailSubmit}
        currentStep={currentStep}
        totalSteps={totalSteps}
      />
    </>
  );
}