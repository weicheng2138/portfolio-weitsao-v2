/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    letterSpacing: {
      normal: '0em',
      wide: '.1em',
    },
    screens: {
      sm: '501px',
      md: '768px',
      lg: '1080px',
    },

    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      0.5: '0.5px',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    extend: {
      colors: {
        primary: '#F9BF45',
        primaryLight: '#FAD689',
        primaryDark: '#C28F06',
        secondary01: '#FAFAFA',
        secondary02: '#E0E0E0',
        secondary03: '#757575',
        secondary04: '#212121',
      },
      fontFamily: {
        // notoSerif: ['Noto Serif TC', 'sans-serif'],
        // notoSans: ['Noto Sans TC', 'San Francisco'],
        notoSerif: ['var(--font-notoSerifTC)', 'sans-serif'],
        notoSans: ['var(--font-notoSansTC)', 'San Francisco'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        beforeHamburgerIn: {
          '0%': {
            transform: 'translateY(-8px)',
          },
          '50%': {
            transform: 'translate(0px, 0px)',
          },
          '100%': {
            transform: 'rotate(45deg)',
          },
        },
        afterHamburgerIn: {
          '0%': {
            transform: 'translateY(8px)',
          },
          '50%': {
            transform: 'translate(0px, 0px)',
          },
          '100%': {
            transform: 'rotate(-45deg)',
          },
        },
        beforeHamburgerOut: {
          '0%': {
            transform: 'rotate(45deg)',
          },
          '50%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'translateY(-8px)',
          },
        },
        afterHamburgerOut: {
          '0%': {
            transform: 'rotate(-45deg)',
          },
          '50%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'translateY(8px)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        beforeHamburgerIn: 'beforeHamburgerIn 1s forwards',
        afterHamburgerIn: 'afterHamburgerIn 1s forwards',
        beforeHamburgerOut: 'beforeHamburgerOut 0.5s forwards',
        afterHamburgerOut: 'afterHamburgerOut 1s forwards',
      },
    },
  },
  plugins: [],
};
