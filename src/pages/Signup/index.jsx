import React from 'react';
import { useHistory } from 'react-router-dom';
import { openNotification } from '../../utils/notifications';
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
        history.push('/complete-profile');
      });
    } catch (e) {
       // show error in notification
       if (e.data) {
        openNotification({
          message: 'Error', 
          description: e.data.message
        });

        return;
      } else {
        openNotification('Something went wrong, please try again.', '', null);
      }
      
      console.log('e', e);
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
