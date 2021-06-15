import React from 'react';
import { useHistory } from 'react-router-dom';

import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import SignupForm from './SignupForm';

// services
import { useSignupMutation } from '../../services/serviceProviderApi';

const SignUp = () => {
  const history = useHistory();
  const [signup, { isLoading }] = useSignupMutation();

  const onSignup = async (body) => {
    try {
      await signup(body).unwrap().then(response => {
        window.localStorage.setItem('jwt', response.data.jwt);
        history.push('/');
      });
    } catch (e) {
      // show toast
    }
  }

  return (
    <GridContainer justify='center'>
      <GridItem xs={22} sm={16} md={14} lg={10} xl={8} xxl={6}>
        <SignupForm
          onSubmit={onSignup}
          loading={isLoading}
        />
      </GridItem>
    </GridContainer>
  );
};

export default SignUp
