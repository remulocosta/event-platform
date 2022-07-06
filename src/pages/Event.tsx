/**
 * IMPORTS
 */
import React from 'react';
import {useParams} from 'react-router-dom';
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
  const {slug} = useParams<{slug: string}>();

  // return component
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {slug !== undefined
          ? <Video lessonSlug={slug}/>
          : <div className='flex-1 flex items-center justify-center'>
            <span className='text-2xl block'>Selecione uma aula ao lado, para assistir!</span>
          </div>
        }
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
