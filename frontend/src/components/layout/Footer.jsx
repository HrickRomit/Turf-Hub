import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';
import { DHAKA_ZONES } from '../../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-[#030705] border-t border-emerald-500/15 pt-16 pb-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <span className="font-black text-base text-emerald-400">⚡</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-display">
                Turf<span className="text-emerald-400">Hub</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Dhaka’s premier artificial football turf discovery and instant booking engine. Atomic 10-minute pessimistic slot locking with direct bKash and SSLCOMMERZ integration.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs text-slate-400">Secured Payments by</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E2136E] text-white">bKash</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#0284C7]/20 text-[#38BDF8] border border-[#0284C7]/40">SSLCOMMERZ</span>
            </div>
          </div>

          {/* Dhaka Zones */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Dhaka Turf Zones
            </h4>
            <ul className="space-y-2 text-xs">
              {DHAKA_ZONES.slice(1).map((zone) => (
                <li key={zone.id}>
                  <a href="#explore-turfs" className="hover:text-emerald-400 transition-colors">
                    {zone.name} Turfs
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#explore-turfs" className="hover:text-emerald-400 transition-colors">Explore All Turfs</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Atomic Slot Lock</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How Booking Works</a></li>
              <li><a href="#owner-portal" className="hover:text-emerald-400 transition-colors">Arena Owner Portal</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Rules &amp; Cancellation Policy</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Dhaka Support
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+880 1700-TURFHUB</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>support@turfhub.com.bd</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} TurfHub Bangladesh. Built for Dhaka football players.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">Turf Partner Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

