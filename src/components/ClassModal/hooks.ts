import { useEffect, useState } from 'react';

import { getClass } from '@apis/index';

import { ClassDetailResponse } from 'types/classes';

const useClassModalHooks = (classId: number | undefined) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ClassDetailResponse>();

  useEffect(() => {
    const fetchClass = async () => {
      setLoading(true);
      if (classId) {
        const classData = await getClass(classId);
        setData(classData);
      }
      setLoading(false);
    };
    fetchClass();
  }, [classId]);

  return { loading, data };
};

export default useClassModalHooks;
