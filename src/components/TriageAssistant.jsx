import React, { useState } from 'react';
import { Siren, ArrowRight, CheckCircle2, RotateCcw, Calendar, AlertCircle, Sparkles, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TriageAssistant({ onOpenBooking }) {
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const emergencyCases = [
    {
      id: 'trauma',
      label: 'Accident, Fracture or Severe Polytrauma',
      priority: 'HIGH EMERGENCY 🚨',
      priorityColor: 'bg-red-500/20 text-red-400 border-red-500/40',
      action: '24/7 Casualty & Trauma Resuscitation Required immediately. Bring patient to Priya Hospital Emergency Department.',
      dept: 'Trauma & Orthopedic Surgery',
      tip: 'Do not move injured limbs. Call emergency line: +91 80098 03730'
    },
    {
      id: 'chest',
      label: 'Chest Pain, Breathlessness or Stroke Symptoms',
      priority: 'HIGH EMERGENCY 🚨',
      priorityColor: 'bg-red-500/20 text-red-400 border-red-500/40',
      action: 'Immediate Cardiac & ICU Resuscitation. 7-bed ICU equipped with monitors and critical care specialists.',
      dept: 'Intensive Care Unit (ICU) & General Medicine',
      tip: 'Keep patient in seated posture. Proceed to Gungroo Chauraha Jhalwa directly.'
    },
    {
      id: 'pregnancy',
      label: 'Labor Pain, Pregnancy Emergency or Bleeding',
      priority: 'URGENT MATERNITY CARE 🌸',
      priorityColor: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
      action: 'Obstetrics & Gynecology unit available 24/7 for normal delivery, C-section, and high-risk pregnancy emergencies.',
      dept: 'Obstetrics & Gynecology Unit',
      tip: 'Bring pregnancy medical records and previous ultrasounds if available.'
    },
    {
      id: 'abdomen',
      label: 'Acute Abdominal Pain (Appendix / Gallstone / Hernia)',
      priority: 'URGENT SURGICAL OPD 🔪',
      priorityColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      action: 'General & Laparoscopic Surgery consultation for acute appendix, gall bladder, or obstructed hernia.',
      dept: 'General & Laparoscopic Surgery OPD',
      tip: 'Avoid solid food or liquids if emergency surgery might be needed.'
    },
    {
      id: 'fever',
      label: 'High Viral Fever, Dengue, Chills or Vomiting',
      priority: 'GENERAL MEDICINE OPD 🩺',
      priorityColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
      action: 'Consult General Physician for complete blood panel (CBC, Dengue NS1), IV hydration, and fever OPD care.',
      dept: 'General Medicine & 24/7 Pathology Lab',
      tip: 'Maintain hydration with ORS or water.'
    }
  ];

  const currentSelection = emergencyCases.find(e => e.id === selectedSymptom);

  return (
    <section id="triage" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-extrabold uppercase tracking-wider border border-red-500/30">
            24/7 Casualty & Triage Assistant
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Emergency & OPD Guidance Assistant
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Select patient condition to view immediate medical action and department guidance.
          </p>
        </motion.div>

        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl space-y-8">

          {/* Buttons */}
          <div className="space-y-3">
            <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider">
              Select Current Patient Condition / Symptom:
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {emergencyCases.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSymptom(item.id)}
                  className={`p-4 rounded-2xl border text-left font-bold text-sm transition-all cursor-pointer flex items-center justify-between ${
                    selectedSymptom === item.id
                      ? 'bg-gradient-to-r from-red-600 to-sky-600 text-white border-sky-400 shadow-lg'
                      : 'bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className={`w-4 h-4 shrink-0 ml-2 ${selectedSymptom === item.id ? 'text-white' : 'text-slate-500'}`} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Result Card */}
          <AnimatePresence mode="wait">
            {currentSelection ? (
              <motion.div
                key={currentSelection.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-5 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-black border ${currentSelection.priorityColor}`}>
                    {currentSelection.priority}
                  </span>
                  <button
                    onClick={() => setSelectedSymptom(null)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer font-bold"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset Selection
                  </button>
                </div>

                <div className="space-y-1 text-left">
                  <h4 className="text-xl font-bold text-sky-400">Department: {currentSelection.dept}</h4>
                  <p className="text-sm font-medium text-slate-200 leading-relaxed">{currentSelection.action}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-medium text-left flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Emergency Tip:</strong> {currentSelection.tip}</span>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 justify-end">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="tel:+918009803730"
                    className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Call 24/7 Helpline (+91 80098 03730)
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onOpenBooking}
                    className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" /> Book OPD Slot
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs font-semibold flex items-center gap-2 text-left">
                <Siren className="w-4 h-4 shrink-0 text-red-400" />
                Select a symptom or emergency condition above for instant hospital action advice.
              </div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
