/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        primary: '#1A1A1A',
        canvas: '#F5F4F0',
        gridLine: '#E0DDD5',
        terracotta: '#F9E4D4',
        sage: '#E2F0E9',
        cement: '#E8E7F2',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
      },
    },
  },
  plugins: [],
};
