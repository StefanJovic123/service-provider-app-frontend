import React from 'react';
import { func, string, bool, number } from 'prop-types';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Form from '../../components/Form/Form';
import FormItem from '../../components/Form/FormItem';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/BasicCard';
import { Title } from '../../components/Typography';
 
import {
  formProps,
  passwordInputProps,
  usernameInputProps,
  tailLayout
} from './loginFormProps';

const LoginForm = ({ onSubmit, loading }) => {

  return (
    <Card>
      <Form
        onFinish={onSubmit}
        {...formProps}
      >
        <FormItem>
          <Title level='h3' type='secondary'>Login</Title>
        </FormItem>
        
        <FormItem
          {...usernameInputProps}
          rules={[
            {
              required: true,
              message: 'Required',
            }
          ]}
        >
          <Input placeholder='Email or Username'/>
        </FormItem>

        <FormItem
          {...passwordInputProps}
          rules={[
            {
              required: true,
              message: 'Required',
            },
          ]}
        >
          <Input placeholder='Password' type='password'/>
        </FormItem>

        <FormItem {...tailLayout}>
          <Button
            block
            htmlType={'submit'}
            type='primary'
            loading={loading}
          > 
            Log In
          </Button>
        </FormItem>

        <FormItem {...tailLayout} >
          <Link to='/signup'>Create Account</Link>
        </FormItem>
      </Form>
    </Card>
  );
};

LoginForm.propTypes = {
  onSubmit: func.isRequired,
  loading: bool
};

export default LoginForm;
