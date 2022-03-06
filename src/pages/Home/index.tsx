import { ReactElement } from 'react';

import { Card, Typography } from 'antd';

import { Class } from 'types/classes';

import useHomeHooks from './hooks';
import styles from './index.module.scss';

const Home = (): ReactElement => {
  const { data } = useHomeHooks();

  return (
    <div className={styles.home}>
      <Typography className={styles.home__title}>MyLearn</Typography>
      <div className={styles.home__content}>
        {data &&
          data.items.map((item: Class) => (
            <Card key={item.id} size="small" className={styles.home__content__card}>
              <Typography className={styles.home__content__card__title}>{item.name}</Typography>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Home;
