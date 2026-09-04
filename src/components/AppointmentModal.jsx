import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, Siren, HeartPulse, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppointmentModal({ isOpen, onClose }) {
  const [step, setStep] = useState('form'); // 'form' | 'success'
  const [formData, setFormData] = useState({
    bookingType: 'OPD Consultation',
    doctor: 'Dr. Arun Kumar Srivastava (Heart Disease & Physician • Daily 11:00 AM - 1:00 PM)',
    department: 'Cardiology & General Medicine',
    date: new Date().toISOString().split('T')[0],
    time: '11:00 AM (OPD Slot)',
    patientName: '',
    age: '',
    phone: '',
    ayushmanCard: 'No',
    symptoms: ''
  });

  const [bookingRef, setBookingRef] = useState('');

  const doctorList = [
    { name: "Dr. Arun Kumar Srivastava (MBBS, MD)", spec: "Heart Disease & Physician (Daily 11 AM - 1 PM)", dept: "Cardiology & General Medicine" },
    { name: "Dr. Pritima Chaudhary (MS)", spec: "Obstetrician & Gynecologist (Daily 10 AM - 1 PM & 7 PM - 8:30 PM)", dept: "Obstetrics & Gynecology" },
    { name: "Dr. Kaushlesh Dwivedi (MBBS)", spec: "General Physician (Daily 11 AM - 4 PM & 7 PM - 10 PM)", dept: "General Medicine" },
    { name: "Dr. Anurag Srivastava (MBBS, DCH)", spec: "Pediatric & Child Specialist (Daily 1 PM - 2 PM)", dept: "Pediatrics" },
    { name: "Dr. Ashok Kumar Singh (MBBS, MS)", spec: "General & Laparoscopic Surgeon (Daily 2 PM - 3 PM)", dept: "General & Laparoscopic Surgery" },
    { name: "Dr. Saurabh Anand Dubey (MS, MCh)", spec: "Neuro & Spine Surgeon (Thursdays 4 PM - 5 PM)", dept: "Neuro & Spine Surgery" },
    { name: "Dr. Devendra Singh (MS, MCh)", spec: "Neuro & Spine Specialist (Appointment)", dept: "Neuro & Spine Surgery" },
    { name: "Dr. Ritu Babeja (MBBS, DGO)", spec: "Gynecologist & Obstetrician (Daily OPD)", dept: "Obstetrics & Gynecology" },
    { name: "Dr. Swati Srivastava (DGO)", spec: "Gynecologist & Obstetrician (Daily OPD)", dept: "Obstetrics & Gynecology" },
    { name: "Dr. Sachin Singh (MS)", spec: "Orthopedics, Bone & Joint Specialist (Daily Evening)", dept: "Orthopedics & Joint Care" },
    { name: "Dr. Abhishek Shukla (MBBS, MCh)", spec: "Urologist & Kidney Specialist (Appointment)", dept: "Urology & Nephrology" },
    { name: "Dr. Rakesh Paswan (MD)", spec: "Neuro & Psychiatric Specialist (Appointment)", dept: "Neuropsychiatry" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'PRIYA-' + Math.floor(10000 + Math.random() * 90000);
    setBookingRef(randomRef);
    setStep('success');
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Priya Hospital Jhalwa, I would like to confirm a doctor consultation.\nRef: ${bookingRef}\nType: ${formData.bookingType}\nDoctor: ${formData.doctor}\nPatient: ${formData.patientName} (${formData.age} yrs)\nAyushman Card: ${formData.ayushmanCard}\nDate: ${formData.date} at ${formData.time}\nPhone: ${formData.phone}`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-slate-900 rounded-3xl shadow-2xl border border-sky-500/40 overflow-hidden my-8 text-white z-10"
          >

            {/* Header */}
            <div className="gradient-emergency p-6 text-white flex items-center justify-between">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/20 text-xs font-black backdrop-blur-xs">
                  <img src="/phlogo.png" alt="Priya Hospital Logo" className="w-4 h-4 object-contain rounded-full bg-white/20 p-0.5" /> PRIYA HOSPITAL JHALWA
                </div>
                <h3 className="text-xl sm:text-2xl font-black">Book Doctor Consultation / Entry</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {step === 'form' ? (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">

                {/* Booking Type */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-extrabold text-sky-400 uppercase tracking-wider">
                    Booking Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, bookingType: 'OPD Consultation' })}
                      className={`p-3 rounded-xl border text-xs font-extrabold transition-all cursor-pointer ${
                        formData.bookingType === 'OPD Consultation'
                          ? 'bg-sky-600 text-white border-sky-400 shadow-md'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      🩺 Doctor OPD Consultation
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, bookingType: '24/7 Emergency Admission' })}
                      className={`p-3 rounded-xl border text-xs font-extrabold transition-all cursor-pointer ${
                        formData.bookingType === '24/7 Emergency Admission'
                          ? 'bg-red-600 text-white border-red-400 shadow-md'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      🚨 24/7 Emergency Admission
                    </button>
                  </div>
                </div>

                {/* Doctor Selection */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-extrabold text-sky-400 uppercase tracking-wider">
                    Select Specialist Doctor
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-700 bg-slate-950 font-bold text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {doctorList.map((doc, idx) => (
                      <option key={idx} value={`${doc.name} - ${doc.spec}`}>
                        {doc.name} • {doc.spec}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Ayushman Card Option */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-extrabold text-emerald-400 uppercase tracking-wider">
                    Do you have an Ayushman Bharat (PMJAY) or SACHIS Card?
                  </label>
                  <select
                    value={formData.ayushmanCard}
                    onChange={(e) => setFormData({ ...formData, ayushmanCard: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-700 bg-slate-950 font-semibold text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Yes - Ayushman Bharat (PMJAY)">Yes - I have Ayushman Card (PMJAY / SACHIS)</option>
                    <option value="No - Cash / Private Insurance">No - Regular Consultation / Insurance</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-sky-400 uppercase tracking-wider">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-700 bg-slate-950 font-medium text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-sky-400 uppercase tracking-wider">
                      OPD / Casualty Slot
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-700 bg-slate-950 font-semibold text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="11:00 AM (Morning OPD)">Morning OPD: 11:00 AM</option>
                      <option value="01:00 PM (Afternoon OPD)">Afternoon OPD: 01:00 PM</option>
                      <option value="04:00 PM (Evening OPD)">Evening OPD: 04:00 PM</option>
                      <option value="07:30 PM (Night OPD)">Night OPD: 07:30 PM</option>
                      <option value="24/7 Immediate Emergency Entry">🚨 24/7 Emergency Entry</option>
                    </select>
                  </div>
                </div>

                {/* Patient Name & Age */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="block text-xs font-extrabold text-sky-400 uppercase tracking-wider">
                      Patient Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Monika Mishra"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-700 bg-slate-950 font-medium text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-sky-400 uppercase tracking-wider">
                      Age
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 38"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-700 bg-slate-950 font-medium text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-extrabold text-sky-400 uppercase tracking-wider">
                    Mobile Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 8009803730"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-700 bg-slate-950 font-medium text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-black text-base shadow-xl shadow-sky-500/30 transition-all cursor-pointer"
                >
                  Confirm Consultation Slot
                </motion.button>
              </form>
            ) : (
              <div className="p-8 space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-extrabold border border-sky-500/40">
                    Booking Reference: {bookingRef}
                  </span>
                  <h4 className="text-2xl font-black text-white">Consultation Reserved!</h4>
                  <p className="text-slate-300 text-sm font-medium">
                    Appointment reserved for <strong>{formData.patientName}</strong> ({formData.bookingType}).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2 font-medium">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Hospital:</span>
                    <span className="font-bold text-sky-400">Priya Hospital (Jhalwa, Prayagraj)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Doctor:</span>
                    <span className="font-bold text-white">{formData.doctor}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Ayushman Card:</span>
                    <span className="font-bold text-emerald-400">{formData.ayushmanCard}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Date & Slot:</span>
                    <span className="font-bold text-white">{formData.date} at {formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">24/7 Helpline:</span>
                    <span className="font-bold text-red-400">+91 80098 03730</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={`https://wa.me/918009803730?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" /> Send Confirmation to WhatsApp
                  </a>

                  <button
                    onClick={onClose}
                    className="w-full py-3 rounded-xl border border-slate-800 text-slate-300 font-bold text-sm hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
