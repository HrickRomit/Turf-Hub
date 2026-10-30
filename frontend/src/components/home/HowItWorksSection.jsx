import React from 'react';
import { Search, Lock, Trophy, ArrowRight } from 'lucide-react';

export default function HowItWorksSection({ onGetStarted }) {
  const steps = [
    {
      step: '01',
      title: 'Find Your Arena & Slot',
      desc: 'Browse pitches by neighborhood in Dhaka (Bashundhara, Dhanmondi, Uttara). Filter by 7-a-side, FIFA turf certification, and floodlight quality.',
      icon: Search,
    },
    {
      step: '02',
      title: '10-Minute Lock & bKash Pay',
      desc: 'Selecting your slot triggers an immediate 10-minute hold. Pay smoothly via personal bKash or debit card. No one can steal your slot while checking out.',
      icon: Lock,
    },
    {
      step: '03',
      title: 'Show QR Pass & Kick Off',
      desc: 'Receive your instant digital match receipt with match countdown, location coordinates, and digital QR code. Flash it at the arena manager and play ball.',
      icon: Trophy,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#050B08] relative border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <span>Fast &amp; Seamless</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            How TurfHub Works
          </h2>
          <p className="text-slate-400 text-sm">
            Book your squad's football session in under 60 seconds with zero friction.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-[#091611]/80 border border-white/10 p-8 backdrop-blur-xl group hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step indicator watermark */}
                <div className="text-5xl font-black text-emerald-500/10 font-display mb-4 group-hover:text-emerald-500/20 transition-colors">
                  {step.step}
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span>Step {step.step} Complete</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner below */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#0d261b] via-[#0b1d15] to-[#07130d] border border-emerald-500/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Ready for your squad’s next match?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Check real-time slot availability for tonight across all major Dhaka turfs.
            </p>
          </div>

          <button
            onClick={onGetStarted}
            className="px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] flex items-center gap-2 transition-all cursor-pointer shrink-0"
          >
            <span>Reserve A Turf Now</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}

