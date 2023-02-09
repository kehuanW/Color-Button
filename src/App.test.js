import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Create a virtual DOM for the argument
  render(<App />);
  // find element by display text; rehular expression; i: insenisive
  const linkElement = screen.getByText(/learn testing/i); //error
  // Assertion
  // expect: Jest global, start the assertion
  // toBeInTheDocument: matcher Jest-DOM
  // jest-dom comes with create-react-app, erc/setupTest.js imports it before each test, makes matcher available
  // DOM-based matchers
  expect(linkElement).toBeInTheDocument();
});
