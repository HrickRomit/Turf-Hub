import React from 'react';
import { Building2, TrendingUp, CheckCircle, Smartphone, ArrowRight } from 'lucide-react';

export default function OwnerPortalCta() {
  return (
    <section id="owner-portal" className="py-20 bg-[#07110C] relative border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              <span>For Dhaka Turf Facility Owners</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
              Eliminate Manual Phone Bookings. <br />
              <span className="text-emerald-400">Maximize Arena Occupancy.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Managing slots through WhatsApp and notebook entries creates double bookings and late cancellations. TurfHub gives arena operators a live interactive calendar, automated bKash deposit verification, and detailed revenue analytics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Automated 10-Min Pessimistic Lock',
                'Instant bKash Merchant Settlements',
                'Manual Offline Booking Entry Sync',
                'Customer SMS Reminders & QR Scanner',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => alert('TurfHub Owner Partner Registration will open shortly!')}
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Register Your Dhaka Arena</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-400">Zero setup fee for first 50 Dhaka turfs</span>
            </div>
          </div>

          {/* Right Mockup Console Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0b1712] border border-emerald-500/30 p-6 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">TurfHub Arena Dashboard</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  Live Sync
                </span>
              </div>

              {/* Console preview metrics */}
              <div className="pt-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-[#07100b] border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Today's Revenue</span>
                    <span className="text-xl font-bold text-emerald-400 font-display">BDT 17,500</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">+24% vs yesterday</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#07100b] border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Slot Occupancy</span>
                    <span className="text-xl font-bold text-white font-display">7 / 8 Slots</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">87.5% Full</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#07100b] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">Upcoming 8:00 PM Slot</span>
                    <span className="text-amber-400 font-mono text-[11px] font-bold">10-Min Hold</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Captain: Sadman Fahim (7-a-side)</span>
                    <span className="text-emerald-400 font-bold">bKash Pending</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full w-3/4 animate-pulse" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

