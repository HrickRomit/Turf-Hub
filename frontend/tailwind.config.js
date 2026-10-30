/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turf: {
          dark: '#08100D',
          darker: '#040706',
          card: '#0D1A15',
          cardBorder: 'rgba(16, 185, 129, 0.2)',
          emerald: '#10B981',
          neon: '#00E676',
          neonBright: '#22C55E',
          amber: '#F59E0B',
          amberDark: '#78350F',
          bkash: '#E2136E',
          ssl: '#0284C7',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 25px rgba(0, 230, 118, 0.35)',
        'neon-strong': '0 0 35px rgba(0, 230, 118, 0.55)',
        'amber-glow': '0 0 25px rgba(245, 158, 11, 0.3)',
        'glass': '0 20px 50px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
