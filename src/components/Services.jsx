import React, { useState } from 'react';
import { ChevronRight, Droplets, Leaf } from 'lucide-react';
import CleaningservicesImg from '../assets/Cleaningservices.png';
import GardeningservicesImg from '../assets/Gardeningservices.png';
import PropertyTypeModal from './PropertyTypeModal';
import GardeningPropertyTypeModal from './GardeningPropertyTypeModal';
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

export default function Services() {
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [isGardeningPropertyModalOpen, setIsGardeningPropertyModalOpen] = useState(false);
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

  const handleGetStarted = (serviceId) => {
    if (serviceId === 1) {
      setIsPropertyModalOpen(true);
    } else if (serviceId === 2) {
      setIsGardeningPropertyModalOpen(true);
    }
  };

  const handlePropertyModalClose = () => {
    setIsPropertyModalOpen(false);
    setIsGardeningPropertyModalOpen(false);
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

  const handlePhoneContinue = (data) => {
    setPhoneData(data);
    handleShowNameModal();
  };

  const handleEmailContinue = (data) => {
    setEmailData(data);
    handleShowPhoneModal();
  };

  const handleSuccessContinue = () => {
    setIsSuccessModalOpen(false);
  };

  const handleLocationContinue = (data) => {
    setIsLocationModalOpen(false);
  };

  const services = [
    {
      id: 1,
      title: 'Cleaning Services',
      description: 'Full Home Deep Cleaning • Kitchen & Bath',
      icon: Droplets,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-500',
      image: CleaningservicesImg,
    },
    {
      id: 2,
      title: 'Gardening Services',
      description: 'Lawn Mowing • Plant Care • Maintenance',
      icon: Leaf,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      image: GardeningservicesImg,
    },
  ];

  return (
    <section id="services" className="bg-white py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-bold text-sm sm:text-base tracking-widest mb-3 uppercase" style={{ color: '#0D6B7D' }}>
            OUR EXPERTISE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Home Care
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                onClick={() => handleGetStarted(service.id)}
                key={service.id}
                className="group cursor-pointer transform transition-all duration-300 hover:shadow-xl"
              >
                {/* Service Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`${service.iconBg} p-3 rounded-lg`}>
                        <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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

      {/* Gardening Property Type Modal */}
      <GardeningPropertyTypeModal
        isOpen={isGardeningPropertyModalOpen}
        onClose={handlePropertyModalClose}
        onNext={(propertyType) => {
          console.log('Selected gardening property:', propertyType);
          setIsGardeningPropertyModalOpen(false);
        }}
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
        onContinue={() => handlePropertyModalClose()}
        currentStep={14}
        totalSteps={14}
      />
    </section>
  );
}
