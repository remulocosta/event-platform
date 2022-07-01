/**
 * IMPORTS
 */
import React from 'react';
import {gql} from '@apollo/client';
import {useQuery} from '@apollo/client';
import {Lesson} from 'src/components/Lesson';


/**
 * CONSTANTS AND DEFINITIONS
 */
const GET_LESSONS_QUERY = gql`
  query MyQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;


/**
 * TYPES
 */
 interface ILesson {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: 'live' | 'class';
}

interface IGetLessonsQueryResponse {
  lessons: ILesson[];
}


/**
 * CODE
 */

/**
 * I render the sidebar component.
 *
 * :returns: sidebar component
 */
function Sidebar (): JSX.Element
{
  // request lessons data
  const {data} = useQuery<IGetLessonsQueryResponse>(GET_LESSONS_QUERY);


  /**
   * I render the lesson.
   *
   * :prop lesson: lesson data to be rendered
   *
   * :returns: lesson component
   */
  function renderLesson (lesson: ILesson): JSX.Element
  {
    // return component
    return <Lesson
      key={lesson.id}
      title={lesson.title}
      slug={lesson.slug}
      availableAt={new Date(lesson.availableAt)}
      type={lesson.lessonType}
    />;
  }

  // return component
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </span>

      {/* data is not defined: render appropriate message or render lessons */}
      {data === undefined ? (
        <span className='text-gray-300'>
          Aulas não disponíveis
        </span>
      ) : (
        <div className='flex flex-col gap-8'>
          {data.lessons.map(renderLesson)}
        </div>
      )}
    </aside>
  );
}


/**
 * EXPORTS
 */
export {
  Sidebar
};
