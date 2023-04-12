const md5password = require('../utils/password-handle');
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_DOES_NOT_EXISTS,
  PASSWORD_IS_INCORRENT,
  UNAUTHORIZATION,
  UNPERMISSION,
} = require('../constants/error-types');
const userService = require('../service/user.service');
const authService = require('../service/auth.service');
const jwt = require('jsonwebtoken');
const { PUBLIC_KEY } = require('../app/config');

// 验证登录
const verifyLogin = async (ctx, next) => {
  //判断用户名密码是否为空
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    const err = new Error(NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', err, ctx); // 抛出错误 return不再执行下面语句
  }
  // 判断用户是否存在
  const result = await userService.getUserByName(username);
  if (!result[0]) {
    const err = new Error(USER_DOES_NOT_EXISTS);
    return ctx.app.emit('error', err, ctx); // 抛出错误 return不再执行下面语句
  }

  // 判断密码是否正确
  if (md5password(password) !== result[0].password) {
    const err = new Error(PASSWORD_IS_INCORRENT);
    return ctx.app.emit('error', err, ctx); // 抛出错误 return不再执行下面语句
  }
  ctx.user = result[0]; //
  await next();
};
// 验证token
const verifyToken = async (ctx, next) => {
  try {
    jwt.verify(
      ctx.request.headers.authorization,
      PUBLIC_KEY,
      {
        algorithms: ['RS256'],
      },
      (err, payload) => {
        if (err) {
          console.log('token鉴权失败', err);
          throw new Error(err);
        } else {
          console.log('token鉴权通过：', payload);
          ctx.user = payload; // 通过后把从payload里面解析出来的user信息加载进ctx里面 以供后面的中间件使用
        }
      }
    );
  } catch (err) {
    const error = new Error(UNAUTHORIZATION);
    return ctx.app.emit('error', error, ctx);
  }
  await next();
};

//验证权限
const verifyEmpower = async (ctx, next) => {
  //  获取参数
  const userId = ctx.user.id;
  const paramsValue = ctx.request.params;
  const [paramsKey] = Object.keys(paramsValue);
  const tableName = paramsKey.replace('Id', '');
  const id = paramsValue[paramsKey];

  const isEmpower = await authService.getEmpower(tableName, id, userId);
  if (isEmpower.length === 0) {
    console.log('权限鉴定失败|查询结果：', isEmpower);
    const err = new Error(UNPERMISSION);
    return ctx.app.emit('error', err, ctx);
  } else {
    console.log('权限鉴定通过~', tableName, id, userId);
  }

  await next();
};

module.exports = {
  verifyLogin,
  verifyToken,
  verifyEmpower,
};
