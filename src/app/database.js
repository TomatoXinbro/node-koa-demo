const e = require("express");
const mysql = require("mysql2");
const config = require("../app/config");
// 创建连接池
const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
});

// For pool initialization, see above
// 连接测试
connections.getConnection((err, conn) => {
  if (err) {
    console.log("数据库连接失败", err.sqlMessage);
  } else {
    console.log("数据库连接成功");
  }
});
