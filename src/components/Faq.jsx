import React, { useState } from 'react';
import { ChevronDown, PhoneCall, Siren } from 'lucide-react';

export default function Faq({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Is Priya Hospital open 24 hours for emergency admissions?",
      a: "Yes! Priya Hospital is open 24 hours a day, 365 days a year. Our emergency department, 7-bedded ICU, trauma unit, pathology blood lab, and pharmacy operate round-the-clock."
    },
    {
      q: "Where is Priya Hospital located in Prayagraj?",
      a: "Priya Hospital is located at Gungroo Chauraha, opposite Indian Oil, Kabir Nagar, Devprayagam Colony, Jhalwa, Prayagraj, UP 211012."
    },
    {
      q: "What medical specialties and surgeries are available?",
      a: "We offer 24/7 Emergency & Trauma, 7-bed ICU Critical Care, General & Laparoscopic Surgery (Gall bladder, Appendix, Hernia), Obstetrics & Gynecology, Pediatrics, Orthopedics, Urology, Nephrology, and Gastroenterology."
    },
    {
      q: "How can I contact the hospital for emergency ambulance or admission?",
      a: "For immediate 24/7 emergency assistance or ambulance dispatch, call our direct helpline at +91 80098 03730 or alternate numbers +91 79916 42222 / +91 79917 42222."
    },
    {
      q: "What is the hospital's billing and patient room policy?",
      a: "Priya Hospital maintains a 100% transparent zero-hassle billing policy. We offer clean AC private rooms, semi-private rooms, general wards, and dedicated nursing care."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-extrabold uppercase tracking-wider border border-sky-500/30">
            Patient Support & Information
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-base">
            Everything you need to know about emergency admission, ICU rules, and OPD visits.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-5 text-left font-bold text-white flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-sky-400 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>

              {openIdx === idx && (
                <div className="p-5 pt-0 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 bg-slate-900/50 font-medium">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-slate-950 border border-sky-500/30 text-center space-y-3">
          <h4 className="font-extrabold text-white text-base">Have an immediate medical inquiry or emergency?</h4>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+918009803730"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shadow-md"
            >
              <Siren className="w-4 h-4" /> Call Emergency: +91 80098 03730
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm border border-slate-700 shadow-md cursor-pointer"
            >
              Book OPD Appointment
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
