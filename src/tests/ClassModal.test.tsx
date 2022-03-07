import { render } from '@testing-library/react';

import ClassModal from '@components/ClassModal';

test('renders success ClassModal with classId 1', async () => {
  const setModalVisible = jest.fn();

  const { findByText } = render(<ClassModal classId={1} modalVisible setModalVisible={setModalVisible} />);
  expect(await findByText('Belajar Javascript Dasar bersama Andi dan Budi')).toBeInTheDocument();
});

test('renders success ClassModal with classId 2', async () => {
  const setModalVisible = jest.fn();

  const { findByText } = render(<ClassModal classId={2} modalVisible setModalVisible={setModalVisible} />);
  expect(await findByText('Belajar CSS Dasar bersama Caca dan Dian')).toBeInTheDocument();
});

test('renders error ClassModal with classId 3', async () => {
  const setModalVisible = jest.fn();

  const { findByText } = render(<ClassModal classId={3} modalVisible setModalVisible={setModalVisible} />);
  expect(await findByText('Class not found')).toBeInTheDocument();
});
