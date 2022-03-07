// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}available-classes`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        items: [
          {
            id: 1,
            name: 'Belajar Javascript Dasar',
          },
          {
            id: 2,
            name: 'Belajar CSS Dasar',
          },
        ],
      }),
    ),
  ),
  rest.post(`${process.env.REACT_APP_API_URL}join-class`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        message: 'You are successfully registered',
      }),
    ),
  ),
];

export default handlers;
