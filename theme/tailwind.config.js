/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... existing config (content, theme, etc.)

  safelist: [
    // Generate exact class names for all 20 colors x 6 variants (bg/text/border for light/dark)
    // Dark mode backgrounds
    'bg-emerald-400/20', 'bg-blue-400/20', 'bg-purple-400/20', 'bg-pink-400/20',
    'bg-indigo-400/20', 'bg-cyan-400/20', 'bg-teal-400/20', 'bg-amber-400/20',
    'bg-rose-400/20', 'bg-violet-400/20', 'bg-sky-400/20', 'bg-fuchsia-400/20',
    'bg-lime-400/20', 'bg-orange-400/20', 'bg-red-400/20', 'bg-green-400/20',
    'bg-yellow-400/20', 'bg-stone-400/20', 'bg-zinc-400/20', 'bg-slate-400/20',

    // Dark mode text
    'text-emerald-300', 'text-blue-300', 'text-purple-300', 'text-pink-300',
    'text-indigo-300', 'text-cyan-300', 'text-teal-300', 'text-amber-300',
    'text-rose-300', 'text-violet-300', 'text-sky-300', 'text-fuchsia-300',
    'text-lime-300', 'text-orange-300', 'text-red-300', 'text-green-300',
    'text-yellow-300', 'text-stone-300', 'text-zinc-300', 'text-slate-300',

    // Dark mode borders
    'border-emerald-400/30', 'border-blue-400/30', 'border-purple-400/30', 'border-pink-400/30',
    'border-indigo-400/30', 'border-cyan-400/30', 'border-teal-400/30', 'border-amber-400/30',
    'border-rose-400/30', 'border-violet-400/30', 'border-sky-400/30', 'border-fuchsia-400/30',
    'border-lime-400/30', 'border-orange-400/30', 'border-red-400/30', 'border-green-400/30',
    'border-yellow-400/30', 'border-stone-400/30', 'border-zinc-400/30', 'border-slate-400/30',

    // Light mode backgrounds
    'bg-emerald-100', 'bg-blue-100', 'bg-purple-100', 'bg-pink-100',
    'bg-indigo-100', 'bg-cyan-100', 'bg-teal-100', 'bg-amber-100',
    'bg-rose-100', 'bg-violet-100', 'bg-sky-100', 'bg-fuchsia-100',
    'bg-lime-100', 'bg-orange-100', 'bg-red-100', 'bg-green-100',
    'bg-yellow-100', 'bg-stone-100', 'bg-zinc-100', 'bg-slate-100',

    // Light mode text
    'text-emerald-700', 'text-blue-700', 'text-purple-700', 'text-pink-700',
    'text-indigo-700', 'text-cyan-700', 'text-teal-700', 'text-amber-700',
    'text-rose-700', 'text-violet-700', 'text-sky-700', 'text-fuchsia-700',
    'text-lime-700', 'text-orange-700', 'text-red-700', 'text-green-700',
    'text-yellow-700', 'text-stone-700', 'text-zinc-700', 'text-slate-700',

    // Light mode borders
    'border-emerald-200', 'border-blue-200', 'border-purple-200', 'border-pink-200',
    'border-indigo-200', 'border-cyan-200', 'border-teal-200', 'border-amber-200',
    'border-rose-200', 'border-violet-200', 'border-sky-200', 'border-fuchsia-200',
    'border-lime-200', 'border-orange-200', 'border-red-200', 'border-green-200',
    'border-yellow-200', 'border-stone-200', 'border-zinc-200', 'border-slate-200',
  ],

  // ... rest of config
  // ... rest of config
  theme: {
    extend: {
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}