import { GlobalStyles } from "@mui/material";

const customStyles = {
    body: {
        margin: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, Gilroy, Poppins, sans-serif',
        'WebkitFontSmoothing': 'antialiased',
        'MozOsxFontSmoothing': 'grayscale',
        '-ms-overflow-style': 'none',  /* IE and Edge */
        'scrollbar-width': 'none',  /* Firefox */

        backgroundColor: '#141414',

        '&::-webkit-scrollbar':{
            // display:'none',
            // width: '4px'
            
        }
    },
    'html::-webkit-scrollbar': {
        // display: 'none',
        // width: '4px'
    },
    '::-webkit-scrollbar': {
        width: '5px'
    },
    
    '::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 5px grey', 
        borderRadius: '5px'
    },
       
      /* Handle */
    '::-webkit-scrollbar-thumb': {
        background: 'red', 
        borderRadius: '5px'
    },
      
      /* Handle on hover */
    '::-webkit-scrollbar-thumb:hover': {
        background: '#b30000'
    },

    '*': {
        boxSizing: 'border-box'
    },
    'h1, h2, h3, h4, h5, h6': {
        margin: 0,
        padding: 0
    },
    ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
    },  
    p: {
        padding: 0,
        margin: 0
    },
    img: {
        display: 'block',
        maxWidth: '100%',
        height: 'auto'
    },
    figure: {
        margin: 0,
    },
}

export function CustomGlobalStyles() { 
    return <GlobalStyles styles={customStyles}/> 
}

// ul {
//     margin: 0;
//     padding: 0;
//     list-style:  none;
//   }
  
//   p {
//     padding: 0;
//     margin: 0;
    
//     font-size: 16px;
//     font-style: normal;
//   }
  
//   h1,
//   h2,
//   h3,
//   h4,
//   h5 {
//     margin: 0;
//     padding: 0;
//   }
  
//   img {
//     display: block;
//     max-width: 100%;
//     height: auto;
//   }
  
//   figure {
//     margin: 0;
//   }

// * {
//     box-sizing: border-box;
//   }
//   body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }
    
//   code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//       monospace;
//   }

// import styled, { createGlobalStyle, css } from 'styled-components'
// import fontsCss from './fonts.module.css'

// export const GlobalStyles = createGlobalStyle`
//  ${fontsCss} // this works as a normal styled css

// /* Box sizing rules */
// *,
// *::before,
// *::after {
//   box-sizing: border-box;
// }

// html {
//   font-size: 100%;
// }

// body {
//   margin: 0;
//   padding: 0;
//   overflow-x: hidden;
//   min-height: 100vh;
//   text-rendering: optimizeSpeed;
//   font-family: ${({ theme }) => theme.fonts.anekMalayalam}, sans-serif;
//   font-size: 1rem;
//   color: ${({ theme }) => theme.colors.text};
//   background-color: ${({ theme }) => theme.colors.background};
//   line-height: 1;
// }
// h1,
// h2,
// h3,
// h4,
// h5,
// h6,
// p,
// ul,
// figure,
// blockquote,
// dl,
// dd {
//   padding: 0;
//   margin: 0;
// }
// button {
//   border: none;
//   background-color: transparent;
//   font-family: inherit;
//   padding: 0;
//   cursor: pointer;
// }
// /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
// ul[role="list"],
// ol[role="list"] {
//   list-style: none;
// }
// li {
//   list-style-type: none;
// }
// /* Set core root defaults */
// html:focus-within {
//   scroll-behavior: smooth;
// }
// /* A elements that don't have a class get default styles */
// a:not([class]) {
//   text-decoration-skip-ink: auto;
// }

// /* Make images easier to work with */
// img,
// picture {
//   max-width: 100%;
//   display: block;
// }

// /* Inherit fonts for inputs and buttons */
// input,
// button,
// textarea,
// select {
//   font: inherit;
// }
// /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
// @media (prefers-reduced-motion: reduce) {
//   html:focus-within {
//     scroll-behavior: auto;
//   }

//   *,
//   *::before,
//   *::after {
//     animation-duration: 0.01ms !important;
//     animation-iteration-count: 1 !important;
//     transition-duration: 0.01ms !important;
//     scroll-behavior: auto !important;
//   }
// }
// `