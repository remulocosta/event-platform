/**
 * IMPORTS
 */
import React from 'react';
import Logo from 'src/assets/images/Logo.svg';


/**
 * CODE
 */

/**
 * I render the header component.
 *
 * :returns: header component
 */
function Header (): JSX.Element
{
  // return component
  return (
    <header className='w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600'>
      <Logo />
    </header>
  );
}


/**
 * EXPORTS
 */
export {
  Header
};
