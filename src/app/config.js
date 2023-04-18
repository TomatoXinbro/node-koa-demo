/* eslint-disable no-undef */
const dotenv = require('dotenv');
dotenv.config(); //加载.env文件到process.env
const fs = require('fs');
const path = require('path');

// console.log(__dirname); // 当前文件所在目录
const PRIVATE_KEY = fs.readFileSync(
  // 私钥导出
  path.resolve(__dirname, '../app/keys/private.key')
);
const PUBLIC_KEY = fs.readFileSync(
  // 公钥导出
  path.resolve(__dirname, '../app/keys/public.key')
);
// console.log(process.env);
module.exports = {
  APP_PORT,
  APP_HOST,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;

module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;
