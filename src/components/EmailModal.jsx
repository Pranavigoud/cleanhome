import React, { useState } from 'react';
import { X, Mail, User, Phone } from 'lucide-react';
import WelcomeModal from './WelcomeModal';

export default function EmailModal({ isOpen, onClose, onBack, onContinue, currentStep = 11, totalSteps = 12 }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const isValidEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const isValidPhone = (value) => {
    const phonePattern = /^[\d\s\-\+\(\)]{10,}$/;
    return phonePattern.test(value.replace(/\s/g, ''));
  };

  const handleContinue = () => {
    if (!name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!email.trim()) {
      setError('Please enter a valid email address');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!phone.trim()) {
      setError('Please enter a valid phone number');
      return;
    }
    if (!isValidPhone(phone)) {
      setError('Please enter a valid phone number (at least 10 digits)');
      return;
    }

    setError('');
    setUserInfo({ name: name.trim(), email: email.trim(), phone: phone.trim() });
    setShowWelcome(true);
  };

  const handleWelcomeSubmit = (detailData) => {
    // Return the promise so the child modal can await it
    return onContinue({ ...userInfo, ...detailData });
  };

  const handleWelcomeBack = () => {
    setShowWelcome(false);
  };

  const handleWelcomeClose = () => {
    setShowWelcome(false);
    onClose(); // Ensure we close the parent modal too
  };

  const handleInputChange = (field, value) => {
    if (field === 'name') setName(value);
    else if (field === 'email') setEmail(value);
    else if (field === 'phone') setPhone(value);
    if (error) setError('');
  };

  if (!isOpen && !showWelcome) return null;

  return (
    <>
      {isOpen && !showWelcome && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="bg-white border-b border-gray-200 p-5 sm:p-6">
              <div className="mb-6 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-700 ease-out rounded-full"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-start gap-3">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex-1">
                  Enter your details to receive quotes
                </h2>
                <button
                  onClick={onClose}
                  className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition flex-shrink-0"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              {error && (
                <div className="mb-4 bg-red-100 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition">
                  <User className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition">
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleContinue()}
                    className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="tel"
                    placeholder="+44 (123) 456 7890"
                    value={phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleContinue()}
                    className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>
              </div>

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
      )}

      <WelcomeModal
        isOpen={showWelcome}
        onClose={handleWelcomeClose}
        onBack={handleWelcomeBack}
        onSubmit={handleWelcomeSubmit}
        userName={userInfo?.name || 'User'}
        currentStep={currentStep}
        totalSteps={totalSteps}
      />
    </>
  );
}