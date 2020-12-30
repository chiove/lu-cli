module.exports = {
  key: 'chiove web',
  cookie: {
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,
    renew: false,
  },
};
