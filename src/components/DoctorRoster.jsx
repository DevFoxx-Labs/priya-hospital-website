import React, { useState } from 'react';
import { Stethoscope, Clock, Calendar, CheckCircle2, UserCheck, ShieldCheck, Search, Filter } from 'lucide-react';

export default function DoctorRoster({ onOpenBooking }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const doctors = [
    {
      name: "Dr. Arun Kumar Srivastava",
      nameHindi: "डॉ. अरुण कुमार श्रीवास्तव",
      degrees: "MBBS, MD (Physician)",
      specialty: "Heart Disease Specialist & Physician",
      specialtyHindi: "हृदय रोग विशेषज्ञ एवं टी.० फिजिशियन",
      timings: "Daily 11:00 AM - 1:00 PM",
      category: "Cardiology & Physician",
      available: "Daily OPD"
    },
    {
      name: "Dr. Pritima Chaudhary",
      nameHindi: "डॉ. प्रीतिमा चौधरी",
      degrees: "MS (Obs & Gynae)",
      specialty: "Obstetrician & Gynecologist",
      specialtyHindi: "स्त्री एवं प्रसूति रोग विशेषज्ञ",
      timings: "Daily 10:00 AM - 1:00 PM & 7:00 PM - 8:30 PM",
      category: "Gynecology & Maternity",
      available: "Daily OPD (Morning & Evening)"
    },
    {
      name: "Dr. Kaushlesh Dwivedi",
      nameHindi: "डॉ. कौशलेश द्विवेदी",
      degrees: "MBBS",
      specialty: "General Physician & Critical Care",
      specialtyHindi: "जनरल फिजिशियन",
      timings: "Daily 11:00 AM - 4:00 PM & 7:00 PM - 10:00 PM",
      category: "General Medicine",
      available: "Daily OPD (Morning & Night)"
    },
    {
      name: "Dr. Anurag Srivastava",
      nameHindi: "डॉ. अनुराग श्रीवास्तव",
      degrees: "MBBS, DCH",
      specialty: "Pediatric & Child Specialist",
      specialtyHindi: "बाल्य रोग विशेषज्ञ",
      timings: "Daily 1:00 PM - 2:00 PM",
      category: "Pediatrics & Child Care",
      available: "Daily Afternoon OPD"
    },
    {
      name: "Dr. Ashok Kumar Singh",
      nameHindi: "डॉ. अशोक कुमार सिंह",
      degrees: "MBBS, MS",
      specialty: "General & Laparoscopic Surgeon",
      specialtyHindi: "जनरल एवं लैप्रोस्कोपिक सर्जन",
      timings: "Daily 2:00 PM - 3:00 PM",
      category: "General Surgery",
      available: "Daily Surgical OPD"
    },
    {
      name: "Dr. Saurabh Anand Dubey",
      nameHindi: "डॉ. सौरभ आनन्द दूबे",
      degrees: "MBBS, MS, MCh",
      specialty: "Neuro & Spine Surgeon",
      specialtyHindi: "न्यूरो एवं स्पाइन सर्जन",
      timings: "Thursdays 4:00 PM - 5:00 PM",
      category: "Neuro & Spine",
      available: "Thursday Specialist OPD"
    },
    {
      name: "Dr. Devendra Singh",
      nameHindi: "डॉ. देवेन्द्र सिंह",
      degrees: "MS, MCh",
      specialty: "Neuro & Spine Surgeon",
      specialtyHindi: "अस्थि एवं न्यूरो स्पाइन विशेषज्ञ",
      timings: "Consultation by Appointment",
      category: "Neuro & Spine",
      available: "On Call / Appointment"
    },
    {
      name: "Dr. Ritu Babeja",
      nameHindi: "डॉ. रितु बवेजा",
      degrees: "MBBS, DGO",
      specialty: "Obstetrician & Gynecologist",
      specialtyHindi: "स्त्री एवं प्रसूति रोग विशेषज्ञ",
      timings: "Daily Morning & Evening OPD",
      category: "Gynecology & Maternity",
      available: "Daily OPD"
    },
    {
      name: "Dr. Swati Srivastava",
      nameHindi: "डॉ. स्वाति श्रीवास्तव",
      degrees: "DGO",
      specialty: "Gynecologist & Obstetrician",
      specialtyHindi: "स्त्री एवं प्रसूति रोग विशेषज्ञ",
      timings: "Daily Morning OPD",
      category: "Gynecology & Maternity",
      available: "Daily OPD"
    },
    {
      name: "Dr. Sachin Singh",
      nameHindi: "डॉ. सचिन सिंह",
      degrees: "MS (Orthopedics)",
      specialty: "Bone, Joint & Nerve Specialist",
      specialtyHindi: "हड्डी, जोड़ एवं नस रोग विशेषज्ञ",
      timings: "Daily Evening OPD",
      category: "Orthopedics & Joint Care",
      available: "Daily Ortho OPD"
    },
    {
      name: "Dr. Abhishek Shukla",
      nameHindi: "डॉ. अभिषेक शुक्ला",
      degrees: "MBBS, MCh",
      specialty: "Urologist & Kidney Specialist",
      specialtyHindi: "यूरोलॉजिस्ट (गुर्दा एवं मूत्र रोग)",
      timings: "Consultation by Appointment",
      category: "Urology & Kidney",
      available: "Specialist OPD"
    },
    {
      name: "Dr. Rakesh Paswan",
      nameHindi: "डॉ. राकेश पासवान",
      degrees: "MD",
      specialty: "Neuro & Psychiatric Specialist",
      specialtyHindi: "न्यूरो एवं मानसिक रोग विशेषज्ञ",
      timings: "Consultation by Appointment",
      category: "Neuro & Spine",
      available: "Specialist OPD"
    }
  ];

  const categories = ["All", "General Medicine", "Gynecology & Maternity", "Cardiology & Physician", "General Surgery", "Orthopedics & Joint Care", "Pediatrics & Child Care", "Neuro & Spine", "Urology & Kidney"];

  const filteredDoctors = selectedSpecialty === 'All'
    ? doctors
    : doctors.filter(d => d.category === selectedSpecialty);

  return (
    <section id="roster" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-extrabold uppercase tracking-wider border border-sky-500/30">
            Official Consultant Doctor Panel
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Senior Specialist Doctors & OPD Timings
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Consult experienced doctors across cardiology, gynecology, general surgery, pediatrics, orthopedics, neurosurgery, and urology at Priya Hospital Jhalwa.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSpecialty(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  selectedSpecialty === cat
                    ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20 font-black'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredDoctors.map((doc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 space-y-5 text-left flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 text-[11px] font-extrabold border border-sky-500/30">
                    {doc.degrees}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {doc.available}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white">{doc.name}</h3>
                  <p className="text-xs font-extrabold text-amber-400 mt-0.5">{doc.nameHindi}</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-sky-300">{doc.specialty}</div>
                  <div className="text-[11px] font-semibold text-slate-400">{doc.specialtyHindi}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>OPD Time: <strong>{doc.timings}</strong></span>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" /> Book Consultation Slot
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
