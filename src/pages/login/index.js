import React from 'react';
import axios from 'axios';
import getInitialProps from 'src/utils/get-initial-props';
import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './style.less';

const NormalLoginForm = () => {
  const onFinish = async (value) => {
    const res = (await axios.post('/api/login', value)).data;
    if (res.code === 200) {
      message.success(res.message);
    } else {
      message.error(res.message);
    }
  };
  return (
    <div className="login">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon"/>}
            autoComplete="off"
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            autoComplete="off"
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
        </Form.Item>
        <Form.Item>
          <a className="login-form-register" href="">
            注册
          </a>
          <a className="login-form-forgot" href="">
            忘记密码?
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default getInitialProps(NormalLoginForm);