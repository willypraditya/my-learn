import { render, screen } from '@testing-library/react';

import Home from '@pages/Home';

test('renders Home', () => {
  render(<Home />);
  const homeComponent = screen.getByTestId('home');
  expect(homeComponent).toBeInTheDocument();
});
