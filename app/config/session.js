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
  store: {
    database: 'jlbajpgf_base_db',
    user: 'chiove',
    password: 'chiove1992',
    host: '172.247.132.226',
  },
  filterAuth: ['/', '/home', '/login', '/demo', '/api/demo', '/api/login', '/api/register'],
};
