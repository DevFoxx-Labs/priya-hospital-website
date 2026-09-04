import React from 'react';
import { Siren, Activity, Heart, Stethoscope, ChevronRight, Check, ShieldCheck, Sparkles, Zap, Pill } from 'lucide-react';

export default function Departments({ onOpenBooking }) {
  const departments = [
    {
      icon: "🚨",
      title: "24/7 Emergency, Trauma & ICU",
      desc: "Round-the-clock emergency admission, 7-bedded ICU, 6-bedded recovery room, polytrauma resuscitation, stroke management, and poisoning care.",
      tags: ["24/7 Casualty", "7-Bed ICU", "Polytrauma Care"],
      accent: "from-red-600 to-rose-700"
    },
    {
      icon: "🔪",
      title: "General & Laparoscopic Surgery",
      desc: "Advanced minimally invasive laparoscopic surgery for gall bladder stones, appendix, hernia, piles, and acute abdominal emergencies.",
      tags: ["Laparoscopy", "Hernia & Appendix", "Gall Bladder"],
      accent: "from-sky-500 to-blue-700"
    },
    {
      icon: "🌸",
      title: "Obstetrics & Gynecology",
      desc: "Comprehensive maternity care, high-risk pregnancy management, painless delivery, PCOD/PCOS treatment, and female wellness OPD.",
      tags: ["Maternity Care", "High-Risk Pregnancy", "PCOD Care"],
      accent: "from-pink-500 to-rose-600"
    },
    {
      icon: "🩺",
      title: "General Medicine & Critical Care",
      desc: "Expert consultant diagnosis for viral fevers, diabetes management, hypertension, chest infections, thyroid, and chronic diseases.",
      tags: ["General Medicine", "Diabetes & BP", "Fever OPD"],
      accent: "from-emerald-500 to-teal-700"
    },
    {
      icon: "🦴",
      title: "Orthopedics & Joint Care",
      desc: "Emergency fracture fixation, plaster management, arthroscopy, joint pain relief, back pain, and complex accident trauma surgery.",
      tags: ["Fracture Care", "Joint Pain", "Accident Trauma"],
      accent: "from-amber-500 to-orange-600"
    },
    {
      icon: "👶",
      title: "Pediatrics & Child Care",
      desc: "Newborn care, routine child vaccinations, pediatric fever OPD, seasonal asthma, and child growth monitoring.",
      tags: ["Child OPD", "Vaccination", "Newborn Care"],
      accent: "from-cyan-500 to-blue-600"
    },
    {
      icon: "🧪",
      title: "Urology, Nephrology & Gastroenterology",
      desc: "Specialized care for kidney stone management, urinary tract infections, endoscopy, liver disorders, and gastrointestinal care.",
      tags: ["Kidney Stone", "Endoscopy", "GI & Liver"],
      accent: "from-indigo-500 to-purple-600"
    },
    {
      icon: "💊",
      title: "24/7 Diagnostics & Pharmacy",
      desc: "In-house round-the-clock pathology blood lab, digital X-Ray, ECG, ultrasound, and 24-hour stocked pharmacy.",
      tags: ["24/7 Pharmacy", "Blood Lab", "Digital X-Ray"],
      accent: "from-teal-500 to-emerald-600"
    }
  ];

  return (
    <section id="departments" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-extrabold uppercase tracking-wider border border-sky-500/30">
            Multispeciality Medical Infrastructure
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Specialized Departments & Critical Care
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Providing round-the-clock emergency resuscitation, advanced surgeries, and compassionate patient care in Jhalwa.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="card-hospital-3d p-6 rounded-3xl space-y-5 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${dept.accent} text-white flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {dept.icon}
                  </div>
                  <span className="text-[11px] font-extrabold text-sky-400 px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30">
                    24/7 Care
                  </span>
                </div>

                <h3 className="text-xl font-black text-white group-hover:text-sky-400 transition-colors">
                  {dept.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {dept.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex flex-wrap gap-1">
                  {dept.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-semibold border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full text-xs font-black text-sky-400 hover:text-sky-300 flex items-center justify-between group-hover:translate-x-0.5 transition-transform cursor-pointer pt-1"
                >
                  <span>Book Consultation</span> <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Callout Banner */}
        <div className="mt-14 p-8 rounded-3xl gradient-emergency text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight flex items-center gap-2 justify-center md:justify-start">
              <Siren className="w-7 h-7 text-white animate-bounce" /> Medical Emergency or Trauma Case in Prayagraj?
            </h3>
            <p className="text-red-100 text-sm max-w-xl font-medium">
              Call Priya Hospital 24/7 Casualty & Emergency Helpline immediately: +91 80098 03730. Instant doctor & ICU admission.
            </p>
          </div>
          <a
            href="tel:+918009803730"
            className="px-7 py-4 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-black shadow-xl text-sm shrink-0 transition-transform hover:scale-105 border border-red-500/40"
          >
            Call Emergency: 080098 03730
          </a>
        </div>

      </div>
    </section>
  );
}
