const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      largeMobile: '375px',
      smallTablet: '620px',
      largeTablet: '1024px',
      smallDesktop: '1210px',
      largeDesktop: '1440px',
      extraLargeDesktop: '1920px'
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-poppins)', ...fontFamily.serif]
      },
      colors: {
        primary: '#2563eb',
        background: '#fefefe',
        foreground: '#010101'
      },
      gridTemplateColumns: {
        projects: 'repeat(auto-fill, minmax(300px, 464px))'
      },
      boxShadow: {
        'project-card': 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
      }
    }
  },
  plugins: []
};
