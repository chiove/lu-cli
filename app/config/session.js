const {data} = require('autoprefixer');
const {database} = require('../database/config');

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
    database: database.DATABASE,
    user: database.USERNAME,
    password: database.PASSWORD,
    host: database.HOST,
  },
  filterAuth: ['/', '/home', '/login', '/demo', '/api/demo', '/api/login', '/api/register'],
};
