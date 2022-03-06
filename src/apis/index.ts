import { ClassesResponse } from 'types/classes';

import getClient from './client';

const client = getClient();

const getAvailableClasses = async (): Promise<ClassesResponse> => {
  const response = await client.get('available-classes');
  return response.data;
};

export default getAvailableClasses;
