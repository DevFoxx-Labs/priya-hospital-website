import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Departments from './components/Departments';
import DoctorRoster from './components/DoctorRoster';
import TrustPillars from './components/TrustPillars';
import TriageAssistant from './components/TriageAssistant';
import Reviews from './components/Reviews';
import LocationContact from './components/LocationContact';
import Faq from './components/Faq';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      <Navbar onOpenBooking={openBooking} />
      <main>
        <Hero onOpenBooking={openBooking} />
        <Departments onOpenBooking={openBooking} />
        <DoctorRoster onOpenBooking={openBooking} />
        <TrustPillars />
        <TriageAssistant onOpenBooking={openBooking} />
        <Reviews />
        <LocationContact onOpenBooking={openBooking} />
        <Faq onOpenBooking={openBooking} />
      </main>
      <Footer onOpenBooking={openBooking} />
      <AppointmentModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
