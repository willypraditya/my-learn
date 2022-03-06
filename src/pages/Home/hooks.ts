import { useEffect, useState } from 'react';

import { getAvailableClasses } from '@apis/index';

import { ClassesResponse } from 'types/classes';

const useHomeHooks = () => {
  const [data, setData] = useState<ClassesResponse | undefined>();
  const [modalClassId, setModalClassId] = useState<number | undefined>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const fetchClasses = async () => {
    const classesData = await getAvailableClasses();
    setData(classesData);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const onClassClick = (classId: number) => {
    setModalVisible(true);
    setModalClassId(classId);
  };

  return { data, modalClassId, modalVisible, setModalVisible, onClassClick };
};

export default useHomeHooks;
