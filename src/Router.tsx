/**
 * IMPORTS
 */
import React from 'react';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Event} from 'src/pages/Event';


/**
 * CODE
 */

/**
  * I render the app.
  *
  * :returns: app component
  */
function Router (): JSX.Element
{
  // return app component
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path={'/event'} element={<Event />}/>
      <Route path='/event/lesson/:slug' element={<Event />}/>
    </Routes>
  );
}


/**
 * EXPORTS
 */
export {
  Router
};
