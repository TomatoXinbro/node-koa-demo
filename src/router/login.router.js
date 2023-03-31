const Router = require("koa-router");
const loginRouter = new Router();
const { verifyLogin, verifyToken } = require("../middleware/auth.middleware");
const { create, authSuccess } = require("../controller/auth.controller");

/**
 * 用户登录接口
 */
loginRouter.post("/login", verifyLogin, create);
// 测试鉴权
loginRouter.post("/authtest", verifyToken, authSuccess);

module.exports = loginRouter;
