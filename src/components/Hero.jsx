import React from 'react';
import { Star, Calendar, Phone, MapPin, Sparkles, CheckCircle2, ShieldCheck, Siren, HeartPulse, Activity, Stethoscope } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="about" className="relative min-h-[85vh] flex items-center bg-slate-950 text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 shadow-lg">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-black text-white">5.0 Rating</span>
              <span className="text-xs text-slate-500">•</span>
              <a href="#reviews" className="text-xs font-bold text-sky-400 hover:underline">
                30 Verified Google Reviews
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
              PRIYA HOSPITAL <br />
              <span className="bg-gradient-to-r from-red-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                प्रिया हॉस्पिटल (24/7 Emergency)
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
              Jhalwa’s trusted 24/7 multispeciality emergency hospital. Equipped with a 7-bedded ICU, trauma care, general & laparoscopic surgery, maternity OPD, and round-the-clock diagnostic services.
            </p>

            {/* Featured Google Review quote */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-sky-500/30 backdrop-blur-md shadow-xl flex items-start gap-3.5 max-w-xl">
              <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400 shrink-0 mt-0.5 border border-sky-500/40">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm italic font-semibold text-slate-200">
                  "Best hospital experience I’ve had. Dr. and the team are true professionals. Clean rooms, caring nurses, and zero hassle during billing. Thank you PRIYA HOSPITAL!"
                </p>
                <p className="text-xs text-sky-400 mt-1 font-bold">— Verified Patient Review on Google (5.0 ★)</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="tel:+918009803730"
                className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-base shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all transform hover:-translate-y-0.5"
              >
                <Siren className="w-5 h-5 animate-pulse" />
                24/7 Emergency Call
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-extrabold text-base border border-slate-700 shadow-md transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-sky-400" />
                Book OPD Slot
              </button>

              <a
                href="#location"
                className="flex items-center gap-2 px-5 py-4 rounded-2xl text-sky-400 hover:text-sky-300 font-extrabold text-sm hover:underline"
              >
                <MapPin className="w-4 h-4 text-sky-400" />
                Jhalwa Location
              </a>
            </div>

            {/* Key Value Props */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80 text-xs sm:text-sm font-extrabold text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                Open 24 Hours Daily
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                Zero Hassle Billing
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                Clean & Hygienic Rooms
              </div>
            </div>

          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl card-hospital-3d p-6 sm:p-8 space-y-6 shadow-2xl">

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-sky-600 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-red-500/40">
                    5.0
                  </div>
                  <div>
                    <h3 className="font-black text-white text-base">PRIYA HOSPITAL</h3>
                    <p className="text-xs text-sky-400 font-bold">Jhalwa • Prayagraj</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-extrabold border border-red-500/30">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                  Open 24/7
                </span>
              </div>

              {/* 3D Department Highlights */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-red-500/30 flex items-center justify-between hover:border-red-400 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center text-xl font-bold border border-red-500/40">
                      🚨
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">24/7 Emergency & ICU Care</h4>
                      <p className="text-xs text-slate-400">7-bedded ICU, trauma unit & stroke management</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-sky-500/30 flex items-center justify-between hover:border-sky-400 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-xl font-bold border border-sky-500/40">
                      🩺
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">General & Laparoscopic Surgery</h4>
                      <p className="text-xs text-slate-400">Gall bladder, hernia, appendix & minimally invasive OP</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between hover:border-emerald-400 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold border border-emerald-500/40">
                      🌸
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Maternity & Child Health</h4>
                      <p className="text-xs text-slate-400">Obstetrics, painless delivery, gynecology & pediatrics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Quick Card */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                <div className="flex items-center justify-between font-extrabold text-sky-400">
                  <span>📍 Gungroo Chauraha</span>
                  <span>opp. Indian Oil</span>
                </div>
                <p className="text-slate-300 leading-snug">
                  Kabir Nagar, Devprayagam Colony, Jhalwa, Prayagraj, UP 211012
                </p>
                <div className="pt-1 flex items-center justify-between text-slate-400 font-bold">
                  <span>📞 +91 80098 03730</span>
                  <a href="#location" className="text-sky-400 hover:underline">Get Directions →</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
