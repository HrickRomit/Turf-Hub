import React, { useState, useEffect } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Clock, MapPin, CreditCard } from 'lucide-react';

export default function BookingHoldModal({ isOpen, onClose, turf, searchParams }) {
  const [seconds, setSeconds] = useState(600); // 10 minutes (600 seconds) - PRD FR-SLOT-02
  const [paymentMethod, setPaymentMethod] = useState('bkash');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSeconds(600);
      setIsSuccess(false);
      setIsProcessing(false);
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen || !turf) return null;

  const minutes = Math.floor(seconds / 60);
  const remainingSecs = seconds % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(remainingSecs).padStart(2, '0')}`;

  // PRD FR-PAY-01 & SPEC-02: 30% advance deposit required to secure slot
  const totalPrice = turf.price || 2500;
  const advancePercentage = 30; // PRD default: 30%
  const advanceDue = Math.round((totalPrice * advancePercentage) / 100);
  const dueAtVenue = totalPrice - advanceDue;

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#091510] border border-emerald-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#0c1c15]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white leading-tight">
                Atomic 10-Minute Slot Hold Active
              </h3>
              <p className="text-[11px] text-amber-300 font-mono">
                Pessimistic lock: <span className="font-bold underline">{timeFormatted}</span> remaining
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {!isSuccess ? (
            <>
              {/* Selected Turf Details */}
              <div className="p-4 rounded-2xl bg-[#07110c] border border-white/5 space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-white">{turf.name}</h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      {turf.address || turf.zoneName}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-black text-emerald-400 font-display block">
                      BDT {totalPrice.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-400">Total Slot Rate</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    {searchParams?.slot || '08:00 PM - 09:00 PM (Floodlit Peak)'}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                    Slot Held Exclusively
                  </span>
                </div>
              </div>

              {/* PRD SPEC-03 Advance Payment Calculation Breakdown */}
              <div className="p-3.5 rounded-2xl bg-[#06100b] border border-emerald-500/20 space-y-2">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center justify-between">
                  <span>Payment Schedule (PRD Baseline)</span>
                  <span className="text-emerald-400">{advancePercentage}% Advance Policy</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Online Advance Payable Now:</span>
                  <span className="font-extrabold text-emerald-400 font-mono text-sm">
                    BDT {advanceDue.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/5 pt-1.5">
                  <span>Remaining Due at Venue Reception:</span>
                  <span className="font-semibold text-slate-300 font-mono">
                    BDT {dueAtVenue.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Gateway Selection */}
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                  Select Sandbox MFS / Payment Gateway
                </label>
                
                <div className="grid grid-cols-2 gap-3">
                  {/* bKash Option */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bkash')}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'bkash'
                        ? 'bg-[#E2136E]/15 border-[#E2136E] text-white shadow-[0_0_15px_rgba(226,19,110,0.3)]'
                        : 'bg-[#07110c] border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black px-2 py-0.5 rounded bg-[#E2136E] text-white">
                        bKash
                      </span>
                      {paymentMethod === 'bkash' && (
                        <CheckCircle2 className="w-4 h-4 text-[#E2136E]" />
                      )}
                    </div>
                    <span className="text-[11px] font-medium text-slate-300">
                      bKash Direct Sandbox
                    </span>
                  </button>

                  {/* SSLCOMMERZ Option */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('sslcommerz')}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'sslcommerz'
                        ? 'bg-[#0284C7]/15 border-[#0284C7] text-white shadow-[0_0_15px_rgba(2,132,199,0.3)]'
                        : 'bg-[#07110c] border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0284C7] text-white">
                        SSLCOMMERZ
                      </span>
                      {paymentMethod === 'sslcommerz' && (
                        <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                      )}
                    </div>
                    <span className="text-[11px] font-medium text-slate-300">
                      Cards / Nagad / Rocket
                    </span>
                  </button>
                </div>
              </div>

              {/* Security info */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5 text-xs text-amber-200">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                <p className="text-[11px] leading-relaxed">
                  Lock expires in <strong>{timeFormatted}</strong>. Concurrency engine guarantees zero double-bookings. If unconfirmed, TTL daemon returns slot to public Dhaka pool.
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleSimulatePayment}
                disabled={isProcessing}
                className="w-full py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Executing {paymentMethod === 'bkash' ? 'bKash IPN' : 'SSLCOMMERZ'} Sandbox...</span>
                  </>
                ) : (
                  <>
                    <span>Pay Advance BDT {advanceDue.toLocaleString()} via {paymentMethod === 'bkash' ? 'bKash' : 'SSLCOMMERZ'}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
            </>
          ) : (
            /* Booking Confirmed State */
            <div className="text-center py-5 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Booking Confirmed!</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Server-side IPN verified. Slot irreversibly locked for your squad at <strong>{turf.name}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#06110b] border border-emerald-500/30 text-left space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Booking Reference:</span>
                  <span className="font-mono text-emerald-400 font-bold">BK-20261029-9482</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Slot Time:</span>
                  <span className="font-semibold text-white">{searchParams?.slot || '08:00 PM - 09:00 PM'}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Advance Paid:</span>
                  <span className="font-semibold text-emerald-400">BDT {advanceDue.toLocaleString()} (via {paymentMethod.toUpperCase()})</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Payable at Venue:</span>
                  <span className="font-semibold text-slate-300">BDT {dueAtVenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Entry Pass:</span>
                  <span className="text-emerald-400 font-mono font-bold">QR Token Generated ✔</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                Done &amp; Return to TurfHub
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
