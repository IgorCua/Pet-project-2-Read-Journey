import { Theme, createTheme } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobileS: true;
    mobileM: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface CustomPaletteColorOptions {
    textMain?: string;
    textSecondary?: string;
    textBlack?: string,
    bgWhite?: string;
    bg1?: string;
    bg2?: string;
    bg3?: string;
    bg4?: string;
    buttonBorderGrey?: string;
    buttonBgWhite?: string;
    modalBorder?: string,
    backdropBackground?: string,
    authInputBorder?: string,
    buttonSecondaryHover?: string,
    utilBlue?: string;
    utilGreen?: string;
    utilRed?: string
  }
  interface CustomPaletteColor {
    textMain: string;
    textSecondary: string;
    textBlack: string,
    bgWhite: string;
    bg1: string;
    bg2: string;
    bg3: string;
    bg4: string;
    buttonBgWhite: string;
    buttonBorderGrey: string;
    modalBorder: string,
    backdropBackground: string,
    authInputBorder: string,
    buttonSecondaryHover: string,
    utilBlue: string;
    utilGreen: string;
    utilRed: string
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
  textBlack: string,
  bgWhite: string,
  bg1: string,
  bg2: string,
  bg3: string,
  bg4: string,
  buttonBgWhite: string,
  buttonBorderGrey: string,
  modalBorder: string,
  backdropBackground: string,
  authInputBorder: string,
  buttonSecondaryHover: string,
  utilBlue: string,
  utilGreen: string
  utilRed: string
}

const customTheme: CustomTeme = {
  textMain: '#F9F9F9',
  textSecondary: '#686868',
  textBlack: '#1F1F1F',
  bgWhite: '#F9F9F9',
  bg1: 'rgba(227, 227, 227, 0.30)',
  bg2: '#262626',
  bg3: '#1F1F1F',
  bg4: '#141414',
  buttonBgWhite: '#F9F9F9',
  buttonBorderGrey: 'rgba(249, 249, 249, 0.20)',
  modalBorder: 'rgba(68, 68, 68, 0.20)',
  backdropBackground: 'rgba(20, 20, 20, 0.60)',
  authInputBorder: 'rgb(68, 68, 68)',
  buttonSecondaryHover: '#262626',
  utilBlue: '#4F92F7',
  utilGreen: '#30B94D',
  utilRed: '#E90516'
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
      textBlack: '#1F1F1F',
      bgWhite: '#F9F9F9',
      bg1: 'rgba(227, 227, 227, 0.30)',
      bg2: '#262626',
      bg3: '#1F1F1F',
      bg4: '#141414',
      buttonBgWhite: '#F9F9F9',
      buttonBorderGrey: 'rgba(249, 249, 249, 0.20)',
      modalBorder: 'rgba(68, 68, 68, 0.20)',
      backdropBackground: 'rgba(20, 20, 20, 0.60)',
      authInputBorder: 'rgb(68, 68, 68)',
      buttonSecondaryHover: '#262626',
      utilBlue: '#4F92F7',
      utilGreen: '#30B94D',
      utilRed: '#E90516'
    }
  },
  breakpoints: {
    values: {
      mobileS: 260,
      mobileM: 320,
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
        root: {
          padding: '0px',
          // height: '15px',
          // fontFamily: 'Gilroy'
          transitionProperty: 'background-color, color',
          transitionDuration: '250ms',

          '&:hover':{
            backgroundColor: customTheme.buttonSecondaryHover
          }
        },
      }
    },
    MuiIconButton:{
      styleOverrides:{
        root:{
          // padding: '0',
          transitionProperty: 'background-color',
          transitionDuration: '250ms',

          '&:hover':{
            backgroundColor: customTheme.buttonSecondaryHover
          }
        }
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
          // borderRadius: '12px',
          // overflow:'hidden'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // paddingLeft: '65px',
          borderRadius: '12px',
          backgroundColor: customTheme.bg2,
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: '0px',
          width: '100%',

          backgroundColor: customTheme.bg2,
          // border: '1px solid transparent',
          borderRadius: '12px',

          // '&:hover': {
          //   border: `1px solid ${customTheme.authInputBorder}`,
          // },
          // '&.Mui-focused': {
          //   border: `1px solid ${customTheme.authInputBorder}`,
          //   // borderRadius: '12px'
          // },

        },
        input: {
          // padding: '14px 16px 14px 14px',

          fontSize: '12px',
          
          color: customTheme.textMain,
          border: 'none',

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
          padding: '15px 16px 15px 14px',
          borderRadius: '12px',
          // transitionDuration: '250ms',
          // transitionProperty:'border, border-color',
          borderColor: customTheme.authInputBorder,

          '& .MuiOutlinedInput-notchedOutline': {
            transitionDuration: '250ms',
            transitionProperty:'border, border-color, color',
            borderColor: 'transparent',
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: customTheme.authInputBorder
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${customTheme.authInputBorder}`,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline':{
            borderColor: customTheme.utilRed
          },
        },
        input: {
          padding: '0px',
        },
        notchedOutline: {
          margin: '0px',
          top: '-5px',
          right: '-1px',
          bottom: '-1px',
          left: '-1px',
        }
      }
    },
    MuiInputAdornment:{
      styleOverrides:{
        root:{
          'p': {
            fontSize: '12px',

            color: customTheme.textSecondary,
          }

          // zIndex: '1000',
        
          // [customTheme.breakpoints.up('tablet')]: {
          //   minWidth: '92px',
          //   fontSize: '14px',
          // }
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
          // backgroundColor: 'rgba(20, 20, 20, 0.60)',
        },
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0',
          position: 'inherit'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '0',
          position: 'inherit'
        }
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
