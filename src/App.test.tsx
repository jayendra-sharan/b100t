import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component', () => {
  render(<App />);
  expect(screen.getAllByText(/beyond 100 things/i).length).greaterThan(0);
});
