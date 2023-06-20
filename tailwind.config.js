/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        retroradwarm: {
          DEFAULT: '#f6dcad',
          50: '#f6dcad',
          100: '#f0b024',
          150: '#e5732d',
          200: '#de3931',
        },
        retroblack: {
          DEFAULT: '#290a09',
          50: '#290a09',
        },
      },
      animation: {
        heartbeat: "heartbeat 1.5s ease both",
      },
      keyframes: {
        heartbeat: {
          "0%": {
            transform: "scale(1)",
            "transform-origin": "center center",
            "animation-timing-function": "ease-out"
          },
          "10%": {
            transform: "scale(.91)",
            "animation-timing-function": "ease-in"
          },
          "17%": {
            transform: "scale(.98)",
            "animation-timing-function": "ease-out"
          },
          "33%": {
            transform: "scale(.87)",
            "animation-timing-function": "ease-in"
          },
          "45%": {
            transform: "scale(1)",
            "animation-timing-function": "ease-out"
          }
        },
      },
    },
  },
  plugins: [],
}
