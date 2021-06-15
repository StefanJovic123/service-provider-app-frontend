import React from 'react';

import { number } from 'prop-types';

import { Col } from 'antd';

const GridItem = (props) => (
  <Col className={`${props.className  }gutter-row`} span={props.span} {...props} >
    {props.children}
  </Col>
);

GridItem.propTypes = {
  span: number,
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number
};

GridItem.defaultProps = { span: 24 };

export default GridItem;
