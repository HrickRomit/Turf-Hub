import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    LayoutDashboard,
    Calendar,
    DollarSign,
    Tags,
    BarChart3,
    User,
    Clock,
    TrendingUp,
    CheckCircle2,
    AlertCircle,
    Plus,
    Lock,
    Phone,
    Sparkles,
    ChevronRight,
    Menu,
    X,
    ArrowLeft,
    ShieldCheck,
    Building2,
    FileText,
    RotateCcw
} from 'lucide-react';

export default function OwnerDashboardPage() {
    const [activeNav, setActiveNav] = useState('dashboard');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activePitch, setActivePitch] = useState('pitch-1');

    const navItems = [
        { id: 'dashboard', label: '1. Dashboard', icon: LayoutDashboard },
        { id: 'schedule', label: '2. Booking and schedule', icon: Calendar },
        { id: 'financials', label: '3. Financial and revenue tracking', icon: DollarSign },
        { id: 'pricing', label: '4. Pricing and slot customization', icon: Tags },
        { id: 'analytics', label: '5. Customer and business analytics', icon: BarChart3 },
        { id: 'profile', label: '6. Profile', icon: User },
    ];


    return (
        <div className="min-h-screen bg-[#040806] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">

            {/* Mobile Top Header */}
            <header className="lg:hidden bg-[#07130F] border-b border-emerald-500/20 px-4 py-3 flex items-center justify-between sticky top-0 z-40 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-white/10"
                        aria-label="Toggle Navigation"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
                            ⚡
                        </div>
                        <span className="font-extrabold text-white text-base">
                            Turf<span className="text-emerald-400">Hub</span> Owner
                        </span>
                    </div>
                </div>

                <Link
                    to="/"
                    className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1"
                >
                    <span>Exit</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
            </header>

            <div className="flex-1 flex">

                {/* ======================================================== */}
                {/* SIDE NAVBAR (Items 1 through 6)                         */}
                {/* ======================================================== */}
                <aside
                    className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#06110D] border-r border-emerald-500/15 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen lg:sticky lg:top-0 ${mobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
                        }`}
                >
                    {/* Top Brand & Venue Header */}
                    <div className="p-5 border-b border-white/5 space-y-4">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="flex items-center gap-2 group">
                                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                    <span className="font-black text-lg">⚡</span>
                                </div>
                                <span className="text-xl font-black tracking-tight text-white font-display">
                                    Turf<span className="text-emerald-400">Hub</span>
                                </span>
                            </Link>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                                OWNER
                            </span>
                        </div>

                        {/* Venue Identification Card (from Proposal) */}
                        <div className="rounded-2xl bg-[#091813] border border-emerald-500/20 p-3 space-y-1">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white truncate max-w-[170px]">
                                    JAFF Arena
                                </span>
                                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
                                    <ShieldCheck className="w-3 h-3" />
                                    Verified
                                </span>
                            </div>
                            <div className="text-[11px] text-slate-400 truncate">
                                Bashundhara R/A, Dhaka
                            </div>
                        </div>
                    </div>

                    {/* Side Navbar List (The 6 Requested Sections) */}
                    <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
                        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                            Owner Portal
                        </div>

                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeNav === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveNav(item.id);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`w-full text-left px-3.5 py-3 rounded-2xl transition-all flex items-center justify-between group cursor-pointer ${isActive
                                            ? 'bg-gradient-to-r from-emerald-500/20 to-emerald-500/5 text-emerald-400 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] font-bold'
                                            : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${isActive
                                                    ? 'bg-emerald-500 text-slate-950 font-bold'
                                                    : 'bg-white/5 text-slate-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10'
                                                }`}
                                        >
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-semibold">{item.label}</span>
                                    </div>
                                    <ChevronRight
                                        className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-emerald-400 translate-x-0.5' : 'text-slate-600 opacity-0 group-hover:opacity-100'
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </nav>

                    {/* Bottom Back Button */}
                    <div className="p-4 border-t border-white/5 bg-[#050E0A]">
                        <Link
                            to="/"
                            className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-emerald-400 text-xs font-medium flex items-center justify-between transition-colors"
                        >
                            <span className="flex items-center gap-2">
                                <ArrowLeft className="w-3.5 h-3.5" />
                                <span>Return to Website</span>
                            </span>
                        </Link>
                    </div>
                </aside>

                {/* Mobile Backdrop Overlay */}
                {mobileMenuOpen && (
                    <div
                        onClick={() => setMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/70 z-40 lg:hidden backdrop-blur-sm"
                    />
                )}

                {/* ======================================================== */}
                {/* MAIN DASHBOARD CONTENT AREA                              */}
                {/* ======================================================== */}
                <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">

                    {/* Top Header Bar */}
                    <div className="hidden lg:flex items-center justify-between px-8 py-4 bg-[#06110D]/70 backdrop-blur-xl border-b border-white/5 sticky top-0 z-30">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-slate-400">TurfHub Owner:</span>
                            <span className="text-sm font-bold text-white">JAFF Arena — Bashundhara R/A</span>
                            <span className="text-slate-600">•</span>
                            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Live Sync
                            </span>
                        </div>

                        <div className="flex items-center gap-4 text-xs">
                            <span className="text-slate-400 flex items-center gap-1.5 font-mono">
                                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Tuesday, Oct 13, 2026</span>
                            </span>

                            <div className="flex items-center gap-2 pl-3 border-l border-white/10">
                                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                                    R
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white leading-tight">Rafiqul Islam</div>
                                    <div className="text-[10px] text-slate-400 font-mono">Arena Operator</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-8">


                        {activeNav === 'dashboard' ? (
                            <>
                                {/* Header Banner & Quick Action Buttons */}
                                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950/70 via-[#071510] to-[#0A1D16] border border-emerald-500/20 p-6 sm:p-8 shadow-2xl">
                                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="space-y-2">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                                <span>Path: /owner/dashboard</span>
                                            </div>
                                            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                                                Owner Dashboard & Venue Stats
                                            </h1>
                                            <p className="text-sm text-slate-300 max-w-2xl">
                                                Monitor daily occupancy, review verified advance deposits, and manage match schedules for JAFF Arena.
                                            </p>
                                        </div>

                                        {/* Action Buttons (Proposal Style) */}
                                        <div className="flex flex-wrap items-center gap-3">
                                            <button className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2 cursor-pointer">
                                                <Plus className="w-4 h-4" />
                                                <span>[+] Block Time / Book</span>
                                            </button>
                                            <button className="px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-white/10 font-medium text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer">
                                                <Tags className="w-4 h-4 text-emerald-400" />
                                                <span>Manage Pitch Rates</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* 4 Card-Style Metrics (Exact match to Project Proposal Page 3) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                                    {/* Card 1: Today's Revenue */}
                                    <div className="rounded-2xl bg-[#091410] border border-white/5 p-5 relative overflow-hidden group hover:border-emerald-500/40 transition-all shadow-lg">
                                        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                                            <span>Today's Revenue</span>
                                            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">
                                                ৳
                                            </div>
                                        </div>
                                        <div className="text-2xl font-black text-emerald-400 font-display">
                                            BDT 48,500
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1">
                                            <TrendingUp className="w-3 h-3 text-emerald-400" />
                                            <span>+18% vs yesterday</span>
                                        </div>
                                        <div className="text-[10px] text-slate-500 mt-2 pt-2 border-t border-white/5 flex justify-between">
                                            <span>Online: ৳34,000</span>
                                            <span>Cash: ৳14,500</span>
                                        </div>
                                    </div>

                                    {/* Card 2: Occupancy Rate */}
                                    <div className="rounded-2xl bg-[#091410] border border-white/5 p-5 relative overflow-hidden group hover:border-emerald-500/40 transition-all shadow-lg">
                                        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                                            <span>Occupancy Rate</span>
                                            <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                                                <TrendingUp className="w-4 h-4" />
                                            </div>
                                        </div>
                                        <div className="text-2xl font-black text-white font-display">
                                            82%
                                        </div>
                                        <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1">
                                            <span>14 of 17 bookable slots filled</span>
                                        </div>
                                        <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden mt-3">
                                            <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full" style={{ width: '82%' }} />
                                        </div>
                                    </div>

                                    {/* Card 3: Active Bookings */}
                                    <div className="rounded-2xl bg-[#091410] border border-white/5 p-5 relative overflow-hidden group hover:border-emerald-500/40 transition-all shadow-lg">
                                        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                                            <span>Active Bookings</span>
                                            <div className="w-7 h-7 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                                                <Calendar className="w-4 h-4" />
                                            </div>
                                        </div>
                                        <div className="text-2xl font-black text-white font-display">
                                            12
                                        </div>
                                        <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                                            <CheckCircle2 className="w-3 h-3" />
                                            <span>5 Checked in at venue</span>
                                        </div>
                                        <div className="text-[10px] text-slate-500 mt-2 pt-2 border-t border-white/5">
                                            Peak floodlit 100% reserved
                                        </div>
                                    </div>

                                    {/* Card 4: Refund Requests */}
                                    <div className="rounded-2xl bg-[#091410] border border-white/5 p-5 relative overflow-hidden group hover:border-amber-500/40 transition-all shadow-lg">
                                        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                                            <span>Refund Requests</span>
                                            <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                                                <RotateCcw className="w-4 h-4" />
                                            </div>
                                        </div>
                                        <div className="text-2xl font-black text-amber-400 font-display">
                                            1
                                        </div>
                                        <div className="text-[11px] text-slate-400 mt-1">
                                            Pending owner review
                                        </div>
                                        <div className="text-[10px] text-amber-400/80 mt-2 pt-2 border-t border-white/5">
                                            Mirpur Arena • Oct 13 07:30 AM
                                        </div>
                                    </div>

                                </div>

                                {/* Weekly Booking Analytics (from Proposal Page 3 Screenshot) */}
                                <div className="rounded-3xl bg-[#07130F] border border-white/5 p-6 shadow-xl space-y-4">
                                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                                        <div>
                                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                                <BarChart3 className="w-5 h-5 text-emerald-400" />
                                                <span>Weekly Booking Analytics</span>
                                            </h2>
                                            <p className="text-xs text-slate-400 mt-0.5">
                                                Occupancy trends and revenue distribution throughout the week.
                                            </p>
                                        </div>
                                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                            Average: 84% Fill Rate
                                        </span>
                                    </div>

                                    {/* Mock Bar Chart */}
                                    <div className="grid grid-cols-7 gap-3 pt-4">
                                        {[
                                            { day: 'Mon', height: '60%', value: '৳32k', count: '10' },
                                            { day: 'Tue', height: '82%', value: '৳48.5k', count: '14', active: true },
                                            { day: 'Wed', height: '68%', value: '৳36k', count: '11' },
                                            { day: 'Thu', height: '90%', value: '৳54k', count: '16' },
                                            { day: 'Fri', height: '100%', value: '৳58.5k', count: '17', peak: true },
                                            { day: 'Sat', height: '95%', value: '৳56k', count: '16', peak: true },
                                            { day: 'Sun', height: '70%', value: '৳38k', count: '12' },
                                        ].map((bar, idx) => (
                                            <div key={idx} className="flex flex-col items-center gap-2">
                                                <span className="text-[10px] font-mono text-slate-400">{bar.value}</span>
                                                <div className="w-full bg-slate-900 h-32 rounded-xl flex items-end p-1 overflow-hidden">
                                                    <div
                                                        className={`w-full rounded-lg transition-all ${bar.active
                                                                ? 'bg-gradient-to-t from-emerald-500 to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                                                                : bar.peak
                                                                    ? 'bg-emerald-600'
                                                                    : 'bg-slate-700 hover:bg-slate-600'
                                                            }`}
                                                        style={{ height: bar.height }}
                                                    />
                                                </div>
                                                <span className={`text-xs font-semibold ${bar.active ? 'text-emerald-400' : 'text-slate-300'}`}>
                                                    {bar.day}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Daily Schedule Preview (Pitch 1 vs Pitch 2 from Proposal Page 3) */}
                                <div className="rounded-3xl bg-[#07130F] border border-white/5 p-6 shadow-xl space-y-5">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
                                        <div>
                                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                                <Clock className="w-5 h-5 text-emerald-400" />
                                                <span>Daily Schedule & 1.5-Hour Slots</span>
                                            </h2>
                                            <p className="text-xs text-slate-400 mt-0.5">
                                                Path: /owner/turfs/:id/slots • Tuesday, Oct 13, 2026
                                            </p>
                                        </div>

                                        {/* Multi-field switcher buttons */}
                                        <div className="flex items-center gap-1 p-1 rounded-2xl bg-[#091511] border border-white/10 text-xs">
                                            <button
                                                onClick={() => setActivePitch('pitch-1')}
                                                className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${activePitch === 'pitch-1' ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                                                    }`}
                                            >
                                                Pitch 1 (7-a-side)
                                            </button>
                                            <button
                                                onClick={() => setActivePitch('pitch-2')}
                                                className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${activePitch === 'pitch-2' ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                                                    }`}
                                            >
                                                Pitch 2 (5-a-side)
                                            </button>
                                        </div>
                                    </div>

                                    {/* Slots Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {[
                                            {
                                                time: '07:30 AM – 09:00 AM',
                                                status: 'Booked',
                                                user: 'Rafid S',
                                                tier: 'Off-Peak BDT 1,800',
                                                color: 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300',
                                                badge: 'Confirmed',
                                            },
                                            {
                                                time: '09:00 AM – 10:30 AM',
                                                status: 'Available',
                                                user: 'Open for Booking',
                                                tier: 'Off-Peak BDT 1,800',
                                                color: 'bg-slate-900/40 border-white/10 text-slate-300',
                                                badge: 'Available',
                                            },
                                            {
                                                time: '10:30 AM – 12:00 PM',
                                                status: 'Maintenance',
                                                user: 'Turf Grooming Care',
                                                tier: 'Maintenance Block',
                                                color: 'bg-red-950/30 border-red-500/30 text-red-300',
                                                badge: 'Blocked',
                                            },
                                            {
                                                time: '06:30 PM – 08:00 PM',
                                                status: 'Held',
                                                user: 'Active hold by Tanvir',
                                                tier: 'Prime Floodlit BDT 2,500',
                                                color: 'bg-amber-950/40 border-amber-500/50 text-amber-300',
                                                badge: '09:12 left',
                                            },
                                            {
                                                time: '08:00 PM – 09:30 PM',
                                                status: 'Booked',
                                                user: 'Abrar Zahin (United Warriors)',
                                                tier: 'Prime Floodlit BDT 2,500',
                                                color: 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300',
                                                badge: 'Confirmed',
                                            },
                                            {
                                                time: '09:30 PM – 11:00 PM',
                                                status: 'Manual',
                                                user: 'Capt. Shakil (Manual Booking)',
                                                tier: 'bKash Pending BDT 2,500',
                                                color: 'bg-purple-950/40 border-purple-500/40 text-purple-300',
                                                badge: 'Walk-in',
                                            },
                                        ].map((slot, i) => (
                                            <div key={i} className={`p-4 rounded-2xl border ${slot.color} space-y-2`}>
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="font-mono font-bold text-white">{slot.time}</span>
                                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10">
                                                        {slot.badge}
                                                    </span>
                                                </div>
                                                <div className="text-xs font-semibold text-white">{slot.user}</div>
                                                <div className="text-[11px] text-slate-400 font-mono">{slot.tier}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Two Columns: Recent Activity Feed & Customer Feedback (from Proposal Page 3) */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                                    {/* Recent Activity Feed */}
                                    <div className="rounded-3xl bg-[#07130F] border border-white/5 p-6 shadow-xl space-y-4">
                                        <div className="flex items-center justify-between pb-3 border-b border-white/5">
                                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                                <FileText className="w-5 h-5 text-emerald-400" />
                                                <span>Recent Activity Feed</span>
                                            </h2>
                                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                                Live Feed
                                            </span>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="p-3.5 rounded-2xl bg-[#091511] border border-emerald-500/20 space-y-1">
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="font-bold text-emerald-400 flex items-center gap-1">
                                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                                        <span>Confirmed: JAFF Arena Match</span>
                                                    </span>
                                                    <span className="text-[10px] text-slate-500 font-mono">10 mins ago</span>
                                                </div>
                                                <p className="text-xs text-slate-200">
                                                    Oct 13, 09:00 AM match reserved by <strong>Rafid S</strong>.
                                                </p>
                                                <div className="text-[10px] text-slate-400 font-mono">
                                                    Payment: Success via bKash • TrxID: 9X882910
                                                </div>
                                            </div>

                                            <div className="p-3.5 rounded-2xl bg-[#091511] border border-amber-500/20 space-y-1">
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="font-bold text-amber-400 flex items-center gap-1">
                                                        <AlertCircle className="w-3.5 h-3.5" />
                                                        <span>Refund Request: Mirpur Arena</span>
                                                    </span>
                                                    <span className="text-[10px] text-slate-500 font-mono">1 hour ago</span>
                                                </div>
                                                <p className="text-xs text-slate-200">
                                                    Match at Oct 13, 07:30 AM requested by <strong>Anika</strong>.
                                                </p>
                                                <div className="text-[10px] text-amber-300 font-mono">
                                                    Refund Amount: BDT 1,800 • Reason: Rainy weather
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Customer Feedbacks */}
                                    <div className="rounded-3xl bg-[#07130F] border border-white/5 p-6 shadow-xl space-y-4">
                                        <div className="flex items-center justify-between pb-3 border-b border-white/5">
                                            <h2 className="text-base font-bold text-white flex items-center gap-2">
                                                <Sparkles className="w-5 h-5 text-yellow-400" />
                                                <span>Customer Feedbacks (Verified Reviews)</span>
                                            </h2>
                                            <span className="text-xs text-yellow-400 font-bold">4.8 ★</span>
                                        </div>

                                        <div className="p-4 rounded-2xl bg-[#091511] border border-white/5 space-y-3">
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="font-bold text-white">Saimon Chowdhury</span>
                                                <span className="text-yellow-400 font-mono font-bold">★★★★★ 4.8</span>
                                            </div>
                                            <p className="text-xs text-slate-300 italic">
                                                "Excellent field and lights, parking was easy! Grass cushioning is top notch."
                                            </p>
                                            <div className="flex items-center justify-end gap-2 pt-1 border-t border-white/5">
                                                <button className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 text-xs font-medium cursor-pointer">
                                                    Flag for Review
                                                </button>
                                                <button className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 text-xs font-bold transition-all cursor-pointer">
                                                    Reply
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        ) : null}

                    </div>

                </main>
            </div>

        </div>
    );
}

