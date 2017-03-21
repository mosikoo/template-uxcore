module.exports = function (config) {
  config.externals = {
    '@ali/cg-react': 'var CGReact',
    'react': 'var React',
    'react-dom': 'var ReactDOM'
  };
};
