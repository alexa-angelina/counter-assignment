import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText("+"));
  const incrementCount = screen.getByText(/1/i);
  expect(incrementCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText("-"));
  const decrementCount = screen.getByText(/-1/i);
  expect(decrementCount).toBeInTheDocument();
});
