import React from 'react';
import { Star, Calendar, Phone, MapPin, Sparkles, CheckCircle2, ShieldCheck, Siren, HeartPulse, Activity, Stethoscope, Award, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="relative min-h-[85vh] flex items-center bg-slate-950 text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Blobs with motion */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-red-500/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 items-center"
        >

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 shadow-lg">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-black text-white">5.0 Rating</span>
                <span className="text-xs text-slate-500">•</span>
                <a href="#reviews" className="text-xs font-bold text-sky-400 hover:underline">
                  30 Google Reviews
                </a>
              </div>

              {/* Ayushman Bharat Scheme Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold border border-emerald-500/40 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>आयुष्मान भारत (PMJAY) & SACHIS Empanelled</span>
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight"
            >
              PRIYA HOSPITAL <br />
              <span className="bg-gradient-to-r from-red-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                प्रिया हॉस्पिटल (24/7 Emergency)
              </span>
            </motion.h1>

            {/* Slogan */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-bold text-amber-400 tracking-wide italic"
            >
              "स्वास्थ्य आपका साथ हमारा" — Your Health, Our Commitment
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl"
            >
              Jhalwa’s top-rated 24/7 multispeciality emergency hospital equipped with a 7-bedded ICU, Ultrasound Centre (अल्ट्रासाउंड सेन्टर), general & laparoscopic surgery, maternity OPD, and PMJAY cashless treatment.
            </motion.p>

            {/* Featured Google Review quote */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: "rgba(56, 189, 248, 0.6)" }}
              className="p-4 rounded-2xl bg-slate-900/90 border border-sky-500/30 backdrop-blur-md shadow-xl flex items-start gap-3.5 max-w-xl transition-all"
            >
              <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400 shrink-0 mt-0.5 border border-sky-500/40">
                <Sparkles className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <p className="text-xs sm:text-sm italic font-semibold text-slate-200">
                  "Best hospital experience I’ve had. Dr. and the team in are true professionals. Clean rooms, caring nurses, and zero hassle during billing. Thank you PRIYA HOSPITAL!"
                </p>
                <p className="text-xs text-sky-400 mt-1 font-bold">— Verified Patient Review on Google (5.0 ★)</p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="tel:+918009803730"
                className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-base shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all"
              >
                <Siren className="w-5 h-5 animate-pulse" />
                24/7 Emergency Call
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-extrabold text-base border border-slate-700 shadow-md transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-sky-400" />
                Book OPD Slot
              </motion.button>

              <a
                href="#roster"
                className="flex items-center gap-2 px-5 py-4 rounded-2xl text-sky-400 hover:text-sky-300 font-extrabold text-sm hover:underline"
              >
                <Stethoscope className="w-4 h-4 text-sky-400" />
                12 Doctor Panel & Timings →
              </a>
            </motion.div>

            {/* Key Value Props */}
            <motion.div variants={itemVariants} className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80 text-xs sm:text-sm font-extrabold text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                Ayushman PMJAY Empanelled
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                In-House Ultrasound Centre
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                7-Bedded Critical ICU
              </div>
            </motion.div>

          </div>

          {/* Right Visual Motion Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
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

              {/* Department Highlights */}
              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between hover:border-emerald-400 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold border border-emerald-500/40">
                      💳
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Ayushman Bharat PMJAY & SACHIS</h4>
                      <p className="text-xs text-slate-400">Cashless free treatment facility for eligible cardholders</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-4 rounded-2xl bg-slate-900/90 border border-sky-500/30 flex items-center justify-between hover:border-sky-400 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-xl font-bold border border-sky-500/40">
                      🔬
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Ultrasound & Diagnostic Centre</h4>
                      <p className="text-xs text-slate-400">In-house Ultrasound (अल्ट्रासाउंड सेन्टर), X-Ray & Blood Lab</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-4 rounded-2xl bg-slate-900/90 border border-red-500/30 flex items-center justify-between hover:border-red-400 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center text-xl font-bold border border-red-500/40">
                      🚨
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">24/7 Emergency & ICU Care</h4>
                      <p className="text-xs text-slate-400">7-bedded ICU, trauma unit & stroke management</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Address Quick Card */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                <div className="flex items-center justify-between font-extrabold text-sky-400">
                  <span>📍 Gungroo Chauraha</span>
                  <span>opp. Indian Oil</span>
                </div>
                <p className="text-slate-300 leading-snug">
                  Devprayagam Colony, Jhalwa, Prayagraj, UP 211012
                </p>
                <div className="pt-1 flex items-center justify-between text-slate-400 font-bold">
                  <span>📞 +91 80098 03730</span>
                  <span>✉️ priyahospital1@gmail.com</span>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
