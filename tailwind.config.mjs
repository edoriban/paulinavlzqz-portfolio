/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      colors: {
        primary: '#1a1a1a',
        'background-light': '#ffffff',
        'background-dark': '#0f0f0f',
        'surface-light': '#f8f9fa',
        'surface-dark': '#18181b',
        'border-light': '#e5e7eb',
        'border-dark': '#27272a',
        'text-light': '#374151',
        'text-dark': '#d4d4d8',
      },
      borderRadius: {
        DEFAULT: '0px',
        lg: '2px',
      },
    },
  },
  plugins: [],
};
