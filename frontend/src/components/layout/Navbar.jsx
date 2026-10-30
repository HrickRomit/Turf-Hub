import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenAuth, onExploreClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060D0B]/85 backdrop-blur-xl border-b border-emerald-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <span className="font-black text-base text-emerald-400">⚡</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-white font-display">
              Turf<span className="text-emerald-400 transition-colors group-hover:text-emerald-300">Hub</span>
            </span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => {
                if (onExploreClick) onExploreClick();
                else scrollToSection('explore-turfs');
              }}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Explore Turfs
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection('owner-portal')}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              Owner Portal
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Partner
              </span>
            </button>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenAuth}
              className="text-xs font-semibold px-5 py-2.5 rounded-full border border-emerald-500/50 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/60 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07110C]/95 backdrop-blur-2xl border-b border-emerald-500/20 px-6 py-5 space-y-4 shadow-2xl">
          <button
            onClick={() => {
              if (onExploreClick) onExploreClick();
              else scrollToSection('explore-turfs');
            }}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-emerald-400"
          >
            Explore Turfs
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-emerald-400"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-emerald-400"
          >
            How it Works
          </button>
          <button
            onClick={() => scrollToSection('owner-portal')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-emerald-400"
          >
            Owner Portal
          </button>
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenAuth) onOpenAuth();
              }}
              className="w-full text-center py-2.5 rounded-xl border border-emerald-500/60 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500 hover:text-slate-950 font-semibold text-sm transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

