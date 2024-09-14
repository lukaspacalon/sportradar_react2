import { render, screen, fireEvent } from '@testing-library/react';
import Scoreboard from './Scoreboard';

test('adds and updates matches', () => {
  render(<Scoreboard />);

  // Add a new match
  fireEvent.change(screen.getByPlaceholderText('Home Team'), { target: { value: 'Mexico' } });
  fireEvent.change(screen.getByPlaceholderText('Away Team'), { target: { value: 'Canada' } });
  fireEvent.click(screen.getByText('Add Match'));

  // Update the score
  fireEvent.change(screen.getByPlaceholderText('Home Score'), { target: { value: '1' } });
  fireEvent.change(screen.getByPlaceholderText('Away Score'), { target: { value: '2' } });
  fireEvent.click(screen.getByText('Update Score'));

  // Check if the match is displayed with updated score
  expect(screen.getByText('Mexico 1 - 2 Canada')).toBeInTheDocument();
});
