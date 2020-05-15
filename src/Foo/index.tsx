import React from 'react';
import Styles from './index.less';
import Classnames from 'classnames';
import { Divider } from 'antd';

export default ({ title }: { title: string }) => (
  <h1 className={Classnames(Styles['foo-center'])}>
    <Divider type="vertical" />
    {title}
    <Divider type="vertical" />
  </h1>
);
