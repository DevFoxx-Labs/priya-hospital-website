import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, CheckCircle2, Award, Clock, DollarSign } from 'lucide-react';

export default function TrustPillars() {
  const pillars = [
    {
      icon: "✨",
      title: "Top-Notch Cleanliness",
      desc: "Regularly sanitized private AC rooms, general wards, and ICU suites maintaining hospital hygiene standards.",
      tag: "Hygienic Environment"
    },
    {
      icon: "💳",
      title: "Zero Hassle Billing",
      desc: "Transparent hospital billing policy with no hidden charges, helping families during stressful medical times.",
      tag: "Ethical & Transparent"
    },
    {
      icon: "👩‍⚕️",
      title: "Caring Nurses & Staff",
      desc: "Compassionate nursing team dedicated to 24/7 bedside care, medication monitoring, and patient comfort.",
      tag: "24/7 Bedside Care"
    },
    {
      icon: "👨‍⚕️",
      title: "Experienced Doctors",
      desc: "Senior specialists in surgery, medicine, gynecology, and critical care providing accurate diagnosis.",
      tag: "Expert Consultants"
    }
  ];

  return (
    <section id="trust" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-wider border border-emerald-500/30">
            Why Patients Choose Priya Hospital
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Patient Care Built on Trust & Ethics
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Rated 5.0 ★ on Google by families across Jhalwa, Devprayagam Colony, and Prayagraj.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 text-left shadow-xl hover:border-sky-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-2xl font-bold border border-sky-500/40">
                {item.icon}
              </div>
              <span className="inline-block text-[10px] font-extrabold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                {item.tag}
              </span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
