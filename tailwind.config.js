/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // High-contrast Editorial Serifs - Instrument Serif, PP Editorial New, Ogg
        serif: ['\'Instrument Serif\'', '\'PP Editorial New\'', '\'Ogg\'', 'Georgia', 'serif'],
        // Stark geometric sans-serif - Inter, Geist
        sans: ['\'Inter\'', '\'Geist\'', '\'Plus Jakarta Sans\'', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Navy Blue - Deep, almost-black navy (#0A1128) - 2026 Primary
        primary: {
          50: '#f5f7fb',
          100: '#e8ecf5',
          200: '#c8d5e8',
          300: '#a8bedb',
          400: '#6699cc',
          500: '#2d5ba8',
          600: '#0A1128', // DEEP NAVY - SOPHISTICATED PRIMARY
          700: '#080c1a',
          800: '#050812',
          900: '#03050a',
        },
        // Warm Sage Green - Secondary (Calming, Earthy)
        sage: {
          50: '#f8faf8',
          100: '#eff2ed',
          200: '#dce4d6',
          300: '#c9d5bf',
          400: '#9db38a',
          500: '#739060',
          600: '#5a7549', // SAGE GREEN
          700: '#476043',
          800: '#364838',
          900: '#252f28',
        },
        // Warm Sand - Accent (Warmth, Hope)
        sand: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dcd0',
          300: '#dbc8b8',
          400: '#c9a885',
          500: '#b78752',
          600: '#a67838', // WARM SAND
          700: '#874f28',
          800: '#6a3a1a',
          900: '#4d2810',
        },
        // Neutral Slate
        slate: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Off-white backgrounds (warm, sophisticated)
        'off-white': {
          50: '#F7F7F8',
          100: '#F4F4F0',
        },
      },
      borderRadius: {
        none: '0px',
        sm: '8px',
        DEFAULT: '12px',
        lg: '16px',
        full: '9999px',
      },
      spacing: {
        border: '1px',
      },
      boxShadow: {
        // Diffuse shadows - more sophisticated
        none: 'none',
        xs: '0 2px 4px rgba(0, 0, 0, 0.02)',
        sm: '0 4px 8px rgba(0, 0, 0, 0.03)',
        DEFAULT: '0 12px 32px -4px rgba(10, 17, 40, 0.04)',
        md: '0 12px 48px -8px rgba(10, 17, 40, 0.05)',
        lg: '0 20px 60px -12px rgba(10, 17, 40, 0.08)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#4b5563',
            a: {
              color: '#0A1128',
              '&:hover': {
                color: '#080c1a',
              },
            },
          },
        },
      },
      backdropFilter: {
        'blur': 'blur(16px)',
      },
    },
  },
  plugins: [],
};
