import { ReactElement } from 'react';

import { Card, Spin, Typography } from 'antd';

import ClassModal from '@components/ClassModal';

import { Class } from 'types/classes';

import useHomeHooks from './hooks';
import styles from './index.module.scss';

const Home = (): ReactElement => {
  const { loading, data, modalClassId, modalVisible, setModalVisible, onClassClick } = useHomeHooks();

  return (
    <div data-testid="home" className={styles.home}>
      <Typography className={styles.home__title}>MyLearn</Typography>
      <div className={styles.home__content}>
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <Spin style={{ textAlign: 'center' }} />
          </div>
        ) : (
          <div>
            {data &&
              data.items.map((item: Class) => (
                <Card
                  key={item.id}
                  size="small"
                  className={styles.home__content__card}
                  onClick={() => onClassClick(item.id)}
                >
                  <Typography className={styles.home__content__card__title}>{item.name}</Typography>
                </Card>
              ))}
          </div>
        )}
      </div>
      <ClassModal classId={modalClassId} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </div>
  );
};

export default Home;
