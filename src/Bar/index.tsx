import React from 'react';
import Styles from './index.less';
import ModuleStyles from './index.module.less'
import Classnames from 'classnames';
import { Divider } from 'antd';

export default ({ title }: { title: string }) => (
  <h1 className={Classnames(Styles['bar-center'],ModuleStyles.test)}>
    <Divider type="vertical" />
    {title}
    <Divider type="vertical" />
  </h1>
);
