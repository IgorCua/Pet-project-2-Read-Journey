import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { CustomGlobalStyles } from './styles/Global';
import { ThemeProvider } from '@mui/system';
import { theme } from './styles/themes';
import { PersistGate } from 'redux-persist/integration/react';
// import { emotionTheme, theme } from './styles/themes';
import { injectStore } from './services/axiosClient';

injectStore(store);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                <BrowserRouter basename='/'>
                    <ThemeProvider theme={theme}>
                        {/* <CssBaseline/> */}
                        <CustomGlobalStyles/>
                        <App />
                    </ThemeProvider>
                </BrowserRouter>
            </React.StrictMode>
        </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
