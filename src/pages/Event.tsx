/**
 * IMPORTS
 */
import React from 'react';
import {Header} from 'src/components/Header';
import {Sidebar} from 'src/components/Sidebar';
import {Video} from 'src/components/Video';


/**
 * CODE
 */

/**
 * I render the event page.
 *
 * :returns: event page
 */
function Event (): JSX.Element
{
  // return component
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}


/**
 * EXPORTS
 */
export {
  Event
};
