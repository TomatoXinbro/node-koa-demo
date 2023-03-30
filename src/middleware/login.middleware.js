const md5password = require("../utils/password-handle");
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_DOES_NOT_EXISTS,
  PASSWORD_IS_INCORRENT,
} = require("../constants/error-types");
const userService = require("../service/user.service");

const verifyLogin = async (ctx, next) => {
  //判断用户名密码是否为空
  const { username, password } = ctx.request.body;
  // console.log(username, password);
  if (!username || !password) {
    const err = new Error(NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit("error", err, ctx); // 抛出错误 return不再执行下面语句
  }
  // 判断用户是否存在
  const result = await userService.getUserByName(username);
  if (!result[0]) {
    const err = new Error(USER_DOES_NOT_EXISTS);
    return ctx.app.emit("error", err, ctx); // 抛出错误 return不再执行下面语句
  }

  // 判断密码是否正确
  if (md5password(password) !== result[0].password) {
    const err = new Error(PASSWORD_IS_INCORRENT);
    return ctx.app.emit("error", err, ctx); // 抛出错误 return不再执行下面语句
  }

  await next();
};

module.exports = {
  verifyLogin,
};
