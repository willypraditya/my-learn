import React, { ReactElement } from 'react';

import { Collapse, Modal, Spin, Typography } from 'antd';

import { ClassDetailMentor } from 'types/classes';

import useClassModalHooks from './hooks';
import styles from './index.module.scss';

const { Panel } = Collapse;

const ClassModal = (props: {
  classId: number | undefined;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}): ReactElement => {
  const { classId, modalVisible, setModalVisible } = props;

  const { loading, data } = useClassModalHooks(classId);

  return (
    <Modal
      title={loading ? 'Loading...' : data?.name}
      visible={modalVisible}
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
      destroyOnClose
      className={styles.classModal}
    >
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <Spin />
        </div>
      ) : (
        <>
          <Typography className={styles.classModal__description}>{data?.description}</Typography>
          <div className={styles.classModal__mentor}>
            <Typography className={styles.classModal__mentor__title}>Mentor</Typography>
            <Collapse ghost className={styles.classModal__mentor__collapse}>
              {data?.mentors.map((mentor: ClassDetailMentor) => (
                <Panel header={mentor.name} key={mentor.id}>
                  <Typography>
                    <span style={{ fontWeight: 600 }}>Mentor ID:</span> {mentor.id}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: 600 }}>Company:</span> {mentor.description}
                  </Typography>
                </Panel>
              ))}
            </Collapse>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ClassModal;
