const Router = require("koa-router");
const { createUsers } = require("../controller/user.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

const userRouter = new Router({ prefix: "/users" });
// console.log(createUsers);
userRouter.post("/", verifyUser, handlePassword, createUsers);

module.exports = userRouter;
