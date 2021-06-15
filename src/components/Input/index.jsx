import React from 'react';
import { string, func, oneOf } from 'prop-types';
import { Input } from 'antd';

const CustomInput = (props) => <Input {...props} />;

CustomInput.propTypes = {
  value: string,
  defaultValue: string,
  placeholder: string,
  type: string,
  size: oneOf([
    'small',
    'middle',
    'large'
  ]),
  onChange: func,
  onPressEnter: func // action when enter key is pressed
};

export default CustomInput;
