/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
         'gold-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)',
            transform: 'scale(1)' 
          },
          '50%': { 
            boxShadow: '0 0 80px rgba(212, 175, 55, 0.5)',
            transform: 'scale(1.02)' 
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-150%) skewX(-12deg)' },
          '100%': { transform: 'translateX(250%) skewX(-12deg)' },
        },
      },
      animation: {
        'gold-pulse': 'gold-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 1.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
