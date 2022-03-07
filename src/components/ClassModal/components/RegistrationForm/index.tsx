import { Button, Card, Form, Input, Spin, Typography } from 'antd';

import useRegistrationFormHooks from './hooks';
import styles from './index.module.scss';

const RegistrationForm = (props: { classId: number | undefined }) => {
  const { classId } = props;
  const { loading, form, registerClass } = useRegistrationFormHooks(classId);
  return (
    <Card data-testid="registration-form" className={styles.registrationForm}>
      <Typography className={styles.registrationForm__title}>Registration</Typography>
      <Form className={styles.registrationForm__form} form={form} layout="vertical" onFinish={registerClass}>
        <Form.Item name="fullName" label="Full Name">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item>
          {loading ? (
            <div style={{ textAlign: 'center' }}>
              <Spin />
            </div>
          ) : (
            <Button className={styles.registrationForm__form__submit} type="primary" htmlType="submit">
              Register
            </Button>
          )}
        </Form.Item>
      </Form>
    </Card>
  );
};

export default RegistrationForm;
