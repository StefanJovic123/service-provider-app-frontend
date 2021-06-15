import React from 'react';
import { oneOf } from 'prop-types';
import { Row } from 'antd';


const GridContainer = ({ ...props }) => (
  <Row {...props}  >
    {props.children}
  </Row>
);

GridContainer.propTypes = {
  justify: oneOf([
    'start',
    'end',
    'center',
    'space-around',
    'space-between'
  ])
};

GridContainer.defaultProps = {
  // TODO
  // eslint-disable-next-line react/default-props-match-prop-types
  gridSpacing: 8,
  justify: 'start'
};

export default GridContainer;
