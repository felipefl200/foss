/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        gray: {
          50: '#F9FAFB',
          300: '#F1F1F1',
          400: '#E0E0E0',
          500: '#AEAEAE',
          600: '#7E7E7E',
          900: '#303030',
        },
        blue: {
          500: '#1976D2',
          600: '#0C63D4',
        },
        foss: {
          100: '#00974d'
        },
        teal: {
          500: '#40B2B7',
          600: '#188F95',
        },
        orange: {
          500: '#F4694C',
          600: '#ee5c3e',
        },
        green: {
          50: 'f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d'
        }
      },
      spacing: {
        '4.5': '1.125rem',
      },
      boxShadow: {
        lg: '0px 5px 14px rgba(81, 195, 82, .3)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
