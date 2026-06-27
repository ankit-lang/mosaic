/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-heading)'],
        sans: ['var(--font-body)'],
      },
      colors: {
        gold: {
          light: 'var(--gold-light)',
          DEFAULT: 'var(--gold-primary)',
          dark: 'var(--gold-secondary)',
        }
      }
    },
  },
  plugins: [],
}

