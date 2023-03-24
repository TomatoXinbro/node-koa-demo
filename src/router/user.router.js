const Router = require("koa-router");
const userRouter = new Router({ prefix: "/users" });

const { verifyUser } = require("../middleware/user.middleware");

userRouter.post("/", verifyUser);

module.exports = userRouter;
