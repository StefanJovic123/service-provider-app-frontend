import React from 'react';
import { Card } from 'antd';

const BasicCard = (props) => {

  return (
    <Card {...props} >
      {props.children}
    </Card>
  );
};

export default BasicCard;
