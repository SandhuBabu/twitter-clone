import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/store'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';

const app = <>
    <Provider store={store}>
        <GoogleOAuthProvider>
            <Router>
                <App />
            </Router>
        </GoogleOAuthProvider>
    </Provider>
</>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
