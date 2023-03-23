const app = require("./app/index");
const config = require("./app/config");

app.listen(8888, () => {
  console.log(`服务器在端口${config.APP_POST}启动成功哦!!`);
});
