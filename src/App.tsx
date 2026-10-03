import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMethod } from './components/AboutMethod';
import { Indications } from './components/Indications';
import { SessionProcess } from './components/SessionProcess';
import { Practitioner } from './components/Practitioner';
import { Reviews } from './components/Reviews';
import { Pricing } from './components/Pricing';
import { BookingSection } from './components/BookingSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AmbientFeatherBackground } from './components/FeatherDecor';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState('first-time');
  const [prefilledNotes, setPrefilledNotes] = useState('');

  const handleOpenBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromPricing = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleOpenBooking();
  };

  const handleSelectSymptom = (symptomTitle: string) => {
    setPrefilledNotes(`Беспокоит запрос: ${symptomTitle}`);
    handleOpenBooking();
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#18181B] flex flex-col font-sans selection:bg-[#E4E4E7] selection:text-[#09090B]">
      {/* Ambient Feathers & Light Sanctuary Layer */}
      <AmbientFeatherBackground />

      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-1 relative z-10">
        <Hero onOpenBooking={handleOpenBooking} />
        <AboutMethod />
        <Indications onSelectSymptom={handleSelectSymptom} />
        <SessionProcess />
        <Practitioner />
        <Reviews />
        <Pricing onSelectService={handleSelectServiceFromPricing} />
        <BookingSection
          selectedServiceId={selectedServiceId}
          onSelectServiceId={setSelectedServiceId}
          prefilledNotes={prefilledNotes}
        />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
