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
  rest.get(`${process.env.REACT_APP_API_URL}learning-class`, (req, res, ctx) => {
    const classId = req.url.searchParams.get('id');

    if (classId === '1') {
      return res(
        ctx.status(200),
        ctx.json({
          id: 1,
          name: 'Belajar Javascript Dasar',
          mentors: [
            {
              id: 1,
              name: 'Andi',
              description: 'Engineer Company 1',
            },
            {
              id: 2,
              name: 'Budi',
              description: 'Engineer Company 2',
            },
          ],
          description: 'Belajar Javascript Dasar bersama Andi dan Budi',
        }),
      );
    }
    if (classId === '2') {
      return res(
        ctx.status(200),
        ctx.json({
          id: 2,
          name: 'Belajar CSS Dasar',
          mentors: [
            {
              id: 3,
              name: 'Caca',
              description: 'Engineer Company 3',
            },
            {
              id: 4,
              name: 'Dian',
              description: 'Engineer Company 2',
            },
          ],
          description: 'Belajar CSS Dasar bersama Caca dan Dian',
        }),
      );
    }

    return res(
      ctx.status(404),
      ctx.json({
        code: 404,
        message: 'Class not found',
      }),
    );
  }),
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
