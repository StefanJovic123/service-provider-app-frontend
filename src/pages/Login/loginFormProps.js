const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 24,
  },
};

export const formProps = {
  ...layout,
  size: 'large',
  layout: 'vertical'
};

export const usernameInputProps = {
  ...tailLayout,
  name: 'email',
  rules: [
    {
      required: true,
      message: 'Please input your email',
    },
  ],
};

export const passwordInputProps = {
  ...tailLayout,
  name: 'password',
  rules: [
    {
      required: true,
      message: 'Please input your password',
    },
  ],
};
