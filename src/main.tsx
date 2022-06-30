/**
 * IMPORTS
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'src/App';
import 'src/styles/global.css';


/**
 * CONSTANTS AND DEFINITIONS
 */

// get root element
const rootElement = document.getElementById('root') as HTMLElement;


/**
 * CODE
 */

// render the app on element
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
