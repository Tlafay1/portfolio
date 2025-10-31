/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/.vitepress/**/*.js',
    './docs/.vitepress/**/*.vue',
    './docs/.vitepress/**/*.ts',
    './docs/**/*.md',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      animation: {
        shine: 'shine 4s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
  important: true,
}