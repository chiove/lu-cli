module.exports = {
  keys: ['chiove web'],
  config: {
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,
    renew: false,
  },
  filterAuth: ['/', '/home', '/login', '/api/login', '/api/register'],
};
