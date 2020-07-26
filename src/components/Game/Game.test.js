import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Renders game title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/15 puzzle/i);
  expect(linkElement).toBeInTheDocument();
});
