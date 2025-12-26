/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Primary Blue
        },
        success: {
          DEFAULT: '#22C55E', // Success Green
        },
        alert: {
          DEFAULT: '#EF4444', // Alert Red
        },
        surface: {
          50: '#F9FAFB',
          100: '#F3F4F6',
        },
        text: {
          main: '#1F2937', // Text Black
        }
      },
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [
    require('tailwindcss-safe-area')
  ],
}
