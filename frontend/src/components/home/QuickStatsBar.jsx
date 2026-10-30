import React from 'react';
import { PLATFORM_STATS } from '../../utils/constants';
import { ShieldCheck, Zap, Award, Users } from 'lucide-react';

const icons = [Award, Zap, ShieldCheck, Users];

export default function QuickStatsBar() {
  return (
    <div className="relative z-10 border-y border-emerald-500/15 bg-[#06100c]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {PLATFORM_STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="flex items-center gap-3.5 group">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight group-hover:text-emerald-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

