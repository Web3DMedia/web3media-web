module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      heading: ["Neue_Machina", "ui-sans-serif", "sans-serif"],
      body: ["Neue_Machina", "sans-serif"],
      display: ['pp_telegraf']
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
        main: '#FF6EFF',
        secondary: '#0AB7F6',
        b1: '#000000',
        b2: '#2D2C2C',
        b3: '#818181',
        b4: '#C4C4C4',
        b5: '#D3D3D3',
        b6: '#dfdfdf',
        b7: '#D1D5DB',
        w: '#FFFFFF'
      },
      width: {
        335: '335px',
        628: '628px',
        720: '720px',
      },
      height: {
        368: '368px',
        423: '423px',
        600: '600px',
        1024: '1024px',
        '50vh': '50vh',
        '70vh': '70vh',
        '80vh': '80vh',
        650: '650px',
      },
      minWidth: {
        628: '628px',
        720: '720px',
      },
      minHeight: {
        423: '423px',
      },
      maxWidth: {
        1440: '1440px'
      },

      maxWidth: {
        335: '335px',
        628: '628px',
        720: '720px',
        1440: '1440px'
      },
      minHeight: {
        423: '423px',
      }
    }
  },
  plugins: []
}
