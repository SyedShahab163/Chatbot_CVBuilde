/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#00010C',
        customBlue: '#050B72',
        'header-gradient-start': '#504686',
        'header-gradient-end': '#131120',
        'footer-bg': '#131120',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #504686 0%, #131120 30.5%, #131120 65%)',
        // 'linear-gradient': 'linear-gradient(180deg, #504686 0%, #131120 30.5%, #131120 65%)',
        // 'radial-gradient': 'radial-gradient(50% 50% at 50% 50%, #8C86EC 1.5%, #8C86EC 9.86%, #4F4C86 80.01%)',
        'custom-linear': 'linear-gradient(180deg, #504686 0%, #131120 30.5%, #131120 65%)',
        'combined-gradient': 'radial-gradient(50% 50% at 50% 50%, #8C86EC 1.5%, #8C86EC 9.86%, #4F4C86 80.01%), linear-gradient(180deg, #504686 0%, #131120 30.5%, #131120 65%)',
      },
      opacity: {
        '80': '0.8', // Custom opacity
      },
      boxShadow: {
        'custom-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)', // Custom shadow
      },
      borderRadius: {
        '40px': '40px', // Custom border radius
      },
      spacing: {
        '30': '120px',
      },
      fontFamily: {
        inika: ['Inika', 'serif'], // Add custom font
        inter: ['Inter', 'sans-serif'], // Add custom font
      },
    },
  },
  plugins: [],
};
