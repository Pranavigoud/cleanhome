import React, { useState } from 'react';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import PropertyTypeModal from './PropertyTypeModal';
import FrequencyModal from './FrequencyModal';
import BedroomsModal from './BedroomsModal';
import ReceptionRoomsModal from './ReceptionRoomsModal';
import CleaningTypeModal from './CleaningTypeModal';
import CurrentCleanerModal from './CurrentCleanerModal';
import BestDaysModal from './BestDaysModal';
import SupplyMaterialsModal from './SupplyMaterialsModal';
import HiringDecisionModal from './HiringDecisionModal';
import LocationModal from './LocationModal';
import EmailModal from './EmailModal';

export default function Hero() {
  const [zipCode, setZipCode] = useState('');
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [isFrequencyModalOpen, setIsFrequencyModalOpen] = useState(false);
  const [isBedroomsModalOpen, setIsBedroomsModalOpen] = useState(false);
  const [isReceptionRoomsModalOpen, setIsReceptionRoomsModalOpen] = useState(false);
  const [isCleaningTypeModalOpen, setIsCleaningTypeModalOpen] = useState(false);
  const [isCurrentCleanerModalOpen, setIsCurrentCleanerModalOpen] = useState(false);
  const [isBestDaysModalOpen, setIsBestDaysModalOpen] = useState(false);
  const [isSupplyMaterialsModalOpen, setIsSupplyMaterialsModalOpen] = useState(false);
  const [isHiringDecisionModalOpen, setIsHiringDecisionModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [propertyData, setPropertyData] = useState(null);
  const [frequencyData, setFrequencyData] = useState(null);
  const [bedroomsData, setBedroomsData] = useState(null);
  const [receptionRoomsData, setReceptionRoomsData] = useState(null);
  const [cleaningTypeData, setCleaningTypeData] = useState(null);
  const [currentCleanerData, setCurrentCleanerData] = useState(null);
  const [bestDaysData, setBestDaysData] = useState(null);
  const [supplyMaterialsData, setSupplyMaterialsData] = useState(null);
  const [hiringDecisionData, setHiringDecisionData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [emailData, setEmailData] = useState(null);
  const [nameData, setNameData] = useState(null);

  const handleGetStarted = () => {
    setIsPropertyModalOpen(true);
  };

  const handlePropertyModalClose = () => {
    setIsPropertyModalOpen(false);
    setIsFrequencyModalOpen(false);
    setIsBedroomsModalOpen(false);
    setIsReceptionRoomsModalOpen(false);
    setIsCleaningTypeModalOpen(false);
    setIsCurrentCleanerModalOpen(false);
    setIsBestDaysModalOpen(false);
    setIsSupplyMaterialsModalOpen(false);
    setIsHiringDecisionModalOpen(false);
    setIsLocationModalOpen(false);
    setIsEmailModalOpen(false);
  };

  const handleShowFrequency = (data) => {
    setPropertyData(data);
    setIsPropertyModalOpen(false);
    setIsFrequencyModalOpen(true);
  };

  const handleFrequencyBack = () => {
    setIsFrequencyModalOpen(false);
    setIsPropertyModalOpen(true);
  };

  const handleShowBedrooms = (data) => {
    setFrequencyData(data);
    setIsFrequencyModalOpen(false);
    setIsBedroomsModalOpen(true);
  };

  const handleBedroomsBack = () => {
    setIsBedroomsModalOpen(false);
    setIsFrequencyModalOpen(true);
  };

  const handleShowReceptionRooms = (data) => {
    setBedroomsData(data);
    setIsBedroomsModalOpen(false);
    setIsReceptionRoomsModalOpen(true);
  };

  const handleReceptionRoomsBack = () => {
    setIsReceptionRoomsModalOpen(false);
    setIsBedroomsModalOpen(true);
  };

  const handleShowCleaningType = (data) => {
    setReceptionRoomsData(data);
    setIsReceptionRoomsModalOpen(false);
    setIsCleaningTypeModalOpen(true);
  };

  const handleCleaningTypeBack = () => {
    setIsCleaningTypeModalOpen(false);
    setIsReceptionRoomsModalOpen(true);
  };

  const handleShowCurrentCleaner = (data) => {
    setCleaningTypeData(data);
    setIsCleaningTypeModalOpen(false);
    setIsCurrentCleanerModalOpen(true);
  };

  const handleCurrentCleanerBack = () => {
    setIsCurrentCleanerModalOpen(false);
    setIsCleaningTypeModalOpen(true);
  };

  const handleShowBestDays = (data) => {
    setCurrentCleanerData(data);
    setIsCurrentCleanerModalOpen(false);
    setIsBestDaysModalOpen(true);
  };

  const handleBestDaysBack = () => {
    setIsBestDaysModalOpen(false);
    setIsCurrentCleanerModalOpen(true);
  };

  const handleShowSupplyMaterials = (data) => {
    setBestDaysData(data);
    setIsBestDaysModalOpen(false);
    setIsSupplyMaterialsModalOpen(true);
  };

  const handleSupplyMaterialsBack = () => {
    setIsSupplyMaterialsModalOpen(false);
    setIsBestDaysModalOpen(true);
  };

  const handleShowHiringDecision = (data) => {
    setSupplyMaterialsData(data);
    setIsSupplyMaterialsModalOpen(false);
    setIsHiringDecisionModalOpen(true);
  };

  const handleHiringDecisionBack = () => {
    setIsHiringDecisionModalOpen(false);
    setIsSupplyMaterialsModalOpen(true);
  };

  const handleShowLocation = (data) => {
    setHiringDecisionData(data);
    setIsHiringDecisionModalOpen(false);
    setIsLocationModalOpen(true);
  };

  const handleLocationBack = () => {
    setIsLocationModalOpen(false);
    setIsHiringDecisionModalOpen(true);
  };

  const handleShowSuccess = (data) => {
    setLocationData(data);
    setIsLocationModalOpen(false);
    setIsEmailModalOpen(true);
  };

  const handleShowEmailModal = () => {
    setIsEmailModalOpen(true);
  };

  const handleEmailBack = () => {
    setIsEmailModalOpen(false);
    setIsLocationModalOpen(true);
  };

  const handleEmailContinue = (data) => {
    setEmailData(data);
    setIsEmailModalOpen(false);
  };

  const handleLocationContinue = (data) => {
    console.log('Property Type:', propertyData);
    console.log('Frequency:', frequencyData);
    console.log('Bedrooms:', bedroomsData);
    console.log('Reception Rooms:', receptionRoomsData);
    console.log('Cleaning Type:', cleaningTypeData);
    console.log('Current Cleaner:', currentCleanerData);
    console.log('Best Days:', bestDaysData);
    console.log('Supply Materials:', supplyMaterialsData);
    console.log('Hiring Decision:', hiringDecisionData);
    console.log('Location:', data);
    setIsLocationModalOpen(false);
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
              Professional
              <br />
              <span style={{ color: '#0D6B7D' }}>Home Cleaning &</span>
              <br />
              <span className="text-green-600">Gardening</span>
              <br />
              <span className="text-black">Services</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Trusted experts for a cleaner home and greener outdoors. Experience premium service with skilled professionals, eco-friendly products, and guaranteed satisfaction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#services" className="text-gray-800 hover:text-blue-600 font-bold flex items-center gap-2 text-xs sm:text-sm transition">
                View Services <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Customer Avatars */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex -space-x-3">
                {/* Avatar placeholders */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  J
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  S
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  R
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-700 font-bold text-xs sm:text-sm">
                  +2k
                </div>
              </div>
              <p className="text-gray-700 font-medium text-xs sm:text-sm">
                Happy customers across India
              </p>
            </div>
          </div>

          {/* Right Content - Illustration Section */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-center">
            {/* Illustration Background */}
            <div className="relative w-full">
              {/* Teal curved background */}
              <div className="bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 rounded-3xl overflow-hidden shadow-2xl relative h-64 sm:h-80 lg:h-96 flex items-center justify-center p-6 sm:p-8">
                {/* Placeholder for illustration - using SVG or image */}
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  {/* Professional illustration placeholder */}
                  <svg className="w-full h-full max-w-xs" viewBox="0 0 300 300" fill="none">
                    {/* Two professionals with cleaning supplies illustration */}
                    {/* Left person */}
                    <circle cx="80" cy="80" r="25" fill="#F3E8FF" />
                    <rect x="65" y="110" width="30" height="50" fill="#FFE4C4" rx="5" />
                    <rect x="55" y="160" width="15" height="40" fill="#FFE4C4" />
                    <rect x="90" y="160" width="15" height="40" fill="#FFE4C4" />
                    
                    {/* Right person */}
                    <circle cx="220" cy="80" r="25" fill="#F3E8FF" />
                    <rect x="205" y="110" width="30" height="50" fill="#FFE4C4" rx="5" />
                    <rect x="195" y="160" width="15" height="40" fill="#FFE4C4" />
                    <rect x="230" y="160" width="15" height="40" fill="#FFE4C4" />
                    
                    {/* Cleaning supplies */}
                    <rect x="40" y="140" width="8" height="80" fill="#4A90E2" />
                    <circle cx="50" cy="170" r="15" fill="#FFD700" />
                    
                    <rect x="252" y="140" width="8" height="80" fill="#FFD700" />
                    <circle cx="262" cy="170" r="15" fill="#4A90E2" />
                  </svg>

                  {/* Eco-friendly badge */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white rounded-2xl shadow-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">♻️</span>
                    <div>
                      <p className="font-bold text-gray-800 text-xs sm:text-sm">Products</p>
                      <p className="text-gray-600 text-xs">100% Eco-Friendly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Type Modal */}
      <PropertyTypeModal
        isOpen={isPropertyModalOpen}
        onClose={handlePropertyModalClose}
        onShowFrequency={handleShowFrequency}
        currentStep={1}
        totalSteps={11}
      />

      {/* Frequency Modal */}
      <FrequencyModal
        isOpen={isFrequencyModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleFrequencyBack}
        onShowBedrooms={handleShowBedrooms}
        currentStep={2}
        totalSteps={10}
      />

      {/* Bedrooms Modal */}
      <BedroomsModal
        isOpen={isBedroomsModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleBedroomsBack}
        onShowBathrooms={handleShowReceptionRooms}
        currentStep={3}
        totalSteps={10}
      />

      {/* Reception Rooms Modal */}
      <ReceptionRoomsModal
        isOpen={isReceptionRoomsModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleReceptionRoomsBack}
        onShowCleaningType={handleShowCleaningType}
        currentStep={4}
        totalSteps={10}
      />

      {/* Cleaning Type Modal */}
      <CleaningTypeModal
        isOpen={isCleaningTypeModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleCleaningTypeBack}
        onShowCurrentCleaner={handleShowCurrentCleaner}
        currentStep={5}
        totalSteps={10}
      />

      {/* Current Cleaner Modal */}
      <CurrentCleanerModal
        isOpen={isCurrentCleanerModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleCurrentCleanerBack}
        onShowBestDays={handleShowBestDays}
        currentStep={6}
        totalSteps={10}
      />

      {/* Best Days Modal */}
      <BestDaysModal
        isOpen={isBestDaysModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleBestDaysBack}
        onShowSupplyMaterials={handleShowSupplyMaterials}
        currentStep={7}
        totalSteps={10}
      />

      {/* Supply Materials Modal */}
      <SupplyMaterialsModal
        isOpen={isSupplyMaterialsModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleSupplyMaterialsBack}
        onShowHiringDecision={handleShowHiringDecision}
        currentStep={8}
        totalSteps={10}
      />

      {/* Hiring Decision Modal */}
      <HiringDecisionModal
        isOpen={isHiringDecisionModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleHiringDecisionBack}
        onShowLocation={handleShowLocation}
        currentStep={9}
        totalSteps={10}
      />

      {/* Location Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleLocationBack}
        onContinue={handleLocationContinue}
        onShowSuccess={handleShowSuccess}
        currentStep={10}
        totalSteps={10}
      />

      {/* Email Modal */}
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleEmailBack}
        onContinue={handleEmailContinue}
        currentStep={11}
        totalSteps={12}
      />


    </section>
  );
}
