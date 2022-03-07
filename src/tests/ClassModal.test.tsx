import { render } from '@testing-library/react';

import ClassModal from '@components/ClassModal';
import RegistrationForm from '@components/ClassModal/components/RegistrationForm';

test('renders ClassModal', () => {
  const setModalVisible = jest.fn();

  const { getByTestId } = render(<ClassModal classId={undefined} modalVisible setModalVisible={setModalVisible} />);
  expect(getByTestId('class-modal'));
});

test('renders RegistrationForm', () => {
  const { getByTestId } = render(<RegistrationForm classId={undefined} />);
  expect(getByTestId('registration-form'));
});
