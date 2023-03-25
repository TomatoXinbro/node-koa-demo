const Koa = require("koa");
const app = new Koa();
const useRoutes = require("../router/user.router");
const bodyParser = require("koa-bodyparser");
const errorHandle = require("./error-handle");
// const useRoutes = require("../router");
// app.useRoutes = useRoutes;
app.use(bodyParser()); // request body解析
app.use(useRoutes.routes());
app.use(useRoutes.allowedMethods());
app.on("error", errorHandle); // 全局错误处理
module.exports = app;
