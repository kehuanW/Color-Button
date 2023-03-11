import { render, screen } from '@testing-library/react';
import App from './App';

test('correct title', () => {
  render(<App />);
  const text = screen.getByText("Awesome Counter");
  expect(text).toBeInTheDocument();
});
