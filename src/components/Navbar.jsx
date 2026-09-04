import React, { useState } from 'react';
import { Phone, Clock, MapPin, HeartPulse, Menu, X, Calendar, Siren, ShieldCheck, Activity, Stethoscope } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-sky-500/20 shadow-2xl">
      {/* Top Emergency Alert Bar */}
      <div className="gradient-emergency text-white text-xs sm:text-sm py-2 px-4 shadow-lg">
        <div className="max-w-full mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-black uppercase tracking-wide">
              <Siren className="w-4 h-4 animate-bounce" />
              24/7 Emergency & ICU Helpline:
              <a href="tel:+918009803730" className="underline font-black hover:text-amber-200">
                +91 80098 03730
              </a>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-red-100 font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              Gungroo Chauraha, Jhalwa, Prayagraj
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-extrabold">
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-black/20 text-white border border-white/20">
              Open 24 Hours • Ayushman Bharat PMJAY Empanelled
            </span>
            <a
              href="#location"
              className="text-white hover:underline underline-offset-2 decoration-2"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/phlogo.png"
            alt="Priya Hospital Logo"
            className="h-20 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight">PRIYA HOSPITAL</span>
              <span className="text-xs font-black px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/40">24/7 Emergency</span>
            </div>
            <p className="text-xs font-bold text-slate-400 tracking-wide">प्रिया हॉस्पिटल • Jhalwa, Prayagraj</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 font-bold text-slate-300 text-sm">
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#departments" className="hover:text-sky-400 transition-colors">Departments</a>
          <a href="#roster" className="hover:text-sky-400 transition-colors text-sky-400">12 Doctor Panel</a>
          <a href="#triage" className="hover:text-sky-400 transition-colors">Emergency Triage</a>
          <a href="#trust" className="hover:text-sky-400 transition-colors">Clean Rooms</a>
          <a href="#reviews" className="hover:text-sky-400 transition-colors">Reviews (5.0 ★)</a>
          <a href="#location" className="hover:text-sky-400 transition-colors">Contact</a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-black shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
          >
            <Calendar className="w-4 h-4" />
            Book OPD / Admission
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-black sm:hidden"
          >
            Book OPD
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-3 text-slate-300 font-bold text-base pt-2">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-800">About Priya Hospital</a>
            <a href="#departments" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-800">Specialties & ICU</a>
            <a href="#roster" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-800 text-sky-400">12 Specialist Doctor Panel & Timings</a>
            <a href="#triage" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-800">Emergency Triage Assistant</a>
            <a href="#trust" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-800">Clean Rooms & Facilities</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-800">Google Reviews (5.0 ★)</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-800">Location & Emergency Call</a>
          </div>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="tel:+918009803730"
              className="w-full py-3 rounded-xl bg-red-600 text-white font-black text-center shadow-lg flex items-center justify-center gap-2"
            >
              <Siren className="w-4 h-4" /> 24/7 Emergency Call: +91 80098 03730
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-2.5 rounded-xl border border-slate-700 text-slate-200 font-bold text-center"
            >
              Book OPD Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
