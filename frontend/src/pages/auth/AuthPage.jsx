import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Eye, EyeOff, Trophy } from 'lucide-react';
import stadiumBg from '../../assets/stadium-bg.jpg';

const inputClass = 'w-full rounded-xl border border-white/10 bg-[#07110c] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20';

function Field({ label, id, ...props }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-300">{label}</label>
      <input id={id} name={id} className={inputClass} {...props} />
    </div>
  );
}

export default function AuthPage({ mode }) {
  const isSignup = mode === 'signup';
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (isSignup && !form.elements.fullName.value.trim()) {
      form.elements.fullName.setCustomValidity('Please enter your full name.');
      form.elements.fullName.reportValidity();
      return;
    }
    if (isSignup && form.elements.password.value !== form.elements.confirmPassword.value) {
      form.elements.confirmPassword.setCustomValidity('Passwords must match.');
      form.elements.confirmPassword.reportValidity();
      return;
    }
    setMessage(isSignup
      ? 'Account creation is not available yet. Please try again once registration is connected.'
      : 'Login is not available yet. Please try again once authentication is connected.');
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050B08] text-slate-100 selection:bg-emerald-400 selection:text-slate-950">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img src={stadiumBg} alt="" className="h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B08]/80 via-[#050B08]/90 to-[#050B08]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 sm:py-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/" aria-label="TurfHub home" className="font-display text-2xl font-black tracking-tight text-white">Turf<span className="text-emerald-400">Hub</span></Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-emerald-300"><ArrowLeft size={16} aria-hidden="true" /> Back to home</Link>
        </header>

        <div className="grid min-h-[calc(100svh-120px)] items-center gap-12 py-12 lg:grid-cols-2 lg:gap-24">
          <section className="hidden lg:block">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300"><Trophy size={15} aria-hidden="true" /> Your next match starts here</div>
            <h1 className="font-display text-6xl font-black leading-tight tracking-tight">Your squad.<br />Your pitch.<br /><span className="text-emerald-400">Your game.</span></h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400">Find your favorite football turfs across Dhaka and get your squad back on the pitch.</p>
            <ul className="mt-8 space-y-4 text-sm text-slate-300">
              {['Discover turfs in your neighborhood', 'Find a time that works for your team', 'Keep your match plans in one place'].map((text) => (
                <li key={text} className="flex items-center gap-3"><CheckCircle2 size={18} className="shrink-0 text-emerald-400" aria-hidden="true" />{text}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="auth-title" className="mx-auto w-full max-w-md rounded-3xl border border-emerald-500/20 bg-[#0b1711]/95 p-6 shadow-2xl sm:p-9">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald-400">{isSignup ? 'Join the squad' : 'Back to the game'}</p>
            <h2 id="auth-title" className="font-display text-3xl font-bold tracking-tight text-white">{isSignup ? 'Create your account' : 'Welcome back'}</h2>
            <p className="mb-7 mt-2 text-sm leading-relaxed text-slate-400">{isSignup ? 'Sign up and get ready for your next match.' : 'Log in to plan your next match with TurfHub.'}</p>

            <form onSubmit={handleSubmit} onChange={() => setMessage('')} className="space-y-5">
              {isSignup && <Field label="Full name" id="fullName" type="text" autoComplete="name" placeholder="Your full name" maxLength={100} required onInput={(event) => event.currentTarget.setCustomValidity('')} />}
              <Field label="Email address" id="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-slate-300">Password</label>
                <div className="relative">
                  <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete={isSignup ? 'new-password' : 'current-password'} minLength={isSignup ? 8 : undefined} placeholder={isSignup ? 'Create a password' : 'Enter your password'} className={`${inputClass} pr-12`} required onInput={(event) => { if (isSignup) event.currentTarget.form.elements.confirmPassword.setCustomValidity(''); }} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword} className="absolute inset-y-0 right-0 rounded-r-xl px-4 text-slate-400 hover:text-emerald-300 focus-visible:outline focus-visible:outline-emerald-400">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
                </div>
                {isSignup && <p className="text-xs text-slate-500">Use at least 8 characters.</p>}
              </div>
              {isSignup && <Field label="Confirm password" id="confirmPassword" type={showPassword ? 'text' : 'password'} autoComplete="new-password" placeholder="Re-enter your password" minLength={8} required onInput={(event) => event.currentTarget.setCustomValidity('')} />}
              {message && <p role="status" className="rounded-xl border border-amber-400/25 bg-amber-400/10 p-3 text-sm leading-relaxed text-amber-200">{message}</p>}
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400">{isSignup ? 'Create account' : 'Log in'}<ArrowRight size={17} aria-hidden="true" /></button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-400">
              {isSignup ? 'Already have an account? ' : "Don't have an account? "}
              <Link to={isSignup ? '/login' : '/signup'} className="font-semibold text-emerald-400 underline-offset-4 hover:text-emerald-300 hover:underline">{isSignup ? 'Log in' : 'Sign up'}</Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
