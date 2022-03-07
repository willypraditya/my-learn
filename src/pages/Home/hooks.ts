import { useEffect, useState } from 'react';

import { getAvailableClasses } from '@apis/index';

import { ClassesResponse } from 'types/classes';

const useHomeHooks = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ClassesResponse | undefined>();
  const [modalClassId, setModalClassId] = useState<number | undefined>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchClasses = async () => {
      setLoading(true);
      const classesData = await getAvailableClasses();
      setData(classesData);
      setLoading(false);
    };

    fetchClasses();

    return () => {
      setData(undefined);
    };
  }, []);

  const onClassClick = (classId: number) => {
    setModalVisible(true);
    setModalClassId(classId);
  };

  return { loading, data, modalClassId, modalVisible, setModalVisible, onClassClick };
};

export default useHomeHooks;
