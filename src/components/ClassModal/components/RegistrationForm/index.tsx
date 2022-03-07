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
          <Input data-testid="registration-form-name-input" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input data-testid="registration-form-email-input" />
        </Form.Item>
        <Form.Item>
          {loading ? (
            <div style={{ textAlign: 'center' }}>
              <Spin />
            </div>
          ) : (
            <Button
              data-testid="registration-form-submit"
              className={styles.registrationForm__form__submit}
              type="primary"
              htmlType="submit"
            >
              Register
            </Button>
          )}
        </Form.Item>
      </Form>
    </Card>
  );
};

export default RegistrationForm;
