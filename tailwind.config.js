/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-whatsapp': 'var(--color-whatsapp)',
        'brand-whatsapp-dark': 'var(--color-whatsapp-dark)',
      },
      borderRadius: {
        'custom-sm': 'var(--radius-sm)',
        'custom-md': 'var(--radius-md)',
        'custom-lg': 'var(--radius-lg)',
      }
    },
  },
  plugins: [],
}