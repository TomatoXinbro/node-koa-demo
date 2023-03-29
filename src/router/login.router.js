const Router = require("koa-router");
const loginRouter = new Router();
const { verifyLogin } = require("../middleware/login.middleware");

loginRouter.post("/login", verifyLogin);

module.exports = loginRouter;
