import React from 'react';
import { Redirect } from 'react-router-dom';

import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import LoginForm from './LoginForm';

const Login = ({
  onValuesChange,
  onLogin,
  succeed,
  loading
}) => {

  if (succeed) {
    return <Redirect
      to={{
        pathname: '/',
      }}
    />;
  }

  return (
    <GridContainer justify='center'>
      <GridItem xs={22} sm={16} md={14} lg={10} xl={8} xxl={6}>
        <LoginForm
          onValuesChange={onValuesChange}
          onSubmit={onLogin}
          loading={loading}
        />
      </GridItem>
    </GridContainer>
  );
};

export default Login
