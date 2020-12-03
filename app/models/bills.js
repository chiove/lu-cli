const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const Bills = sequelize.define('bills', {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  userid: {
    type: Sequelize.STRING(18),
    allowNull: false,
  },
  money: {
    type: Sequelize.DOUBLE(10, 2),
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING(18),
    allowNull: false,
  },
},
{
  freezeTableName: false,
  timestamps: true,
});
// timestamp字段，默认为true，表示数据库中是否会自动更新createdAt和updatedAt字段，false表示不会增加这个字段。
// freezeTableName,默认为true,会自动给表名表示为复数: user => users，为false则表示，使用我设置的表名


// 创建表，默认是false，true则是删除原有表，再创建
Bills.sync({
  force: false,
});

module.exports = Bills;
