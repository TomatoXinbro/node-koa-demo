/* eslint-disable no-undef */
const dataFormate = require("../utils/dataFormate");
const { LOGIN_SUCCESS } = require("../constants/success-types");
const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../app/config");
// console.log(PRIVATE_KEY.toString());
class LoginController {
  create(ctx, next) {
    const { username } = ctx.request.body;
    console.log(PRIVATE_KEY);
    try {
      const token = jwt.sign({ user: username }, PRIVATE_KEY, {
        algorithm: "RS256", // 加密算法 默认HS265 使用非对称加密时要指定加密算法
        expiresIn: 60 * 60 * 24, // 过期时间 24小时
      });
      // console.log(token);
      ctx.body = dataFormate(200, LOGIN_SUCCESS, { token: token });
    } catch (error) {
      console.log(error);
    }
  }
  authSuccess(ctx, next) {
    ctx.body = dataFormate(200, "token鉴权通过");
  }
}

module.exports = new LoginController();
