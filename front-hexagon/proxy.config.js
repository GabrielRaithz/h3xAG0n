const proxy = [
    {
      context: '/api',
      target: 'http://ec2-54-207-50-33.sa-east-1.compute.amazonaws.com:8080',
      pathRewrite: {'^/api' : ''}
    }
  ];
module.exports = proxy;