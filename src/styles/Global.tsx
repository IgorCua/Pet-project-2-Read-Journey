import { GlobalStyles } from "@mui/material";

const customStyles = {
    body: {
        margin: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, Gilroy, Poppins, sans-serif',
        'WebkitFontSmoothing': 'antialiased',
        'MozOsxFontSmoothing': 'grayscale',
        'msOverflowStyle': 'none',  /* IE and Edge */
        'scrollbarWidth': 'none',  /* Firefox */

        backgroundColor: '#141414',

        '&::-webkit-scrollbar':{
            display:'none',
            // width: '4px'
            
        }
    },
    'html::-webkit-scrollbar': {
        display: 'none',
        // width: '4px'
    },
    '::-webkit-scrollbar': {
        // position: 'absolute',
        width: '5px',
        // right: '-15px'
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
