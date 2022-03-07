import { render } from '@testing-library/react';

import Home from '@pages/Home';

test('renders Home', async () => {
  const { findByText } = await render(<Home />);

  expect(await findByText('Belajar Javascript Dasar')).toBeInTheDocument();
});
