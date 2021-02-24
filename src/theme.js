// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  purple: {
    50: "#E5D0F7",
    100: "#DDC1F4",
    200: "#D2ACF0",
    300: "#C391EB",
    400: "#AE6CE5",
    500: "#943BDC",
    600: "#7D34B9",
    700: "#6A3297",
    800: "#5A2F7C",
    900: "#4C2B66",
  },
  blue: {
    50: "#D9D3F7",
    100: "#CCC5F5",
    200: "#BBB1F1",
    300: "#A497EC",
    400: "#8574E6",
    500: "#5D46DE",
    600: "#4C37C1",
    700: "#44359F",
    800: "#3D3182",
    900: "#372D6B",
  }
};

const components = {
  Container: {
    baseStyle: {
      px: '2',
      maxW: 'container.xl'
    }
  }
  // Button: {
  //   // 1. We can update the base styles
  //   baseStyle: {
  //     fontWeight: "normal", // Normally, it is "semibold"
  //   },
  //   // 3. We can add a new visual variant
  //   variants: {
      
  //   },
  // },
};

const theme = extendTheme({
  config,
  fonts: {
    body:
      "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    heading:
      "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    // mono: "Menlo, monospace",
  },
  colors,
  components,
});

export default theme;
