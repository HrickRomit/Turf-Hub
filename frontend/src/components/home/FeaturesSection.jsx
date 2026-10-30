import React from 'react';
import { Lock, ShieldCheck, Zap, MapPin, Users, Clock, QrCode } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Lock,
      title: 'Atomic 10-Minute Slot Hold',
      tag: 'Core Innovation',
      desc: 'When you select a slot, our backend pessimistic locking engine holds it exclusively for 10 minutes. No other team in Dhaka can grab it while you complete payment.',
      accent: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    },
    {
      icon: ShieldCheck,
      title: 'Direct bKash & SSLCOMMERZ',
      tag: 'Zero Friction',
      desc: 'Pay instantly with your personal bKash wallet, Nagad, Rocket, or Visa/MasterCard. Automated webhooks confirm your slot in under 2 seconds with instant SMS receipt.',
      accent: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    },
    {
      icon: MapPin,
      title: 'Dhaka Neighborhood Discovery',
      tag: 'Geospatial Search',
      desc: 'Search artificial pitches across Bashundhara R/A, Dhanmondi, Uttara, Mirpur, and Gulshan. Filter by turf grade, 6-a-side vs 7-a-side, and covered vs open air.',
      accent: 'border-sky-500/30 bg-sky-500/10 text-sky-400',
    },
    {
      icon: QrCode,
      title: 'Instant QR Match Entry Pass',
      tag: 'Digital Check-in',
      desc: 'Once booked, receive a unique digital QR pass for your team captain. Show it at the arena reception for instant pitch access without paper paperwork.',
      accent: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    },
    {
      icon: Users,
      title: 'Team Match Invite & Split',
      tag: 'Team Coordination',
      desc: 'Generate a WhatsApp match invite with venue GPS directions, kickoff time, and individual share breakdown so everyone chips in before game day.',
      accent: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    },
    {
      icon: Zap,
      title: 'Real-Time Schedule Sync',
      tag: 'Owner Synchronized',
      desc: 'Direct synchronization with turf owner scheduling consoles. Even phone-call bookings are instantly reflected to guarantee 100% schedule accuracy.',
      accent: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#07110C] relative border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <span>The TurfHub Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Engineered Specifically for Dhaka’s Football Scene
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No more endless phone calls, double-booked slots, or awkward cash collections before kickoff.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="rounded-3xl bg-[#0a1813]/80 border border-white/10 hover:border-emerald-500/30 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${feature.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

