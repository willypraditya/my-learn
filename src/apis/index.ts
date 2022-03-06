import { ClassDetailResponse, ClassesResponse } from 'types/classes';

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

export { getAvailableClasses, getClass };
