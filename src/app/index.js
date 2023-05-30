const Koa = require('koa');
const app = new Koa();
const process = require('node:process');

const bodyParser = require('koa-bodyparser');
const errorHandle = require('./error-handle');
const useRoutes = require('../router/index');

app.useRoutes = useRoutes; // 赋值给app
app.use(bodyParser()); // request body解析
app.useRoutes(); // 路由注册 app this 调用
app.on('error', errorHandle); // 全局错误处理

process.on('uncaughtException', (err) => {
  //打印出错误
  console.log(err);
  //打印出错误的调用栈方便调试
  console.log(err.stack);
});
module.exports = app;
