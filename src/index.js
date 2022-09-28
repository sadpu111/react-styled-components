import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor: "#111",
};
const lightTheme = {
    textColor: "#111",
    backgroundColor: "whitesmoke",
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider theme={lightTheme}>
     <App />
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
