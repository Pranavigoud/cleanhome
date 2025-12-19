import React, { useState } from 'react';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import PropertyTypeModal from './PropertyTypeModal';
import FrequencyModal from './FrequencyModal';
import BedroomsModal from './BedroomsModal';
import BathroomsModal from './BathroomsModal';
import ReceptionRoomsModal from './ReceptionRoomsModal';
import CleaningTypeModal from './CleaningTypeModal';
import CurrentCleanerModal from './CurrentCleanerModal';
import BestDaysModal from './BestDaysModal';
import SupplyMaterialsModal from './SupplyMaterialsModal';
import HiringDecisionModal from './HiringDecisionModal';
import LocationModal from './LocationModal';
import SuccessModal from './SuccessModal';
import EmailModal from './EmailModal';
import PhoneModal from './PhoneModal';
import NameModal from './NameModal';

export default function Hero() {
  const [zipCode, setZipCode] = useState('');
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [isFrequencyModalOpen, setIsFrequencyModalOpen] = useState(false);
  const [isBedroomsModalOpen, setIsBedroomsModalOpen] = useState(false);
  const [isBathroomsModalOpen, setIsBathroomsModalOpen] = useState(false);
  const [isReceptionRoomsModalOpen, setIsReceptionRoomsModalOpen] = useState(false);
  const [isCleaningTypeModalOpen, setIsCleaningTypeModalOpen] = useState(false);
  const [isCurrentCleanerModalOpen, setIsCurrentCleanerModalOpen] = useState(false);
  const [isBestDaysModalOpen, setIsBestDaysModalOpen] = useState(false);
  const [isSupplyMaterialsModalOpen, setIsSupplyMaterialsModalOpen] = useState(false);
  const [isHiringDecisionModalOpen, setIsHiringDecisionModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [propertyData, setPropertyData] = useState(null);
  const [frequencyData, setFrequencyData] = useState(null);
  const [bedroomsData, setBedroomsData] = useState(null);
  const [bathroomsData, setBathroomsData] = useState(null);
  const [receptionRoomsData, setReceptionRoomsData] = useState(null);
  const [cleaningTypeData, setCleaningTypeData] = useState(null);
  const [currentCleanerData, setCurrentCleanerData] = useState(null);
  const [bestDaysData, setBestDaysData] = useState(null);
  const [supplyMaterialsData, setSupplyMaterialsData] = useState(null);
  const [hiringDecisionData, setHiringDecisionData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [emailData, setEmailData] = useState(null);
  const [phoneData, setPhoneData] = useState(null);
  const [nameData, setNameData] = useState(null);

  const handleGetStarted = () => {
    setIsPropertyModalOpen(true);
  };

  const handlePropertyModalClose = () => {
    setIsPropertyModalOpen(false);
    setIsFrequencyModalOpen(false);
    setIsBedroomsModalOpen(false);
    setIsBathroomsModalOpen(false);
    setIsReceptionRoomsModalOpen(false);
    setIsCleaningTypeModalOpen(false);
    setIsCurrentCleanerModalOpen(false);
    setIsBestDaysModalOpen(false);
    setIsSupplyMaterialsModalOpen(false);
    setIsHiringDecisionModalOpen(false);
    setIsLocationModalOpen(false);
    setIsSuccessModalOpen(false);
    setIsEmailModalOpen(false);
    setIsPhoneModalOpen(false);
    setIsNameModalOpen(false);
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

  const handleShowBathrooms = (data) => {
    setBedroomsData(data);
    setIsBedroomsModalOpen(false);
    setIsBathroomsModalOpen(true);
  };

  const handleBathroomsBack = () => {
    setIsBathroomsModalOpen(false);
    setIsBedroomsModalOpen(true);
  };

  const handleShowReceptionRooms = (data) => {
    setBathroomsData(data);
    setIsBathroomsModalOpen(false);
    setIsReceptionRoomsModalOpen(true);
  };

  const handleReceptionRoomsBack = () => {
    setIsReceptionRoomsModalOpen(false);
    setIsBathroomsModalOpen(true);
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
    setIsSuccessModalOpen(true);
  };

  const handleSuccessBack = () => {
    setIsSuccessModalOpen(false);
    setIsLocationModalOpen(true);
  };

  const handleShowEmailModal = () => {
    setIsSuccessModalOpen(false);
    setIsEmailModalOpen(true);
  };

  const handleEmailBack = () => {
    setIsEmailModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleShowPhoneModal = () => {
    setIsEmailModalOpen(false);
    setIsPhoneModalOpen(true);
  };

  const handlePhoneBack = () => {
    setIsPhoneModalOpen(false);
    setIsEmailModalOpen(true);
  };

  const handleShowNameModal = () => {
    setIsPhoneModalOpen(false);
    setIsNameModalOpen(true);
  };

  const handleNameBack = () => {
    setIsNameModalOpen(false);
    setIsPhoneModalOpen(true);
  };

  const handleNameContinue = (data) => {
    setNameData(data);
    console.log('Property Type:', propertyData);
    console.log('Frequency:', frequencyData);
    console.log('Bedrooms:', bedroomsData);
    console.log('Bathrooms:', bathroomsData);
    console.log('Reception Rooms:', receptionRoomsData);
    console.log('Cleaning Type:', cleaningTypeData);
    console.log('Current Cleaner:', currentCleanerData);
    console.log('Best Days:', bestDaysData);
    console.log('Supply Materials:', supplyMaterialsData);
    console.log('Hiring Decision:', hiringDecisionData);
    console.log('Location:', locationData);
    console.log('Email:', emailData?.email);
    console.log('Phone:', phoneData?.phone);
    console.log('Name:', data.name);
    console.log('Marketing Opt-in:', data.marketingOptIn);
    setIsNameModalOpen(false);
    // You can add further logic here - e.g., submit the form, redirect, etc.
  };

  const handlePhoneContinue = (data) => {
    setPhoneData(data);
    handleShowNameModal();
  };

  const handleEmailContinue = (data) => {
    setEmailData(data);
    handleShowPhoneModal();
  };

  const handleSuccessContinue = () => {
    console.log('Property Type:', propertyData);
    console.log('Frequency:', frequencyData);
    console.log('Bedrooms:', bedroomsData);
    console.log('Bathrooms:', bathroomsData);
    console.log('Reception Rooms:', receptionRoomsData);
    console.log('Cleaning Type:', cleaningTypeData);
    console.log('Current Cleaner:', currentCleanerData);
    console.log('Best Days:', bestDaysData);
    console.log('Supply Materials:', supplyMaterialsData);
    console.log('Hiring Decision:', hiringDecisionData);
    console.log('Location:', locationData);
    setIsSuccessModalOpen(false);
    // You can add further logic here - e.g., submit the form, redirect, etc.
  };

  const handleLocationContinue = (data) => {
    console.log('Property Type:', propertyData);
    console.log('Frequency:', frequencyData);
    console.log('Bedrooms:', bedroomsData);
    console.log('Bathrooms:', bathroomsData);
    console.log('Reception Rooms:', receptionRoomsData);
    console.log('Cleaning Type:', cleaningTypeData);
    console.log('Current Cleaner:', currentCleanerData);
    console.log('Best Days:', bestDaysData);
    console.log('Supply Materials:', supplyMaterialsData);
    console.log('Hiring Decision:', hiringDecisionData);
    console.log('Location:', data);
    setIsLocationModalOpen(false);
    // You can add further logic here - e.g., submit the form, redirect, etc.
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Professional
              <br />
              <span style={{ color: '#0D6B7D' }}>Home Cleaning &</span>
              <br />
              <span className="text-green-600">Gardening</span>
              <br />
              <span className="text-black">Services</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 leading-relaxed">
              Trusted experts for a cleaner home and greener outdoors. Experience premium service with skilled professionals, eco-friendly products, and guaranteed satisfaction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#services" className="text-gray-800 hover:text-blue-600 font-bold flex items-center gap-2 text-sm sm:text-base transition">
                View Services <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Customer Avatars */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex -space-x-3">
                {/* Avatar placeholders */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                  J
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                  S
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                  R
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-700 font-bold text-sm">
                  +2k
                </div>
              </div>
              <p className="text-gray-700 font-medium text-sm sm:text-base">
                Happy customers across India
              </p>
            </div>
          </div>

          {/* Right Content - Illustration Section */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-center">
            {/* Illustration Background */}
            <div className="relative w-full">
              {/* Teal curved background */}
              <div className="bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 rounded-3xl overflow-hidden shadow-2xl relative h-96 lg:h-full lg:min-h-96 flex items-center justify-center p-8">
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
                  <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                    <span className="text-2xl">♻️</span>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">Products</p>
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
        totalSteps={11}
      />

      {/* Bedrooms Modal */}
      <BedroomsModal
        isOpen={isBedroomsModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleBedroomsBack}
        onShowBathrooms={handleShowBathrooms}
        currentStep={3}
        totalSteps={11}
      />

      {/* Bathrooms Modal */}
      <BathroomsModal
        isOpen={isBathroomsModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleBathroomsBack}
        onShowReceptionRooms={handleShowReceptionRooms}
        currentStep={4}
        totalSteps={11}
      />

      {/* Reception Rooms Modal */}
      <ReceptionRoomsModal
        isOpen={isReceptionRoomsModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleReceptionRoomsBack}
        onShowCleaningType={handleShowCleaningType}
        currentStep={5}
        totalSteps={11}
      />

      {/* Cleaning Type Modal */}
      <CleaningTypeModal
        isOpen={isCleaningTypeModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleCleaningTypeBack}
        onShowCurrentCleaner={handleShowCurrentCleaner}
        currentStep={6}
        totalSteps={11}
      />

      {/* Current Cleaner Modal */}
      <CurrentCleanerModal
        isOpen={isCurrentCleanerModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleCurrentCleanerBack}
        onShowBestDays={handleShowBestDays}
        currentStep={7}
        totalSteps={11}
      />

      {/* Best Days Modal */}
      <BestDaysModal
        isOpen={isBestDaysModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleBestDaysBack}
        onShowSupplyMaterials={handleShowSupplyMaterials}
        currentStep={8}
        totalSteps={11}
      />

      {/* Supply Materials Modal */}
      <SupplyMaterialsModal
        isOpen={isSupplyMaterialsModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleSupplyMaterialsBack}
        onShowHiringDecision={handleShowHiringDecision}
        currentStep={9}
        totalSteps={11}
      />

      {/* Hiring Decision Modal */}
      <HiringDecisionModal
        isOpen={isHiringDecisionModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleHiringDecisionBack}
        onShowLocation={handleShowLocation}
        currentStep={10}
        totalSteps={11}
      />

      {/* Location Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleLocationBack}
        onContinue={handleLocationContinue}
        onShowSuccess={handleShowSuccess}
        currentStep={11}
        totalSteps={11}
      />

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleSuccessBack}
        onContinue={handleSuccessContinue}
        onShowEmailModal={handleShowEmailModal}
      />

      {/* Email Modal */}
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleEmailBack}
        onContinue={handleEmailContinue}
        currentStep={12}
        totalSteps={13}
      />

      {/* Phone Modal */}
      <PhoneModal
        isOpen={isPhoneModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handlePhoneBack}
        onContinue={handlePhoneContinue}
        currentStep={13}
        totalSteps={14}
      />

      {/* Name Modal */}
      <NameModal
        isOpen={isNameModalOpen}
        onClose={handlePropertyModalClose}
        onBack={handleNameBack}
        onContinue={handleNameContinue}
        currentStep={14}
        totalSteps={14}
      />
    </section>
  );
}
