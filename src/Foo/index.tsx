import React from 'react';
import Classnames from 'classnames';
import { Divider } from 'antd';
import HeartImg from './images/heart.png';
import './index.less';

export default ({ title }: { title: string }) => (
  <h1 className={Classnames('foo-center')}>
    <Divider type="vertical" />
    <img src={HeartImg} alt="heart" />
    {title}
    <img src={HeartImg} alt="heart" />
    <Divider type="vertical" />
  </h1>
);
