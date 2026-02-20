/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          slate:      '#1F2937',   // primary text / dark elements
          dark:       '#111827',   // hero / footer backgrounds
          gold:       '#C8A951',   // primary accent
          'gold-hover': '#B8933E', // accent hover state
          muted:      '#4B5563',   // secondary text
          surface:    '#F3F4F6',   // section backgrounds (light gray)
          card:       '#FFFFFF',   // elevated card surfaces
          'on-dark':  '#F9FAFB',   // text on dark backgrounds
          border:     '#E5E7EB',   // subtle borders
          'border-dark': '#374151',// borders on dark backgrounds
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight:   '-0.015em',
      },
      lineHeight: {
        prose: '1.8',
      },
    },
  },
  plugins: [],
}
