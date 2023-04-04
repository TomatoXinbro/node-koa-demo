const errorTypes = require('../constants/error-types');
const md5password = require('../utils/password-handle');
const { getUserByName } = require('../service/user.service.js');

// 用户名密码验证
const verifyUser = async (ctx, next) => {
  // 1.获取用户名和密码
  const { username, password } = ctx.request.body;
  // 2.判断用户名或者密码不能空
  // ctx.body = "哈哈哈哈哈请求成功";
  if (!username || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx);
  }

  // 3.判断这次注册的用户名是没有被注册过
  const result = await getUserByName(username);
  // console.log(result);
  if (result.length) {
    const error = new Error(errorTypes.USER_ALREADY_EXISTS);
    return ctx.app.emit('error', error, ctx);
  }
  await next();
};

// 密码的加密
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5password(password);
  await next();
};

module.exports = {
  verifyUser,
  handlePassword,
};
