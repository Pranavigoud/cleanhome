import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, MapPin, Loader } from 'lucide-react';
import { API_BASE_URL } from '../config'; // Ensure you have this config file created as per previous steps

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Reset form when modal opens or closes
  useEffect(() => {
    if (!isOpen) {
      // Reset all state when modal closes
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setError('');
      setSuccess(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return;
    }
    
    // Email validation - check for valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!formData.phone.trim()) {
      setError('Please enter your phone number');
      return;
    }

    // Phone validation - check for +44 format (optional, keeping your existing check)
    const phoneRegex = /^\+44\s?[\d\s]{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ' '))) {
      setError('Please enter a valid UK phone number (starting with +44)');
      return;
    }

    if (!formData.message.trim()) {
      setError('Please enter your message');
      return;
    }

    setIsLoading(true);

    try {
      // --- REAL API CALL ---
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
      
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Close modal after success
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please ensure the server is running.');
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      {/* Modal Container */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl w-full max-w-sm overflow-hidden my-2 sm:my-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-green-600 p-3 sm:p-4 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/20 rounded-full p-1 hover:bg-white/30 transition"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <h2 className="text-lg sm:text-xl font-bold text-white">Get in Touch</h2>
          <p className="text-white/90 text-xs mt-0.5">We'd love to hear from you</p>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          {success ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Thank you!</h3>
              <p className="text-sm text-gray-600">
                We've received your message and will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
              {/* Error Message */}
              {error && (
                <div className="bg-red-100 text-red-600 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs font-medium">
                  {error}
                </div>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 XXXXX XXXXXX"
                  className="w-full px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows="3"
                  className="w-full px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-green-600 text-white font-bold py-2 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition text-xs flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-3 h-3 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}

          {/* Contact Info - Only show when not success */}
          {!success && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-600 font-semibold mb-2">Quick Contact</p>
              <div className="space-y-1.5">
                <a href="tel:+441234567890" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition text-xs">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+44 7926 999 783</span>
                </a>
                <a href="mailto:support@mechvex.com" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition text-xs">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>contact@mechvex.com</span>
                </a>
                <div className="flex items-start gap-2 text-gray-700 text-xs">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Leicester, United Kingdom</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}