import { render, screen } from '@testing-library/react';
import Create from './CreatePage';

test('Add board game', async () => {
  render(<Create />);
  const linkElement = await screen.findByText(/Add board game/i);
  expect(linkElement).toBeInTheDocument();
});
