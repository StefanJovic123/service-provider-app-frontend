import React from 'react';

import {
  string,
  shape,
  number,
  bool
} from 'prop-types';

import { Form } from 'antd';

const CustomFormItem = ({ children, ...props }) => (
  <Form.Item {...props}>
    {children}
  </Form.Item>
);

CustomFormItem.propTypes = {
  label: string,
  name: string,
  valuePropName: string,
  hasFeedback: bool,

  labelCol: shape({
    span: number,
    offset: number
  }),
  wrapperCol: shape({
    span: number,
    offset: number
  })
};

export default CustomFormItem;
