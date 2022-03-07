import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import server from 'mocks/server';
import { rest } from 'msw';

import RegistrationForm from '@components/ClassModal/components/RegistrationForm';

test('renders RegistrationForm', () => {
  const { getByTestId } = render(<RegistrationForm classId={undefined} />);
  expect(getByTestId('registration-form')).toBeInTheDocument();
});

test('RegistrationForm success register', async () => {
  const { getByTestId, findByText } = render(<RegistrationForm classId={1} />);
  fireEvent.change(await getByTestId('registration-form-name-input'), { target: { value: 'Full Name' } });
  fireEvent.change(await getByTestId('registration-form-email-input'), { target: { value: 'Email' } });
  userEvent.click(await getByTestId('registration-form-submit'));
  expect(await findByText('You are successfully registered')).toBeInTheDocument();
});

test('RegistrationForm error register', async () => {
  server.use(
    rest.post(`${process.env.REACT_APP_API_URL}join-class`, (req, res, ctx) =>
      res(
        ctx.status(500),
        ctx.json({
          code: 400,
          message: 'Could not join',
        }),
      ),
    ),
  );

  const { getByTestId, findByText } = render(<RegistrationForm classId={1} />);
  fireEvent.change(await getByTestId('registration-form-name-input'), { target: { value: 'Full Name' } });
  fireEvent.change(await getByTestId('registration-form-email-input'), { target: { value: 'Email' } });
  userEvent.click(await getByTestId('registration-form-submit'));
  expect(await findByText('Could not join')).toBeInTheDocument();
});
