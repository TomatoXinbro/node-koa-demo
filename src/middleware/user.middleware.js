const errorTypes = require("../constants/error-types");
const { getUserByName } = require("../service/user.service.js");
const verifyUser = async (ctx, mext) => {
  // 1.获取用户名和密码
  const { username, password } = ctx.request.body;
  // 2.判断用户名或者密码不能空
  ctx.body = "哈哈哈哈哈请求成功";
  if (!user || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit("error", error, ctx);
  }

  // 3.判断这次注册的用户名是没有被注册过
  // console.log("sss");
  // const result = await getUserByName(user);
};

module.exports = {
  verifyUser,
};
