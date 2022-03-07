import { useState } from 'react';

import { Form, Modal } from 'antd';

import { postRegisterClass } from '@apis/index';

const useRegistrationFormHooks = (classId: number | undefined) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  const registerClass = async (values: any): Promise<void> => {
    setLoading(true);
    try {
      if (classId) {
        const response = await postRegisterClass({
          classId,
          fullName: values.fullName,
          email: values.email,
        });
        Modal.success({ title: response.message });
      }
    } catch (error: any) {
      Modal.error({ title: error.response.data.message });
    }
    setLoading(false);
  };

  return { loading, form, registerClass };
};

export default useRegistrationFormHooks;
