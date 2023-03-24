const Koa = require("koa");
const app = new Koa();
const useRoutes = require("../router/user.router");
const bodyParser = require("koa-bodyparser");
// const useRoutes = require("../router");
// app.useRoutes = useRoutes;
app.use(bodyParser()); // request body解析
app.use(useRoutes.routes());
app.use(useRoutes.allowedMethods());

module.exports = app;
