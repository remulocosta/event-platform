/**
 * IMPORTS
 */
import {ApolloProvider} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'src/App';
import {clientAPI} from 'src/lib/apollo';
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
    <ApolloProvider client={clientAPI}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
