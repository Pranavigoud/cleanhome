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
    <section style={{ backgroundColor: '#FFFDF6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span className="font-bold text-sm">
                #1 RATED CLEANING SERVICE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Sparkling Homes,<br />
              <span className="relative">
                Zero Stress.
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-16 sm:w-24 h-1 bg-yellow-400"></span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Experience the joy of a spotless home without lifting a finger. Professional, vetted cleaners starting at just $89.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="flex-1 flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-full min-h-[48px] sm:min-h-auto">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400 text-sm sm:text-base"
                />
              </div>
              <button onClick={handleGetStarted} className="bg-yellow-400 text-black font-bold px-6 sm:px-8 py-3 rounded-full hover:bg-yellow-500 transition flex items-center justify-center gap-2 whitespace-nowrap min-h-[48px] text-sm sm:text-base active:scale-95">
                Get Started
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>

            {/* Testimonials Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              {/* Avatar Group */}
              <div className="flex -space-x-3">
                {/* Avatar placeholders - replace with actual images */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-700 font-bold text-sm">
                  +2k
                </div>
              </div>
              <p className="text-gray-700 font-medium">
                Trusted by 2,000+ happy neighbors
              </p>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative hidden lg:block">
            {/* Main Image Container */}
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Hero Image */}
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Modern minimalist living room with clean design and natural light"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Satisfaction Badge */}
            <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-lg p-4 border-2 border-green-500">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 p-2 rounded-full">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">
                    100% Satisfaction
                  </p>
                  <p className="text-gray-600 text-xs">
                    Money-back guarantee
                  </p>
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
