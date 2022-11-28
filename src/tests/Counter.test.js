// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<Counter />);
  // Render the Counter component here
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  const counterVar = parseInt(screen.getByTestId('count').textContent);
  expect(counterVar).toEqual(0);
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', async () => {
  const counterVar1 = parseInt(screen.getByTestId('count').textContent);
  await userEvent.click(screen.getByRole('button', {name: "+"}));
  const counterVar2 = parseInt(screen.getByTestId('count').textContent);
  expect(counterVar2).toEqual(counterVar1 + 1);
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', async () => {
  const counterVar1 = parseInt(screen.getByTestId('count').textContent);
  await userEvent.click(screen.getByRole('button', {name: "-"}));
  const counterVar2 = parseInt(screen.getByTestId('count').textContent);
  expect(counterVar2).toEqual(counterVar1 - 1);
  // Complete the unit test below based on the objective in the line above
});
