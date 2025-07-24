/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a192f',
          800: '#112240',
          700: '#1e2a4a',
        },
        gold: {
          500: '#f5cb5c',
          400: '#f7d270',
          300: '#f9d984',
        },
        logistics: {
          100: '#f9fafb',
          200: '#f3f4f6',
          300: '#e5e7eb',
          400: '#9ca3af',
        },
        coral: {
          100: '#fef2f2',
          200: '#fbd5d5',
          300: '#f8b4b4',
        }
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'container-load': 'containerLoad 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        containerLoad: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        }
      }
    },
  },
  plugins: [],
}