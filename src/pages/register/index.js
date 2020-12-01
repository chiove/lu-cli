import React from 'react';
import axios from 'axios';
import getInitialProps from 'src/utils/get-initial-props';
import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './style.less';

const NormalRegisterForm = (props) => {
  const onFinish = async (value) => {
    const res = (await axios.post('/api/register', value)).data;
    if (res.code === 0) {
      message.success(res.message);
      props.history.push('/login');
    } else {
      message.error(res.message);
    }
  };
  return (
    <div className="register">
      <div className="register-content">
        <div className="register-title">
          注册
        </div>
        <Form
          name="normal_register"
          className="register-form"
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
              size={'large'}
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
              size={'large'}
              prefix={<LockOutlined className="site-form-item-icon" />}
              autoComplete="off"
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button
              size={'large'}
              type="primary"
              htmlType="submit"
              className="register-form-button"
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default getInitialProps(NormalRegisterForm);
