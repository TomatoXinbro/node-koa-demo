const Router = require("koa-router");
const loginRouter = new Router();
const { verifyLogin } = require("../middleware/login.middleware");
const { create } = require("../controller/login.controller");

/**
 * 用户登录接口
 */
loginRouter.post("/login", verifyLogin, create);

module.exports = loginRouter;
