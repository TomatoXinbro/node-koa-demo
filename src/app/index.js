const Koa = require("koa");
const app = new Koa();
// // const userRoutes = require("../router/user.router");
// const loginRoutes = require("../router/login.router");
const bodyParser = require("koa-bodyparser");
const errorHandle = require("./error-handle");
const useRoutes = require("../router/index");

app.useRoutes = useRoutes; // 赋值给app
app.use(bodyParser()); // request body解析
app.useRoutes(); // 路由注册 app this 调用
app.on("error", errorHandle); // 全局错误处理
module.exports = app;
