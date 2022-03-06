import { ClassDetailResponse, ClassesResponse } from 'types/classes';
import { Message } from 'types/common';

import getClient from './client';

const client = getClient();

const getAvailableClasses = async (): Promise<ClassesResponse> => {
  const response = await client.get('available-classes');
  return response.data;
};

const getClass = async (classId: number): Promise<ClassDetailResponse> => {
  const response = await client.get('learning-class', {
    params: {
      id: classId,
    },
  });
  return response.data;
};

const postRegisterClass = async (payload: { classId: number; fullName: string; email: string }): Promise<Message> => {
  const response = await client.post(
    'join-class',
    {
      classId: payload.classId,
      attendeeFullName: payload.fullName,
      attendeeEmail: payload.email,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  return response.data;
};

export { getAvailableClasses, getClass, postRegisterClass };
