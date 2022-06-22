/**
 * IMPORTS
 */
import {gql} from '@apollo/client';
import {useQuery} from '@apollo/client';
import React from 'react';


/**
 * CONSTANTS AND DEFINITIONS
 */
const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;


/**
 * TYPES
 */
interface ILesson {
    id: string;
    title: string;
}


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
  // get lessons data
  const {data} = useQuery<{lessons: ILesson[]}>(GET_LESSONS_QUERY);

  // return app component
  return (
    <ul>
      {data?.lessons.map(lesson =>
      {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  );
}


/**
 * EXPORTS
 */
export {
  App
};
