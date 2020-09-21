
const shell = require('shelljs');
const inquirer = require('inquirer');
const {database} = require('./config.js');


const {DATABASE, USERNAME} = database;
const mysql = `mysql -u ${USERNAME} -p`;

// 交互
const promptList = () => {
  return new Promise((resolve, reject) => {
    try {
      inquirer.prompt({
        type: 'list',
        message: '请选择导入类型:',
        name: 'type',
        choices: ['library', 'table'],
      }).then((result) => {
        resolve(result);
      });
    } catch (err) {
      reject(err);
    }
  });
};

const promptInput = () => {
  return new Promise((resolve, reject) => {
    try {
      inquirer.prompt({
        type: 'input',
        message: '请输入导入sql文件名字:',
        name: 'name',
      }).then((result) => {
        resolve(result);
      });
    } catch (err) {
      reject(err);
    }
  });
};


const main = async () => {
  const result = await promptList();
  if (result.type === 'library') {
    shell.exec(`${mysql} ${DATABASE} < ${process.cwd()}/app/sql/${DATABASE}.sql`);// 导出库
  } else {
    const res = await promptInput();
    if (res.name.indexOf('.sql') === 1) {
      shell.echo('不添加后缀.sql');
      return;
    }
    shell.exec(`${mysql} ${DATABASE} < ${process.cwd()}/app/sql/${res.name}.sql`);// 导出单个sql
  }
};
main()
  .then(() => console.log('执行完毕'))
  .catch((err) => console.log(err));

