import React, { useEffect } from 'react';

import {
  oneOf,
  shape,
  number,
  object
} from 'prop-types';

import { Form } from 'antd';

const CustomForm = ({ children, initValues, ...props }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initValues);
  }, [form, initValues]);

  return (
    <Form form={form} {...props}>
      {children}
    </Form>
  );
};

CustomForm.propTypes = {
  labelCol: shape({
    span: number,
    offset: number
  }),
  wrapperCol: shape({
    span: number,
    offset: number
  }),
  size: oneOf([
    'small',
    'middle',
    'large'
  ]),
  layout: oneOf([
    'horizontal',
    'vertical',
    'inline'
  ]),
  // TODO use PropTypes.shape({object})
  // eslint-disable-next-line react/forbid-prop-types
  initValues: object
};

CustomForm.defaultValues = { initValues: {} };

export default CustomForm;
