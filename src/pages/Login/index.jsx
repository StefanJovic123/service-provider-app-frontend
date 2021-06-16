import React from 'react';
import { useHistory } from 'react-router-dom';
import { openNotification } from '../../utils/notifications';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import LoginForm from './LoginForm';

// services
import { useLoginMutation } from '../../services/serviceProviderApi';

const Login = () => {
  const [login, { isLoading, error, data, isSuccess }] = useLoginMutation();
  const history = useHistory();

  const onLogin = async (body) => {
    try {
      await login(body).unwrap().then(response => {
        window.localStorage.setItem('jwt', response.data.jwt);
        history.push('/');
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
        <LoginForm
          onSubmit={onLogin}
          loading={isLoading}
        />
      </GridItem>
    </GridContainer>
  );
};

export default Login
