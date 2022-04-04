module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      heading: ["Neue_Machina", "ui-sans-serif", "sans-serif"],
      body: ["Neue_Machina", "sans-serif"],
      Navbar: ['pp_telegraf']
    },

    extend: {
      colors: {
        primary: "#0251E1",
        black400: "#101010",

        gray50: "#F8F8F8",
        gray100: "#F0F0F0",
        gray200: "#E0E0E0",
        gray300: "#C4C4C4",
        gray500: "#8D97AE",
        gray600: "#76829E",
        gray700: "#67718A",
        gray800: "#49597D",
        gray900: "#23355F",
        gray1000: "#1B2F5D",

        blue800: "#2E5BFF",
        blue600: "#301DF5",
        blue500: "#5243F7",
        blue400: "#7568F8",
        blue300: "#665BFE",
        blue200: "#2F88FC",

        red50: "#FDF0EF",
        red100: "#F9D0CE",
        red200: "#F9D0CE",
        red300: "#FF3E32",
        red400: "#EA635A",
        red500: "#E43C31",
        red600: "#DF1508",

        green400: "#13C725",

        Main: '#FF6EFF',
        Secondary: '#0AB7F6',
        B1: '#000000',
        B2: '2D2C2C',
        B3: '818181',
        B4: 'C4C4C4',
        B5: 'D3D3D3',
        B6: 'dfdfdf',
        B7: 'D1D5DB',
        W: '#FFFFFF'
      }
    }
  },
  plugins: []
}
