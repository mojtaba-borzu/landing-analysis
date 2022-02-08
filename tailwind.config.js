module.exports = {
  // darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.page.{js,ts,jsx,tsx}',
    './src/components/**/*.page.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['IRANSansWebFaNum', 'Arial', 'sans-serif'],
      Roboto: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        ' BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      backgroundImage: {
        hero: "url('/images/tradingLanding.webp')",
      },
      boxShadow: {
        '3xl': '10px 10px 20px 10px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        wigglep: {
          '0%, 75%': {
            transform:
              ' translateY(-110%) translatex(-10%) scale(.75) skewX(4deg)',
          },
          '0%': {
            transform: 'translateY(0) skewX(4deg)',
          },
        },
        wiggle: {
          '0%, 75%': {
            transform:
              ' translateY(90%) translatex(10%) scale(1.1) skewX(2deg)',
          },
          '0%': {
            transform: 'translateY(0) translatex(0) scale(1.3) skewX(2deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ',
        wigglep: 'wigglep 1s ',
      },
    },
  },
  plugins: [],
}
