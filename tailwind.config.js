/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
      },
      colors: {
        primary: {
          bold: '#1565c0',
          light: '#1976d2',
        },
        secondary: {
          bold: '#10121B',
          light: '#2F435C',
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-30px)',
          },
          '60%': {
            transform: 'translateY(-15px)',
          },
        },
      },
    },
  },
};
