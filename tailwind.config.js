/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Every color resolves to a CSS custom property so the whole
        // palette stays centralized in one place (src/index.css).
        espresso: {
          dark: 'var(--espresso-dark)',
          DEFAULT: 'var(--espresso-brown)',
        },
        terracotta: {
          DEFAULT: 'var(--terracotta)',
          light: 'var(--terracotta-light)',
        },
        brass: 'var(--brass-gold)',
        palm: {
          DEFAULT: 'var(--palm-green)',
          light: 'var(--palm-green-light)',
        },
        lagoon: {
          DEFAULT: 'var(--lagoon-blue)',
          light: 'var(--lagoon-blue-light)',
        },
        cream: 'var(--cream)',
        sand: 'var(--sand)',
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        badge: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        steamRise: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '12%': { opacity: '0.55' },
          '70%': { opacity: '0.28' },
          '100%': { transform: 'translateY(-90px) scaleX(1.6)', opacity: '0' },
        },
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        driftSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-2%, 1.5%)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        steam1: 'steamRise 4s ease-in-out infinite',
        steam2: 'steamRise 4s ease-in-out 1.3s infinite',
        steam3: 'steamRise 4s ease-in-out 2.6s infinite',
        gradientPan: 'gradientPan 12s ease infinite',
        driftSlow: 'driftSlow 9s ease-in-out infinite',
        bob: 'bob 3.2s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}
