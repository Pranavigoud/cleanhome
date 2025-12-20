import React, { useState } from 'react';
import { X, Upload, CheckCircle, Loader } from 'lucide-react';

export default function RequestDetailModal({ isOpen, onClose, onSubmit, currentStep = 12, totalSteps = 12 }) {
  const [description, setDescription] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [wantContact, setWantContact] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    setError('');
    
    if (!description.trim()) {
      setError('Please describe your request');
      return;
    }

    setIsLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('description', description.trim());
      formData.append('wantContact', wantContact);
      
      uploadedFiles.forEach((file) => {
        formData.append('files', file);
      });

      // Call the onSubmit callback with the data
      onSubmit({
        description: description.trim(),
        files: uploadedFiles,
        wantContact,
        formData: formData
      });

      setIsLoading(false);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      setIsLoading(false);
    }
  };

  const qualityScore = Math.min((description.length / 100) * 100, 100);

  if (!isOpen) return null;

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50 p-4 overflow-y-auto">
      {/* Modal Container */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden my-8">
        {/* Header with Progress */}
        <div className="bg-white border-b border-gray-200 p-4 sm:p-5">
          {/* Progress Bar */}
          <div className="mb-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-700 ease-out rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5">
          {/* Error Message */}
          {error && (
            <div className="mb-4 bg-red-100 text-red-600 px-4 py-3 rounded-lg text-xs font-medium">
              {error}
            </div>
          )}

          {/* Success Message */}
          <div className="flex items-center gap-2 mb-4 text-green-600">
            <CheckCircle className="w-4 h-4" />
            <span className="text-xs font-medium">We've posted your request</span>
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
            Describe your request in detail
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-xs mb-4">
            Add more details to get faster and more accurate quotes
          </p>

          {/* Description Textarea */}
          <div className="mb-3">
            <textarea
              placeholder="What would be helpful for the professional to know?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-20 p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs resize-none"
            />
          </div>

          {/* File Upload Section */}
          <div className="mb-4">
            <label htmlFor="file-upload" className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition font-medium text-xs mb-2">
              <Upload className="w-3 h-3" />
              Add photos/files
            </label>
            <input
              id="file-upload"
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
            />

            {/* Uploaded Files Display */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-600 truncate">{file.name}</span>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Privacy Policy Link */}
          <p className="text-xs text-gray-500 mb-4">
            Protected under our{' '}
            <a href="#" className="text-blue-500 hover:underline">
              privacy policy
            </a>
          </p>

          {/* Quality Score Section */}
          <div className="mb-4">
            <label className="block text-xs font-bold text-gray-900 mb-2">Quality score</label>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-orange-400 transition-all duration-300"
                style={{ width: `${qualityScore}%` }}
              ></div>
            </div>
            {qualityScore < 80 && (
              <p className="text-xs text-orange-600 font-medium">
                Add more detail to improve your request
              </p>
            )}
          </div>

          {/* Contact Preference Checkbox */}
          <div className="mb-4 flex items-start gap-3 bg-orange-50 p-3 rounded-lg border border-orange-200">
            <input
              type="checkbox"
              id="contact-asap"
              checked={wantContact}
              onChange={(e) => setWantContact(e.target.checked)}
              className="w-4 h-4 mt-0.5 cursor-pointer accent-orange-500"
            />
            <label htmlFor="contact-asap" className="text-xs font-medium text-gray-900 cursor-pointer flex-1">
              Let professionals know I want to be contacted ASAP
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-green-500 text-white font-bold py-2.5 rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition text-sm flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
