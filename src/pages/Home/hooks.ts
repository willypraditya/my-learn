import { useEffect, useState } from 'react';

import getAvailableClasses from '@apis/index';

import { ClassesResponse } from 'types/classes';

const useHomeHooks = () => {
  const [data, setData] = useState<ClassesResponse | undefined>();

  const fetchClasses = async () => {
    const classesData = await getAvailableClasses();
    setData(classesData);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return { data };
};

export default useHomeHooks;
