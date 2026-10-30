import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Search, Lock, ShieldCheck, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import stadiumBg from '../../assets/stadium-bg.jpg';
import turfCardImg from '../../assets/turf-card.jpg';
import { DHAKA_ZONES, TIME_SLOTS, LIVE_BOOKING_EVENTS } from '../../utils/constants';

export default function HeroSection({ onSearch, onSelectTurf }) {
  // Search Bar States
  const [selectedZone, setSelectedZone] = useState('Dhaka, Bangladesh');
  const [selectedSubtext, setSelectedSubtext] = useState('or Bashundhara, Uttara...');
  const [zoneDropdownOpen, setZoneDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[2].time);
  const [slotDropdownOpen, setSlotDropdownOpen] = useState(false);

  // 10-Minute Hold Ticking Countdown (9:59 down to 0:00)
  const [secondsLeft, setSecondsLeft] = useState(594); // 9 mins 54 secs
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Live Toast cycling
  const [liveIndex, setLiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveIndex((prev) => (prev + 1) % LIVE_BOOKING_EVENTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentLive = LIVE_BOOKING_EVENTS[liveIndex];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        zone: selectedZone,
        date: selectedDate,
        slot: selectedSlot,
      });
    }
  };

  return (
    <section className="relative min-h-[95vh] pt-28 pb-16 flex items-center overflow-hidden bg-[#060D0B]">
      
      {/* Background Stadium Photo with Layered Floodlight & Vignette Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={stadiumBg}
          alt="Stadium floodlights night background"
          className="w-full h-full object-cover object-center opacity-35 scale-105 filter brightness-90 contrast-125"
        />
        {/* Deep Dark Vignette & Atmospheric Stadium Green Lighting Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B08] via-[#050B08]/75 to-[#060D0B]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B08] via-[#050B08]/85 to-transparent" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-emerald-500/15 rounded-full blur-[140px]" />
        <div className="absolute top-10 right-10 w-[600px] h-[500px] bg-emerald-400/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Punchy Hero Copy & Floating Search Bar */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            
            {/* Main Headline (Exact Typography from Mockup) */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-black tracking-tight text-white leading-[1.08] font-display">
                Book Dhaka’s Best <br />
                Football Turfs <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#00E676] to-emerald-300 drop-shadow-[0_0_30px_rgba(0,230,118,0.35)]">
                  in Seconds
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              Zero double-booking conflicts. Atomic 10-minute slot locking. Instant bKash &amp; SSLCOMMERZ payments.
            </p>

            {/* Floating Glassmorphism Search Bar */}
            <div className="bg-[#0c1a14]/85 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.85)] border-emerald-500/20 max-w-2xl">
              <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-stretch md:items-center gap-2.5 sm:gap-3">
                
                {/* 1. Select Location */}
                <div className="relative flex-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1 pl-1">
                    Select Location
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setZoneDropdownOpen(!zoneDropdownOpen);
                      setSlotDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 bg-[#08120e]/80 hover:bg-[#0a1813] border border-white/10 hover:border-emerald-500/40 rounded-xl px-3 py-2 text-left transition-all cursor-pointer"
                  >
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-white truncate">{selectedZone}</div>
                      <div className="text-[10px] text-slate-400 truncate">{selectedSubtext}</div>
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </button>

                  {/* Location Dropdown Modal */}
                  {zoneDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-[#09140f] border border-emerald-500/30 rounded-xl shadow-2xl p-2 z-50 backdrop-blur-2xl space-y-1">
                      <div className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1">
                        Popular Dhaka Turf Hubs
                      </div>
                      {DHAKA_ZONES.map((zone) => (
                        <button
                          key={zone.id}
                          type="button"
                          onClick={() => {
                            setSelectedZone(zone.name);
                            setSelectedSubtext(zone.id === 'all' ? 'Across all Dhaka zones' : 'Dhaka, Bangladesh');
                            setZoneDropdownOpen(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors flex items-center justify-between"
                        >
                          <span>{zone.name}</span>
                          <span className="text-[10px] text-emerald-400/70 font-mono">Verified</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Choose Date */}
                <div className="flex-1 md:max-w-[155px]">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1 pl-1">
                    Choose Date
                  </span>
                  <div className="relative flex items-center bg-[#08120e]/80 border border-white/10 rounded-xl px-2.5 py-2 hover:border-emerald-500/40 transition-all">
                    <Calendar className="w-4 h-4 text-emerald-400 shrink-0 mr-2" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="bg-transparent text-white text-xs font-semibold focus:outline-none w-full [color-scheme:dark] cursor-pointer"
                    />
                  </div>
                </div>

                {/* 3. Preferred Time Slot */}
                <div className="relative flex-1 md:max-w-[170px]">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1 pl-1">
                    Preferred Slot
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setSlotDropdownOpen(!slotDropdownOpen);
                      setZoneDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 bg-[#08120e]/80 hover:bg-[#0a1813] border border-white/10 hover:border-emerald-500/40 rounded-xl px-2.5 py-2 text-left transition-all cursor-pointer"
                  >
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-semibold text-white truncate flex-1">
                      {selectedSlot}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </button>

                  {/* Slot Dropdown */}
                  {slotDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-[#09140f] border border-emerald-500/30 rounded-xl shadow-2xl p-1.5 z-50 backdrop-blur-2xl space-y-1">
                      <div className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1">
                        Select Dhaka Prime Slot
                      </div>
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => {
                            setSelectedSlot(slot.time);
                            setSlotDropdownOpen(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors flex items-center justify-between"
                        >
                          <span className="font-mono">{slot.time}</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            {slot.tag}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 4. Action Button */}
                <div className="md:self-end pt-2 md:pt-0">
                  <button
                    type="submit"
                    className="w-full md:w-auto h-[42px] px-6 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Search className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                    <span>Search Turfs</span>
                  </button>
                </div>

              </form>
            </div>

            {/* Quick trust tags */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                No Booking Fees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Atomic Pessimistic Slot Lock
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Instant bKash Refund on Expiry
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: The Iconic Interactive Showcase Card Stack */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
            
            {/* Outer Glow Halo */}
            <div className="absolute inset-0 bg-emerald-500/15 rounded-3xl blur-3xl pointer-events-none" />

            {/* MAIN FEATURED TURF CARD */}
            <div className="relative w-full max-w-[430px] rounded-3xl bg-[#0b1612]/90 border border-white/10 backdrop-blur-2xl p-3.5 shadow-[0_30px_70px_rgba(0,0,0,0.9)] border-emerald-500/25 transition-all duration-300 hover:border-emerald-500/40 group">
              
              {/* Card Image with Stadium Floodlights */}
              <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-slate-900 border border-white/5">
                <img
                  src={turfCardImg}
                  alt="JAFF Arena Bashundhara"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle vignette over the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Overlaid Badge: 10:00 Slot Hold Active (Exact from mockup) */}
                <div className="absolute top-3 right-3 bg-[#181308]/90 border border-amber-500/50 rounded-xl px-3 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-start gap-2 max-w-[210px] animate-pulse-slow">
                  <div className="p-1 rounded-md bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-amber-300 leading-tight">
                      {formatCountdown(secondsLeft)} Slot Hold Active
                    </div>
                    <div className="text-[9px] text-amber-200/80 leading-snug">
                      Pessimistic lock secures your slot
                    </div>
                  </div>
                </div>

                {/* Ground tag */}
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-emerald-400">
                  Live Arena Preview
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="pt-4 pb-2 px-1 space-y-2.5">
                
                {/* Title & Rating */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    JAFF Arena – Bashundhara R/A
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                    <span>4.8</span>
                    <span>★</span>
                  </div>
                </div>

                {/* Amenities string */}
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  7-a-side • Outdoor Artificial Grass • Parking • Changing Rooms
                </p>

                {/* Price tag & CTA */}
                <div className="pt-2 flex items-center justify-between border-t border-white/5">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-normal">Evening Floodlit Rate</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-emerald-400 font-display">
                        BDT 2,500<span className="text-xs font-medium text-slate-400">/hr</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">(Off-peak: BDT 1,800)</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectTurf && onSelectTurf('jaff-arena')}
                    className="px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-bold text-xs border border-emerald-500/40 hover:border-transparent transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  >
                    Quick Reserve
                  </button>
                </div>

              </div>

            </div>

            {/* FLOATING BADGE 1: 10-Minute Lock (Bottom-Left overlap) */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#171107]/95 border border-amber-500/60 rounded-2xl p-3 shadow-[0_15px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl z-20 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-amber-400/90 tracking-wider">
                  10-Minute Lock
                </div>
                <div className="text-base font-black text-amber-300 font-mono flex items-center gap-1.5">
                  <span>{formatCountdown(secondsLeft)}</span>
                  <span className="text-[10px] font-semibold text-amber-400 px-1.5 py-0.2 rounded bg-amber-500/20 border border-amber-500/30">
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE 2: Verified Payment (Right overlap) */}
            <div className="absolute -bottom-2 -right-4 sm:-right-8 bg-[#0a1813]/95 border border-emerald-500/40 rounded-2xl p-3 shadow-[0_15px_35px_rgba(0,0,0,0.85)] backdrop-blur-xl z-20 space-y-1.5">
              <div className="text-[10px] uppercase font-bold text-slate-300 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified Payment
              </div>
              <div className="flex items-center gap-1.5">
                {/* bKash badge */}
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-[#E2136E] text-white shadow-sm">
                  bKash
                </span>
                <span className="text-[11px] text-slate-400">&amp;</span>
                {/* SSLCOMMERZ badge */}
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#0284C7]/20 text-[#38BDF8] border border-[#0284C7]/40 flex items-center gap-1">
                  SSLCOMMERZ
                  <span className="text-emerald-400 font-bold">✔</span>
                </span>
              </div>
            </div>

            {/* FLOATING TOAST 3: Live Booking (Bottom right below the payment badge) */}
            <div className="absolute -bottom-16 right-0 sm:right-2 bg-[#091510]/95 border border-white/10 rounded-2xl px-3.5 py-2.5 shadow-[0_15px_30px_rgba(0,0,0,0.85)] backdrop-blur-xl z-20 flex items-center gap-2.5">
              <div className="relative">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xs font-bold text-emerald-300">
                  {currentLive.user.charAt(0)}
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#091510] animate-ping" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-medium">Live Booking</div>
                <div className="text-xs font-bold text-white">
                  {currentLive.user} reserved <span className="text-emerald-400">{currentLive.turf}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

