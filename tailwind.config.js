/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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

