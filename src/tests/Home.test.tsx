import { render } from '@testing-library/react';
import server from 'mocks/server';
import { rest } from 'msw';

import Home from '@pages/Home';

test('renders Home success', async () => {
  const { findByText } = await render(<Home />);

  expect(await findByText('Belajar Javascript Dasar')).toBeInTheDocument();
});

test('renders Home error', async () => {
  server.use(
    rest.get(`${process.env.REACT_APP_API_URL}available-classes`, (req, res, ctx) =>
      res(
        ctx.status(500),
        ctx.json({
          code: 40168402,
          message: 'mollit officia magna anim',
        }),
      ),
    ),
  );

  const { findByText } = await render(<Home />);
  expect(await findByText('mollit officia magna anim')).toBeInTheDocument();
});
