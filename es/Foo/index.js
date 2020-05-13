import "antd/es/divider/style";
import _Divider from "antd/es/divider";
import React from 'react';
import Styles from './index.less';
import ModuleStyles from './index.module.less';
import Classnames from 'classnames';
export default (function (_ref) {
  var title = _ref.title;
  return /*#__PURE__*/React.createElement("h1", {
    className: Classnames(Styles['foo-center'], ModuleStyles.test)
  }, /*#__PURE__*/React.createElement(_Divider, {
    type: "vertical"
  }), title, /*#__PURE__*/React.createElement(_Divider, {
    type: "vertical"
  }));
});