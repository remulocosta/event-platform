/**
 * IMPORTS
 */
import {render} from '@testing-library/react';
import {screen} from '@testing-library/react';
import React from 'react';
import {App} from 'src/App';


/**
 * CODE
 */

// Tests
describe('A Home page', () =>
{
  it('Renders app correctly', async () =>
  {
    // render app component
    render(<App />);

    // get text by app text
    const app = screen.getByText('Hello word!!');

    // app rendered?
    expect(app).toBeInTheDocument();
  });
});
