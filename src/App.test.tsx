import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component', () => {
  render(<App />);
  const heading = screen.getByText(/Hello Beyond100Things/);
  expect(heading).toBeInTheDocument();
})
