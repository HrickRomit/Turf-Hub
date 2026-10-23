export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center shadow-xl space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 text-2xl font-bold">
          TH
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Turf<span className="text-emerald-400">Hub</span>
        </h1>
        <p className="text-slate-400 text-sm">
          Project skeleton initialized successfully with React 18, Vite, and Tailwind CSS.
        </p>
        <div className="pt-4 border-t border-slate-700/60 flex items-center justify-center space-x-2 text-xs text-slate-500">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Frontend Ready • MERN Stack Architecture</span>
        </div>
      </div>
    </div>
  );
}
