const mysql = require('mysql');
const config = require('./config.js');

class Pool {
  static getInstance() {
    if (!Pool.instence) {
      Pool.instence = new Pool();
    }
    return Pool.instence;
  }

  constructor() {
    this.pool = mysql.createPool({
      host: config.database.HOST,
      user: config.database.USERNAME,
      password: config.database.PASSWORD,
      database: config.database.DATABASE,
    });
  }

  query(sql, values) {
    const _this = this;
    return new Promise((resolve, reject) => {
      _this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          connection.query(sql, values, (error, results) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
            connection.release();
          });
        }
      });
    });
  }
}

module.exports = Pool;
