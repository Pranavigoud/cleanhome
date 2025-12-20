import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function GardeningServicesModal({ isOpen, onClose, onNext, onBack, progress = 0 }) {
  const [selectedServices, setSelectedServices] = useState([]);
  const [otherValue, setOtherValue] = useState('');

  React.useEffect(() => {
    console.log('GardeningServicesModal - isOpen:', isOpen);
  }, [isOpen]);

  const services = [
    { id: 'hedge-cutting', label: 'Hedge cutting/trimming' },
    { id: 'leaf-cleanup', label: 'Leaf clean up' },
    { id: 'mowing', label: 'Mowing/Grass cutting' },
    { id: 'planting', label: 'Planting and seeding' },
    { id: 'pond', label: 'Pond maintenance' },
    { id: 'pruning', label: 'Pruning' },
    { id: 'trimming', label: 'Trimming and edging' },
    { id: 'weeding', label: 'Weeding and weed prevention' },
    { id: 'discuss', label: 'I need to discuss with the pro' },
    { id: 'other', label: 'Other' },
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleContinue = () => {
    if (selectedServices.length > 0 && onNext) {
      const servicesData = selectedServices
        .map((id) => {
          if (id === 'other') {
            return otherValue;
          }
          return services.find((s) => s.id === id)?.label || id;
        });
      onNext(servicesData);
      setSelectedServices([]);
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
            <p className="text-xs text-gray-500">Step 2 of 10</p>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold text-center text-gray-900 mb-4">
            Which of these do you require?
          </h2>

          {/* Services Options */}
          <div className="space-y-2 mb-4 max-h-[35vh] overflow-y-auto scrollbar-hide">
            {services.map((service) => (
              <label
                key={service.id}
                className="flex items-center p-2.5 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service.id)}
                  onChange={() => handleServiceToggle(service.id)}
                  className="w-5 h-5 cursor-pointer accent-blue-600"
                />
                <span className="ml-3 text-sm text-gray-700">
                  {service.label}
                </span>
              </label>
            ))}
          </div>

          {/* Other Input */}
          {selectedServices.includes('other') && (
            <div className="mb-4 p-2.5 bg-gray-50 rounded-lg border border-gray-300">
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Please specify:
              </label>
              <input
                type="text"
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
                placeholder="Enter service"
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
              disabled={selectedServices.length === 0 || (selectedServices.includes('other') && !otherValue.trim())}
              className="px-6 py-2.5 rounded-lg font-semibold text-white text-sm transition-all"
              style={{
                backgroundColor: (selectedServices.length > 0 && (!selectedServices.includes('other') || otherValue.trim())) ? '#0D6B7D' : '#D1D5DB',
                cursor: (selectedServices.length > 0 && (!selectedServices.includes('other') || otherValue.trim())) ? 'pointer' : 'not-allowed',
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
