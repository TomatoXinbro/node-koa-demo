const Router = require("koa-router");
const loginRouter = new Router();
const { verifyLogin } = require("../middleware/login.middleware");
const { create } = require("../controller/login.controller");

loginRouter.post("/login", verifyLogin, create);

module.exports = loginRouter;
