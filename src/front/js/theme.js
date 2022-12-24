// color design tokens export
export const tokensDark = {
    grey: {
      100: "#fefefe",
      200: "#fdfdfd",
      300: "#fbfbfb",
      400: "#fafafa",
      500: "#f9f9f9",
      600: "#c7c7c7",
      700: "#959595",
      800: "#646464",
      900: "#323232",
    },
    primary: {
      100: "#d2d2d2",
      200: "#a4a4a4",
      300: "#777777",
      400: "#494949",
      500: "#1c1c1c",
      600: "#161616",
      700: "#111111",
      800: "#0b0b0b",
      900: "#060606",
    },
    secondary: {
      // yellow
      100: "#f9e9dc",
      200: "#f3d4b9",
      300: "#ecbe95",
      400: "#e6a972",
      500: "#e0934f",
      600: "#b3763f",
      700: "#86582f",
      800: "#5a3b20",
      900: "#2d1d10",
    },
  };
  
  // function that reverses the color palette
  function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
  }
  export const tokensLight = reverseTokens(tokensDark);
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                ...tokensDark.primary,
                main: tokensDark.primary[400],
                light: tokensDark.primary[200],
              },
              secondary: {
                ...tokensDark.secondary,
                main: tokensDark.secondary[600],
                light: tokensDark.secondary[300]
              },
              neutral: {
                ...tokensDark.grey,
                main: tokensDark.grey[900],
              },
              background: {
                default: tokensDark.primary[600],
                alt: tokensDark.primary[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                ...tokensLight.primary,
                main: tokensDark.grey[50],
                light: tokensDark.grey[100],
              },
              secondary: {
                ...tokensLight.secondary,
                main: tokensDark.secondary[600],
                light: tokensDark.secondary[700],
              },
              neutral: {
                ...tokensLight.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.grey[0],
                alt: tokensDark.grey[500],
              },
            }),
      },
      typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };