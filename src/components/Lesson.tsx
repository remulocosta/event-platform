/**
 * IMPORTS
 */
import React from 'react';
import {isPast} from 'date-fns';
import {format} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import {CheckCircle} from 'phosphor-react';
import {Lock} from 'phosphor-react';


/**
 * TYPES
 */
interface ILessonProps {
  availableAt: Date;
  slug: string;
  title: string;
  type: 'live' | 'class';
}


/**
 * CODE
 */

/**
 * I render the lesson component.
 *
 * :prop availableAt: lesson available date
 * :prop slug: lesson slug text
 * :prop title: lesson title
 * :prop type: lesson type
 *
 * :returns: lesson component
 */
function Lesson (props: ILessonProps): JSX.Element
{
  // check if lesson is available
  const isLessonAvailable = isPast(props.availableAt);

  // get formatted date
  const availableDateFormatted = format(
    props.availableAt,
    'EEEE\' • \'d\' de \'MMMM\' • \'kk\'h\'mm',
    {locale: ptBr}
  );

  // return component
  return (
    <a href="#">
      <span className='text-gray-300'>
        {availableDateFormatted}
      </span>

      <div className='rounded border border-gray-500 p-4 mt-2'>
        <header className='flex items-center justify-between'>
          {isLessonAvailable === true ? (
            <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className='text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold'>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className='text-gray-200 mt-5 block'>
          {props.title}
        </strong>
      </div>
    </a>
  );
}


/**
 * EXPORTS
 */
export {
  Lesson
};
