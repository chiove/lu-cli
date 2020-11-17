import React from 'react';
import axios from 'axios';
import getInitialProps from 'src/utils/get-initial-props';
import {Table, Tag, Space} from 'antd';
import {GithubOutlined} from '@ant-design/icons';
import './style.less';

const Demo = (props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <div className="demo-page">
      <div className="demo-title">
        <span>表格数据</span>
        <span className="demo-github">
          <GithubOutlined/>
          <a className="demo-link" target="_blank" href={'https://github.com/chiove/lu-cli.git'}>https://github.com/chiove/lu-cli.git</a>
        </span>

      </div>
      <Table columns={columns} dataSource={props.initialData && props.initialData.data} />
    </div>
  );
};

Demo.getInitialProps = async (ctx) => {
  if (__CLIENT__) {
    const res = await axios('/api/demo');
    return res.data;
  } else {
    const res = await ctx.controllers.demo.index.demo();
    return res;
  }
};

export default getInitialProps(Demo);

