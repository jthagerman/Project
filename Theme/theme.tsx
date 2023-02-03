import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { UITheme } from "@/types";

const theme: UITheme = {
  colors: {
    whiteBackground: "#F5F5F5",
    background: "#F9F9F9",
    whiteBodyColor: "#f9f9f9",
    whiteBackgroundContrast: "#F7F7F7",
    blackBackground: "#000000",
    blackFont: "#000000",
    whiteFont: "#F9F9F9",
    white: "#FFFFFF",
    grayFont: "#f9f9f999",
    gray: "#00000099",
    orange: "#FA885F",
    green: "#45D313",
    lightGray: "#CCCCCC",
  },

  fonts: {
    fontSizes: {
      regular: "1rem", //16px
      header: "3.75rem", //60px
      large: "1.25rem", //20px
      emphasized: "1.125rem", //18px
    },
    fontWeights: {
      thin: 300,
      regular: 400,
      semibold: 500,
      bold: 600,
    },
    names: {
      outfit: "Outfit, sans-serif",
      poppins: "Poppins, sans-serif",
    },
  },
  buttons: {
    heights: {
      small: "2.5rem", //40px
      normal: "3.0625rem", //49px
      large: "3.1875rem", //51px
    },
  },
  breakpoints: {
    mobile: "28.125rem",
    largePhone: "36.5rem",
    tablet: "52.5rem",
    laptop: "64rem",
    content: "90rem",
  },
};

const GlobalStyle = createGlobalStyle<{ theme: UITheme }>`
    html {
        max-width: 100vw;
        max-width: 100dvw;
        min-height: 100vh;
        min-height: 100dvh;
        background-color: #F9F9F9;
        font-family: 'Outfit'
    }


    body {
        margin: 0px;
        font-size: ${(props) => props.theme.fonts.fontSizes.regular};
        font-weight: ${(props) => props.theme.fonts.fontWeights.regular};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        max-width: 100vw;
        max-width: 100dvw;
        min-height: 100vh;
        min-height: 100dvh;
    }
    h1 {
        font-size: ${(props) => props.theme.fonts.fontSizes.header};
        font-weight: ${(props) => props.theme.fonts.fontWeights.bold};
    }
    img {
      user-drag: none;
    }

    a {
      text-decoration: none;
      color: inherit
    }
`;

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
