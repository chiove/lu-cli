/* 扫描所有的model模型 */
const fs = require('fs');

const files = fs.readdirSync(__dirname);
const js_files = files.filter(file => file.endsWith('.js') && file.indexOf('index.js') === -1, files);
module.exports = {};
for (const file of js_files) {
  const name = file.substring(0, file.length - 3);
  console.log(`${__dirname}/${file}`);
  module.exports[name] = require(`${__dirname}/${file}`);
}
