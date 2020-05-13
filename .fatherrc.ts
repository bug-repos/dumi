import {IBundleOptions} from 'father-build/src/types'

const findPath = (moduleName) => {
  console.log(require.resolve(moduleName))
  const pathArr = require.resolve(moduleName).split('/');
  console.log(pathArr)
  const pathIndex = pathArr.findIndex(path => path === moduleName);
  console.log(pathIndex)
  const path = `${pathArr.slice(pathIndex).join('/')}`
  console.log(path)
  return path;
}

const config: IBundleOptions = {
  // esm: 'babel',
  // cjs: 'babel',
  umd: {
    name: "demo",
    globals: {
      react: "React"
    }
  },
  extractCSS: true,
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'lib',
      style: true,
    }],
  ],
  namedExports: {
    [`${findPath('antd')}`]: ['Divider','_Divider','divider'],
  },
  runtimeHelpers: true,
  disableTypeCheck: true,
};
export default config;