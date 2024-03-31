/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/content/**/*.{astro,md,ts,tsx}',
  ],
  theme: {
    extend: {
      textColor: {
        'violet': '#ee82ee'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

