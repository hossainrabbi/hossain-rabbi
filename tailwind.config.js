/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bold: '#0284c7',
          light: '#0ea5e9',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
