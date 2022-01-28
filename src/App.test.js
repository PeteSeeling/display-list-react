import { render, screen } from '@testing-library/react';
import App from './App';

test('BJ 40', () => {
  render(<App />);
  const linkElement = screen.getByText(/BJ 40/i);
  expect(linkElement).toBeInTheDocument();
});
