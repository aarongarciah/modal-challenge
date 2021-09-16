import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome', () => {
  render(<App />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});
