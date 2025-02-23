/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-sm': 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
        'inset-md': 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
        'inset-lg': 'inset 0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
