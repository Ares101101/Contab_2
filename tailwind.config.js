/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Monaco :["Monaco Regular", "Monaco"]
      },
      fontSize:{
        headin1:"32px",
        headin2:"24px",
        headin3:"20px",
        headin4:"16px",
        headin5:"14px",
        body: "14px",
      },
      lineHeight:{
        headin1:"40px",
        headin2:"30px",
        headin3:"24px",
        headin4:"20px",
        headin5:"18px",
        body: "22px",
      }
    },
  },
  plugins: [],
}