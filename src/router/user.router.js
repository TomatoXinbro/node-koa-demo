const Router = require("koa-router");
const userRouter = new Router({ prefix: "/users" });

const { verifyUser, handlePassword } = require("../middleware/user.middleware");

userRouter.post("/", verifyUser, handlePassword);

module.exports = userRouter;
