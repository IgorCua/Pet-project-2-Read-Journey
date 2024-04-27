import { Theme, createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface CustomPaletteColorOptions {
    textMain?: string;
    textSecondary?: string;
    bgWhite?: string;
    bg1?: string;
    bg2?: string;
    bg3?: string;
    bg4?: string;
    buttonBorderGrey?: string;
    buttonBgWhite?: string;
    utilBlue?: string;
    utilGreen?: string;
  }
  interface CustomPaletteColor {
    textMain: string;
    textSecondary: string;
    bgWhite: string;
    bg1: string;
    bg2: string;
    bg3: string;
    bg4: string;
    buttonBgWhite: string;
    buttonBorderGrey: string;
    utilBlue: string;
    utilGreen: string;
  }
  interface PaletteOptions {
    custom?: CustomPaletteColorOptions;
  }
  interface Palette {
    custom: CustomPaletteColor;
  }
}

// declare module '@mui/material/styles' {
//   interface Theme {
//     custom: {
//       textMain: string;
//       textSecondary: string;
//       bg1: string;
//       bg2: string;
//       bg3: string;
//       bg4: string;
//       buttonBgWhite: string;
//       buttonBorderGrey: string;
//       utilBlue: string;
//       utilGreen: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     custom?: {
//       textMain?: string;
//       textSecondary?: string;
//       bg1?: string;
//       bg2?: string;
//       bg3?: string;
//       bg4?: string;
//       buttonBorderGrey?: string;
//       buttonBgWhite?: string;
//       utilBlue?: string;
//       utilGreen?: string;
//     };
//   }
// }

type CustomTeme = {
  textMain: string,
  textSecondary: string,
  bgWhite: string,
  bg1: string,
  bg2: string,
  bg3: string,
  bg4: string,
  buttonBgWhite: string,
  buttonBorderGrey: string,
  utilBlue: string,
  utilGreen: string
}

const customTheme: CustomTeme = {
  textMain: '#F9F9F9',
  textSecondary: '#686868',
  bgWhite: '#F9F9F9',
  bg1: 'rgba(227, 227, 227, 0.30)',
  bg2: '#262626',
  bg3: '#1F1F1F',
  bg4: '#141414',
  buttonBgWhite: '#F9F9F9',
  buttonBorderGrey: 'rgba(249, 249, 249, 0.20)',
  utilBlue: '#4F92F7',
  utilGreen: '#30B94D'
}

export const theme = createTheme({
  // custom: {
  //     textMain: '#F9F9F9',
  //     textSecondary: '#686868',
  //     bg1: 'rgba(227, 227, 227, 0.30)',
  //     bg2: '#262626',
  //     bg3: '#1F1F1F',
  //     bg4: '#141414',
  //     buttonBgWhite: '#F9F9F9',
  //     buttonBorderGrey: 'rgba(249, 249, 249, 0.20)',
  //     utilBlue: '#4F92F7',
  //     utilGreen: '#30B94D'
  // },
  palette: {
    custom: {
      textMain: '#F9F9F9',
      textSecondary: '#686868',
      bgWhite: '#F9F9F9',
      bg1: 'rgba(227, 227, 227, 0.30)',
      bg2: '#262626',
      bg3: '#1F1F1F',
      bg4: '#141414',
      buttonBgWhite: '#F9F9F9',
      buttonBorderGrey: 'rgba(249, 249, 249, 0.20)',
      utilBlue: '#4F92F7',
      utilGreen: '#30B94D'
    }
  },
  breakpoints: {
    values: {
      mobile: 260,
      tablet: 768,
      laptop: 1024,
      desktop: 1280,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 29px',
          backgroundColor: customTheme.bgWhite,
          // backgroundColor: 'grey',
          borderRadius: '30px',
          textTransform: 'none',

          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: `calc(18 / 14)`,
          letterSpacing: '0.28px',
          color: 'black',

          '&:hover': {
            backgroundColor: customTheme.bg1
          }
        },
        colorPrimary: {
          
        }

      }
    },
    MuiButtonBase:{
      styleOverrides: {
        // root: {
        //   height: '15px',
        //   fontFamily: 'Gilroy'
        // }
      }
    },
    MuiTouchRipple: {
      styleOverrides:{
        root: {
          padding: '0px'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0px'
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
          borderRadius: '12px',
          overflow:'hidden'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // paddingLeft: '65px',
          backgroundColor: customTheme.bg2,
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // padding: '0',
          // paddingRight: '26px',
          width: '100%',
          backgroundColor: customTheme.bg2,
          // '&:focus': {
          //   // backgroundColor: '#262626'
          // }
        },
        input: {
          color: customTheme.textMain,
          border: 'none',

          padding: '14px 10px',
          fontSize: '12px',

          // '&::placeholder': {
          //   color: customTheme.textSecondary,
          //   opacity: '1',
          //   fontSize: '14px',

          // },
          '&:-webkit-autofill': {
            // backgroundColor: customTheme.textSecondary,
            // color: 'yellow',
            transitionDelay: '9999s',
            transitionProperty: `background-color, color`,
          },
        },
        // fieldset: {
        //   paddingLeft: '65px'
        // }
      },
    },
    MuiOutlinedInput:{
      styleOverrides:{
        root: {
          paddingRight: '16px'
        },
        notchedOutline: {
          // borderBlockColor: 'green',
          border: 'none',
        }
      }
    },
    MuiAppBar:{
      styleOverrides:{
        root:{
          backgroundColor: customTheme.bg3
        }
      }
    },
    MuiMenu:{
      styleOverrides:{
        paper:{
          opacity: '0.5'
        },
        
      }
    },
    MuiBackdrop:{
      styleOverrides:{
        root:{
          backgroundColor: 'rgba(20, 20, 20, 0.60)',
        },
      }
    }
  },
  typography: {
    allVariants: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Gilroy',
        'Poppins',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  },
})
