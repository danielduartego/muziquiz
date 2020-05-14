const theme = {
  colors: {
    green: "#1DB954",
    offGreen: "#1ED760",
    blue: "#1d73b9",
    lightestGrey: "#3bb91d",
    lightGrey: "#298214",
    white: "#FFFFFF",
    red: "#EB1E32",
    grey: "#9D9D9D",
    darkGrey: "#282828",
    navBlack: "#040306",
    black: "#171717",
  },

  fonts: {
    primary:
      "Circular Std, system, -apple-system, BlinkMacSystemFont, sans-serif",
  },

  fontSizes: {
    base: `16px`,
    xs: `12px`,
    sm: `14px`,
    md: `20px`,
    lg: `24px`,
    xl: `30px`,
    xxl: `55px`,
    gt: `80px`,
  },

  spacing: {
    base: `20px`,
    xs: `5px`,
    sm: `10px`,
    md: `30px`,
    lg: `50px`,
    xl: `100px`,
  },

  easing: {
    easeInCubic: `cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
    easeOutCubic: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
    easeInOutCubic: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
    easeInExpo: `cubic-bezier(0.95, 0.05, 0.795, 0.035)`,
    easeOutExpo: `cubic-bezier(0.19, 1, 0.22, 1)`,
    easeInOutExpo: `cubic-bezier(0.19, 1, 0.22, 1)`,
    easeInBack: `cubic-bezier(0.6, -0.28, 0.735, 0.045)`,
    easeOutBack: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
    easeInOutBack: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
  },

  transition: `all 0.25s cubic-bezier(0.3, 0, 0.4, 1);`,
};

export default theme;
