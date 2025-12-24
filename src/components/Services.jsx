import React, { useState } from 'react';
import { ChevronRight, Droplets, Leaf } from 'lucide-react';
import CleaningservicesImg from '../assets/Cleaningservices.png';
import GardeningservicesImg from '../assets/Gardeningservices.png';
// ... (Imports remain same, ensure all modals are imported)
import PropertyTypeModal from './PropertyTypeModal';
import GardeningPropertyTypeModal from './GardeningPropertyTypeModal';
import GardeningServicesModal from './GardeningServicesModal';
import GardeningFrequencyModal from './GardeningFrequencyModal';
import GardeningGardenSizeModal from './GardeningGardenSizeModal';
import GardeningGardenConditionModal from './GardeningGardenConditionModal';
import GardeningPlantsModal from './GardeningPlantsModal';
import GardeningGardenWasteModal from './GardeningGardenWasteModal';
import GardeningWorkBeginModal from './GardeningWorkBeginModal';
import GardeningHiringDecisionModal from './GardeningHiringDecisionModal';
import GardeningLocationModal from './GardeningLocationModal';
import GardeningEmailModal from './GardeningEmailModal';
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
import WelcomeModal from './WelcomeModal';
import { API_BASE_URL } from '../config';

export default function Services() {
  // ... (State declarations same as before)
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [isGardeningPropertyModalOpen, setIsGardeningPropertyModalOpen] = useState(false);
  const [isGardeningServicesModalOpen, setIsGardeningServicesModalOpen] = useState(false);
  const [isGardeningFrequencyModalOpen, setIsGardeningFrequencyModalOpen] = useState(false);
  const [isGardeningGardenSizeModalOpen, setIsGardeningGardenSizeModalOpen] = useState(false);
  const [isGardeningGardenConditionModalOpen, setIsGardeningGardenConditionModalOpen] = useState(false);
  const [isGardeningPlantsModalOpen, setIsGardeningPlantsModalOpen] = useState(false);
  const [isGardeningGardenWasteModalOpen, setIsGardeningGardenWasteModalOpen] = useState(false);
  const [isGardeningWorkBeginModalOpen, setIsGardeningWorkBeginModalOpen] = useState(false);
  const [isGardeningHiringDecisionModalOpen, setIsGardeningHiringDecisionModalOpen] = useState(false);
  const [isGardeningLocationModalOpen, setIsGardeningLocationModalOpen] = useState(false);
  const [isGardeningEmailModalOpen, setIsGardeningEmailModalOpen] = useState(false);
  
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
  const [isGardeningWelcomeModalOpen, setIsGardeningWelcomeModalOpen] = useState(false);

  // States for Data
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
  
  const [gardeningData, setGardeningData] = useState({});
  const [gardeningEmailData, setGardeningEmailData] = useState(null);
  const [emailData, setEmailData] = useState(null);

  const gardeningSteps = ['propertyType','services','frequency','gardenSize','gardenCondition','plants','gardenWaste','workBegin','hiringDecision','location'];
  const totalGardeningSteps = gardeningSteps.length;
  const [currentGardeningStep, setCurrentGardeningStep] = useState(0);

  const getGardeningProgress = () => ((currentGardeningStep + 1) / totalGardeningSteps) * 100;
  const updateGardeningStep = (stepIndex) => setCurrentGardeningStep(stepIndex);

  const handleGetStarted = (serviceId) => {
    if (serviceId === 1) setIsPropertyModalOpen(true);
    else if (serviceId === 2) setIsGardeningPropertyModalOpen(true);
  };

  const handlePropertyModalClose = () => {
    setIsPropertyModalOpen(false);
    setIsGardeningPropertyModalOpen(false);
    setIsGardeningServicesModalOpen(false);
    setIsGardeningFrequencyModalOpen(false);
    setIsGardeningGardenSizeModalOpen(false);
    setIsGardeningGardenConditionModalOpen(false);
    setIsGardeningPlantsModalOpen(false);
    setIsGardeningGardenWasteModalOpen(false);
    setIsGardeningWorkBeginModalOpen(false);
    setIsGardeningHiringDecisionModalOpen(false);
    setIsGardeningLocationModalOpen(false);
    setIsGardeningEmailModalOpen(false);
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
    setIsGardeningWelcomeModalOpen(false);
    setCurrentGardeningStep(0);
  };

  // ... (Keep all existing handler functions for steps) ...
  const handleShowFrequency = (data) => { setPropertyData(data); setIsPropertyModalOpen(false); setIsFrequencyModalOpen(true); };
  const handleFrequencyBack = () => { setIsFrequencyModalOpen(false); setIsPropertyModalOpen(true); };
  const handleShowBedrooms = (data) => { setFrequencyData(data); setIsFrequencyModalOpen(false); setIsBedroomsModalOpen(true); };
  const handleBedroomsBack = () => { setIsBedroomsModalOpen(false); setIsFrequencyModalOpen(true); };
  const handleShowReceptionRooms = (data) => { setBedroomsData(data); setIsBedroomsModalOpen(false); setIsReceptionRoomsModalOpen(true); };
  const handleReceptionRoomsBack = () => { setIsReceptionRoomsModalOpen(false); setIsBedroomsModalOpen(true); };
  const handleShowCleaningType = (data) => { setReceptionRoomsData(data); setIsReceptionRoomsModalOpen(false); setIsCleaningTypeModalOpen(true); };
  const handleCleaningTypeBack = () => { setIsCleaningTypeModalOpen(false); setIsReceptionRoomsModalOpen(true); };
  const handleShowCurrentCleaner = (data) => { setCleaningTypeData(data); setIsCleaningTypeModalOpen(false); setIsCurrentCleanerModalOpen(true); };
  const handleCurrentCleanerBack = () => { setIsCurrentCleanerModalOpen(false); setIsCleaningTypeModalOpen(true); };
  const handleShowBestDays = (data) => { setCurrentCleanerData(data); setIsCurrentCleanerModalOpen(false); setIsBestDaysModalOpen(true); };
  const handleBestDaysBack = () => { setIsBestDaysModalOpen(false); setIsCurrentCleanerModalOpen(true); };
  const handleShowSupplyMaterials = (data) => { setBestDaysData(data); setIsBestDaysModalOpen(false); setIsSupplyMaterialsModalOpen(true); };
  const handleSupplyMaterialsBack = () => { setIsSupplyMaterialsModalOpen(false); setIsBestDaysModalOpen(true); };
  const handleShowHiringDecision = (data) => { setSupplyMaterialsData(data); setIsSupplyMaterialsModalOpen(false); setIsHiringDecisionModalOpen(true); };
  const handleHiringDecisionBack = () => { setIsHiringDecisionModalOpen(false); setIsSupplyMaterialsModalOpen(true); };
  const handleShowLocation = (data) => { setHiringDecisionData(data); setIsHiringDecisionModalOpen(false); setIsLocationModalOpen(true); };
  const handleLocationBack = () => { setIsLocationModalOpen(false); setIsHiringDecisionModalOpen(true); };
  const handleShowSuccess = (data) => { setLocationData(data); setIsLocationModalOpen(false); setIsEmailModalOpen(true); };
  const handleEmailBack = () => { setIsEmailModalOpen(false); setIsLocationModalOpen(true); };
  const handleLocationContinue = (data) => { setLocationData(data); setIsLocationModalOpen(false); };

  // --- CLEANING SUBMISSION ---
  const handleEmailContinue = async (completeUserData) => {
    setEmailData(completeUserData);
    
    const formData = new FormData();
    const userDetailsObj = { name: completeUserData.name, email: completeUserData.email, phone: completeUserData.phone };
    const bookingDetailsObj = {
      propertyType: propertyData,
      frequency: frequencyData,
      bedrooms: bedroomsData,
      receptionRooms: receptionRoomsData,
      cleaningType: cleaningTypeData?.cleaningType,
      cleaningTypeOther: cleaningTypeData?.other,
      currentCleaner: currentCleanerData,
      bestDays: bestDaysData,
      supplyMaterials: supplyMaterialsData,
      hiringDecision: hiringDecisionData,
      location: locationData
    };

    formData.append('userDetails', JSON.stringify(userDetailsObj));
    formData.append('bookingDetails', JSON.stringify(bookingDetailsObj));
    formData.append('description', completeUserData.description || '');
    if (completeUserData.files) {
      completeUserData.files.forEach(f => formData.append('files', f));
    }

    try {
      const response = await fetch(`${API_BASE_URL}/book-cleaning`, { method: 'POST', body: formData });
      if(response.ok) console.log('Cleaning booking submitted');
    } catch (error) { console.error('Error:', error); }

    handlePropertyModalClose();
  };

  const services = [
    { id: 1, title: 'Cleaning Services', description: 'Full Home Deep Cleaning • Kitchen & Bath', icon: Droplets, iconBg: 'bg-red-100', iconColor: 'text-red-500', image: CleaningservicesImg },
    { id: 2, title: 'Gardening Services', description: 'Lawn Mowing • Plant Care • Maintenance', icon: Leaf, iconBg: 'bg-green-100', iconColor: 'text-green-600', image: GardeningservicesImg },
  ];

  return (
    <section id="services" className="bg-white py-12 sm:py-16 md:py-24 lg:py-28">
      {/* ... (Existing Services Layout Code) ... */}
       <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <p className="font-bold text-xs sm:text-sm tracking-widest mb-2 sm:mb-3 uppercase" style={{ color: '#0D6B7D' }}>OUR EXPERTISE</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Comprehensive Home Care</h2>
          <div className="flex justify-center"><div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div onClick={() => handleGetStarted(service.id)} key={service.id} className="group cursor-pointer transform transition-all duration-300 hover:shadow-xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <div className={`${service.iconBg} p-2.5 sm:p-3 rounded-lg`}><IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${service.iconColor}`} /></div>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- CLEANING MODALS --- */}
      <PropertyTypeModal isOpen={isPropertyModalOpen} onClose={handlePropertyModalClose} onShowFrequency={handleShowFrequency} currentStep={1} totalSteps={11} />
      <FrequencyModal isOpen={isFrequencyModalOpen} onClose={handlePropertyModalClose} onBack={handleFrequencyBack} onShowBedrooms={handleShowBedrooms} currentStep={2} totalSteps={11} />
      <BedroomsModal isOpen={isBedroomsModalOpen} onClose={handlePropertyModalClose} onBack={handleBedroomsBack} onShowBathrooms={handleShowReceptionRooms} currentStep={3} totalSteps={11} />
      <ReceptionRoomsModal isOpen={isReceptionRoomsModalOpen} onClose={handlePropertyModalClose} onBack={handleReceptionRoomsBack} onShowCleaningType={handleShowCleaningType} currentStep={4} totalSteps={11} />
      <CleaningTypeModal isOpen={isCleaningTypeModalOpen} onClose={handlePropertyModalClose} onBack={handleCleaningTypeBack} onShowCurrentCleaner={handleShowCurrentCleaner} currentStep={5} totalSteps={10} />
      <CurrentCleanerModal isOpen={isCurrentCleanerModalOpen} onClose={handlePropertyModalClose} onBack={handleCurrentCleanerBack} onShowBestDays={handleShowBestDays} currentStep={6} totalSteps={10} />
      <BestDaysModal isOpen={isBestDaysModalOpen} onClose={handlePropertyModalClose} onBack={handleBestDaysBack} onShowSupplyMaterials={handleShowSupplyMaterials} currentStep={7} totalSteps={10} />
      <SupplyMaterialsModal isOpen={isSupplyMaterialsModalOpen} onClose={handlePropertyModalClose} onBack={handleSupplyMaterialsBack} onShowHiringDecision={handleShowHiringDecision} currentStep={8} totalSteps={10} />
      <HiringDecisionModal isOpen={isHiringDecisionModalOpen} onClose={handlePropertyModalClose} onBack={handleHiringDecisionBack} onShowLocation={handleShowLocation} currentStep={9} totalSteps={10} />
      <LocationModal isOpen={isLocationModalOpen} onClose={handlePropertyModalClose} onBack={handleLocationBack} onContinue={handleLocationContinue} onShowSuccess={handleShowSuccess} currentStep={10} totalSteps={10} />
      
      {/* Cleaninig Flow Email Modal */}
      <EmailModal isOpen={isEmailModalOpen} onClose={handlePropertyModalClose} onBack={handleEmailBack} onContinue={handleEmailContinue} currentStep={11} totalSteps={12} />

      {/* --- GARDENING MODALS --- */}
      {/* (All Gardening Step Modals remain the same...) */}
      <GardeningPropertyTypeModal isOpen={isGardeningPropertyModalOpen} onClose={handlePropertyModalClose} progress={getGardeningProgress()} onNext={(d) => { setGardeningData(p=>({...p, propertyType:d})); updateGardeningStep(0); setIsGardeningPropertyModalOpen(false); setIsGardeningServicesModalOpen(true); }} />
      <GardeningServicesModal isOpen={isGardeningServicesModalOpen} onClose={handlePropertyModalClose} progress={getGardeningProgress()} onBack={() => { setIsGardeningServicesModalOpen(false); setIsGardeningPropertyModalOpen(true); }} onNext={(d) => { setGardeningData(p=>({...p, services:d})); updateGardeningStep(1); setIsGardeningServicesModalOpen(false); setIsGardeningFrequencyModalOpen(true); }} />
      <GardeningFrequencyModal isOpen={isGardeningFrequencyModalOpen} onClose={handlePropertyModalClose} progress={getGardeningProgress()} onBack={() => { setIsGardeningFrequencyModalOpen(false); setIsGardeningServicesModalOpen(true); }} onNext={(d) => { setGardeningData(p=>({...p, frequency:d})); updateGardeningStep(2); setIsGardeningFrequencyModalOpen(false); setIsGardeningGardenSizeModalOpen(true); }} />
      <GardeningGardenSizeModal isOpen={isGardeningGardenSizeModalOpen} onClose={handlePropertyModalClose} progress={getGardeningProgress()} onBack={() => { setIsGardeningGardenSizeModalOpen(false); setIsGardeningFrequencyModalOpen(true); }} onNext={(d) => { setGardeningData(p=>({...p, gardenSize:d})); updateGardeningStep(3); setIsGardeningGardenSizeModalOpen(false); setIsGardeningGardenConditionModalOpen(true); }} />
      <GardeningGardenConditionModal isOpen={isGardeningGardenConditionModalOpen} onClose={handlePropertyModalClose} progress={getGardeningProgress()} onBack={() => { setIsGardeningGardenConditionModalOpen(false); setIsGardeningGardenSizeModalOpen(true); }} onNext={(d) => { setGardeningData(p=>({...p, gardenCondition:d})); updateGardeningStep(4); setIsGardeningGardenConditionModalOpen(false); setIsGardeningPlantsModalOpen(true); }} />
      <GardeningPlantsModal isOpen={isGardeningPlantsModalOpen} onClose={handlePropertyModalClose} progress={getGardeningProgress()} onBack={() => { setIsGardeningPlantsModalOpen(false); setIsGardeningGardenConditionModalOpen(true); }} onNext={(d) => { setGardeningData(p=>({...p, plants:d})); updateGardeningStep(5); setIsGardeningPlantsModalOpen(false); setIsGardeningGardenWasteModalOpen(true); }} />
      <GardeningGardenWasteModal isOpen={isGardeningGardenWasteModalOpen} onClose={handlePropertyModalClose} progress={getGardeningProgress()} onBack={() => { setIsGardeningGardenWasteModalOpen(false); setIsGardeningPlantsModalOpen(true); }} onNext={(d) => { setGardeningData(p=>({...p, gardenWaste:d})); updateGardeningStep(6); setIsGardeningGardenWasteModalOpen(false); setIsGardeningWorkBeginModalOpen(true); }} />
      <GardeningWorkBeginModal isOpen={isGardeningWorkBeginModalOpen} onClose={handlePropertyModalClose} progress={getGardeningProgress()} onBack={() => { setIsGardeningWorkBeginModalOpen(false); setIsGardeningGardenWasteModalOpen(true); }} onNext={(d) => { setGardeningData(p=>({...p, workBegin:d})); updateGardeningStep(7); setIsGardeningWorkBeginModalOpen(false); setIsGardeningHiringDecisionModalOpen(true); }} />
      <GardeningHiringDecisionModal isOpen={isGardeningHiringDecisionModalOpen} onClose={handlePropertyModalClose} progress={getGardeningProgress()} onBack={() => { setIsGardeningHiringDecisionModalOpen(false); setIsGardeningWorkBeginModalOpen(true); }} onNext={(d) => { setGardeningData(p=>({...p, hiringDecision:d})); updateGardeningStep(8); setIsGardeningHiringDecisionModalOpen(false); setIsGardeningLocationModalOpen(true); }} />
      <GardeningLocationModal isOpen={isGardeningLocationModalOpen} onClose={handlePropertyModalClose} progress={getGardeningProgress()} onBack={() => { setIsGardeningLocationModalOpen(false); setIsGardeningHiringDecisionModalOpen(true); }} onNext={(d) => { setGardeningData(p=>({...p, location:d})); updateGardeningStep(9); setIsGardeningLocationModalOpen(false); setIsGardeningEmailModalOpen(true); }} />
      
      {/* Gardening Email Modal */}
      <GardeningEmailModal
        isOpen={isGardeningEmailModalOpen}
        onClose={handlePropertyModalClose}
        progress={((currentGardeningStep + 2) / (totalGardeningSteps + 1)) * 100}
        onBack={() => { setIsGardeningEmailModalOpen(false); setIsGardeningLocationModalOpen(true); }}
        onNext={(emailData) => { setGardeningEmailData(emailData); setIsGardeningEmailModalOpen(false); setIsGardeningWelcomeModalOpen(true); }}
      />
      
      {/* --- GARDENING SUBMISSION --- */}
      <WelcomeModal
        isOpen={isGardeningWelcomeModalOpen}
        onClose={handlePropertyModalClose}
        onBack={() => { setIsGardeningWelcomeModalOpen(false); setIsGardeningEmailModalOpen(true); }}
        onSubmit={async (detailData) => {
          const formData = new FormData();
          const userDetailsObj = { ...gardeningEmailData, ...detailData }; // combines name/email with wantContact
          const bookingDetailsObj = gardeningData;

          formData.append('userDetails', JSON.stringify(userDetailsObj));
          formData.append('bookingDetails', JSON.stringify(bookingDetailsObj));
          formData.append('description', detailData.description || '');
          
          if (detailData.files && detailData.files.length > 0) {
            detailData.files.forEach(f => formData.append('files', f));
          }

          try {
             const response = await fetch(`${API_BASE_URL}/book-gardening`, {
              method: 'POST',
              body: formData
            });
            if(response.ok) console.log('Gardening booking submitted');
          } catch (error) {
            console.error('Error submitting gardening:', error);
          }

          handlePropertyModalClose();
        }}
        userName={gardeningEmailData?.name || 'User'}
        currentStep={12}
        totalSteps={12}
      />
    </section>
  );
}