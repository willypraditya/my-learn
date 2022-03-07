import { useEffect, useState } from 'react';

import { Modal } from 'antd';

import { getClass } from '@apis/index';

import { ClassDetailResponse } from 'types/classes';

const useClassModalHooks = (classId: number | undefined) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ClassDetailResponse | undefined>();

  useEffect(() => {
    const fetchClass = async () => {
      setLoading(true);
      try {
        if (classId) {
          const classData = await getClass(classId);
          setData(classData);
        }
      } catch (error: any) {
        Modal.error({ title: error.response.data.message });
      }
      setLoading(false);
    };
    fetchClass();

    return () => {
      setData(undefined);
    };
  }, [classId]);

  return { loading, data };
};

export default useClassModalHooks;
