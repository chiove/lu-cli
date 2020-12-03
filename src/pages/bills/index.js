import React, {useEffect, useState} from 'react';
import axios from 'axios';
import getInitialProps from 'src/utils/get-initial-props';
import {Form, Input, Button, message, Select, Spin} from 'antd';
import './style.less';

const NormalRegisterForm = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitState, setSubmitState] = useState(false);
  const onFinish = async (value) => {
    const res = (await axios.post('/api/createBill', value)).data;
    if (res.code === 0) {
      message.success(res.message);
      setLoading(true);
      setSubmitState(true);
    } else {
      message.error(res.message);
    }
  };

  useEffect(() => {
    (async () => {
      const res = (await axios.post('/api/queryBills')).data;
      setData(res.data);
      setLoading(false);
    })();
  }, [submitState]);
  return (

    <div className="bills">
      {
        loading ? <Spin /> :
        <div className="bills-content">
          <div className="bills-title">
            添加收入
          </div>
          <Form
            name="normal_bills"
            className="bills-form"
            onFinish={onFinish}
          >
            <Form.Item
              name="money"
              rules={[
                {
                  required: true,
                  message: '请输入金额!',
                },
                {
                  pattern: /^-?\d+(,\d{3})*(\.\d{1,2})?$/,
                  message: '请输入正确的金额!',
                },
              ]}
            >
              <Input
                placeholder="请输入金额"
              />
            </Form.Item>
            <Form.Item
              name="type"
              rules={[
                {
                  required: true,
                  message: '请选择收入来源!',
                },
              ]}
            >
              <Select
                placeholder="选择收入来源"
              >
                <Select.Option value="app">app</Select.Option>
                <Select.Option value="weixin">微信群</Select.Option>
                <Select.Option value="douyin">抖音刷单</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bills-form-button"
              >
                添加
              </Button>
            </Form.Item>
          </Form>
          <div className="bills-total">总收益:<span className="bills-total-money">{data.totalMoney}</span>¥</div>
          <div className="bills-section">
            <div className="bills-section-title bills-today">今日收益</div>
            <div className="bills-platform">
              <div className="bills-platform-item">
                <div className="bills-platform-text" >app</div>
                <div className="bills-platform-text">{data.today.app}</div>
              </div>
              <div className="bills-platform-item">
                <div className="bills-platform-text" >微信群</div>
                <div className="bills-platform-text">{data.today.weixin}</div>
              </div>
              <div className="bills-platform-item">
                <div className="bills-platform-text" >抖音刷单</div>
                <div className="bills-platform-text">{data.today.douyin}</div>
              </div>
            </div>
          </div>
          <div className="bills-section">
            <div className="bills-section-title bills-week">本周收益</div>
            <div className="bills-platform">
              <div className="bills-platform-item">
                <div className="bills-platform-text" >app</div>
                <div className="bills-platform-text">{data.week.app}</div>
              </div>
              <div className="bills-platform-item">
                <div className="bills-platform-text" >微信群</div>
                <div className="bills-platform-text">{data.week.weixin}</div>
              </div>
              <div className="bills-platform-item">
                <div className="bills-platform-text" >抖音刷单</div>
                <div className="bills-platform-text">{data.week.douyin}</div>
              </div>
            </div>
          </div>
          <div className="bills-section">
            <div className="bills-section-title bills-month">本月收益</div>
            <div className="bills-platform">
              <div className="bills-platform-item">
                <div className="bills-platform-text" >app</div>
                <div className="bills-platform-text">{data.month.app}</div>
              </div>
              <div className="bills-platform-item">
                <div className="bills-platform-text" >微信群</div>
                <div className="bills-platform-text">{data.month.weixin}</div>
              </div>
              <div className="bills-platform-item">
                <div className="bills-platform-text" >抖音刷单</div>
                <div className="bills-platform-text">{data.month.douyin}</div>
              </div>
            </div>
          </div>
          <div className="bills-section">
            <div className="bills-section-title bills-all">总收益</div>
            <div className="bills-platform">
              <div className="bills-platform-item">
                <div className="bills-platform-text" >app</div>
                <div className="bills-platform-text">{data.total.app}</div>
              </div>
              <div className="bills-platform-item">
                <div className="bills-platform-text" >微信群</div>
                <div className="bills-platform-text">{data.total.weixin}</div>
              </div>
              <div className="bills-platform-item">
                <div className="bills-platform-text" >抖音刷单</div>
                <div className="bills-platform-text">{data.total.douyin}</div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default getInitialProps(NormalRegisterForm);
