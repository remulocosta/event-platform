/**
 * IMPORTS
 */
import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {clientAPI} from 'src/lib/apollo';
import {Router} from 'src/Router';


/**
 * CODE
 */

/**
 * I render the app.
 *
 * :returns: app component
 */
function App (): JSX.Element
{
  // return app component
  return (
    <ApolloProvider client={clientAPI}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}


/**
 * EXPORTS
 */
export {
  App
};
