import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import App from './App';

// test('renders learn react link', () => {
// Create a virtual DOM for the argument
// render(<App />);
// Find element by display text; rehular expression; i: insenisive
// const linkElement = screen.getByText(/learn react/i); //error

// Assertion
// expect: Jest global, start the assertion
// toBeInTheDocument: matcher Jest-DOM; DOM-based matchers
// jest-dom comes with create-react-app, erc/setupTest.js imports it before each test, makes matcher available
// expect(linkElement).toBeInTheDocument();

// We seldom use new Error. We prefer to use assertion.
// throw new Error("throw error test")
// });

test('button has correct initial color, and update when clicked', () => {
  const { container } = render(<App />);
  logRoles(container); // can help you to know the roles in the App

  // expect the button text to be "Change to Red"
  const colorButton = screen.getByRole('button', { name: "Change to Blue" });

  // expect the bg color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  //click button
  fireEvent.click(colorButton);

  // expect the bg color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be "Change to Red"
  expect(colorButton).toHaveTextContent("Change to Red")
})
