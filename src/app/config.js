const dotenv = require("dotenv");
dotenv.config(); //加载.env文件到process.env
// console.log(process.env);
module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;
