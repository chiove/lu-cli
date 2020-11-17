import React, {useState} from 'react';
import axios from 'axios';
import getInitialProps from 'src/utils/get-initial-props';
import {Table, Tag, Space, Upload, message} from 'antd';
import {GithubOutlined, LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import './style.less';

const Demo = (props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
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

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  );

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(true);
      }
      );
    }
  };

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
      <div className="demo-title">
        <span>图片上传</span>
      </div>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/api/uploadImage"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}} /> : uploadButton}
      </Upload>
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

