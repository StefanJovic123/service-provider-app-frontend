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
  firstNameInputProps,
  lastNameInputProps,
  tailLayout
} from './signupFormProps';

const LoginForm = ({ onSubmit, loading }) => {

  return (
    <Card>
      <Form
        onFinish={onSubmit}
        {...formProps}
      >
        <FormItem>
          <Title level='h3' type='secondary'>Sign Up</Title>
        </FormItem>

        <FormItem
          {...firstNameInputProps}
          rules={[
            {
              required: true,
              message: 'Required',
            }
          ]}
        >
          <Input placeholder='First Name'/>
        </FormItem>

        <FormItem
          {...lastNameInputProps}
          rules={[
            {
              required: true,
              message: 'Required',
            }
          ]}
        >
          <Input placeholder='Last Name'/>
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
          <Input placeholder='Email'/>
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
            Sign up
          </Button>
        </FormItem>

        <FormItem {...tailLayout} >
          <Link to='/login'>Already have an Account?</Link>
        </FormItem>
      </Form>
    </Card>
  );
};

LoginForm.propTypes = {
  onValuesChange: func.isRequired,
  onSubmit: func.isRequired,
  error: bool,
  loginAttempts: number,
  loading: bool
};

export default LoginForm;
