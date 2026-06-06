/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'geek-bg': '#05070A',
        'geek-surface': '#0F131A',
        'geek-primary': '#00FF66',
        'geek-main': '#F3F4F6',
        'geek-muted': '#9CA3AF',
        'geek-dark': '#1F2937',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Fira Code', 'SF Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
