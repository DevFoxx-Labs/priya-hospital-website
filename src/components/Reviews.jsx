import React from 'react';
import { Star, Quote, ExternalLink, CheckCircle } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "MONIKA MISHRA",
      relation: "In-patient Family",
      rating: 5,
      date: "Verified Google Review",
      text: "Best hospital experience I’ve had. Dr. and the team in are true professionals. Clean rooms, caring nurses, and zero hassle during billing. Thank you PRIYA HOSPITAL for making a tough time much easier! My best wishes 🙏",
      tag: "Zero Hassle Billing & True Professionals"
    },
    {
      name: "Priti Srivastav",
      relation: "Prayagraj Resident",
      rating: 5,
      date: "Verified Google Review",
      text: "The hospital is amazing with top notch doctors and amazing cleanliness. All facilities provided and very helpful staff I recommend to everybody in pryg.",
      tag: "Top Notch Doctors & Amazing Cleanliness"
    },
    {
      name: "Dwijendra Kumar Singh",
      relation: "Local Guide",
      rating: 5,
      date: "Verified Google Review",
      text: "Best hospital in the area. Professional doctors, modern facilities, and great patient care. 5/5!",
      tag: "Modern Facilities & Great Care 5/5"
    },
    {
      name: "Satyam Tripathi",
      relation: "Emergency Patient",
      rating: 5,
      date: "Verified Google Review",
      text: "Doctors are experienced and diagnosis is accurate and 24 hour service available. Staff management is too good.",
      tag: "Accurate Diagnosis & 24hr Service 👍"
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-800 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-extrabold uppercase tracking-wider border border-amber-500/30">
              Verified Google Patient Feedback
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Trusted by Families in Prayagraj
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Read real Google Reviews from patients who received emergency, surgical & medical care at Priya Hospital.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-sky-500/30 shadow-xl flex items-center gap-6 shrink-0">
            <div className="text-center">
              <div className="text-5xl font-black text-amber-400">5.0</div>
              <div className="flex items-center text-amber-400 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="border-l border-slate-800 pl-6 space-y-1">
              <div className="font-bold text-white text-base">Google Review Summary</div>
              <div className="text-xs text-slate-400 font-medium">Based on 30 Verified Hospital Ratings</div>
              <div className="inline-flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5" /> Perfect 5.0 Star Rating
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-extrabold border border-sky-500/40">
                    {rev.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-sky-400/30" />

                <p className="text-base text-slate-200 leading-relaxed italic font-medium">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white text-sm">{rev.name}</div>
                  <div className="text-slate-400">{rev.relation}</div>
                </div>
                <div className="text-right text-slate-500 font-semibold">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/maps?q=Priya+Hospital+Jhalwa+Prayagraj+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-sm shadow-md transition-all cursor-pointer"
          >
            <span>View All Google Patient Reviews</span>
            <ExternalLink className="w-4 h-4 text-sky-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
