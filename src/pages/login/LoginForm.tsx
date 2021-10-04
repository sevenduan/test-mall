import React, { useEffect } from 'react';
import { InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

interface LoginFormProps {
  form: {
    getFieldProps: Function;
    getFieldsValue: Function;
  };
  handleSubmit: Function;
}

const LoginForm: React.FC<LoginFormProps> = ({ form, handleSubmit }) => {
  const { getFieldProps, getFieldsValue } = form;
  const submit = () => {
    //console.log('form', form);
    let value = getFieldsValue();
    handleSubmit(value);
  };
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <InputItem
        {...getFieldProps('name')}
        type="text"
        placeholder="input your user name"
        clear
      >
        Account
      </InputItem>
      <InputItem
        {...getFieldProps('password')}
        type="password"
        placeholder="input your password"
        clear
        autoComplete="new-password"
      >
        Password
      </InputItem>
      <WhiteSpace size="lg" />
      <Button type="primary" onClick={submit}>
        Login
      </Button>
    </WingBlank>
  );
};

export default createForm()(LoginForm);
