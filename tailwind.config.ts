import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f9ff',
          100: '#e6f0ff',
          200: '#bfd8ff',
          300: '#91baff',
          400: '#629bff',
          500: '#3a7dff',
          600: '#225fe0',
          700: '#1a49b0',
          800: '#163c8f',
          900: '#132f70'
        },
        gunmetal: '#2b2d30',
        accent: '#39ff14'
      },
      boxShadow: {
        card: '0 2px 4px rgba(0,0,0,0.4), 0 6px 12px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)'
      },
      keyframes: {
        jiggle: {
          '0%,100%': { transform: 'rotate(0deg) translateY(0)' },
          '20%': { transform: 'rotate(-2deg) translateY(-1px)' },
          '40%': { transform: 'rotate(2deg) translateY(1px)' },
          '60%': { transform: 'rotate(-1deg) translateY(-1px)' },
          '80%': { transform: 'rotate(1deg) translateY(0)' }
        }
      },
      animation: {
        jiggle: 'jiggle 0.8s ease-in-out'
      }
    }
  },
  plugins: []
};

export default config;
