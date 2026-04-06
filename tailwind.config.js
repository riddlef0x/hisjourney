/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7ff',
          300: '#a4bcff',
          400: '#7a9aff',
          500: '#4d5bff',
          600: '#2e32ff',
          700: '#1e1fff',
          800: '#191acc',
          900: '#0f0f99',
        },
        navy: {
          50: '#f5f7fb',
          100: '#ebf0f7',
          200: '#d1ddf0',
          300: '#a8c5e3',
          400: '#7aa8d1',
          500: '#568bc4',
          600: '#3d6da8',
          700: '#2d5080',
          800: '#1e3552',
          900: '#0f1a2a',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#334155',
            a: {
              color: '#2e32ff',
              '&:hover': {
                color: '#1e1fff',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
