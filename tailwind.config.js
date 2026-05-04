// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'hero-mobile': `url('../assets/mobile-phone-hero-bg.png')`,
//         'hero-desktop': `url('../assets/desktop-bg.png)`
//       }
//     },
//   },
//   plugins: [],
// }



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('/src/assets/mobile-phone-hero-bg.png')",
        'hero-desktop': "url('/src/assets/desktop-bg.png')",
        'services-mobile': "url('/src/assets/services-mobile-bg.png')",
        'services-desktop': "url('/src/assets/Servicesbg.png')",
      }

     
    },
  },
  plugins: [],
}


