import React from 'react';
import { MapPin, Phone, Clock, Navigation, Compass, Siren, ExternalLink } from 'lucide-react';

export default function LocationContact({ onOpenBooking }) {
  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-extrabold uppercase tracking-wider border border-red-500/30">
            Jhalwa Prayagraj Location
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Hospital Address, Emergency Hotline & Directions
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Situated at Gungroo Chauraha, opposite Indian Oil, Kabir Nagar, Devprayagam Colony, Jhalwa, Prayagraj.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-12 items-start">

          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">

              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold border border-sky-500/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Hospital Address</h3>
                  <p className="text-xs text-sky-400 font-bold">Gungroo Chauraha • Jhalwa</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300 font-medium leading-relaxed">
                <p className="font-extrabold text-white text-base">PRIYA HOSPITAL (प्रिया हॉस्पिटल)</p>
                <p>
                  Gungroo Chauraha, opp. Indian Oil,<br />
                  Kabir Nagar, Devprayagam Colony,<br />
                  Jhalwa, Prayagraj, Dadanpur, Uttar Pradesh 211012<br />
                  <span className="text-slate-400 text-xs font-bold">(Plus Code: CQP8+76 Prayagraj)</span>
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="https://maps.google.com/?q=Priya+Hospital+Gungroo+Chauraha+Jhalwa+Prayagraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-sm shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 transition-all"
                >
                  <Navigation className="w-4 h-4" /> Open in Google Maps
                </a>
              </div>

            </div>

            {/* Emergency Numbers & Hours */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-red-500/30 shadow-xl space-y-6">

              {/* Emergency Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold shrink-0 border border-red-500/40">
                  <Siren className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-red-400 uppercase tracking-wider">24/7 Emergency Helpline</h4>
                  <a
                    href="tel:+918009803730"
                    className="text-xl font-black text-white hover:text-red-400 transition-colors block mt-0.5"
                  >
                    +91 80098 03730
                  </a>
                  <div className="text-xs text-slate-400 font-semibold mt-1 space-y-0.5">
                    <div>Alt Emergency: +91 79916 42222</div>
                    <div>Alt Emergency: +91 79917 42222</div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0 border border-emerald-500/40">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Hospital Availability</h4>
                  <div className="text-base font-black text-white mt-0.5">
                    Open 24 Hours (365 Days a Year)
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    24/7 ICU & Casualty Operational
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Map Card */}
          <div className="lg:col-span-7 space-y-6">

            <div className="rounded-3xl bg-slate-900 p-4 border border-slate-800 shadow-2xl overflow-hidden space-y-4">
              <div className="flex items-center justify-between px-2 pt-2">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-sky-400" />
                  <span className="font-extrabold text-white text-sm sm:text-base">
                    Interactive Location Map
                  </span>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                  Jhalwa, Prayagraj
                </span>
              </div>

              {/* Embedded Map iframe */}
              <div className="relative w-full h-[360px] rounded-2xl overflow-hidden border border-slate-800">
                <iframe
                  title="Priya Hospital Location Map"
                  src="https://maps.google.com/maps?q=Gungroo+Chauraha,+Devprayagam+Colony,+Jhalwa,+Prayagraj,+Uttar+Pradesh+211012&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-xs text-slate-300 font-medium flex flex-wrap items-center justify-between gap-3">
                <span>📍 Landmark: Opposite Indian Oil, Gungroo Chauraha, Devprayagam Colony, Jhalwa</span>
                <a
                  href="https://maps.google.com/?q=Priya+Hospital+Gungroo+Chauraha+Jhalwa+Prayagraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sky-400 hover:underline flex items-center gap-1"
                >
                  Get Navigation Directions <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
