//modules
import React from 'react';
import ReactDOM from 'react-dom/client';
//cmponents
import App from './App';
//styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css';
import { CartProvider } from './context/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <App />
    </CartProvider>
);
