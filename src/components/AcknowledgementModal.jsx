import React from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function AcknowledgementModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-xs w-full overflow-hidden">
        {/* Close Button */}
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-6 text-center">
          {/* Checkmark Icon */}
          <div className="flex justify-center mb-3">
            <div className="bg-green-100 rounded-full p-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          {/* Thank You Message */}
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Thank you!
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed">
            We've received your message and will get back to you soon.
          </p>
        </div>

        {/* Footer Button */}
        <div className="px-4 py-3 border-t border-gray-100">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-teal-400 to-green-500 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition duration-300 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
