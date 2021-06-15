import React from 'react';

import {
  arrayOf,
  shape,
  string,
  func
} from 'prop-types';

import { Checkbox } from 'antd';

const CheckboxGroup = (props) => <Checkbox.Group {...props} />;

CheckboxGroup.propTypes = {
  options: arrayOf(shape({
    value: string,
    label: string
  })),
  onChange: func
};

export default CheckboxGroup;