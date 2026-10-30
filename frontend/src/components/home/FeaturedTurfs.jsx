import React, { useState } from 'react';
import { DHAKA_ZONES, FEATURED_TURFS } from '../../utils/constants';
import { Star, MapPin, Users, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function FeaturedTurfs({ onBookTurf }) {
  const [activeZone, setActiveZone] = useState('all');

  const filteredTurfs = activeZone === 'all'
    ? FEATURED_TURFS
    : FEATURED_TURFS.filter(turf => turf.zone === activeZone);

  return (
    <section id="explore-turfs" className="py-20 bg-[#050B08] relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dhaka Premier Venues</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Top Rated Football Turfs
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Inspect pitch dimensions, artificial grass quality, amenities, and reserve with instantaneous 10-minute slot holding.
            </p>
          </div>

          {/* Zone Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {DHAKA_ZONES.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                  activeZone === zone.id
                    ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'bg-[#0d1c15] text-slate-400 hover:text-white border border-white/5 hover:border-emerald-500/30'
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>
        </div>

        {/* Turf Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTurfs.map((turf) => (
            <div
              key={turf.id}
              className="rounded-3xl bg-[#091510]/85 border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.8)] group flex flex-col justify-between"
            >
              <div>
                {/* Turf Thumbnail Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={turf.image}
                    alt={turf.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091510] via-transparent to-black/40" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                    {turf.badge}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 text-xs font-bold text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{turf.rating}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({turf.reviewsCount})</span>
                  </div>

                  {/* Zone Tag */}
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1 text-slate-300 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{turf.zoneName}</span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {turf.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                      {turf.address}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-[#0e2118] border border-emerald-500/20 text-emerald-400 font-semibold">
                      {turf.size}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#08130e] border border-white/5 text-slate-300">
                      {turf.surface}
                    </span>
                  </div>

                  {/* Amenities */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {turf.amenities.slice(0, 4).map((amenity, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-slate-400 bg-black/30 px-2 py-0.5 rounded-md border border-white/5 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer / Price & Book */}
              <div className="p-5 pt-0 border-t border-white/5 mt-3 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block font-normal">Rate</span>
                  <span className="text-lg font-black text-emerald-400 font-display">
                    BDT {turf.price.toLocaleString()}
                    <span className="text-xs font-medium text-slate-400">/hr</span>
                  </span>
                </div>

                <button
                  onClick={() => onBookTurf(turf)}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all cursor-pointer"
                >
                  <span>Book Slot</span>
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

