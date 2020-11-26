
const {Sequelize} = require('sequelize');
const config = require('./config.js');

const sequelize = new Sequelize(config.database.DATABASE, config.database.USERNAME, config.database.PASSWORD, {
  host: config.database.HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

sequelize.authenticate().then(() => {
  console.log('数据库连接成功！');
}).catch((err) => {
  console.error(err);
});

module.exports = sequelize;
