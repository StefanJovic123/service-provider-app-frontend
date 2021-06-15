import React from 'react';
import { Checkbox } from 'antd';

const CustomCheckbox = ({ children, ...props }) => (
  <Checkbox {...props}>
    {children}
  </Checkbox>
);

export default CustomCheckbox;
