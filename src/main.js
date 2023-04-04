require('./app/database');
const app = require('./app/index');
const config = require('./app/config');

app.listen(config.APP_PORT, () => {
  console.log(`\u{1F389} 服务器在端口${config.APP_PORT}启动成功~`);
});
