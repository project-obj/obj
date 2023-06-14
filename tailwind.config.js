/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: '#555555',
      white: '#ffffff',
      back: '#F5EFE7',
      beige: '#D8C4B6',
      navy: '#213555',
      focused: '#4F709C',
      login: '#CAC2B8',
      light: '#9596A2',
      mint: '#C2DEDC',
    },
    screens: {
      mob: '375px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      body: ['15px', 1.7],
    },
    extend: {},
    fontFamily: {
      gothic: 'PuradakGentleGothicR',
      pretendard: 'Pretendard-Regular',
    },
  },
  plugins: [],
};
