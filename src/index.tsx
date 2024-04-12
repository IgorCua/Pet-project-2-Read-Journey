import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import { CustomGlobalStyles } from './styles/Global';
import { ThemeProvider } from '@mui/system';
import { theme } from './styles/themes';
// import { emotionTheme, theme } from './styles/themes';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter basename='/'>
                <ThemeProvider theme={theme}>
                    {/* <CssBaseline/> */}
                    <CustomGlobalStyles/>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
