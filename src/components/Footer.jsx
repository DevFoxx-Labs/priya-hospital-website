import React from 'react';
import { HeartPulse, Phone, MapPin, Clock, Star, ArrowUp, Siren, Mail, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/phlogo.png"
                alt="Priya Hospital Logo"
                className="h-10 w-auto object-contain rounded-lg bg-white/10 p-1 border border-white/10 shadow-md"
              />
              <div>
                <span className="text-2xl font-black text-white tracking-tight">PRIYA HOSPITAL</span>
                <span className="ml-1 text-xs font-black px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/40">24/7</span>
                <p className="text-xs text-slate-400 font-extrabold">प्रिया हॉस्पिटल • Jhalwa, Prayagraj</p>
              </div>
            </div>

            <p className="text-amber-400 font-bold italic text-xs">
              "स्वास्थ्य आपका साथ हमारा" — Your Health, Our Commitment
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Prayagraj's 5.0-star rated multispeciality emergency hospital providing 24/7 ICU, Ayushman Bharat PMJAY cashless treatment, Ultrasound Centre, general surgery, maternity OPD, and diagnostics.
            </p>

            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-extrabold text-white">5.0 Star Rating</span> (30 Google Reviews)
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> PMJAY & SACHIS Empanelled
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About Priya Hospital</a></li>
              <li><a href="#departments" className="hover:text-sky-400 transition-colors">Specialties & ICU</a></li>
              <li><a href="#roster" className="hover:text-sky-400 transition-colors text-sky-400">12 Doctor Panel</a></li>
              <li><a href="#triage" className="hover:text-sky-400 transition-colors">Emergency Triage</a></li>
              <li><a href="#trust" className="hover:text-sky-400 transition-colors">Clean Rooms & Care</a></li>
              <li><a href="#reviews" className="hover:text-sky-400 transition-colors">Patient Reviews (5.0 ★)</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">Specialties</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><span className="text-slate-400">24/7 Emergency & ICU Care</span></li>
              <li><span className="text-slate-400">Ultrasound & Diagnostic Centre</span></li>
              <li><span className="text-slate-400">General & Laparoscopic Surgery</span></li>
              <li><span className="text-slate-400">Obstetrics & Gynecology</span></li>
              <li><span className="text-slate-400">Pediatrics & Child Care</span></li>
              <li><span className="text-slate-400">Neuro & Spine Surgery</span></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">Emergency Contact</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Gungroo Chauraha, opp. Indian Oil, Jhalwa, Prayagraj 211012</span>
              </div>
              <div className="flex items-center gap-2">
                <Siren className="w-4 h-4 text-red-400 shrink-0" />
                <a href="tel:+918009803730" className="text-white font-extrabold hover:underline">+91 80098 03730</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:priyahospital1@gmail.com" className="text-slate-300 font-bold hover:underline">priyahospital1@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300 font-semibold">Open 24 Hours (365 Days)</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-3 w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs shadow-md transition-colors cursor-pointer"
            >
              Book OPD Consultation
            </button>
          </div>

        </div>

        {/* Bottom copyright & agency credits */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} PRIYA HOSPITAL (प्रिया हॉस्पिटल). All rights reserved.</p>
            <p className="text-slate-400 font-medium">
              Designed &amp; Developed by{' '}
              <a
                href="https://devfoxxlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-sky-400 hover:text-sky-300 hover:underline transition-colors"
              >
                DevFoxx Labs
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-600 font-bold">Jhalwa, Prayagraj</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
