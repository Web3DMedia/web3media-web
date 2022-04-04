module.exports = {
  content: [
    "./public/**/*.html",
    "./components/**/*.{js,jsx,ts,tsx,vue}",
    "./pages/**/*.{js,jsx,ts,tsx,vue}"
  ],
  theme: {
    fontFamily: {
      heading: ["Sofia Pro", "DM Sans", "ui-sans-serif", "sans-serif"],
      body: ["DM Sans", "sans-serif"]
    },

    extend: {
      colors: {
        primary: "#0251E1",
        envoi: {
          blue: "#0251E1"
        },
        accent: "",
        black400: "101010",

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

        _1: "#1D293F",
        _2: "#20E9BC",
        _3: "#F2C94C",
        _4: "#FF374F",
        _5: "rgba(224, 231, 255, 0.2)",
        _6: "#E0E7FF",
        _7: "#2E384D",
        _9: "#FF5959",
        _11: "#13C725",
        _12: "#4C4C66",
        _13: "#4ECDC4",
        _14: "rgba(255, 255, 255, 0.75)",
        _15: "#4B545A"
      },
      textColor: {
        grayishBlue: {
          light: "#B0BAC9",
          dark: "#8798AD",
          vDark: "#2E384D",
          vvDark: "#1B2F5D",
          vvvDark: "#263238",
          150: "#455A64",
          155: "#4B545A"
        },
        envoiblue: {
          1: "#0251E1",
          vivid: "#2E5BFF",
          pale: "#e0e7ff",
          vpale: "rgb(224, 231, 255)"
        },
        envoired: {
          brightred: "#e3342f"
        },
        gray: {
          30: "#E5E5E5",
          59: "#828282",
          69: "#858585"
        }
        // dark grayish blue example
        //chao: "#455A64",
        //yanblack: "#4B545A",

        //cinputplaceholder: "#828282",
        // semiwhite: "rgba(255, 255, 255, 0.27)",
      },
      margin: {
        auto: "auto"
      },
      borderRadius: {
        none: "0",
        large: "12px",
        "4xl": "32px"
      }
    }
  },
  variants: {},
  plugins: []
}
