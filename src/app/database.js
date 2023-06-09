const mysql = require('mysql2');
const config = require('./config');
// 创建连接池
const connection = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
});

// For pool initialization, see above
// 连接测试
connection.getConnection((err, conn) => {
  if (err) {
    console.log('\u{26D4} 数据库连接失败', err.sqlMessage);
  } else {
    console.log('\u{1F389} 数据库连接成功');
  }
});

module.exports = connection.promise(); // 导出promise 连接
